export interface CardType {
  name: string;
  link: string;
  icon: string;
}

export interface LinkType {
  link: string;
  icon: string;
}

export const name = "Miguel Pimentel";
export const email = "miguel.pimentel@email.com";
export const subtitle = "A collection of useful links";
export const footer = "Made in Minnesota © 2025 Miguel Pimentel";

export const cards: CardType[] = [
  {
    name: "Homepage",
    link: "https://miguelpimentel.do",
    icon: "fa-solid fa-home",
  },
  {
    name: "Forgetful Notes",
    link: "https://forgetfulnotes.com",
    icon: "fa-solid fa-seedling",
  },
  {
    name: "PomoBar",
    link: "https://github.com/semanticdata/obsidian-pomodoro",
    icon: "fa-solid fa-stopwatch",
  },
  {
    name: "WhatsApp Pinned",
    link: "https://addons.mozilla.org/en-US/firefox/addon/whatsapp-pinned/",
    icon: "fa-brands fa-whatsapp",
  },
  {
    name: "NoteKeeper",
    link: "https://addons.mozilla.org/en-US/firefox/addon/notekeeper/",
    icon: "fa-solid fa-note-sticky",
  },
  {
    name: "Photography",
    link: "https://www.flickr.com/photos/thewolfest/",
    icon: "fa-solid fa-camera-retro",
  },
];

export const links: LinkType[] = [
  {
    link: "https://www.linkedin.com/in/miguelpimentel29/",
    icon: "fa-brands fa-linkedin",
  },
  {
    link: "https://github.com/semanticdata",
    icon: "fa-brands fa-github",
  },
  {
    link: "https://instagram.com/",
    icon: "fa-brands fa-instagram",
  },
  {
    link: `mailto:${email}`,
    icon: "fa-solid fa-envelope",
  },
];
