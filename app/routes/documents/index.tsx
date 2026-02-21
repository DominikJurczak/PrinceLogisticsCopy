import type { Route } from "./+types/index";

import Baner from "~/components/Baner/baner";
import PageContent from "~/components/PageContent/PageContent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Documents - Prince Logistics Services" },
    { name: "description", content: "Prince Logistics documents page" },
  ];
}


const DocumentsPage = () => {
    return ( 
    <div className="w-full">
        <Baner 
            image='./images/DocumentsImg/slide1-1920x253.jpg'
            alt='Documents page baner background'
            banerText="PREPARING EACH TRIP WITH GREAT CARE"
        />


        <div className="wrapper max-w-[960px] mx-auto m-10">
            <PageContent title='DOCUMENTS'>
                <p>Want to start a project with Prince Logistics? Here are some documents you can download and fill out to start the process. Please contact us if you require assistance or wish to provide us with any additional information.</p>

            </PageContent>
        </div>
    </div> 
    );
}
 
export default DocumentsPage;