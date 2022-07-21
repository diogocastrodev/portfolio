import {
  Help,
  Software,
  SoftwareAliasFonts,
  SoftwareAliasProduction,
} from "./commandsText";

interface ICommand {
  name: string;
  aliases?: string[];
  description: string;
  text: JSX.Element | string;
  flags?: {
    name: string;
    description: React.ReactNode;
    text: JSX.Element | string;
  }[];
}

const commands: ICommand[] = [
  {
    name: "help",
    aliases: ["h"],
    description: "Show help",
    text: <Help />,
  },
  {
    name: "hardware",
    description: "My personal hardware",
    aliases: ["hw"],
    text: "Hardware commands",
    flags: [
      {
        name: "computer",
        description: "Computer commands",
        text: "Computer components",
      },
    ],
  },
  {
    name: "software",
    description: "My personal software",
    aliases: ["sw", "softw"],
    text: <Software />,
    flags: [
      {
        name: "production",
        description: "Production commands",
        text: <SoftwareAliasProduction />,
      },
      {
        name: "fonts",
        description: "Computer commands",
        text: <SoftwareAliasFonts />,
      },
    ],
  },
];

export default commands;
