import { Link } from "react-router";
import AddressBox from "../AddressBox/addressBox";

import TrackingChecker from "../TrackingChecker/trackingChecker";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#1f1f1f] to-black text-gray-300 pt-16 pb-10 px-6">
      <div className="max-w-240 mx-auto space-y-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="flex flex-col space-y-1 text-sm">
            <Link className="hover:text-white transition" to="/">Home</Link>
            <Link className="hover:text-white transition" to="/partners">Partners</Link>
            <Link className="hover:text-white transition" to="/careers">Careers</Link>
            <Link className="hover:text-white transition" to="/documents">Documents</Link>
            <Link className="hover:text-white transition" to="/contact">Contact Us</Link>
            <Link className="hover:text-white transition" to="/accessibility">Accessibility</Link>
            <Link className="hover:text-white transition" to="/quotes">Quote</Link>
          </div>

          <div>
            <h2 style={{color:'#e73127'}} className="font-semibold mb-4 tracking-wide">
              HISTORY
            </h2>
            <div className="flex flex-col space-y-1 text-sm">
              <Link className="hover:text-white transition" to="/">Our Team</Link>
              <Link className="hover:text-white transition" to="/">Our Equipment</Link>
              <Link className="hover:text-white transition" to="/">
                State of our trucks & trailers
              </Link>
            </div>
          </div>

          <div>
            <h2 style={{color:'#e73127'}} className="font-semibold text-white mb-4 tracking-wide">
              SERVICES
            </h2>
            <div className="flex flex-col space-y-1 text-sm">
              <Link className="hover:text-white transition" to="/">Refrigerated trucking</Link>
              <Link className="hover:text-white transition" to="/">Logistics and storage</Link>
              <Link className="hover:text-white transition" to="/">Territories covered</Link>
              <Link className="hover:text-white transition" to="/">Fast delivery</Link>
              <Link className="hover:text-white transition" to="/">Client support</Link>
              <Link className="hover:text-white transition" to="/">Industries</Link>
            </div>
          </div>
        </div>


        <TrackingChecker />


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 border-t border-neutral-700 pt-12">
          <AddressBox 
            title="Head Office" 
            address1="8300 rue St-Patrick" 
            address2="Lasalle, QC H8N 2H1, Canada" 
            tel="(514) 367-0000 / +1 (800) 667-5007"
            fax="(514) 367-0999"
          />

          <AddressBox 
            title="Atlantic Office" 
            address1="42 rue Industrielle" 
            address2="Bouctouche, NB E4S 3H9, Canada" 
            tel="(506) 955-3487"
            tel2="(506) 866-0991"
          />

          <AddressBox 
            title="Ontario Office" 
            address1="1-7758 Kent Boul." 
            address2="Brockville, ON K6V 7J9 Canada" 
            tel="(905) 233-7700"
          />

          <AddressBox 
            title="Ontario Yard" 
            address1="62 Medulla Avenue" 
            address2="Toronto, ON M8Z 5L9 Canada" 
          />

          <AddressBox 
            title="Franklin Terminal" 
            address1="3525, chemin Béland" 
            address2="Saint-Antoine-Abbé (Franklin), QC J0S 1N0 Canada" 
          />
        </div>


        <div className="footer_cert flex flex-col sm:flex-row items-center justify-center gap-8 py-8 border-t border-neutral-700">
    
            <img 
                src="./images/Footer/logo-ctpat.png" 
                alt="logo ctpat"
                className="h-14 object-contain opacity-70 hover:opacity-100 transition duration-300"
            />

            <img 
                src="./images/Footer/logo-pip.png" 
                alt="logo pip"
                className="h-14 object-contain opacity-70 hover:opacity-100 transition duration-300"
            />

            <img 
                src="./images/Footer/logo-smartway.png" 
                alt="logo smartway"
                className="h-14 object-contain opacity-70 hover:opacity-100 transition duration-300"
            />            

        </div>
      </div>

    </footer>
  );
};

export default Footer;
