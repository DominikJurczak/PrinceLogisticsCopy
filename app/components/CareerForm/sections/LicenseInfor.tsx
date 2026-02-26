import type { FormikProps } from "formik";
import type { ApplicantDataTypes } from "~/types/ApplicantDataTypes";

import EmploymentHistory from "~/components/EmploymentHistory/EmploymentHistory";

type LicenseInfoSectionProps = {
    formik: FormikProps<ApplicantDataTypes>
}

const LicenseInfoSection = ({formik}:LicenseInfoSectionProps) => {
    return ( 
        <div className="space-y-8">

                    <div>
                    <label className="block font-semibold mb-3">
                        Has your driver's license ever been revoked or suspended?
                    </label>
                    <div className="radio-inline">
                        <label>
                            <input type="radio" name="licenseStatus" value="yes" 
                                checked={formik.values.licenseStatus === 'yes'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="licenseStatus" value="no"
                                checked={formik.values.licenseStatus === 'no'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            No
                        </label>
                    </div>
                    </div>

                    <div className="form-group w-full">
                        <label htmlFor="experience">
                            How many years of experience do you have with a Class 1 (EC) license?
                        </label>
                        <input id="experience" type="number" className="input" name='yearsOfExperience' min='0' 
                            value={formik.values.yearsOfExperience}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                        

                        {Number(formik.values.yearsOfExperience) >= 1 && (

                            <EmploymentHistory 
                            employmentHistory={formik.values.employmentHistory}
                            setEmploymentHistory={(value) => {
                                const newValue = 
                                typeof value === 'function' 
                                ? value(formik.values.employmentHistory)
                                : value

                                formik.setFieldValue('employmentHistory', newValue)
                            }}
                            />
                        )}


                    </div>


                    <div>
                    <label className="block font-semibold mb-3">
                        Do you have a Diplôme d'Études Professionelles (DEP) in trucking (or European equivalent)? 
                    </label>
                    <div className="radio-inline">
                        <label>
                            <input type="radio" name="diploma" value="yes" 
                                checked={formik.values.diploma === 'yes'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="diploma" value="no" 
                                checked={formik.values.diploma === 'no'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            No
                        </label>
                    </div>
                    </div>

                </div>
     );
}
 
export default LicenseInfoSection;