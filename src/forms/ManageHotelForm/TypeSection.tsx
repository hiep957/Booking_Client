import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
    const {
      register,
      watch,
      formState: { errors },
    } = useFormContext<HotelFormData>();
    const typeWatch = watch("type");
    
    return (
        <div>
            
        </div>
    )

}

export default TypeSection;




