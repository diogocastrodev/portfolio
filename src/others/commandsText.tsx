import usePast from "../hooks/usePast";
import commands from "./commands";

export function CommandNotFound({ command }: { command: string }) {
  return (
    <div>
      Command: <span className="italic">{command}</span> was not found.
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Clear                                   */
/* -------------------------------------------------------------------------- */

export function Clear() {
  const past = usePast();
  return <>{past.delPast()}</>;
}

/* -------------------------------------------------------------------------- */
/*                                    Help                                    */
/* -------------------------------------------------------------------------- */

export function Help() {
  return (
    <>
      <div>
        {commands.map((command, index) => {
          return (
            <div key={index}>
              <div className="font-bold flex flex-row">
                {command.name}
                <div className="ml-2 font-normal">
                  {"["}
                  {command.aliases?.map((alias, index) => {
                    return (
                      <span key={index}>
                        {alias}
                        {index !== command.aliases!.length - 1 ? ", " : ""}
                      </span>
                    );
                  })}
                  {"]"}
                </div>
              </div>
              <div>{command.description}</div>
              {command.flags?.map((flag, index) => {
                return (
                  <div key={index} className="ml-6">
                    <div className="font-bold">--{flag.name}</div>
                    <div>{flag.description}</div>
                  </div>
                );
              })}
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Software                                  */
/* -------------------------------------------------------------------------- */
export function SoftwareAliasProduction() {
  return (
    <>
      <div></div>
    </>
  );
}

export function SoftwareAliasFonts() {
  return (
    <>
      <div></div>
    </>
  );
}

export function Software() {
  return (
    <>
      <SoftwareAliasProduction />
      <SoftwareAliasFonts />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Social Media                                */
/* -------------------------------------------------------------------------- */
