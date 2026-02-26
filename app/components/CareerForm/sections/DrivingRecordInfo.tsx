import type { FormikProps } from "formik";
import type { ApplicantDataTypes } from "~/types/ApplicantDataTypes";


type DrivingInfoSectionProps = {
    formik: FormikProps<ApplicantDataTypes>
}


const DrivingRecordInfoSection = ({formik}:DrivingInfoSectionProps) => {
    return ( 
        <div className="space-y-8">

                    <div>
                    <label className="block font-semibold mb-3">
                        Have you received any driving tickets in the last three (3) years?
                    </label>
                    <div className="radio-inline">
                        <label>
                        <input type="radio" name="tickets" value="yes" 
                            checked={formik.values.tickets === 'yes'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        Yes
                        </label>
                        <label>
                        <input type="radio" name="tickets" value="no" 
                            checked={formik.values.tickets === 'no'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
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
                        value={formik.values.demeritPoints}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    </div>

                </div>
     );
}
 
export default DrivingRecordInfoSection;