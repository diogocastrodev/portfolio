import { Experience } from "./commandsText";
import {
  Clear,
  Hardware,
  HardwareAliasComputer,
  HardwareAliasPeripherals,
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
    description: "Shows all the commands",
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
    description: "Hardware that use on my daily life",
    aliases: ["hw"],
    text: <Hardware />,
    flags: [
      {
        name: "computer",
        description: "Computer information",
        text: <HardwareAliasComputer />,
      },
      {
        name: "peripheral",
        description: "Peripherals information",
        text: <HardwareAliasPeripherals />,
      },
    ],
  },
  {
    name: "software",
    description: "Know what software I use",
    aliases: ["sw", "softw"],
    text: <Software />,
    flags: [
      {
        name: "production",
        description: "Software that I use in production (coding)",
        text: <SoftwareAliasProduction />,
      },
      {
        name: "fonts",
        description: "Fonts that I use on Visual Studio Code",
        text: <SoftwareAliasFonts />,
      },
    ],
  },
  {
    name: "socials",
    description: "Know where to find me",
    aliases: ["social", "media"],
    text: <Socials />,
  },
  {
    name: "experience",
    description: "What I have worked on",
    aliases: ["skills", "exp"],
    text: <Experience />,
  },
];

export default commands;
