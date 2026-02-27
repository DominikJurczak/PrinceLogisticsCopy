import AccidentsInfoSection from "./sections/AccidentsInfo";
import BasicInfoSection from "./sections/BasicInfo";
import DrivingRecordInfoSection from "./sections/DrivingRecordInfo";
import LicenseInfoSection from "./sections/LicenseInfor";
import PositionInfoSection from "./sections/PositionInfo";
import ReferralInfoSection from "./sections/ReferralInfo";


import type { FormikProps } from "formik";
import type { ApplicantDataTypes } from "~/types/ApplicantDataTypes";


type CareerFormProps = {
    formik: FormikProps<ApplicantDataTypes>
}


const CareerForm = ({formik}: CareerFormProps) => {
    return ( 
        <form onSubmit={formik.handleSubmit} className="mt-12 space-y-12 mb-10">

                <BasicInfoSection formik={formik} />
                
                <div className="separator" />

                <PositionInfoSection formik = { formik } />

                <div className="separator" />

                <LicenseInfoSection formik={formik} />

                <div className="separator" />

                <DrivingRecordInfoSection formik={formik} />

                <div className="separator" />

                <AccidentsInfoSection formik={formik} />

                <div className="separator" />

                <ReferralInfoSection formik={formik} />

                
            <button
                    type="submit"
                    className="bg-[#e62a26] text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-red-700 transition"> 
                    Submit
            </button>

        </form>
     );
}
 
export default CareerForm;