import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  DashboardLine,
  Exchange,
  LogoutBox,
  Organization,
  ShoppingBag,
  WalletLine,
} from "../icons";

export default function Sidebar() {
  const [active, setActive] = useState(0);
  const [arrow, setArrow] = useState(false);

  const dataSidebar = [
    { name: "Dashboard", icon: <DashboardLine /> },
    { name: "Balance", icon: <WalletLine /> },
    { name: "Transaction", icon: <Exchange /> },
    { name: "Product", icon: <ShoppingBag /> },
    {
      name: "Channel",
      icon: <Organization />,
      dropdown: ["Agent", "Balance", "Transaction"],
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center cursor-pointer text-[29px] text-primary-100 font-bold leading-[40px] mb-[68px]">
        SalesDash
      </div>
      <div>
        {dataSidebar.map((item, index) => {
          return (
            <div key={index}>
              <div
                onClick={() => setActive(index)}
                className={`pl-[30px] flex ${
                  index == 4 ? "mb-3" : "mb-[51px]"
                } cursor-pointer ${
                  active == index
                    ? "text-primary-100 border-r-4 border-primary-100"
                    : "text-dark-20"
                }`}
              >
                <div className="mr-5">{item?.icon}</div>
                <div className="flex">
                  <div className="text-lg mr-12 font-semibold">
                    {item?.name}
                  </div>
                  {item?.dropdown && (
                    <div onClick={() => setArrow(!arrow)}>
                      {arrow ? <ArrowUp /> : <ArrowDown />}
                    </div>
                  )}
                </div>
              </div>
              <div className="pl-[80px]">
                {item?.dropdown && arrow && (
                  <div className="flex flex-col">
                    {item?.dropdown.map((i, index) => {
                      return (
                        <div
                          key={index}
                          className="text-dark-20 mb-3 cursor-pointer last:mb-0 text-lg font-semibold"
                        >
                          {i}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-b-2 border-divider-10 mx-5 my-10" />
      <div className="pl-[30px] flex cursor-pointer">
        <LogoutBox />
        <div className="text-lg mr-12 font-semibold text-dark-20 ml-5">
          Logout
        </div>
      </div>
    </div>
  );
}
