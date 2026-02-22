// HEADLESSUI MODAL WINDOW FOR CONFIRMATION
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

// Redirect after submit succesfull
import { useNavigate } from "react-router";


// Types import for ModalConfirmation
import type { ApplicantDataTypes } from "~/types/ApplicantDataTypes";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react"

// loader spinner
import BarLoader from "react-spinners/BarLoader";

export type ApplicantModalConfirmationTypes = {
    applicantData: ApplicantDataTypes | null;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}


const ModalConfirmation = ({applicantData, isOpen, setIsOpen}:ApplicantModalConfirmationTypes) => {

    const [status, setStatus] = useState('idle')
    const [countdown, setCountdown] = useState(5)
    
    const navigate = useNavigate()
    
    const handleSendApplication = () => {
        setStatus('loading')
    }

    useEffect(()=> {
        if(status !== 'loading') return

        const timer = setTimeout(()=>{
            setStatus('success')
        },2000)

        return () => clearTimeout(timer)
    }, [status])
    
    useEffect(()=> {
        if(status !== 'success') return

        const timer = setTimeout(()=>{
            setStatus('redirecting')
        }, 2000)

        return () => clearTimeout(timer)
    }, [status])


    useEffect(() => {
        if (status !== "redirecting") return

        if (countdown === 0) {
            navigate("/")
            return
        }

        const interval = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
        }, [status, countdown])


        if (!applicantData) return null;

    return ( 
        
    <Dialog open={isOpen} as='div' className="relative z-10 focus:outline-none " onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center p-4">

            <DialogPanel
              transition
              className="w-[960px] max-h-[90vh] rounded-xl bg-black flex flex-col duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
                <div className="p-6 border-b border-gray-800">
                    <DialogTitle className="text-base font-medium text-white">
                        Application for: {applicantData.firstName + ' ' + applicantData.lastName }
                    </DialogTitle>
                </div>
            <div className="flex-1 overflow-y-auto p-6">
                <div className=" space-y-6 text-sm text-gray-200">

                    {/* BASIC INFO */}
                    <div className="space-y-2">
                        <h4 className="text-white font-semibold border-b border-gray-700 pb-2">
                        Basic Information
                        </h4>

                        <div className="grid grid-cols-2 gap-y-2">
                        <span className="text-gray-400">First Name:</span>
                        <span>{applicantData.firstName}</span>

                        <span className="text-gray-400">Last Name:</span>
                        <span>{applicantData.lastName}</span>

                        <span className="text-gray-400">Email:</span>
                        <span>{applicantData.email}</span>

                        <span className="text-gray-400">Phone:</span>
                        <span>{applicantData.phone}</span>

                        <span className="text-gray-400">City:</span>
                        <span>{applicantData.city}</span>

                        <span className="text-gray-400">Country:</span>
                        <span className="capitalize">{applicantData.country}</span>
                        </div>
                    </div>

                    {/* POSITION */}
                    <div className="space-y-2">
                        <h4 className="text-white font-semibold border-b border-gray-700 pb-2">
                        Position
                        </h4>

                        <div className="grid grid-cols-2 gap-y-2">
                        <span className="text-gray-400">Applied For:</span>
                        <span className="capitalize">{applicantData.position}</span>
                        </div>
                    </div>

                    {/* EXPERIENCE */}
                    <div className="space-y-2">
                        <h4 className="text-white font-semibold border-b border-gray-700 pb-2">
                        Experience & License
                        </h4>

                        <div className="grid grid-cols-2 gap-y-2">
                            <span className="text-gray-400">License Suspended:</span>
                            <span className="capitalize">{applicantData.licenseStatus || "-"}</span>

                            <span className="text-gray-400">Years of Experience:</span>
                            <span>{applicantData.yearsOfExperience}</span>

                            <span className="text-gray-400">DEP Diploma:</span>
                            <span className="capitalize">{applicantData.diploma}</span>
                        </div>

                        {applicantData.employmentHistory?.length >= 1 &&(
                                <table className="w-full border-collapse mt-6 text-sm">
                                <thead>
                                <tr className="bg-gray-100 text-left uppercase text-xs tracking-wide text-gray-600">
                                <th className="px-4 py-3 font-semibold">Employer</th>
                                <th className="px-4 py-3 font-semibold">From</th>
                                <th className="px-4 py-3 font-semibold">To</th>
                                </tr>
                                </thead>
                                
                                <tbody className="divide-y divide-gray-200">
                                {applicantData.employmentHistory?.map((lastEmployment, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition">
                                    <td className="px-4 py-3 font-medium bg-white text-gray-800">
                                    {lastEmployment.employer}
                                    </td>
                                    <td className="px-4 py-3 bg-white text-gray-600">
                                    {lastEmployment.from}
                                    </td>
                                    <td className="px-4 py-3 bg-white text-gray-600">
                                    {lastEmployment.to}
                                    </td>
                                </tr>
                                ))}
                                </tbody>
                                </table>
                            )}
                            
                    </div>

                    {/* DRIVING RECORD */}
                    <div className="space-y-2">
                        <h4 className="text-white font-semibold border-b border-gray-700 pb-2">
                        Driving Record
                        </h4>

                        <div className="grid grid-cols-2 gap-y-2">
                        <span className="text-gray-400">Tickets (3 years):</span>
                        <span className="capitalize">{applicantData.tickets}</span>

                        <span className="text-gray-400">Demerit Points:</span>
                        <span>{applicantData.demeritPoints || '-'}</span>

                        <span className="text-gray-400">Road Accident:</span>
                        <span className="capitalize">{applicantData.roadAccidents || '-'}</span>

                        <span className="text-gray-400">Work Accident:</span>
                        <span className="capitalize">{applicantData.workAccidents || '-'}</span>
                        </div>
                    </div>

                    {/* REFERRAL */}
                    <div className="space-y-2">
                        <h4 className="text-white font-semibold border-b border-gray-700 pb-2">
                        Referral
                        </h4>

                        <div className="grid grid-cols-2 gap-y-2">
                        <span className="text-gray-400">Source:</span>
                        <span className="capitalize">{applicantData.referralSource || "—"}</span>

                        <span className="text-gray-400">Referred by Employee:</span>
                        <span className="capitalize">{applicantData.referred}</span>

                        <span className="text-gray-400">Employee Name:</span>
                        <span>{applicantData.referringEmployee || "—"}</span>
                        </div>
                    </div>

                    {/* COMMENTS */}
                    {applicantData.comments && (
                        <div className="space-y-2">
                        <h4 className="text-white font-semibold border-b border-gray-700 pb-2">
                            Comments
                        </h4>
                        <p className="text-gray-300 whitespace-pre-line">
                            {applicantData.comments}
                        </p>
                        </div>
                    )}
                </div>
            </div>


              {/* Confirm and send application */}
              <div className="p-4 border-t border-gray-800 bg-black">
                  

                    {status === 'idle' ? (
                        
                        <div className="grid grid-cols-2 gap-6">
                            <Button
                                className="rounded-md bg-red-600 py-2 font-semibold text-white hover:bg-red-700 transition"
                                onClick={() => setIsOpen(false)}
                                >
                                Edit application
                            </Button>
                                
                            <Button
                                className="rounded-md bg-green-600 py-2 font-semibold text-white hover:bg-green-700 transition"
                                onClick={handleSendApplication}
                                >

                                Send Application
                            </Button>
                            </div>
                        
                    ) : (
                        <>
                        {status === "loading" && <BarLoader width="100%" color="#ffffff" />}

                            {status === "success" && (
                            <p className="font-bold text-lg text-green-600 text-center">Your application was sent successfully!</p>
                            )}

                            {status === "redirecting" && (
                            <p className="font-bold text-lg text-white text-center">You will be redirected in {countdown}s</p>
                            )}
                        </>

                    )}
                    
                    
                </div>
            </DialogPanel>
          </div>
        </div>

    </Dialog>
        
     );
}
 
export default ModalConfirmation;