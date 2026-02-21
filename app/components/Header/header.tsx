

import { Link, NavLink } from "react-router";
const Header = () => {


  const active = `px-6 py-3 font-bold hover:bg-black hover:text-white transition bg-black text-white`
  const base = `px-6 py-3 font-bold hover:bg-black hover:text-white transition`

  return (
    <header className="w-full">

      <div className="bg-gradient-to-b from-[#1f1f1f] to-black text-white py-3">
        <div className="max-w-[960px] mx-auto flex items-center justify-between ">

          <div className="flex items-center gap-6">

            <Link to="/" className="flex items-center gap-3">
              <img
                src="./images/logo-main.svg"
                alt="Prince Logistics"
                className="h-14"
              />
            </Link>

            
          </div>

          <div className="flex flex-col items-end gap-2">

            <div className="flex items-center gap-3 text-sm font-semibold">
              <span>(514) 367-0000</span>
              <span>|</span>
              <span className="cursor-pointer hover:text-red-500">in</span>
              <span>|</span>
              <span className="cursor-pointer hover:text-red-500">f</span>
              <span>|</span>
              <span className="uppercase cursor-pointer hover:text-red-500">
                Français
              </span>
            </div>
          </div>
        </div>
      </div>


      <nav className="bg-gray-200 ">
        <div className="max-w-[960px] mx-auto flex items-center text-sm font-semibold uppercase">

          <NavLink 
            to="/"
            className={({isActive}) => isActive ? active : base } 
          >
            Home
          </NavLink>

          <NavLink className={({isActive}) => isActive ? active : base }  to="/history">
            History
          </NavLink>

          <NavLink className={({isActive}) => isActive ? active : base }  to="/services">
            Services
          </NavLink>

          <NavLink className={({isActive}) => isActive ? active : base }  to="/partners">
            Partners
          </NavLink>

          <NavLink className={({isActive}) => isActive ? active : base }  to="/careers">
            Careers
          </NavLink>

          <NavLink className={({isActive}) => isActive ? active : base }  to="/contact">
            Contact Us
          </NavLink>

          <NavLink className={({isActive}) => isActive ? active : base }  to="/documents">
            Documents
          </NavLink>

          <NavLink
            className="ml-auto font-bold text-white px-8 py-3 hover:bg-red-700 transition"
            to="/quotes"
            style={{backgroundColor:'#e73127'}}
          >
            Quote
          </NavLink>

        </div>
      </nav>
    </header>
  );
};

export default Header;
