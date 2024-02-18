/** @format */

import React from "react";

export interface TopFooterSectionItemProps {
   children: React.ReactNode;
   title: string;
}

export interface LinkItemProps {
   label: string;
   link: string;
   description?: string;
}
