import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowRightDown, ArrowRightUp } from "../icons";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  linearGradient,
  ResponsiveContainer,
} from "recharts";

export default function Main() {
  const data = [
    {
      name: "04 Apr ‘22",
      uv: 18000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "06 Apr ‘22",
      uv: 80000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "08 Apr ‘22",
      uv: 12000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "10 Apr ‘22",
      uv: 27800,
      pv: 3908,
      amt: 2000,
    },
  ];

  const dataAgent = [
    {
      img: "agent1.png",
      name: "PT Suka Maju Jakarta",
      profit: "Rp 3.700.000",
      sales: "Rp 7.230.000",
      transaction: "43",
    },
    {
      img: "agent2.png",
      name: "Susi Susanti",
      profit: "Rp 3.550.000",
      sales: "Rp 5.230.000",
      transaction: "37",
    },
    {
      img: "agent3.png",
      name: "Toko Pulsa III Depok",
      profit: "Rp 2.860.000",
      sales: "Rp 4.500.000",
      transaction: "38",
    },
    {
      img: "agent4.png",
      name: "PT Suka Maju Bogor",
      profit: "Rp 2.400.000",
      sales: "Rp 4.800.000",
      transaction: "40",
    },
    {
      img: "agent5.png",
      name: "Anton Antoman",
      profit: "Rp 2.350.000",
      sales: "Rp 2.100.000",
      transaction: "20",
    },
  ];

  const dataProduct = [
    { img: "maxim.png", name: "Maxim", price: "150.000", transaction: "120" },
    {
      img: "telkomsel.png",
      name: "Telkomsel",
      price: "25.000",
      transaction: "98",
    },
    { img: "three.png", name: "Three", price: "50.000", transaction: "74" },
    { img: "ovo.png", name: "Ovo", price: "100.000", transaction: "68" },
    { img: "pln.png", name: "Pln", price: "150.000", transaction: "50" },
  ];

  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
    return () => {
      setRender(false);
    };
  }, [render]);
  return (
    <div className="bg-white flex-1 pt-8 pb-[118px] px-1 lg:px-8">
      <h1 className="text-dark-10 font-bold text-3xl">Dashboard</h1>
      <p className="text-dark-20 font-bold text-lg">
        Today’s date: Sun, 10 April 2022
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-[68px]">
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-base font-bold text-dark-20">Profit</h2>
          <p className="font-bold text-2xl">Rp 11.500.000</p>
          <div className="text-error-10 flex justify-end items-center pt-1">
            <ArrowRightDown />
            <p className="text-xs">0.3% compared to 7 days ago</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-base font-bold text-dark-20">Profit</h2>
          <p className="font-bold text-2xl">Rp 11.500.000</p>
          <div className="text-success-10 flex justify-end items-center pt-1">
            <ArrowRightUp />
            <p className="text-xs">0.3% compared to 7 days ago</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4">
          <h2 className="text-base font-bold text-dark-20">Profit</h2>
          <p className="font-bold text-2xl">Rp 11.500.000</p>
          <div className="text-caution-10 flex justify-end items-center pt-1">
            <ArrowRight />
            <p className="text-xs">0.3% compared to 7 days ago</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10">
        <div className="col-span-2">
          <div className="flex flex-col">
            <div className="bg-white rounded-xl shadow-lg p-4 mb-10">
              <p className="text-dark-20 font-bold text-base mb-2">
                Sales Chart
              </p>
              {render && (
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    data={data}
                    width={500}
                    height={300}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="1" y1="1" x2="1" y2="1">
                        <stop
                          offset="30%"
                          stopColor="##545DFF"
                          stopOpacity={0.5}
                        />
                        <stop
                          offset="100%"
                          stopColor="#545DFF
"
                          stopOpacity={0.5}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#545DFF"
                      fill="url(#colorUv)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="font-bold text-base text-dark-20">
                Top 5 Products
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 pt-2">
                {dataProduct.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white border-2 rounded-xl p-1 border-primary-60 grid grid-cols-1 gap-1 text-center"
                    >
                      <img
                        src={`/img/${item?.img}`}
                        className="mx-auto"
                        width={40}
                        height={40}
                        alt={item?.name}
                      />
                      <h4 className="text-primary-100 font-bold text-sm">
                        {item?.name}
                      </h4>
                      <h4 className="text-dark-20 text-sm">{item?.price}</h4>
                      <p className="text-sm font-bold text-dark-10">
                        {item?.transaction}{" "}
                        <span className="text-xs font-normal">
                          transactions
                        </span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white rounded-xl p-4 shadow-lg h-full">
            <h4 className="text-base font-bold text-dark-20 mb-10">
              Top 5 Agents
            </h4>
            {dataAgent.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row mb-[30px] last:mb-0 px-1"
                >
                  <div className="border-4 flex border-primary-60 p-1 rounded-full">
                    <img
                      src={`/img/${item?.img}`}
                      width={50}
                      height={50}
                      className="rounded-full"
                      alt="agent1"
                    />
                  </div>
                  <div className="flex flex-col justify-between mb-2 last:mb-0 ml-3">
                    <h4 className="text-sm text-primary-100 font-bold">
                      {item?.name}
                    </h4>
                    <p className="text-xs text-dark-20">
                      Profit:{" "}
                      <span className="text-dark-10">{item?.profit}</span>
                    </p>
                    <p className="text-xs text-dark-20">
                      Sales: <span className="text-dark-10">{item?.sales}</span>
                    </p>
                    <p className="text-xs text-dark-20">
                      Transaction:{" "}
                      <span className="text-dark-10">{item?.transaction}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
