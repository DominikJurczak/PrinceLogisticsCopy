import { useState, useEffect } from "react";
import { Link } from "react-router";

// formik
import { useFormik, Field, type FormikErrors } from "formik";


import Baner from "~/components/Baner/baner";
import PageContent from "~/components/PageContent/PageContent";
import ModalConfirmation from "~/components/ModalConfirmation/ModalConfirmation";
import EmploymentHistory, { type EmploymentHistoryProps } from "~/components/EmploymentHistory/EmploymentHistory";


// Types
import type { ApplicantDataTypes } from "~/types/ApplicantDataTypes";
import type { EmployerType } from "~/types/EmployerTypes";
import type { Route } from "./+types/index";
import CareerForm from "~/components/CareerForm/CareerForm";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Drive for Prince - Careers for Class 1 Truck Drivers - Prince Logistic" },
    { name: "description", content: "Prince Logistics career website" },
  ];
}


const CareersPage = () => {
    
    const [openModal, setOpenModal] = useState(false)
    const [applicantData, setApplicantData] = useState<ApplicantDataTypes | null>(null)
    


    const validate = (values:ApplicantDataTypes) => {
        const errors: FormikErrors<ApplicantDataTypes> = {}


        if(Number(values.yearsOfExperience) < 0) {
            errors.yearsOfExperience = 'Years cannot be negative'
        }


        if(!values.firstName) {
            errors.firstName = 'This field is required.'
        }

        if(!values.lastName) {
            errors.lastName = 'This field is required.'
        }

        if(!values.email) {
            errors.email = 'This field is required.'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address.'
        }

        if(!values.city) {
            errors.city = 'This field is required.'
        }

        if (!values.phone) {
            errors.phone = 'This field is required.'
        } else {
            const phoneRegex = /^[0-9+\-\s()]+$/

            if (!phoneRegex.test(values.phone)) {
                errors.phone = 'Invalid phone number format'
            } else if (values.phone.replace(/\D/g, '').length < 5) {
                errors.phone = 'Phone number must contain at least 10 digits'
            }
        }

        if (!values.referralSource) {
            errors.referralSource = 'Please select an option'
        }


        return errors
    }

    const formik = useFormik<ApplicantDataTypes>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            city: '',
            country: 'canada' ,
            position: 'solo',
            licenseStatus: 'yes',
            yearsOfExperience: '',
            diploma: 'yes',
            tickets: 'no',
            demeritPoints: '',
            roadAccidents: 'no',
            workAccidents: 'no',
            referralSource: '' ,
            referred: 'no',
            referringEmployee: '',
            comments: '',
            employmentHistory: []
        },
        validateOnChange: false,
        validate,
        onSubmit: values => {
            console.log('submitted')
            setApplicantData(values)
            setOpenModal(true)
        }
    })
    

    useEffect(() => {
        if (Number(formik.values.yearsOfExperience) < 1) {
            formik.setFieldValue('employmentHistory', [])
        }
    }, [formik.values.yearsOfExperience])

    useEffect(() => {
        if(formik.submitCount > 0 && Object.keys(formik.errors).length > 0) {
            const firstErrorField = Object.keys(formik.errors)[0]
            const element = document.querySelector(
                `[name="${firstErrorField}"]`
            )

            if(element instanceof HTMLElement){
                element.scrollIntoView({ behavior: 'smooth', block: 'center'})
                element.focus()
            }
        }
    },[formik.submitCount, formik.errors])
    

    return ( 
    <div className="w-full">
        <Baner 
            image="./images/Careers/bg-walking.jpg"
                    alt="Prince logistics careers page"
                    banerText="THE ROAD TO A SUCCESSFUL CAREER"
        />

        <div className="max-w-[960px] mx-auto mt-10">
            <PageContent title="DRIVE FOR PRINCE - CAREERS FOR CLASS 1 TRUCK DRIVER">
                <p>Working in the transportation industry is a vocation. If you have it, we want to meet you. Since 1989, more than 250 drivers have found their calling with us. Join our team.</p>
                <p>Want to forge your own path? Send us your application today!</p>
            </PageContent>



                <CareerForm formik={formik} />


            <div className="mt-16 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div className="max-w-2xl">
                    <h2 className="text-sm font-bold uppercase tracking-wide mb-3 italic">
                    Class 1 Team Drivers – Reefer Division
                    </h2>

                    <p className="text-gray-700 leading-7 text-sm">
                    Prince Logistic Services is looking for Class 1 truck drivers to travel
                    in teams to the west coast of the United States.
                    </p>
                </div>

                <div>
                    <Link
                    to="/"
                    className="inline-block bg-[#e62a26] text-white px-6 py-3 font-semibold uppercase tracking-wide hover:bg-red-700 transition"
                    >
                    Info
                    </Link>
                </div>

            </div>




        {/* CONFIRMATION MODAL WINDOW */}
        <ModalConfirmation applicantData={applicantData} isOpen={openModal} setIsOpen={setOpenModal}/>
        
            
        </div>    
    
    </div>
    
);
}
 
export default CareersPage;