import { LinkItemProps } from "./type";

export const LinkItem = ({ label, description, link }: LinkItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="py-1 text-white_color hover:underline hover:text-primary_color flex flex-col" >
        <span>{label}</span>
      </div>
      {description && <div className="text-xs text-[#9C9C9C]" >{description}</div>}
    </div>
  )
};