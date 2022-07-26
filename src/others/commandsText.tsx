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
import GoIcon from "../components/Icons/GoIcon";
import RustIcon from "../components/Icons/RustIcon";
import AWSIcon from "../components/Icons/AWSIcon";
import JestIcon from "../components/Icons/JestIcon";
import UKFlagIcon from "../components/Icons/UKFlagIcon";

function ExternalLink({
  url,
  children,
}: {
  url: string;
  children: childrenType;
}) {
  return (
    <a href={url} target={"_blank"} className="underline underline-offset-1">
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
                  {command.aliases && command.aliases?.length > 0 && (
                    <>
                      {"("}
                      {command.aliases?.map((alias, index) => {
                        return (
                          <span key={index}>
                            {alias}
                            {index !== command.aliases!.length - 1 ? ", " : ""}
                          </span>
                        );
                      })}

                      {")"}
                    </>
                  )}
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
        <div className="italic">Usage:</div>
        <div>
          command [--args] <span className="italic">OR</span> (aliases) [--args]
        </div>
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

export function SoftwareAliasThemes() {
  return (
    <>
      <div className="flex flex-col">
        <span className="font-semibold">Themes:</span>
        <ExternalLink url="https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme">
          One Dark Pro
        </ExternalLink>
        <ExternalLink url="https://marketplace.visualstudio.com/items?itemName=atomiks.moonlight">
          Moonlight II
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
      <br />
      <SoftwareAliasThemes />
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
        <span className="font-medium italic">Improving:</span>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <JavaScriptIcon />
          </div>
          JavaScript
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <TypeScriptIcon />
          </div>
          TypeScript
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <ReactJSIcon />
          </div>
          React.js
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <NextJSIcon />
          </div>
          Next.js
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <TailwindCSSIcon />
          </div>
          Tailwind CSS
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <NodeJSIcon />
          </div>
          Node.js
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <ExpressJSIcon />
          </div>
          Express.js
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <GraphQLIcon />
          </div>
          GraphQL
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <PrismaIcon />
          </div>
          Prisma.io
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <PostgreSQLIcon />
          </div>
          PostgreSQL
        </div>
        <span className="font-medium italic">Learning / Want to learn:</span>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <RustIcon />
          </div>
          Rust or Go
          <div className="h-5 w-5 flex items-center">
            <GoIcon />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <AWSIcon />
          </div>
          AWS
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <JestIcon />
          </div>
          Jest
        </div>
        <span className="font-medium italic">Not using anymore:</span>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <MySQLIcon />
          </div>
          MySQL
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="h-5 w-5 flex items-center">
            <PHPIcon />
          </div>
          php (hate it)
        </div>
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Projects                                  */
/* -------------------------------------------------------------------------- */

export function Projects() {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <span className="font-semibold">Portfolio</span>:
          <div>
            This page, as well as the code behind it, is open source. You can
            find it on:{" "}
            <ExternalLink url="https://github.com/diogocastrodev/portfolio">
              Github
            </ExternalLink>
          </div>
          <div>
            <span className="italic">Made using:</span>
            <br />
            Vite.js, React.js, TypeScript, Tailwind CSS
          </div>
          <div>
            As you can see, my portfolio was made to look like a macOS display
            with a terminal using custom commands to know me better.
          </div>
        </div>
        <br />
        <div>
          <span className="font-semibold">
            TODO / Notepad <span className="italic">(2022)</span>
          </span>
          :
          <div className="break-words">
            This project was made for school as a final project, classified by{" "}
            <span className="font-semibold">20/20</span>.
          </div>
          <div className="break-words">
            <span className="italic">Made using:</span>
            <br />
            Next.js, React.js, TypeScript, Tailwind CSS, graphql-request in
            front-end
            <br />
            Node.js, TypeScript, Express.js, ApolloServer, Prisma in back-end
            (API)
            <br />
            PostgreSQL as database.
          </div>
          <div className="break-words">
            Each user had a dashboard after login, where users could create
            folders and create files inside them. Files could be TODO files or
            plain text files (draft.js). Each TODO file had a list of TODOs
            created by the user. User could see all the TODOs in the dashboard
            section or see individually in the TODO files. Each TODO could have
            a date or a priority. User could select dates to see the TODOs in a
            specific date range. User could create priorities from 0 to 999. And
            filter by priority (from priority with bigger number to 0 and then
            the TODOs without priorities).
          </div>
        </div>
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Host                                    */
/* -------------------------------------------------------------------------- */

export function Host() {
  return (
    <>
      <div className="flex flex-col">
        <span className="font-semibold">
          <ExternalLink url="https://contabo.com/en/vps/">
            Contabo: Cloud VPS S
          </ExternalLink>
        </span>
        <br />
        <span className="italic">Specifications:</span>
        <span>CPU: 4 cores from an AMD EPYC 7282</span>
        <span>RAM: 8 GB</span>
        <span>OS: centOS 7</span>
        <div className="flex flex-row items-center">
          Region: United Kingdom
          <div className="ml-2 h-5 w-5 flex items-center">
            <UKFlagIcon />
          </div>
        </div>
      </div>
    </>
  );
}
