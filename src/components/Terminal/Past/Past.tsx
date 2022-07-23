import { CommandNotFound } from "../../../others/commandsText";
import usePast from "../../../hooks/usePast";
import commands from "../../../others/commands";
import PreText from "../PreText";

interface props {}

export default function Past(props: props) {
  const { Past } = usePast();
  return (
    <>
      <div className="overflow-y-auto">
        {Past.map((past, index) => {
          // Command (first block of text)
          const commandName = past.split(" ")[0];
          // Flags (second block of text)
          const commandFlag = past.split(" ")[1];

          // Check for Valid Command
          let command = commands.find(
            (command) => command.name === commandName.toLocaleLowerCase()
          );
          if (!command) {
            // Check if the command is a aliases
            command = commands.find((command) =>
              command.aliases?.includes(commandName.toLocaleLowerCase())
            );
          }

          // Command Found!
          if (command) {
            let validFlag = false;
            let formatedFlag = "";
            if (commandFlag) {
              // Check Flag name
              try {
                const formatFlag = past.split("--")[1].toLocaleLowerCase();
                // Check for Valid Flag
                if (formatFlag) {
                  const flag = command.flags?.find(
                    (flag) => flag.name === formatFlag
                  );
                  if (flag) {
                    // Flag Found!
                    validFlag = true;
                    formatedFlag = flag.name;
                  }
                }
              } catch (error) {
                // Flag not found
              }
            }
            return (
              <div key={index}>
                <PreText>{past}</PreText>
                {/* Check for Aliases */}
                {validFlag ? (
                  <div>
                    {command.flags?.map((flag, index) => {
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
