import usePast from "../hooks/usePast";
import commands from "./commands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import childrenType from "../types/childrenType";
import { useEffect } from "react";
import TypeScriptIcon from "../components/Icons/TypeScriptIcon";
import ReactJSIcon from "../components/Icons/ReactJSIcon";
import NextJSIcon from "../components/Icons/NextJSIcon";
import NodeJSIcon from "../components/Icons/NodeJSIcon";
import ExpressJSIcon from "../components/Icons/ExpressJSIcon";
import TailwindCSSIcon from "../components/Icons/TailwindCSSIcon";
import PrismaIcon from "../components/Icons/PrismaIcon";
import PostgreSQLIcon from "../components/Icons/PostgreSQLIcon";
import MySQLIcon from "../components/Icons/MySQLIcon";
import JavaScriptIcon from "../components/Icons/JavaScriptIcon";
import GraphQLIcon from "../components/Icons/GraphQLIcon";
import PHPIcon from "../components/Icons/PHPIcon";

function ExternalLink({
  url,
  children,
}: {
  url: string;
  children: childrenType;
}) {
  return (
    <a
      href={url}
      target={"_blank"}
      className="underline underline-offset-1 cursor-macOSPointer"
    >
      {children}
    </a>
  );
}

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
  useEffect(() => {
    past.delPast();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
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
/*                                  Hardware                                  */
/* -------------------------------------------------------------------------- */

export function HardwareAliasComputer() {
  return (
    <>
      <div className="flex flex-col">
        <span className="font-semibold">Computer:</span>
        <span>CPU: i7-9750H</span>
        <span>GPU: GTX 1660Ti</span>
        <span>RAM: 16GB 2667 mHz</span>
        <br />
        <span>Looking to buy a MacBook in the future.</span>
      </div>
    </>
  );
}

export function HardwareAliasPeripherals() {
  return (
    <>
      <div className="flex flex-col">
        <span className="font-semibold">Peripherals:</span>
        <span>Keyboard: Razer Huntsman</span>
        <span>Mice: Razer Viper</span>
        <span>Audio: Apple Earbuds / AirPods Pro</span>
      </div>
    </>
  );
}

export function Hardware() {
  return (
    <>
      <HardwareAliasComputer />
      <br />
      <HardwareAliasPeripherals />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Software                                  */
/* -------------------------------------------------------------------------- */
export function SoftwareAliasProduction() {
  return (
    <>
      <div className="flex flex-col">
        <span className="font-semibold">Production:</span>
        <span>
          <ExternalLink url="https://code.visualstudio.com/Download">
            Visual Studio Code
          </ExternalLink>
        </span>
        <span>
          <ExternalLink url="https://hyper.is/">Hyper</ExternalLink>
        </span>
        <span>
          <ExternalLink url="https://tableplus.com/">TablePlus</ExternalLink>
        </span>
        <span>
          <ExternalLink url="https://www.postman.com/downloads/">
            Postman
          </ExternalLink>
        </span>
        <span>
          <ExternalLink url="https://www.figma.com/downloads/">
            Figma
          </ExternalLink>
        </span>
        <span>
          <ExternalLink url="https://linear.app/download">Linear</ExternalLink>
        </span>
        <span>
          <ExternalLink url="https://desktop.github.com/">
            Github Desktop
          </ExternalLink>
        </span>
      </div>
    </>
  );
}

export function SoftwareAliasFonts() {
  return (
    <>
      <div className="flex flex-col">
        <span className="font-semibold">Fonts:</span>
        <ExternalLink url="https://github.com/tonsky/FiraCode">
          Fira Code
        </ExternalLink>
      </div>
    </>
  );
}

export function Software() {
  return (
    <>
      <SoftwareAliasProduction />
      <br />
      <SoftwareAliasFonts />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Social Media                                */
/* -------------------------------------------------------------------------- */

function Social({
  name,
  icon,
  url,
  tag,
}: {
  name: string;
  icon: IconDefinition;
  url: string;
  tag: string;
}) {
  return (
    <div className="flex flex-row gap-2 items-center">
      {name}
      <FontAwesomeIcon icon={icon} /> -
      <ExternalLink url={url}>@{tag}</ExternalLink>
    </div>
  );
}

export function Socials() {
  return (
    <>
      <div className="flex flex-col">
        <Social
          icon={faGithub}
          name="Github"
          url="https://github.com/diogocastrodev"
          tag="diogocastrodev"
        />
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Experience                                 */
/* -------------------------------------------------------------------------- */

export function Experience() {
  return (
    <>
      <div className="flex flex-col">
        <span className="font-semibold">Experience:</span>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5">
            <JavaScriptIcon />
          </div>
          JavaScript (1 year)
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5">
            <TypeScriptIcon />
          </div>
          TypeScript (1 year)
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5">
            <ReactJSIcon />
          </div>
          ReactJS (1 year)
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5">
            <NextJSIcon />
          </div>
          NextJS (1 year)
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5">
            <TailwindCSSIcon />
          </div>
          TailwindCSS (1 year)
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5">
            <NodeJSIcon />
          </div>
          NodeJS (1 year)
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5">
            <ExpressJSIcon />
          </div>
          ExpressJS (1 year)
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5">
            <GraphQLIcon />
          </div>
          GraphQL (1 year)
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5">
            <PrismaIcon />
          </div>
          Prisma (1 year)
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5">
            <PostgreSQLIcon />
          </div>
          PostgreSQL (1 year)
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5">
            <MySQLIcon />
          </div>
          MySQL (2 years)
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5">
            <PHPIcon />
          </div>
          php (2 years) (hate it)
        </div>
      </div>
    </>
  );
}
