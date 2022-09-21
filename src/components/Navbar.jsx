import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar4 from "../data/avatar4.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "
      />
      {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        tittle="Menu"
        customFunc={() => setActiveMenu((prevActiveMenue) => !prevActiveMenue)}
        color="blue"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          dotColor="#03c9d7"
          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          customFunc={() => handleClick("notification")}
          dotColor="#03c9d7"
          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img className="rounded-full w-8 h-8" src={avatar4} />
            <p>
              <span className="text-gray-400 text-14 ">Hi, </span>
              <span className="text-gray-400 font-bold ml-1 text-14 ">
                Ahmed
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14 " />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userprofile && <userProfile />}
      </div>
    </div>
  );
};

export default Navbar;
