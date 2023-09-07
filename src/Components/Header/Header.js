import { threeHorizontalLineIcon } from "../../utils/icons";
import { useState } from "react";
// import logo from "../../assets/images/logo.png";
import { Button } from "antd";
import Drawer from "../Drawer/Drawer";
import DrawerApp from "../Drawer/Drawer";

const Header = ({ setIsOpen }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="min-h-[50px] shadow-xl">
      
          <div className="mt-4 pr-5">
            <DrawerApp />
          </div>
        
    </div>


//     <div className="flex items-center w-full h-[60px] sm:h-[70px] bg-white-300 px-5 sm:px-14">
//     {/* Sidebar open option */}
//     <div className="sm:hidden w-6 h-6 mt-3 ml-3 cursor-pointer" onClick={()=>setIsOpen(true)}>{threeHorizontalLineIcon}</div>
//     <h2 className='text-black mt-2 ml-4 sm:ml-0 sm:mt-0 font-bold text-lg sm:text-4xl'>Header</h2>
// </div>


  );
};

export default Header;
