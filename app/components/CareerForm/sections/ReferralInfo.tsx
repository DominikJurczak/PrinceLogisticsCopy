import type { FormikProps } from "formik";
import type { ApplicantDataTypes } from "~/types/ApplicantDataTypes";


type ReferralInfoSectionProps = {
    formik: FormikProps<ApplicantDataTypes>
}


const ReferralInfoSection = ({formik}: ReferralInfoSectionProps) => {
    return ( 
        <div className="space-y-8">

                    <div className="form-group max-w-sm">
                    <label htmlFor="referralSource">
                        How did you hear about Prince Logistic Services?
                    </label>
                    <select
                        id="referralSource"
                        className="input"
                        name="referralSource"
                        value={formik.values.referralSource}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        
                        >
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
                            <input type="radio" name="referred" value="yes" 
                                checked={formik.values.referred === 'yes'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="referred" value="no" 
                                checked={formik.values.referred === 'no'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                            No
                        </label>
                    </div>
                    </div>

                    {formik.values.referred === 'yes' && (

                        <div className="form-group max-w-sm transition">
                        <label htmlFor="referringEmployee">
                            Can you provide his/her name for Us?
                        </label>
                        <input id="referringEmployee" type="text" className="input" name='referringEmployee'
                            value={formik.values.referringEmployee}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        </div>
                    )}

                    <div className="form-group">
                    <label htmlFor="comments">Comments</label>
                    <textarea id="comments" rows={4} className="input" name='comments'
                        value={formik.values.comments}
                        onChange={formik.handleChange}
                    />
                    </div>

                </div>
     );
}
 


export default ReferralInfoSection;