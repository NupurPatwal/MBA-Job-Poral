
import Image from "next/image";
"use client";
import Image from "next/image";
iimport { useState } from "react";
import Image from "next/image";
iimport { Switch } from "@headlessui/react";
import Image from "next/image";

import Image from "next/image";
const GeneralSettings = () => {
import Image from "next/image";
  const [allowNewAccounts, setAllowNewAccounts] = useState(false);
import Image from "next/image";
  const [allowResetPassword, setAllowResetPassword] = useState(false);
import Image from "next/image";
  const [gracePeriod, setGracePeriod] = useState(30);
import Image from "next/image";

import Image from "next/image";
  return (
import Image from "next/image";
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center p-4">
import Image from "next/image";
      <div className="w-full h-full max-w-6xl bg-white shadow-lg rounded-lg p-6 md:p-8 overflow-auto">
import Image from "next/image";
        {/* Heading */}
import Image from "next/image";
        <h2 className="text-center text-3xl font-bold mb-4 text-gray-900">
import Image from "next/image";
          General Settings
import Image from "next/image";
        </h2>
import Image from "next/image";

import Image from "next/image";
        {/* Account Restrictions Section */}
import Image from "next/image";
        <div className="space-y-4">
import Image from "next/image";
          <div>
import Image from "next/image";
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
import Image from "next/image";
              Account Restrictions:
import Image from "next/image";
            </h3>
import Image from "next/image";

import Image from "next/image";
            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm">
import Image from "next/image";
              <div className="mb-2 md:mb-0">
import Image from "next/image";
                <p className="font-semibold text-gray-900">Allow creating new accounts</p>
import Image from "next/image";
                <p className="text-gray-700 text-sm">
import Image from "next/image";
                  By default, any user visiting your domain can sign up for a new account.
import Image from "next/image";
                </p>
import Image from "next/image";
              </div>
import Image from "next/image";
              <Switch
import Image from "next/image";
                checked={allowNewAccounts}
import Image from "next/image";
                onChange={setAllowNewAccounts}
import Image from "next/image";
                className={`${allowNewAccounts ? "bg-teal-600" : "bg-gray-300"}
import Image from "next/image";
                  relative inline-flex h-6 w-11 items-center rounded-full transition duration-300`}
import Image from "next/image";
              >
import Image from "next/image";
                <span
import Image from "next/image";
                  className={`${allowNewAccounts ? "translate-x-6" : "translate-x-1"}
import Image from "next/image";
                    inline-block h-4 w-4 transform bg-white rounded-full transition duration-300`}
import Image from "next/image";
                />
import Image from "next/image";
              </Switch>
import Image from "next/image";
            </div>
import Image from "next/image";

import Image from "next/image";
            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm mt-2">
import Image from "next/image";
              <div className="mb-2 md:mb-0">
import Image from "next/image";
                <p className="font-semibold text-gray-900">Allow resetting password</p>
import Image from "next/image";
                <p className="text-gray-700 text-sm">
import Image from "next/image";
                  By default, users can reset their passwords.
import Image from "next/image";
                </p>
import Image from "next/image";
              </div>
import Image from "next/image";
              <Switch
import Image from "next/image";
                checked={allowResetPassword}
import Image from "next/image";
                onChange={setAllowResetPassword}
import Image from "next/image";
                className={`${allowResetPassword ? "bg-teal-600" : "bg-gray-300"}
import Image from "next/image";
                  relative inline-flex h-6 w-11 items-center rounded-full transition duration-300`}
import Image from "next/image";
              >
import Image from "next/image";
                <span
import Image from "next/image";
                  className={`${allowResetPassword ? "translate-x-6" : "translate-x-1"}
import Image from "next/image";
                    inline-block h-4 w-4 transform bg-white rounded-full transition duration-300`}
import Image from "next/image";
                />
import Image from "next/image";
              </Switch>
import Image from "next/image";
            </div>
import Image from "next/image";
          </div>
import Image from "next/image";

import Image from "next/image";
          <hr className="border-gray-300" />
import Image from "next/image";

import Image from "next/image";
          {/* User Deletion Section */}
import Image from "next/image";
          <div>
import Image from "next/image";
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
import Image from "next/image";
              User Deletion:
import Image from "next/image";
            </h3>
import Image from "next/image";

import Image from "next/image";
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between">
import Image from "next/image";
              <div>
import Image from "next/image";
                <p className="font-semibold text-gray-900">User deletion grace delay</p>
import Image from "next/image";
                <p className="text-gray-700 text-sm">
import Image from "next/image";
                  The default grace delay period is 30 days. Instance Admins can adjust this period in the User deletion section.
import Image from "next/image";
                </p>
import Image from "next/image";
              </div>
import Image from "next/image";
              <input
import Image from "next/image";
                type="number"
import Image from "next/image";
                value={gracePeriod}
import Image from "next/image";
                onChange={(e) => setGracePeriod(e.target.value)}
import Image from "next/image";
                className="mt-2 md:mt-0 p-3 w-20 text-center bg-gray-200 rounded-lg outline-none text-gray-900 font-semibold border border-gray-400"
import Image from "next/image";
                min="1"
import Image from "next/image";
              />
import Image from "next/image";
            </div>
import Image from "next/image";
          </div>
import Image from "next/image";
        </div>
import Image from "next/image";
      </div>
import Image from "next/image";
    </div>
import Image from "next/image";
  );
import Image from "next/image";
};
import Image from "next/image";

import Image from "next/image";
export default GeneralSettings;