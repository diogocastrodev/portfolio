import { CommandNotFound } from "../../../others/commandsText";
import usePast from "../../../hooks/usePast";
import commands from "../../../others/commands";
import PreText from "../PreText";

interface props {}

export default function Past(props: props) {
  const { Past } = usePast();
  return (
    <>
      <div>
        {Past.map((past, index) => {
          const commandName = past.split(" ")[0];
          const commandAliases = past.split(" ")[1];

          // Check for Valid Command
          let command = commands.find(
            (command) => command.name === commandName
          );
          if (!command) {
            // Check if the command is a aliases
            command = commands.find((command) =>
              command.aliases?.includes(commandName)
            );
          }

          // Command Found!
          if (command) {
            let validFlag = false;
            let formatedFlag = "";
            if (commandAliases) {
              // Check Flag name
              const formatFlag = past.split("--")[1].toLowerCase();
              // Check for Valid Flag
              const flag = command.flags?.find(
                (flag) => flag.name === formatFlag
              );
              if (flag) {
                // Flag Found!
                validFlag = true;
                formatedFlag = flag.name;
              }
            }
            return (
              <div key={index}>
                <PreText>{past}</PreText>
                {/* Check for Aliases */}
                {validFlag ? (
                  <div>
                    {command.flags?.map((flag, index) => {
                      console.log(formatedFlag);
                      if (flag.name === formatedFlag) {
                        return (
                          <div key={index}>
                            <div>{flag.text}</div>
                          </div>
                        );
                      }
                    })}
                  </div>
                ) : (
                  <div>{command.text}</div>
                )}
              </div>
            );
          } else {
            /* Command Not found! */
            return (
              <div key={index}>
                <PreText>{past}</PreText>
                <CommandNotFound command={past} />
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
