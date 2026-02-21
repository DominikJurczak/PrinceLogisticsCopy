import PageContent from "~/components/PageContent/PageContent";
import type { Route } from "./+types/index";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - Prince Logistics Services" },
    { name: "description", content: "Prince Logistics contact page" },
  ];
}

import Baner from "~/components/Baner/baner";

const ContactPage = () => {
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


                <form className="mt-10 space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <input
                        type="text"
                        placeholder="NAME (required)"
                        required
                        className="contact-input"
                        />

                        <input
                        type="text"
                        placeholder="COMPANY"
                        className="contact-input"
                        />

                        <input
                        type="text"
                        placeholder="CITY"
                        className="contact-input"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                        type="email"
                        placeholder="EMAIL (required)"
                        required
                        className="contact-input"
                        />

                        <input
                        type="tel"
                        placeholder="PHONE"
                        className="contact-input"
                        />
                    </div>

                   
                    <textarea
                        name="message"
                        id="contactMessage"
                        placeholder="MESSAGE (required)"
                        required
                        rows={8}
                        className="contact-input resize-none"
                    />

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