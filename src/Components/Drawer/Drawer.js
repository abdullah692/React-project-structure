import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { HiBars3 } from "react-icons/hi2";
import { customerIcon } from "../../utils/icons";


const DrawerApp = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button className="border-none" onClick={showDrawer}>
        <HiBars3 size={25} className="text-black" />
      </Button>
      <Drawer
        title={<span className="text-[24px] font-bold">LinQ</span>}
        placement="left"
        onClose={onClose}
        closable={false}
        open={open}
        width={300}
        // className="!bg-slate-300"
      >
        <p className="flex p-4 bg-black text-white my-5 hover:bg-slate-800 hover:text-white text-[20px]">
          <span className="ml-5 mr-8">{customerIcon}</span>Option 1
        </p>

        <p className="flex p-4 bg-black text-white my-5 hover:bg-slate-800 hover:text-white text-[20px]">
          <span className="ml-5 mr-8">{customerIcon}</span>Option 2
        </p>

        <p className="flex p-4 bg-black text-white my-5 hover:bg-slate-800 hover:text-white text-[20px]">
          <span className="ml-5 mr-8">{customerIcon}</span>Option 3
        </p>
      </Drawer>
    </>
  );
};
export default DrawerApp;
