import PageContent from "~/components/PageContent/PageContent";
import type { Route } from "./+types/index";

import Baner from "~/components/Baner/baner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Partners - Prince Logistics Services" },
    { name: "description", content: "Prince Logistics partners website" },
  ];
}

const PartnersPage = () => {
    return ( 
        <div className="w-full">

                <Baner 
                    image="./images/Partners/bg-truck.jpg"
                    alt="Prince logistics partners page"
                    banerText="A TRUSTWORTHY LONG-TERM PARTNER"
                    />
            <div className="wrapper max-w-[960px] mx-auto p-10">


                <PageContent title='PARTNERS'>
                    <h3>Since 1989, Prince Logistique has teamed up with numerous partners!</h3>
                    <p>At Prince Logistique, we consider each of our clients a partner and we love to collaborate with every one of them. That’s why they renew their trust in us year after year.</p>
                    <p>As an experienced food transportation company, we believe it’s important to keep up-to-date with developments that affect the food industry, especially when it comes to fruits and vegetables. That way, we’re always able to come up with innovative ways to provide the best solutions for our clients.</p>
                </PageContent>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center py-10">
                    <img src="./images/Partners/cpma.png" alt="CPMA LOGO" className="h-12 mx-auto object-contain" />
                    <img src="./images/Partners/ctpat-logo-576x128px.png" alt="CTPAT LOGO" className="h-12 mx-auto object-contain" />
                    <img src="./images/Partners/fastlogo.png" alt="FAST LOGO" className="h-12 mx-auto object-contain" />
                    <img src="./images/Partners/logo-aqdfl-300x80.png" alt="AQDFL LOGO" className="h-12 mx-auto object-contain" />
                    <img src="./images/Partners/pip.png" alt="PIP LOGO" className="h-12 mx-auto object-contain" />
                    <img src="./images/Partners/smartway.png" alt="SMARTWAY LOGO" className="h-12 mx-auto object-contain" />
                </div>

            </div>
        </div> 
    );
}
 
export default PartnersPage;