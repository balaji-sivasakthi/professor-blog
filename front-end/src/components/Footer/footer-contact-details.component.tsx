import { ContactData } from "./constants"

export const ContactDetails = () => {
  return (
    <div className="text-xs text-white_light flex flex-col gap-2">
      <div>{ContactData.name}</div>
      <div>
        {ContactData.address.split(',').map(item => <span>{item}</span>)}
      </div>
      <div className="flex gap-1 items-center">
        <span className="text-xs text-[#9C9C9C]">Email:</span>
        {ContactData.email.map(item => <span> {item}</span>)}
      </div>
      <div className="flex gap-1 items-center">
        <span className="text-xs text-[#9C9C9C]">Phone:</span>
        {ContactData.phone.map(item => <span>{item}</span>)}
      </div>
    </div>
  )
}