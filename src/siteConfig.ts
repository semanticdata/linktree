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
export const description = "A collection of useful links for Miguel Pimentel";
export const email = "miguel.pimentel@email.com";
export const subtitle = "A collection of useful links";
export const footer = "Made with ❤️ in Minnesota";

export const cards: CardType[] = [
  {
    name: "Homepage",
    link: "https://miguelpimentel.do",
    icon: "fa-solid fa-home",
  },
  {
    name: "Digital Garden",
    link: "https://forgetfulnotes.com",
    icon: "fa-solid fa-seedling",
  },
  {
    name: "Spotify",
    link: "https://open.spotify.com/user/1216418539",
    icon: "fa-brands fa-spotify",
  },
  {
    name: "Flickr",
    link: "https://www.flickr.com/photos/thewolfest/",
    icon: "fa-brands fa-flickr",
  },
  {
    name: "Steam",
    link: "https://steamcommunity.com/id/basedata",
    icon: "fa-brands fa-steam",
  },
  {
    name: "CodePen",
    link: "https://codepen.io/semanticdata",
    icon: "fa-brands fa-codepen",
  },
];

export const links: LinkType[] = [
  {
    link: `mailto:${email}`,
    icon: "fa-solid fa-envelope",
  },
  {
    link: "https://www.linkedin.com/in/miguelpimentel29/",
    icon: "fa-brands fa-linkedin",
  },
  {
    link: "https://github.com/semanticdata",
    icon: "fa-brands fa-github",
  },
  {
    link: "https://www.instagram.com/miguelapv/",
    icon: "fa-brands fa-instagram",
  },
];
