import usePast from "../../../hooks/usePast";
import commands from "../../../others/commands";

export default function Introduction() {
  const { allCommands } = usePast();
  const clearCommand = commands.find((command) => command.name === "clear");
  const existClearCommand = allCommands.find(
    (command) => command === clearCommand?.name
  );
  const existClearCommandAliases = allCommands.find((command) =>
    clearCommand?.aliases?.includes(command)
  );

  console.log(existClearCommand);
  console.log(existClearCommandAliases);
  return (
    <>
      {clearCommand && (
        <>
          {allCommands.length > 0 ? (
            !existClearCommand &&
            !existClearCommandAliases && <IntroductionText />
          ) : (
            <IntroductionText />
          )}
        </>
      )}
    </>
  );
}

function IntroductionText() {
  return (
    <>
      <div>
        Use command: <span className="italic">help</span> to see all commands
      </div>
    </>
  );
}
