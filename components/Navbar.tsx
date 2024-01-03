"use client"

import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar(): JSX.Element {
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    const navbarLinks = document.querySelectorAll("#navbar-links")

    navbarLinks.forEach((element) => {
      element.addEventListener("click", () => {
        setShow(false)
      })
    })
  })

  return (
    <>
      <nav className="p-3 bg-gray-900/70 backdrop-blur-lg fixed top-0 left-0 right-0 z-[100]">
        <div className="flex items-center justify-between gap-5 w-[98%] md:w-[70%] mx-auto">
          {/* Menu And Logo */}
          <div className="flex items-center gap-4 flex-row">
            {/* Brand */}
            <Link
              href="/"
              className="hidden md:block text-xl lg:text-2xl text-white font-semibold"
            >
              Fajri Fath
            </Link>
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="text-white md:hidden"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            {/* Brand */}

            {/* Links */}
            <div
              className={`absolute md:static top-0 ${
                show ? "left-0" : "-left-[1000px]"
              } ms-0 lg:ms-5 flex flex-col md:flex-row gap-4 items-start md:items-center bg-gray-800/90 md:bg-inherit w-[70%] md:w-auto border-r md:border-r-0 border-r-gray-600 h-screen md:h-auto p-4 md:p-0 transition-all duration-300 ease-in-out filter backdrop-blur-lg`}
            >
              <div className="md:hidden flex items-center justify-between w-full mb-5">
                <Link
                  href="/"
                  className="text-xl lg:text-2xl text-white font-semibold"
                >
                  Fajri Fath
                </Link>
                <button type="button" onClick={() => setShow(!show)}>
                  <FontAwesomeIcon
                    className="text-white"
                    icon={faX}
                    size="2x"
                  />
                </button>
              </div>
              <Link
                id="navbar-links"
                href={"/"}
                className="text-md text-gray-500 hover:bg-gray-400/40 hover:text-gray-300 px-2 py-1 rounded-full w-full md:w-auto"
              >
                Home
              </Link>
              <Link
                id="navbar-links"
                href={"/about"}
                className="text-md text-gray-500 hover:bg-gray-400/40 hover:text-gray-300 px-2 py-1 rounded-full w-full md:w-auto"
              >
                About
              </Link>
              <Link
                id="navbar-links"
                href={"/"}
                className="text-md text-gray-500 hover:bg-gray-400/40 hover:text-gray-300 px-2 py-1 rounded-full w-full md:w-auto"
              >
                Posts
              </Link>
              <Link
                id="navbar-links"
                href={"/projects"}
                className="text-md text-gray-500 hover:bg-gray-400/40 hover:text-gray-300 px-2 py-1 rounded-full w-full md:w-auto"
              >
                Projects
              </Link>
            </div>
            {/* Links */}
          </div>
          {/* Menu And Logo */}

          {/* Button */}
          <div className="flex items-center gap-4 flex-row">
            <Link
              href="https://github.com/aZ4ziL"
              target="_blank"
              legacyBehavior
            >
              <button type="button" className="text-white text-2xl">
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </Link>
          </div>
          {/* Button */}
        </div>
      </nav>
    </>
  )
}
