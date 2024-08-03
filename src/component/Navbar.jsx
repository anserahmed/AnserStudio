import React from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

function Navigation() {
  let navDialoge = document.getElementById("nav-dialoge");

  function handleMenu() {
    navDialoge.classList.toggle("hidden");
  }

  return (
    <>
      <section className=" bg-zinc-800 px-5 py-3 relative">
        <nav className="flex text-white justify-between items-center">
          <h1 className="text-4xl ">
            Anser <span className="text-red-500">Studio</span>
          </h1>

          <button id="menuToggle" className=" md:hidden text-xl " onClick={handleMenu}>
            <input id="checkbox" type="checkbox" />
            <label class="toggle" for="checkbox">
              <div class="bar bar--top"></div>
              <div class="bar bar--middle"></div>
              <div class="bar bar--bottom"></div>
            </label>
          </button>

          <button onClick={handleMenu}>
            <i class="ri-menu-line md:hidden text-xl"></i>
          </button>

          <div
            style={{ fontSize: "1rem" }}
            className="md:flex items-center hidden justify-between gap-7"
          >
            <Link to="/">
              <h4 className=" hover:text-red-400">Home</h4>
            </Link>
            <Link to="/about">
              <h4 className=" hover:text-red-400">About</h4>
            </Link>
            <Link to="/services">
              <h4 className=" hover:text-red-400">Services</h4>
            </Link>
            <Link to="/projects">
              <h4 className=" hover:text-red-400">Projects</h4>
            </Link>
            <Link to="/contact">
              <button className="contact-btn  px-3 py-1 ">
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="15"
                      height="15"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>
                  <h4>Contact</h4>
                </span>
              </button>
            </Link>
          </div>

          <div
            id="nav-dialoge"
            className="  sm-menu  bg-zinc-800 fixed hidden px-5 py-3  h-[100vh] w-[70vw] right-0 top-0"
          >
            <div className=" flex justify-between items-center">
              <h1 className="text-5xl ">
                A<span className="text-red-500">S</span>
              </h1>

              <button id="menuToggle" className=" md:hidden text-xl" onClick={handleMenu}>
                <input id="checkbox" type="checkbox" />
                <label class="toggle" for="checkbox">
                  <div class="bar bar--top"></div>
                  <div class="bar bar--middle"></div>
                  <div class="bar bar--bottom"></div>
                </label>
              </button>

              <button onClick={handleMenu}>
                <i class="ri-menu-line md:hidden text-xl"></i>
              </button>
            </div>
            <div className="mt-10 text-2xl px-3 gap-8">
              <Link to="/">
                <h4 className=" hover:text-red-400 py-6 ">Home</h4>
              </Link>
              <Link to="/about">
                <h4 className=" hover:text-red-400 py-6">About</h4>
              </Link>
              <Link to="/services">
                <h4 className=" hover:text-red-400 py-6">Services</h4>
              </Link>
              <Link to="/projects">
                <h4 className=" hover:text-red-400 py-6">Projects</h4>
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navigation;
