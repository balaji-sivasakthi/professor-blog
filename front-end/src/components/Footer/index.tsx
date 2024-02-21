
import React from "react";
import { RenderItem } from "@professor-blog/utils";
import { TopFooterSectionItem } from "./footer.component";
import { LinkItem } from "./footer-link-item.component";
import { ContactDetails } from "./footer-contact-details.component";
import { FOOTER_DATA } from "./constants";


const Footer = () => {
  return (
    <div className="w-[100%] bg-black_color text-white_color p-2 h-[45vh] flex items-center justify-center">
      <div className="w-[75%] h-[75%] grid grid-cols-4 gap-2">
        <TopFooterSectionItem />
        {
          FOOTER_DATA.map(data => {
            return (
              <TopFooterSectionItem
                title={data.title}
                children={
                  data.component === "link" ?
                    <RenderItem
                      component={(item: any) => <LinkItem key={item} {...item} description={item.posted_on} />}
                      data={data.data as Array<any>}
                    />
                    :
                    <ContactDetails />
                }
              />
            )
          })
        }
      </div>
    </div>
  );
};

export default Footer;
