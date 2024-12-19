"use client";

import Image from "next/image";
import Substact from "../asserts/Subtract.png";
import Logo from "../asserts/logo.png";
import { LoginPage } from "@/components/loginPage";
import Chart from '../asserts/chart.png';
import { ArrowUp, ArrowUpNarrowWide } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="bg-white w-full border-r h-screen flex items-center border-gray-400">
        <Image
          className="fixed bottom-0 "
          src={Substact}
          alt="CodeAnt AI"
          width={250}
          height={300}
        />
        <div className="border-2  shadow-lg rounded-2xl mx-auto w-fit p-4  gap-2">
          <div className="flex justify-center z-10 gap-4 items-center border-b-2 p-2 space-y-4">
            <Image src={Logo} alt="CodeAnt AI" width={28} height={28} />
            <p className="text-gray-700 font-semibold">
              AI to Detect & Autofix Bad Code
            </p>
          </div>
          <div className="grid grid-cols-3 text-gray-700  gap-4 text-center p-2">
            <div>
              <div className="text-xl font-bold">30+</div>
              <div className="text-sm text-gray-500">Language Support</div>
            </div>
            <div>
              <div className="text-xl font-bold">10K+</div>
              <div className="text-sm text-gray-500">Developers</div>
            </div>
            <div>
              <div className="text-xl font-bold">100K+</div>
              <div className="text-sm text-gray-500">Hours Saved</div>
            </div>
          </div>
        </div>
        <div className="absolute left-[24%] bottom-[19%] border-2  p-4 text-gray-700 bg-white rounded-2xl shadow-2xl w-fit">
          <div className="flex items-center gap-16 mb-1">
            <Image src={Chart} alt="CodeAnt AI" width={56} height={56} />
            <div className="flex text-blue-500"><ArrowUp /> <span className="text-sm text-blue-500">14% <br/> <span className="text-gray-700">This Week</span></span></div>
          </div>
          <div className="text-sm text-gray-500">Issues Fixed</div>
          <div className="text-2xl font-bold mt-1">500K+</div>
        </div>
      </div>
      <div className="bg-gray-100 w-full">
        <LoginPage />
      </div>
    </div>
  );
}
