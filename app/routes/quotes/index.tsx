import type { Route } from "./+types/index";

import Baner from "~/components/Baner/baner";

import PageContent from "~/components/PageContent/PageContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quote - Prince Logistics Services" },
    { name: "description", content: "Prince Logistics quote page" },
  ];
}

const QuotePage = () => {
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



                    <form className="mt-12 space-y-8">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            <input type="text" placeholder="NAME (required)" required className="quote-input" />
                            <input type="text" placeholder="DEPARTURE LOCATION" className="quote-input" />
                            <input type="text" placeholder="WEIGHT OF MERCHANDISE" className="quote-input" />

                            <input type="email" placeholder="EMAIL (required)" required className="quote-input" />
                            <input type="text" placeholder="DESTINATION" className="quote-input" />
                            <input type="text" placeholder="MERCHANDISE DELIVERED" className="quote-input" />

                            <input type="text" placeholder="COMPANY" className="quote-input" />
                            <input type="text" placeholder="CARGO THAT NEEDS TO BE LOADED" className="quote-input" />
                            <input type="text" placeholder="SHIPPING TEMPERATURE REQUIRED" className="quote-input" />

                            <input type="tel" placeholder="PHONE" className="quote-input" />
                            <input type="text" placeholder="DELIVERY TIMEFRAME" className="quote-input md:col-span-1" />
                        </div>

                        <textarea
                            placeholder="COMMENTS / ADDITIONAL INFORMATION"
                            rows={8}
                            className="quote-input resize-none"
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