import {
  Experience,
  SoftwareAliasThemes,
  Host,
  Projects,
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
    description: "Shows all the commands",
    aliases: ["h", "commands", "cmds"],
    text: <Help />,
  },
  {
    name: "clear",
    description: "Clear the terminal",
    aliases: ["cls"],
    text: <Clear />,
  },
  {
    name: "hardware",
    description: "Hardware that use on my daily",
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
        description: "Software that I use while working",
        text: <SoftwareAliasProduction />,
      },
      {
        name: "fonts",
        description: "Fonts that I use on Visual Studio Code",
        text: <SoftwareAliasFonts />,
      },
      {
        name: "themes",
        description: "Themes that I use on Visual Studio Code",
        text: <SoftwareAliasThemes />,
      },
    ],
  },
  {
    name: "socials",
    description: "Know where you can find me",
    aliases: ["social", "media"],
    text: <Socials />,
  },
  {
    name: "experience",
    description: "What I have worked on",
    aliases: ["skills", "exp"],
    text: <Experience />,
  },
  {
    name: "projects",
    description: "What projects I have done or am working on",
    aliases: ["proj"],
    text: <Projects />,
  },
  {
    name: "host",
    description: "What am I currently using to host my projects",
    text: <Host />,
  },
];

export default commands;
