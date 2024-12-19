'use client'

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Logo from "../asserts/logo.png";
import Azure from "../asserts/Azure.png";
import Bitbucket from "../asserts/bitbucket.png";
import Gitlab from "../asserts/gilab.png";
import Github from "../asserts/github.png";
import Key from "../asserts/sso.png";



interface LoginOption {
  name: string;
  icon: StaticImageData;
  onClick: () => void;
}

const saasLoginOptions: LoginOption[] = [
  { name: "Sign in with Github", icon: Github, onClick: () => console.log("Github login") },
  { name: "Sign in with Bitbucket", icon: Bitbucket, onClick: () => console.log("Bitbucket login") },
  { name: "Sign in with Azure Devops", icon: Azure, onClick: () => console.log("Azure login") },
  { name: "Sign in with GitLab", icon: Gitlab, onClick: () => console.log("GitLab login") },
];

const selfHostedLoginOptions: LoginOption[] = [
  { name: "Self Hosted GitLab", icon: Gitlab, onClick: () => console.log("Self Hosted GitLab login") },
  { name: "Sign in with SSO", icon: Key, onClick: () => console.log("SSO login") },
];

export function LoginPage() {
  const [deploymentType, setDeploymentType] = useState<'saas' | 'self-hosted'>("saas");

  const currentLoginOptions = deploymentType === "saas" ? saasLoginOptions : selfHostedLoginOptions;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-700 bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white border rounded-lg shadow p-6">
        <div className="text-center mb-6">
            <div className="flex justify-center z-10 gap-4 items-center p-2">
          <Image src={Logo} alt="CodeAnt AI" width={28} height={28} />
          <span className="text-xl text-gray-700 font-light">CodeAnt AI</span></div>
          <h1 className="text-xl font-semibold mt-2">Welcome to CodeAnt AI</h1>
        </div>
        <div className="flex gap-2 mb-6">
          <button
            className={`w-1/2 py-2 rounded ${deploymentType === "saas" ? "bg-blue-500 text-white" : "border"}`}
            onClick={() => setDeploymentType("saas")}
          >
            SAAS
          </button>
          <button
            className={`w-1/2 py-2 rounded ${deploymentType === "self-hosted" ? "bg-blue-500 text-white" : "border"}`}
            onClick={() => setDeploymentType("self-hosted")}
          >
            Self Hosted
          </button>
        </div>
        <div className="space-y-3">
          {currentLoginOptions.map((option) => (
            <button
              key={option.name}
              className="w-full flex items-center px-4 py-2 border rounded hover:bg-gray-100"
              onClick={option.onClick}
            >
              <Image src={option.icon} alt="img" width={20} height={20} className="w-5 h-5 mr-2" />
              {option.name}
            </button>
          ))}
        </div>
        
      </div>
      <p className="text-center text-sm text-gray-500 mt-6">
          By signing up you agree to the{" "}
          <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
    </div>
  );
}
