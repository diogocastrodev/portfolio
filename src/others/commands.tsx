import {
  Clear,
  Hardware,
  HardwareComputer,
  Help,
  Socials,
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
    name: "clear",
    aliases: ["cls"],
    description: "Clear the terminal",
    text: <Clear />,
  },
  {
    name: "hardware",
    description: "My personal hardware",
    aliases: ["hw"],
    text: <Hardware />,
    flags: [
      {
        name: "computer",
        description: "Computer commands",
        text: <HardwareComputer />,
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
  {
    name: "socials",
    description: "My social media",
    aliases: ["social", "media"],
    text: <Socials />,
  },
];

export default commands;
