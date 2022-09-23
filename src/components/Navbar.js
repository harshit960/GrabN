import "../App.css";
import { Fragment, useState } from "react";
import React from "react";

import { Popover, Transition } from "@headlessui/react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const solutions = [
  {
    name: "Home",
    description: "Homepage.",
    href: "/",
    icon: ChartBarIcon,
  },
  {
    name: "About",
    description: "About page.",
    href: "About",
    icon: CursorArrowRaysIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [Searcha, setSearch] = useState(
    " w-screen h-screen hidden top-0 justify-center backdrop-blur-3xl backdrop-brightness-150 fixed"
  );
    const [searchQuery, setsearchQuery] = useState('')
  return (
    <div>
      <Popover className="w-full fixed h-16 backdrop-blur-3xl backdrop-brightness-125">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 border-b-2 border-gray-200">
          <div className="flex items-center justify-between  py-4 md:justify-start md:space-x-5  md:py-1">
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
            </div>

            <Popover.Group
              as="nav"
              className="hidden justify-end space-x-5 md:flex "
            >
              <Link
                to="/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/About"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
            </Popover.Group>

            <div className="flex justify-end lg:w-0 lg:flex-1">
              <button
                onClick={() =>
                  setSearch(
                    " w-screen h-screen fixed top-0 justify-center backdrop-blur-3xl backdrop-brightness-150 "
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    className="text-gray-500 "
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-0 transition bg-white backdrop-blur-3xl backdrop-brightness-125 w-full h-screen md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 mx-0 my-0 backdrop-blur-3xl backdrop-brightness-125 w-full h-screen shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Docs
                  </a>
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <div>
        <div className={Searcha}>
          <form>
          <div class="flex justify-center w-full bg-white h-14 pt-1">
            <div class="input-group relative flex flex-wrap backdrop-blur-3xl backdrop-brightness-125 items-stretch w-full mb-0 border-b-2 border-gray-300">
              <button
                class="btn inline-block pl-4 py-2 border-0 text-grey-600 font-medium text-xs leading-tight uppercase "
                type="button"
                id="button-addon3"
                onClick={() =>
                  setSearch(
                    "w-screen h-screen hidden top-0 justify-center backdrop-blur-3xl backdrop-brightness-150 fixed"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block px-2 py-1.5 text-base font-normal text-gray-400 bg-white bg-clip-padding   transition ease-in-out m-0 focus:text-gray-600 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
                onChange={event => setsearchQuery(event.target.value)}
              />
              <Link to={'/Search/'+searchQuery} >
              
              <button
                class="btn inline-block px-4  py-2  border-0  font-medium text-xs leading-tight uppercase text-grey-600 "
                type="submit"
                id="button-addon3"
                onClick={() =>
                  setSearch(
                    "w-screen h-screen hidden top-0 justify-center backdrop-blur-3xl backdrop-brightness-150 fixed"
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
              </Link>
            </div>
          </div></form>
        </div>
      </div>
    </div>
  );
}
