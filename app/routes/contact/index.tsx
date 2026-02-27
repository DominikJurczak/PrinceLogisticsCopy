import { useFormik } from 'formik'

import type { Route } from "./+types/index";

import type { FormikErrors } from 'formik';
import type { ContactTypes } from '~/types/ContactTypes';

import PageContent from "~/components/PageContent/PageContent";
import Baner from "~/components/Baner/baner";

const validate = (values: ContactTypes) => {
    const errors : FormikErrors<ContactTypes> = {};

    if (!values.name) {
        errors.name = 'This field is required.'
    } else if (values.name.length < 2) {
        errors.name = 'Must be longer than 1 character';
    }
    if (!values.email) {
        errors.email = 'This field is required.'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }

   if (!values.message) {
        errors.message = 'This field is required'
   } else if (values.message.length > 300) {
    errors.message = 'Your message should be less than 300 characters. '
   }

    return errors;
};


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - Prince Logistics Services" },
    { name: "description", content: "Prince Logistics contact page" },
  ];
}


const ContactPage = () => {
    
    const formik = useFormik({
        initialValues: {
            name: '',
            company: '',
            city: '',
            email: '',
            phone: '',
            message: '',
            
        },
        validate,
        validateOnChange: false,
        onSubmit: values => {
            alert(JSON.stringify(values, null,2))
        },
    })
    

    
    
    return ( 
    <div className="w-full">
        <Baner 
            image='./images/Contact/bg-map.jpg' 
            alt="contact-us-bg" 
            banerText="TAKE THE HIGH ROAD"
        />
        <div className="max-w-[960px] mx-auto mt-10">

        
            <PageContent
                title='CONTACT US'
            >
                <p>We offer our clients services tailored to their needs. That’s why they’ve counted on us to deliver their goods time and time again. We can do the same for you.</p>

                <strong>Tel: (514) 367-0000 or 1-800-667-5007</strong>

                <ul>
                    <li>Option #2 for Inbound shipments.</li>
                    <li>Option #3 for Outbound shipments.</li>
                    <li>Option #5 for the Customs department.</li>
                    <li>Option #6 for the Safety & Compliance department.</li>
                </ul>

                <strong>Fax: (514) 367-0999</strong>

                <form onSubmit={formik.handleSubmit} className="mt-10 space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col">

                        <input
                            type="text"
                            placeholder="NAME (required)"
                            id='name'
                            name='name'
                            className='contact-input'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.name && (
                            <span className="text-red-600 text-xs mt-1">
                            {formik.errors.name}
                            </span>
                        )}
                        </div>

                        <input
                        type="text"
                        placeholder="COMPANY"
                        className="contact-input"
                        id='company'
                        name='company'
                        value={formik.values.company}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />

                        <input
                        type="text"
                        placeholder="CITY"
                        className="contact-input"
                        id='city'
                        name='city'
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col">

                        <input
                            type="email"
                            placeholder="EMAIL (required)"
                            className='contact-input'
                            id='email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.email  && 
                            (
                            <span className="text-red-500 text-xs mt-1 block tracking-wide">
                                {formik.errors.email}
                            </span>
                            )}
                        </div>

                        <input
                        type="tel"
                        placeholder="PHONE"
                        className="contact-input"
                        id='phone'
                        name='phone'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                    </div>

                   <div className="flex-flex-col">

                    <textarea
                        name="message"
                        id="message"
                        placeholder="MESSAGE (required)"
                        rows={8}
                        className='contact-input resize-none'
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.errors.message  && 
                        (
                            <span className="text-red-500 text-xs mt-1 block tracking-wide">
                                {formik.errors.message}
                            </span>
                        )}
                    </div>

                    <div className="flex justify-center pt-6 mb-6">
                        <button
                        type="submit"
                        className="bg-gradient-to-b from-red-500 to-red-700 text-white px-12 py-3 rounded-full font-semibold uppercase tracking-wide hover:from-red-600 hover:to-red-800 transition"
                        >
                        Send
                        </button>
                    </div>

                </form>
           

            </PageContent>
        </div>
    </div> );
}
 
export default ContactPage;