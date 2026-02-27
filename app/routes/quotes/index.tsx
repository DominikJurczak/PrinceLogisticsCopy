import { useFormik } from "formik";
import type { Route } from "./+types/index";

import Baner from "~/components/Baner/baner";

import PageContent from "~/components/PageContent/PageContent";

import type { FormikErrors } from "formik";
import type { QuoteTypes } from "~/types/QuoteTypes";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quote - Prince Logistics Services" },
    { name: "description", content: "Prince Logistics quote page" },
  ];
}


const validate = (values: QuoteTypes) => {
    const errors: FormikErrors<QuoteTypes> = {}

    if (!values.email) {
        errors.email = 'This field is required.'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
    }

    if(!values.name) {
        errors.name = 'This field is required.'
    }

    if(!values.departure) {
        errors.departure = 'This field is required.'
    }

    if (!values.weight) {
        errors.weight = 'This field is required.'
    } else {
        const weight = Number(values.weight)

        if (isNaN(weight)) {
        errors.weight = 'Weight must be a number.'
        } else if (weight <= 0) {
        errors.weight = 'Load weight must be greater than 0.'
        } else if (weight > 87080) {
        errors.weight = "We're sorry, but your load is too heavy."
        }
    }

    if(!values.destination) {
        errors.destination = 'This field is required.'
    }

    if(!values.merchandiseDelivered) {
        errors.merchandiseDelivered = 'This field is required.'
    }

    if (!values.shippingTemp) {
        errors.shippingTemp = 'This field is required.'
    } else {
        const temp = Number(values.shippingTemp)

        if (isNaN(temp)) {
        errors.shippingTemp = 'Temperature must be a number.'
        } else if (temp > 30 || temp < -60) {
        errors.shippingTemp =
            "We're sorry, but this temperature is outside our supported range."
        }
    }

    if(!values.phone) {
        errors.phone = 'This field is required.'
    }

    if (!values.deliveryETA) {
        errors.deliveryETA = 'This field is required.'
    } else {
        const eta = Number(values.deliveryETA)

        if (isNaN(eta)) {
        errors.deliveryETA = 'Delivery timeframe must be a number.'
        } else if (eta < 0) {
        errors.deliveryETA = 'This field cannot be negative.'
        }
  }


    return errors
}

const QuotePage = () => {


    const formik = useFormik({
        initialValues: {
            name: '',
            departure: '',
            weight: '',
            email: '',
            destination: '',
            merchandiseDelivered: '',
            company: '',
            cargoToLoad: '',
            shippingTemp: '',
            phone: '',
            deliveryETA: '',
            comments: '',
        },
        validate,
        validateOnChange: false,
        onSubmit: values => {
            const formattedValues = {
                ...values,
                weight: Number(values.weight),
                shippingTemp: Number(values.shippingTemp),
                deliveryETA: Number(values.deliveryETA),
            }
            
        console.log(formattedValues)
        }
    })



    return ( 
        <div className="w-full">
            
            <Baner 
                image='./images/Quotes/bg-fleet.jpg'
                alt='prince fleet'
                banerText="ASK US FOR AN ESTIMATE"
                width='50%'
            />
            
            <div className="wrapper max-w-[960px] mx-auto m-10">
                <PageContent title='QUOTE'>
                    <p>For more than three decades, we’ve been providing our clients with free estimates. And we’ve always respected our price quotes.</p>
                    <p>Please let us know about your needs.</p>



                    <form onSubmit={formik.handleSubmit} className="mt-12 space-y-8" >

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            <div className="flex flex-col">
                                <input type="text" placeholder="NAME (required)" className="quote-input" 
                                    id='name'
                                    name='name'
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


                            <div className="flex flex-col">
                                <input type="text" placeholder="DEPARTURE LOCATION" className="quote-input" 
                                    id='departure'
                                    name='departure'
                                    value={formik.values.departure}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    />

                                {formik.errors.departure && (
                                    <span className="text-red-600 text-xs mt-1">
                                        {formik.errors.departure}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col">     
                                <input type="text" placeholder="WEIGHT OF MERCHANDISE (LBS)" className="quote-input" 
                                    id='weight'
                                    name='weight'
                                    value={formik.values.weight}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}   
                                    />
                                    {formik.errors.weight && (
                                        <span className="text-red-600 text-xs mt-1">
                                            {formik.errors.weight}
                                        </span>
                                    )}
                            </div>
                            
                            <div className="flex flex-col">  
                                <input type="email" placeholder="EMAIL (required)" className="quote-input" 
                                    id='email'
                                    name='email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    
                                    />
                                    {formik.errors.email && (
                                        <span className="text-red-600 text-xs mt-1">
                                            {formik.errors.email}
                                        </span>
                                    )}                                
                            </div>
                            
                            <div className="flex flex-col">  
                                <input type="text" placeholder="DESTINATION" className="quote-input" 
                                    id='destination'
                                    name='destination'
                                    value={formik.values.destination}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.destination && (
                                    <span className="text-red-600 text-xs mt-1">
                                        {formik.errors.destination}
                                    </span>
                                )}
                            </div>


                            <div className="flex flex-col">  
                                <input type="text" placeholder="MERCHANDISE DELIVERED" className="quote-input" 
                                    id="merchandiseDelivered"
                                    name='merchandiseDelivered'
                                    value={formik.values.merchandiseDelivered}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.merchandiseDelivered && (
                                    <span className="text-red-600 text-xs mt-1">
                                        {formik.errors.merchandiseDelivered}
                                    </span>
                                )}
                            </div>

                            <input type="text" placeholder="COMPANY" className="quote-input" 
                                id='company'
                                name='company'
                                value={formik.values.company}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <input type="text" placeholder="CARGO THAT NEEDS TO BE LOADED" className="quote-input" 
                                id='cargoToLoad'
                                name='cargoToLoad'
                                value={formik.values.cargoToLoad}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                            <div className="flex flex-col">  
                                <input type="number" placeholder="SHIPPING TEMPERATURE REQUIRED (*C)" className="quote-input" 
                                    id='shippingTemp'
                                    name='shippingTemp'
                                    value={formik.values.shippingTemp}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.shippingTemp && (
                                    <span className="text-red-600 text-xs mt-1">
                                        {formik.errors.shippingTemp}
                                    </span>
                                )}

                            </div>

                            <div className="flex flex-col">  
                                <input type="number" placeholder="PHONE" className="quote-input" 
                                    id='phone'
                                    name='phone'
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.phone && (
                                    <span className="text-red-600 text-xs mt-1">
                                        {formik.errors.phone}
                                    </span>
                                )}

                            </div>

                            <div className="flex flex-col">  
                            <input type="number" placeholder="DELIVERY TIMEFRAME (in hours)" className="quote-input" 
                                id='deliveryETA'
                                name='deliveryETA'
                                value={formik.values.deliveryETA}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                                {formik.errors.deliveryETA && (
                                    <span className="text-red-600 text-xs mt-1">
                                        {formik.errors.deliveryETA}
                                    </span>
                                )}

                            </div>
                        </div>

                        <textarea
                            placeholder="COMMENTS / ADDITIONAL INFORMATION"
                            rows={8}
                            className="quote-input resize-none"
                            id='comments'
                            name='comments'
                            value={formik.values.comments}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />

                        <div className="flex justify-center pt-4">
                            <button
                            type="submit"
                            className=" text-white px-12 py-3 font-semibold uppercase tracking-wide transition cursor-pointer"
                            style={{backgroundColor: '#e73127'}}
                            >
                            Send
                            </button>
                        </div>

                    </form>



                </PageContent>
            </div>
        </div>
    );
}
 
export default QuotePage;