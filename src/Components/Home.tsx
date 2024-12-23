import HomeLogo from "../assets/home.svg";
import ChatLogo from "../assets/chat-logo.svg";
import ShieldLogo from "../assets/shield.svg";
import DoctorLogo from "../assets/doctor.svg";
import PrescreptionLogo from "../assets/prescription.svg";
import BG02 from "../assets/BG02.svg";

export default function Home() {
  return (
    <>
      <div className="h-fit w-screen lg:bg-gradient-to-r lg:from-black lg:to-red-200 lg:flex lg:overflow-hidden">
        <div className="lg:bg-[#310a0a] lg:w-1/2 lg:z-20">
          <div className="w-fit h-fit z-20 absolute top-44 left-4 px-4 xl:top-32 lg:top-28 lg:flex lg:flex-col gap-4">
            <p className="text-gray-200 text-sm mb-4">
              Namaste, Welcome to Amrutam
            </p>
            <h2 className="hidden text-white font-semibold lg:block lg:text-4xl">
              Step into Holistic Healing with <u>Ayurveda</u><br /> Book Consultation
              with certified Experts.
            </h2>
            <h2 className="lg:hidden text-2xl text-white font-semibold mb-4">
              Step into Holistic Healing <br /> with <u>Ayurveda</u> <br /> Book Consultation
              with <br /> certified Experts.
            </h2>
            <p className="text-gray-200 text-sm mb-10">
              Dive into the world of ayurveda and Experience Personalized Health
              Solutions and Holistic <br /> Guidance from Trusted Ayurvedic Doctors <br className="lg:hidden" />
              Anytime, anywhere.
            </p>
            <button className="bg-[#346540] text-white w-fit py-2 px-4 font-semibold rounded-md">
              BOOK AN APPOINMENT
            </button>
          </div>
        </div>
        <div className="w-fit bg-gradient-to-r from-black to-transparent hidden lg:block xl:block">
          <img src={HomeLogo} alt="" className="w-full h-full opacity-45" />
        </div>
        <div className="lg:hidden">
          <img src={BG02} alt="" className="w-full h-full brightness-50" />
        </div>
      </div>
      <div className="w-full h-fit flex flex-col items-center gap-6 py-12 bg-[#fff7e2] lg:p-4 lg:h-fit lg:flex-row lg:text-sm lg:gap-6">
        <div className="flex items-center w-full gap-4 px-6">
          <div className="border rounded-full w-fit h-fit p-3 border-black">
            <img src={ChatLogo} alt="" className="w-12" />
          </div>
          <div>
            <p className="font-semibold">convenient online & In-clinic consultations</p>
          </div>
        </div>
        <div className="flex items-center w-full gap-4 px-6">
          <div className="border rounded-full w-fit h-fit p-2 border-black">
            <img src={ShieldLogo} alt="" className="w-12 h-12" />
          </div>
          <div>
            <p className="font-semibold">Safe and effective treatment</p>
          </div>
        </div>
        <div className="flex items-center w-full gap-4 px-6">
          <div className="border rounded-full w-fit h-fit p-2 border-black">
            <img src={DoctorLogo} alt="" className="w-12 h-12" />
          </div>
          <div>
            <p className="font-semibold">Experienced Ayurvedic Practitioners</p>
          </div>
        </div>
        <div className="flex items-center w-full gap-4 px-6">
          <div className="border rounded-full w-fit h-fit p-3 border-black">
            <img src={PrescreptionLogo} alt="" className="w-12" />
          </div>
          <div>
            <p className="font-semibold">convenient online & In-clinic consultations</p>
          </div>
        </div>
      </div>
    </>
  );
}



