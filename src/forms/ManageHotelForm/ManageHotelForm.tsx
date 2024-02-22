import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FactciliticesSection";
import GuestsSection from "./GuestsSection";
import ImagesSection from "./ImagesSection";



export type HotelFormData = {
    name: string;
    city: string;
    country: string;
    description: string;
    type: string;
    pricePerNight: number;
    starRating: number;
    facilities: string[];
    imageFiles: FileList;
    imageUrls: string[];
    adultCount: number;
    childCount: number;
  };
  
const ManageHotelForm = ()=>{
    const formMethods = useForm<HotelFormData>();

    return (
        <FormProvider {...formMethods}>
            <form className="flex flex-col gap-10">
                <DetailsSection></DetailsSection>
                <TypeSection></TypeSection>
                <FacilitiesSection></FacilitiesSection>
                <GuestsSection></GuestsSection>
                <ImagesSection></ImagesSection>
            </form>
        </FormProvider>

    )
}

export default ManageHotelForm;