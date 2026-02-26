import type { FormikProps } from "formik";
import type { ApplicantDataTypes } from "~/types/ApplicantDataTypes";


type AccidentsInfoSectionProps = {
    formik: FormikProps<ApplicantDataTypes>
}


const AccidentsInfoSection = ({formik}:AccidentsInfoSectionProps) => {
    return ( <div className="space-y-8">

                    <div>
                    <label className="block font-semibold mb-3">
                        Have you ever had a road accident while driving a tractor trailer?
                    </label>
                    <div className="radio-inline">
                        <label>
                        <input type="radio" name="roadAccidents" value="yes" 
                            checked={formik.values.roadAccidents === 'yes'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        Yes
                        </label>
                        <label>
                        <input type="radio" name="roadAccidents" value="no" 
                            checked={formik.values.roadAccidents === 'no'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
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
                                checked={formik.values.workAccidents === 'yes'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            Yes
                            </label>
                        <label>
                            <input type="radio" name="workAccidents" value="no" 
                                checked={formik.values.workAccidents === 'no'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            No
                        </label>
                    </div>
                    </div>

                    <p className="text-sm text-gray-600">
                        The information will be verified as permitted by law on health and safety. Omission of information shall be considered voluntary on your part and thereby considered a misrepresentation.
                    </p>

                </div> );
}
 
export default AccidentsInfoSection;