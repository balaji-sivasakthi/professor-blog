import { TopFooterSectionItemProps } from "./type";

export const TopFooterSectionItem = ({ children, title }: TopFooterSectionItemProps) => {
  return (
    <div className="px-2 w-[100%] h-[100%]">
      <div className="text-primary_color text-sm">{title}</div>
      <div className="flex flex-col gap-2 mt-4">
        {children}
      </div>
    </div>
  );
};

