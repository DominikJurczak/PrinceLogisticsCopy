import type { FormikProps } from "formik";
import type { ApplicantDataTypes } from "~/types/ApplicantDataTypes";


type PositionInfoSectionProps = {
    formik: FormikProps<ApplicantDataTypes>
}

const PositionInfoSection = ({formik} : PositionInfoSectionProps) => {
    return ( 
                <div>
                    <h3 className="section-title">Which position are you applying for?*</h3>

                    <div className="radio-group">
                        <label className="mr-5">
                            <input type="radio" name="position" value="team" 
                                checked={formik.values.position === 'team'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            Class 1 - Team Drivers
                        </label>

                        <label>
                            <input type="radio" name="position" value="solo" 
                                checked={formik.values.position === 'solo'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                            Class 1 - Solo Driver
                        </label>
                    </div>
                </div>
     );
}
 
export default PositionInfoSection;