/* -------------------------------------------------------------------------- */
/*                                    Help                                    */
/* -------------------------------------------------------------------------- */

import commands from "./commands";

function Help() {
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
function SoftwareAliasProduction() {
  return (
    <>
      <div></div>
    </>
  );
}

function SoftwareAliasFonts() {
  return (
    <>
      <div></div>
    </>
  );
}

function Software() {
  return (
    <>
      <SoftwareAliasProduction />
      <SoftwareAliasFonts />
    </>
  );
}

export { Help, SoftwareAliasFonts, SoftwareAliasProduction, Software };
