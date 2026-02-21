import { useState } from "react";
import type { Route } from "./+types/index";

import Baner from "~/components/Baner/baner";
import PageNavbar from "~/components/PageNavbar/PageNavbar";

import PageContent from "~/components/PageContent/PageContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "History & Mission - Prince Logistics Services" },
    { name: "description", content: "Prince Logistics history & mission" },
  ];
}

const HistoryPage = () => {

    const [activeTab, setActiveTab] = useState('history')

    const tabs = [
        {id: 'history', label: 'HISTORY & MISSION'},
        {id: 'team', label: 'OUR TEAM'},
        {id: 'fleet', label: 'STATE OF OUR TRUCKS & TRAILERS'}
    ]

    return ( 
    <div className="w-full">

        <Baner 
            image={'./images/History/bg-fleet.jpg'} 
            alt={'history banner'}
            banerText="THE STORY OF A JOURNEY THAT BEGAN IN 1989"
        />

        <div className="max-w-[960px] mx-auto px-6 py-16 
                        flex flex-col lg:flex-row gap-12">

            <div className="flex-1 space-y-6">
                {activeTab === "history" && (

                    <PageContent title='HISTORY & MISSION'> 
                            <p>No matter what kind of merchandise you need to ship, our approach remains the same. We are dedicated to precision, quality, and rigour.</p>
                            <p>We make sure all our clients know this every time one of our drivers takes the wheel to transport their merchandise. This was as true the day we founded our company as it is today. And the facts speak for themselves.</p>
                            <img 
                                src="./images/History/picto-en.png" 
                                alt="picto history"
                                className="my-10"
                                />
                            <h3>The story of a journey that began in 1989</h3>
                            <p >We’ve seen the transportation industry grow and evolve. By staying up-to-date with new technologies and by remaining true to our mission of excellence, we’ve been able to forge our own path to success.</p>
                            <p >Today, we have a fleet of trucks and trailers that are regularly inspected and equipped with GPS tracking. We provide high-quality transportation, no matter the merchandise.</p>
                            <p >Every time a client contacts us to transport their goods, they know they can expect reliability and peace of mind.</p>

                    </PageContent>


                )}

                {activeTab === "team" && (

                    <PageContent title='OUR TEAM'>

                        <p>Prince Logistique’s team includes more than 500 skilled professionals, including 550 drivers who travel across Canada and the United States to deliver our clients’ goods.</p>
                        <p>We also count on more than 40 experienced staff members who take care of logistics, provide advisory services, and coordinate your projects. From start to finish.</p>
                        <h3>A transportation expert equipped with state-of-the-art technology</h3>
                        <p>In order to provide a service that combines quality, rigour, and excellence, we’ve automated some of our processes. That’s why we integrated specialized software solutions designed for logistics and transportation.</p>
                        <p>Warehouse management, mechanical maintenance, invoicing, scheduling: we take care of every one of our client’s needs.</p>
                        <img 
                            src="./images/History/team-1024x555.png" 
                            alt="Prince Logistic Team"
                            className="mt-6 w-full max-w-[600px]"
                            />
                    </PageContent>
                )}

                {activeTab === "fleet" && (

                    <PageContent title='STATE OF OUR TRUCKS & TRAILERS'>

                        <p>Our fleet consists of more than 950 units of modern trucks & trailers equipped with GPS tracking devices allowing our dispatchers & clients to follow their location at all times. Our trailers are equipped with refrigerated units (reefers) that are remotely controlled, allowing us to dial in the right temperature at any given moment.</p>
                        <p>All our vehicles our thoroughly inspected before each trip. This is in addition to preventive inspections that are required by the government. In order to make sure our fleet is in perfect condition, we perform a vast majority of maintenance & repairs in our own very own professional garages. We maintain close relationships with various partners, such as dealerships, truck stops, third-party garages and service centers across Canada & USA.</p>
                    </PageContent>
                )}
            </div>

            <div className="w-[300px]">
                <nav className="flex flex-col overflow-hidden">
                    <PageNavbar
                        title="ABOUT US"
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        />
                </nav>
            </div>

        </div>
    </div> );
}
 
export default HistoryPage;
