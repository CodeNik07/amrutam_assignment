import FBLogo from "../assets/FB.svg";
import InstaLogo from "../assets/Insta.svg";
import YTLogo from "../assets/YT.svg";
import XLogo from "../assets/X.svg";
import InLogo from "../assets/IN.svg";
import PinLogo from "../assets/Pin.svg";

export default function Contact() {
  return (
    <>
      <div className="hidden lg:flex w-full h-96 bg-[#dce3dc] justify-center items-center">
        <div className="flex flex-col justify-center items-start">
          <p className="font-semibold mb-2">Information</p>
          <p>About Us</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Privacy Policy for Mobile Apps</p>
          <p>Shipping and Returns Policy</p>
          <p>International Delivery</p>
          <p>For, Businesses, Hotels and Resorts</p>
        </div>
      </div>
      <div className="lg:hidden flex flex-col w-full h-fit bg-[#dce3dc] justify-center items-center py-12 text-lg gap-6">
        <div className="flex flex-col justify-center items-start">
          <h1 className="font-semibold">Get in touch</h1>
          <p>suport@amrutam.co.in</p>
          <p>
            Amrutam Pharmaceuticals Pvt Ltd., <br /> chitragupt ganj, Nai Sadak,
            Lashkar, <br /> Gwalior - 474001 +91 9713171999
          </p>
          <p>+91 9713171999</p>
        </div>
        <div className="flex gap-2">
          <img src={FBLogo} alt="" />
          <img src={InstaLogo} alt="" />
          <img src={YTLogo} alt="" />
          <img src={XLogo} alt="" />
          <img src={InLogo} alt="" />
          <img src={PinLogo} alt="" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <p className="font-semibold mb-2">Information</p>
          <p>About Us</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Privacy Policy for Mobile Apps</p>
          <p>Shipping and Returns Policy</p>
          <p>International Delivery</p>
          <p>For, Businesses, Hotels and Resorts</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full h-fit border-2 rounded-3xl overflow-hidden border-black">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 bg-[#dce3dc]"
            />
            <button className="bg-black text-white font-semibold px-4 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
