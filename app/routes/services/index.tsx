import { useState } from "react";
import type { Route } from "./+types/index";
import Baner from "~/components/Baner/baner";
import PageContent from "~/components/PageContent/PageContent";
import PageNavbar from "~/components/PageNavbar/PageNavbar";


import { services } from "./servicesData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Road Transportation - Prince Logistics Services" },
    { name: "description", content: "Prince Logistics services" },
  ];
}




const ServicesPage = () => {

    
    const [activeTab, setActiveTab] = useState('road_transportation')
    const currService = services.find(s => s.id === activeTab)

    const tabs = [
        {id: 'road_transportation', label: 'ROAD TRANSPORTATION'},
        {id: 'refrigerated_trucking', label: 'REFRIGERATED TRUCKING'},
        {id: 'logistic_and_storage', label: 'LOGISTIC AND STORAGE'},
        {id: 'territories_covered', label: 'TERRITORIES COVERED'},
        {id: 'intermodal_transport', label: 'INTERMODAL TRANSPORT (DRAYAGE)'},
        {id: 'fast_delivery', label: 'FAST DELIVERY'},
        {id: 'client_support', label: 'CLIENT SUPPORT'},
        {id: 'industries', label: 'INDUSTRIES'},
        
    ]

    return ( 
        <div className="w-full">
            <Baner 
                image={'./images/ServicesImg/slide1-1920x253.jpg'}
                alt={'services baner'}
            />



        <div className="max-w-[960px] mx-auto px-6 py-16 
                        flex flex-col lg:flex-row gap-12">

            <div className="flex-1 space-y-6">
            <PageContent title={currService?.title || ""}>
                {currService?.content}
            </PageContent>

            </div>

            <div className="w-[300px]">
                <nav className="flex flex-col overflow-hidden">
                    <PageNavbar
                        title="SERVICES"
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        />
                </nav>
            </div>

        </div>




        </div>
    );
}
 
export default ServicesPage;