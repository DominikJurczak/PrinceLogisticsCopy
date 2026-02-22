import { useState } from "react";

import type { Route } from "./+types/index";
import { Link } from "react-router";

import Baner from "~/components/Baner/baner";
import PageContent from "~/components/PageContent/PageContent";

import ModalConfirmation from "~/components/ModalConfirmation/ModalConfirmation";
import EmploymentHistory from "~/components/EmploymentHistory/EmploymentHistory";


// Types
import type { ApplicantDataTypes, CountryType, YesNo, PositionType, RefferalSourceType  } from "~/types/ApplicantDataTypes";
import type { EmployerType } from "~/types/EmployerTypes";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Drive for Prince - Careers for Class 1 Truck Drivers - Prince Logistic" },
    { name: "description", content: "Prince Logistics career website" },
  ];
}





const CareersPage = () => {
    
    const [openModal, setOpenModal] = useState(false)
    const [applicantData, setApplicantData] = useState<ApplicantDataTypes | null>(null)

    const [employeeReferral, setEmployeReferral] = useState(false)
    const [yearsOfExp, setYearsOfExperience] = useState(0)

    const [error, setError] = useState('')
    
    const [employmentHistory, setEmploymentHistory] = useState<EmployerType[]>([])
    
    const [formData, setFormData] = useState<ApplicantDataTypes>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        country: 'canada',
        position: 'solo',
        licenseStatus: 'yes',
        yearsOfExperience: '',
        diploma: 'yes',
        tickets: 'no',
        demeritPoints: '',
        roadAccidents: 'no',
        workAccidents: 'no',
        referralSource: '',
        referred: 'no',
        referringEmployee: '',
        comments: '',
        employmentHistory: [],
    })



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formData)
        setApplicantData(formData)
        setOpenModal(true)
    }

    const handleExperienceYears = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const value = e.currentTarget.value;

        if (value === '') {
            setYearsOfExperience(0)
            setFormData(prev=> ({...prev, yearsOfExperience: ''}))
            setError('')
            return
            
        }
        
        const expYears = parseInt(value, 10)

        if(isNaN(expYears)){
            // ignoring non numeric input
            return
        }

        if (expYears < 0) {
            setError('Years of experience cannot be negatice.')
            return
        }
        
        setError('')
        setYearsOfExperience(expYears)
        setFormData(prev=> ({...prev, yearsOfExperience: expYears.toString()}))
    }

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


            <form onSubmit={handleSubmit} className="mt-12 space-y-12 mb-10">

                {/* ================= BASIC INFO ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="form-group">
                        <label htmlFor="firstName">First Name*</label>
                        <input id="firstName" type="text" className="input" name='firstName' value={formData.firstName} required onChange={(e) => setFormData(prev => ({
                            ...prev,
                            firstName: e.currentTarget.value
                            }))}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name*</label>
                        <input id="lastName" type="text" className="input" name='lastName' value={formData.lastName} required
                         onChange={(e) => setFormData(prev=> ({
                            ...prev,
                            lastName: e.currentTarget.value
                        }))}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input id="email" type="email" className="input" name='email' required
                            value={formData.email} onChange={(e) => setFormData(prev => ({
                                ...prev, 
                                email: e.currentTarget.value
                            }))}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Telephone*</label>
                        <input id="phone" type="tel" placeholder="(000) 123 - 4567" className="input" name='phone' required
                            value={formData.phone} onChange={(e) => setFormData(prev => ({
                                ...prev, 
                                phone: e.currentTarget.value
                            }))}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City*</label>
                        <input id="city" type="text" className="input" name='city' required
                        value={formData.city} onChange={(e) => setFormData(prev => ({
                            ...prev, 
                            city: e.currentTarget.value
                        }))}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country*</label>
                        <select id="country" className="input" name='country' required
                            value={formData.country} onChange={(e) => {
                                const value = e.currentTarget.value as CountryType

                                setFormData(prev => ({
                                    ...prev,
                                    country: value
                                }))
                            }}
                        >
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>

                </div>

                <div className="separator" />

                {/* ================= POSITION ================= */}
                <div>
                    <h3 className="section-title">Which position are you applying for?*</h3>

                    <div className="radio-group">
                    <label className="mr-5">
                        <input type="radio" name="position" value="team"
                            checked ={formData.position === 'team'}
                            onChange={(e) => setFormData(prev => ({...prev, position: e.currentTarget.value as PositionType}))}
                        />
                        Class 1 - Team Drivers
                    </label>

                    <label>
                        <input type="radio" name="position" value="solo" 
                            checked = {formData.position === 'solo' }
                            onChange={(e) => setFormData(prev => ({...prev, position: e.currentTarget.value as PositionType}))}
                        />
                        Class 1 - Solo Driver
                    </label>
                    </div>
                </div>

                <div className="separator" />

                {/* ================= LICENSE & EXPERIENCE ================= */}
                <div className="space-y-8">

                    <div>
                    <label className="block font-semibold mb-3">
                        Has your driver's license ever been revoked or suspended?
                    </label>
                    <div className="radio-inline">
                        <label>
                        <input type="radio" name="licenseStatus" value="yes" 
                            checked = {formData.licenseStatus === 'yes'}
                            onChange={(e) => setFormData(prev => ({...prev, licenseStatus: e.target.value as YesNo}))}
                        />
                        Yes
                        </label>
                        <label>
                        <input type="radio" name="licenseStatus" value="no"
                            checked = {formData.licenseStatus === 'no'}
                            onChange = {(e) => setFormData(prev => ({...prev, licenseStatus: e.target.value as YesNo}))}
                        />
                        No
                        </label>
                    </div>
                    </div>

                    <div className="form-group w-full">
                        <label htmlFor="experience">
                            How many years of experience do you have with a Class 1 (EC) license?
                        </label>
                        <input id="experience" type="number" className="input" name='yearsOfExperience' min='0' onChange={handleExperienceYears}/>
                        {error && (
                            <div className="p-3 text-red-700">{error}</div>
                        )}

                        <EmploymentHistory 
                            employmentHistory={formData.employmentHistory ?? []}
                            setEmploymentHistory={(value) =>
                                setFormData(prev => ({
                                    ...prev,
                                    employmentHistory:
                                        typeof value === "function"
                                            ? value(prev.employmentHistory ?? [])
                                            : value
                                }))
                            }
                        />


                    </div>

                    


                    <div>
                    <label className="block font-semibold mb-3">
                        Do you have a Diplôme d'Études Professionelles (DEP) in trucking (or European equivalent)? 
                    </label>
                    <div className="radio-inline">
                        <label>
                        <input type="radio" name="diploma" value="yes" 
                            checked={formData.diploma === 'yes'}
                            onChange={(e) => setFormData(prev => ({...prev, diploma: e.target.value as YesNo}))}
                        />
                        Yes
                        </label>
                        <label>
                        <input type="radio" name="diploma" value="no" 
                            checked={formData.diploma === 'no'}
                            onChange={(e) => setFormData(prev => ({...prev, diploma: e.target.value as YesNo}))}
                        />
                        No
                        </label>
                    </div>
                    </div>

                </div>

                <div className="separator" />

                {/* ================= DRIVING RECORD ================= */}
                <div className="space-y-8">

                    <div>
                    <label className="block font-semibold mb-3">
                        Have you received any driving tickets in the last three (3) years?
                    </label>
                    <div className="radio-inline">
                        <label>
                        <input type="radio" name="tickets" value="yes" 
                            checked={formData.tickets === 'yes'}
                            onChange = {(e) => setFormData(prev=>({...prev, tickets: e.target.value as YesNo}))}
                        />
                        Yes
                        </label>
                        <label>
                        <input type="radio" name="tickets" value="no" 
                            checked = {formData.tickets === 'no'}
                            onChange= {(e) => setFormData(prev => ({...prev, tickets: e.target.value as YesNo}))}
                        />
                        No
                        </label>
                    </div>
                    </div>

                    <div className="form-group w-full">
                    <label htmlFor="demeritPoints">
                        How many demerit points do you have?
                    </label>
                    <input id="demeritPoints" type="number" className="input" name='demeritPoints'
                        value={formData.demeritPoints}
                        onChange={(e) => setFormData(prev => ({...prev, demeritPoints: e.target.value}))}
                    />
                    </div>

                </div>

                <div className="separator" />

                {/* ================= ACCIDENTS ================= */}
                <div className="space-y-8">

                    <div>
                    <label className="block font-semibold mb-3">
                        Have you ever had a road accident while driving a tractor trailer?
                    </label>
                    <div className="radio-inline">
                        <label>
                        <input type="radio" name="roadAccidents" value="yes" 
                            checked = {formData.roadAccidents === 'yes'}
                            onChange={(e) => setFormData(prev => ({...prev, roadAccidents: e.currentTarget.value as YesNo }))}
                        />
                        Yes
                        </label>
                        <label>
                        <input type="radio" name="roadAccidents" value="no" 
                            checked = {formData.roadAccidents === 'no'}
                            onChange = {(e) => setFormData(prev => ({...prev, roadAccidents: e.currentTarget.value as YesNo }))}
                        />
                        No
                        </label>
                    </div>
                    </div>

                    <div>
                    <label className="block font-semibold mb-3">
                        Have you had work-related accidents over the last 5 years?
                    </label>
                    <div className="radio-inline">
                        <label>
                        <input type="radio" name="workAccidents" value="yes" 
                            checked = {formData.workAccidents === 'yes'}
                            onChange={(e) => setFormData(prev => ({...prev, workAccidents: e.currentTarget.value as YesNo}))}
                        />
                        Yes
                        </label>
                        <label>
                        <input type="radio" name="workAccidents" value="no" 
                            checked = {formData.workAccidents === 'no'}
                            onChange={(e) => setFormData(prev => ({...prev, workAccidents: e.currentTarget.value as YesNo}))}/>
                        No
                        </label>
                    </div>
                    </div>

                    <p className="text-sm text-gray-600">
                        The information will be verified as permitted by law on health and safety. Omission of information shall be considered voluntary on your part and thereby considered a misrepresentation.
                    </p>

                </div>

                <div className="separator" />

                {/* ================= REFERRAL ================= */}
                <div className="space-y-8">

                    <div className="form-group max-w-sm">
                    <label htmlFor="referralSource">
                        How did you hear about Prince Logistic Services?
                    </label>
                    <select id="referralSource" className="input" name='referralSource'>
                        <option value="">Please choose</option>
                        <option value="employee">Employee</option>
                        <option value="facebook">Facebook</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="searchEngine">Search Engine</option>
                        <option value="website">Website</option>
                    </select>
                    </div>

                    <div>
                    <label className="block font-semibold mb-3">
                        Were you referred by an employee?
                    </label>
                    <div className="radio-inline">
                        <label>
                        <input type="radio" name="referred" value="yes" onChange={() => setEmployeReferral(true)}/>
                        Yes
                        </label>
                        <label>
                        <input type="radio" name="referred" value="no" onChange={()=> setEmployeReferral(false)}/>
                        No
                        </label>
                    </div>
                    </div>

                    {employeeReferral && (

                        <div className="form-group max-w-sm transition">
                        <label htmlFor="referringEmployee">
                            Can you provide his/her name for Us?
                        </label>
                        <input id="referringEmployee" type="text" className="input" name='referringEmployee'/>
                        </div>
                    )}

                    <div className="form-group">
                    <label htmlFor="comments">Comments</label>
                    <textarea id="comments" rows={4} className="input" name='comments'/>
                    </div>

                </div>

                

                <button
                    type="submit"
                    className="bg-[#e62a26] text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-red-700 transition"
                    
                
                >
                    Submit
                </button>

                </form>




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