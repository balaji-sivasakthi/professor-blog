/** @format */

export interface TopFooterSectionItemProps {
   children?: React.ReactNode;
   title?: string;
}

export interface LinkItemProps {
   link: string;
   label: string;
   description?: string;
}

export interface ContactDetailsProps {
   email: Array<string>;
   phone: Array<string>;
   address: string;
   name: string;
}
