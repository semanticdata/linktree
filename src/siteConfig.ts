/**
 * Represents a card in the link tree
 */
export interface CardType {
  /** Display name of the card */
  name: string;
  /** URL the card links to */
  link: string;
  /** Font Awesome icon class(es) */
  icon: string;
}

/**
 * Represents a social media or contact link
 */
export interface LinkType {
  /** URL or email address */
  link: string;
  /** Font Awesome icon class(es) */
  icon: string;
}

/** Site configuration interface */
export interface SiteConfig {
  /** Site owner's full name */
  name: string;
  /** Brief description of the site */
  description: string;
  /** Contact email address */
  email: string;
  /** Subtitle displayed below the name */
  subtitle: string;
  /** Footer text */
  footer: string;
  /** Array of link cards */
  cards: CardType[];
  /** Array of social media/contact links */
  links: LinkType[];
}

/** Site owner's full name */
export const name = "Miguel Pimentel";

/** Brief description of the site */
export const description = "A collection of useful links for Miguel Pimentel";

/** Contact email address */
export const email = "miguel.pimentel@email.com";

/** Subtitle displayed below the name */
export const subtitle = "A collection of useful links";

/** Footer text */
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
