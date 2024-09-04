import Product from "../products/Product";
import "./Home.css";
import "../index.css";

import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="border-2 h-auto w-90 md:m-10 m-3 rounded-3xl bg">
        <div className="flex md:flex-row flex-col md:gap-80 text-white ">
          <div data-aos="fade-right">
            <div className="mt-32 ml-12">
              <h1 className="text-white font-extrabold text-3xl ">
                Elevate Your Audio Journey
              </h1>

              <h4 className="mt-2">Experience Sound in Its Purest Form</h4>
              <button className=" bg-blue-700 p-3 shadow  shadow-white mt-4 rounded">
                Shop Now
              </button>
              <span className=" hover:blur-0 font-bold ml-5">Learn More</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="ml-16">
              <img
                src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6494062b71fbb5f238835e71_Hero.png"
                alt=""
                className="w-80  sm:justify-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center m-16 text-black font-extrabold">
        Featured Products
      </div>
      <div data-aos="fade-down">
        <Product />
      </div>

      <div className="text-center mt-5">
        <button className="rounded border bg-blue-700 text-white p-3 font-bold shadow">
          See All Products
        </button>
      </div>
      <div className="m-3 grid md:grid-cols-2 md:gap-96 mt-20  mb-6 ">
        <div>
          <h1 className=" font-extrabold">Shop by Category</h1>
        </div>
        <div className="md:ml-80  flex md:flex-row ">
          <span className="border p-3 rounded-2xl">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406de541fde473a24c071_Right%20Arrow.svg"
              alt=""
              className=" font-bold"
            />
          </span>
          <span className="ml-6 p-3 border rounded-2xl">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406de541fde473a24c071_Right%20Arrow.svg"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="mest md:m-10 m-3 ">
        <br />
        <br />
        <h1 className="text-center font-extrabold text-xl mb-16 ">
          Experience Streamlined Shopping with Crescendo
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-4  md:m-4 ">
          <div className=" grid place-items-center">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/64940686533aff4831e31f5d_Delivery.svg"
              alt=""
              className="items-center"
            />
            <div className="text-center mt-3">
              <h1 className="font-bold mb-3">Free Delivery</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                hendrerit purus quis quam.
              </span>
            </div>
          </div>
          <div className=" grid place-items-center 8">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/64940686d729c189eba5410a_Pickup.svg"
              alt=""
            />

            <div className="text-center mt-3">
              <h1 className="font-bold mb-3">Free Delivery</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                hendrerit purus quis quam.
              </span>
            </div>
          </div>
          <div className=" grid place-items-center  ">
            <img
              src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/649406867a1a98426b15ac8d_Warranty.svg"
              alt=""
              className=""
            />
            <div className="text-center mt-3">
              <h1 className="font-bold mb-3">Free Delivery</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                hendrerit purus quis quam.
              </span>
            </div>
          </div>
        </div>
        <div className="text-center  m-16">
          <button className="bg-blue-600 text-white px-4 py-3 rounded font-bold shadow">
            Shop
          </button>
        </div>
        <br />
      </div>

      <h1 className=" font-extrabold text-center m-10">Why Crescendo?</h1>

      <div className="grid md:grid-cols-3 grid-cols-3 md:m-10 m-3">
        <div>
          <h1 className="font-bold mb-4">Exceptional Sound Quality</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            varius commodo aliquam.
          </span>

          <div className="md:mt-20 mt-20">
            <h1 className="font-bold md:mb-4">Exceptional Sound Quality</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              varius commodo aliquam.
            </span>
          </div>
        </div>

        <div className="sm:text-center md:mt-10 mt-32">
          <img
            src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/64940630379efe9643f2220a_Earbuds.png"
            alt=""
            className="md:w-56 md:ml-10"
          />
        </div>
        <div>
          <h1 className="font-bold mb-4">Innovative Design</h1>
          <span>
            Mauris laoreet congue ipsum at ultricies. Phasellus mattis dictum
            neque, vel sagittis odio pellentesque at.
          </span>
          <div className="mt-20">
            <h1 className="font-bold mb-4">Exceptional Sound Quality</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              varius commodo aliquam.
            </span>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className=" bg-blue-700 p-3 shadow  shadow-white mt-4 rounded text-white">
          Shop Now
        </button>
        <span className=" hover:blur-0 font-bold ml-5">Learn More</span>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1  md:m-10 m-3 border shadow bg-white  rounded-2xl">
        <div>
          <img
            src="https://assets-global.website-files.com/6493dcfff5da93a7486cd781/6494063738783c5b3be71fae_Subscribe.jpg"
            alt=""
            className="md:rounded-l-2xl sm:rounded-s-2xl  h-auto md:w-10/12 w-full"
          />
        </div>
        <div className="m-4">
          <h1 className="font-extrabold md:mt-36">Join Our List Today!</h1>
          <span className="text-slate-400">Be the first to know</span>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-2">
            <div className="flex md:flex-row gap-3">
              <img
                src="https://cdn.prod.website-files.com/6493dcfff5da93a7486cd781/649406b10bee68e0b82f1c69_Check.svg"
                alt=""
              />
              Limited edition products
            </div>
            <div className="flex md:flex-row gap-3">
              <img
                src="https://cdn.prod.website-files.com/6493dcfff5da93a7486cd781/649406b10bee68e0b82f1c69_Check.svg"
                alt=""
              />
              Special offers
            </div>
            <div className="flex md:flex-row gap-3">
              <img
                src="https://cdn.prod.website-files.com/6493dcfff5da93a7486cd781/649406b10bee68e0b82f1c69_Check.svg"
                alt=""
              />
              Exclusive contents
            </div>
            <div className="flex md:flex-row gap-3">
              <img
                src="https://cdn.prod.website-files.com/6493dcfff5da93a7486cd781/649406b10bee68e0b82f1c69_Check.svg"
                alt=""
              />
              No spams!
            </div>
          </div>
          <input
            type="text"
            name=""
            id=""
            className="border mt-4 p-3 rounded shadow-sm w-96"
            placeholder="your Email"
          />
          <br />
          <button className="bg-blue-700 p-3 shadow  shadow-white mt-4 rounded text-white font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
