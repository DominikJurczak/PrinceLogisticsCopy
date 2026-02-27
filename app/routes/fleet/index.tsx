import { useState } from "react";
import type { Route } from "../careers/+types";

import Baner from "~/components/Baner/baner";
import PageContent from "~/components/PageContent/PageContent";
import PageNavbar from "~/components/PageNavbar/PageNavbar";
import FleetTrucks from "~/components/Fleet/FleetTrucks";
import FleetTrailers from "~/components/Fleet/FleetTrailers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Fleet - Prince Logistics Services" },
    { name: "description", content: "Prince Logistics fleet display" },
  ];
}

type TabType = 'trucks' | 'trailers'


const FleetPage = () => {

    const [activeTab, setActiveTab] = useState<TabType>('trucks')
    
        const tabs:{id: TabType , label: string}[] = [
            {id: 'trucks', label: 'TRUCKS'},
            {id: 'trailers', label: 'TRAILERS'},
        ]


    return ( 
    <div className="w-full">

        <Baner 
            image={'./images/Fleet/fleet-bg.png'} 
            alt={'fleet baner'}
            banerText=""
        />

        <div className="max-w-[960px] mx-auto px-6 py-16 flex flex-col gap-12">

            <div className="flex-1 space-y-6">

                        {/* TABS */}
                            <div className="flex justify-center gap-10 border-b border-b-gray-300 pb-4">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`text-sm font-semibold tracking-widest transition pb-2 relative
                                            ${activeTab === tab.id 
                                                ? "text-red-600"
                                                : "text-gray-500 hover:text-black"
                                            }`}
                                    >
                                        {tab.label}

                                        {activeTab === tab.id && (
                                            <span className="absolute left-0 -bottom-[5px] w-full h-[2px] bg-red-600"></span>
                                        )}
                                    </button>
                                ))}
                            </div>

                        {activeTab === 'trucks' &&(
                            <FleetTrucks />
                        )} 
                        {activeTab === 'trailers' &&(
                            <FleetTrailers />
                        )} 

            </div>

            

        </div>
    </div> 
    );
}
 
export default FleetPage;