import type { FormikProps } from "formik";
import type { ApplicantDataTypes } from "~/types/ApplicantDataTypes";


type BasicInfoSectionProps = {
    formik: FormikProps<ApplicantDataTypes>
}

const BasicInfoSection = ({formik} : BasicInfoSectionProps) => {
    return ( 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="form-group">
                        <label htmlFor="firstName">First Name*</label>
                        <input id="firstName" type="text" className="input" name='firstName' 
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.firstName && formik.errors.firstName && (
                            <div className="text-red-600 text-sm mt-1">
                                {formik.errors.firstName}
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name*</label>
                        <input id="lastName" type="text" className="input" name='lastName' 
                        value={formik.values.lastName} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.lastName &&  formik.errors.lastName && (
                            <div className="text-red-600 text-sm mt-1">
                                {formik.errors.lastName}
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input id="email" type="email" className="input" name='email' 
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-600 text-sm mt-1">
                                {formik.errors.email}
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Telephone*</label>
                        <input id="phone" type="tel" placeholder="(000) 123 - 4567" className="input" name='phone' 
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />

                        {formik.touched.phone && formik.errors.phone && (
                            <div className="text-red-600 text-sm mt-1">
                                {formik.errors.phone}
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City*</label>
                        <input id="city" type="text" className="input" name='city' 
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                            {formik.touched.city &&  formik.errors.city && (
                                <div className="text-red-600 text-sm mt-1">
                                    {formik.errors.city}
                                </div>
                            )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country*</label>
                        <select id="country" className="input" name='country' 
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>

                </div>

     );
}
 
export default BasicInfoSection;