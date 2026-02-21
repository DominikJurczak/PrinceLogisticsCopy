// HEADLESSUI MODAL WINDOW FOR CONFIRMATION
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

// Types import for ModalConfirmation
import type { ApplicantDataTypes } from "~/types/ApplicantDataTypes";
import type { Dispatch, SetStateAction } from "react"


export type ApplicantModalConfirmationTypes = {
    applicantData: ApplicantDataTypes | null;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}


const ModalConfirmation = ({applicantData, isOpen, setIsOpen}:ApplicantModalConfirmationTypes) => {

    if (!applicantData) return null;

    return ( 
        <Dialog open={isOpen} as='div' className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md max-h-[90vh] rounded-xl bg-black flex flex-col duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
                <div className="p-6 border-b border-gray-800">
                    <DialogTitle className="text-base font-medium text-white">
                    Your application:
                    </DialogTitle>
                </div>
            <div className="flex-1 overflow-y-auto p-6">
                <div className="mt-6 space-y-6 text-sm text-gray-200">

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
                        <span className="capitalize">{applicantData.licenseStatus}</span>

                        <span className="text-gray-400">Years of Experience:</span>
                        <span>{applicantData.yearsOfExperience}</span>

                        <span className="text-gray-400">DEP Diploma:</span>
                        <span className="capitalize">{applicantData.diploma}</span>
                        </div>
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
                        <span>{applicantData.demeritPoints}</span>

                        <span className="text-gray-400">Road Accident:</span>
                        <span className="capitalize">{applicantData.roadAccident}</span>

                        <span className="text-gray-400">Work Accident:</span>
                        <span className="capitalize">{applicantData.workAccident}</span>
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
                    <Button
                    className="w-full rounded-md bg-red-600 py-2 font-semibold text-white hover:bg-red-700 transition"
                    onClick={() => setIsOpen(false)}
                    >
                    Send application
                    </Button>
                </div>
            </DialogPanel>
          </div>
        </div>

    </Dialog>
     );
}
 
export default ModalConfirmation;