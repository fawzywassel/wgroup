export interface IFooterDetails {
  logo: string;
  description: string;
  details: {
    text: string;
    icon: string;
    diffFont?: boolean;
  }[];
  socialMedia: {
    link: string;
    icon?: string;
    image?: string;
  }[];
  whatsApp?: {
    link: string;
    icon?: string;
  };
}
