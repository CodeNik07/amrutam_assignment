import YogaLogo from "../assets/yoga.svg";
import ChakraLogo from "../assets/Chakra.svg";
import HeartLogo from "../assets/heartbeat.svg";
import RibbionLogo from "../assets/ribbon.svg";
import LotusLogo from "../assets/lotus-position.svg";
import ProtectionLogo from "../assets/protection.svg";
import AyurvedaLogo from "../assets/ayurveda.svg";
import StrongLogo from "../assets/strong.svg";
import PeopleLogo from "../assets/People.svg";
import PeopleLogo1 from "../assets/People1.svg";
import PeopleLogo2 from "../assets/People2.svg";
import BG01 from "../assets/Bg01.svg";
import BG01V from "../assets/BG01V.svg";

export default function About() {
  return (
    <>
      <div className="w-full h-fit flex-col justify-center items-center lg:py-10">
        <div className="flex flex-col items-center text-center w-full gap-3 mt-8 mb-8 lg:justify-center">
          <h2 className="text-3xl font-semibold capitalize">
            Discover Ayurveda's <br className="lg:hidden" /> magic with us
          </h2>
          <p className="w-4/5 lg:w-1/3 lg:text-sm">
            Ayurvedic treatment aims to balance your body and mind, bringing
            harmony and vitality. It's like a journey to better health using
            ancient wisdom, a totally effective approach for a better life.
          </p>
        </div>
        <div className="flex justify-center">
          <div>
            <img src={ChakraLogo} alt="" className="w-72 lg:w-96" />
            <img
              src={YogaLogo}
              alt=""
              className="absolute top-[1340px] left-[50px] w-64 lg:top-[950px] lg:left-[480px] lg:w-96"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 px-4 lg:hidden">
          <div className="flex flex-col w-fit gap-1 items-center text-center border-2 rounded-lg shadow-lg py-6 px-3">
            <div className="bg-[#edf5fa] rounded-full w-fit h-fit p-4 flex justify-center items-center">
              <img src={HeartLogo} alt="" className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Personalized Wellness</h3>
              <p className="text-xs">
                Get treatments made just for you based on your individual doshas
                ( body type)
              </p>
            </div>
          </div>
          <div className="flex flex-col w-fit gap-1 items-center text-center border-2 rounded-lg shadow-lg py-6 px-3">
          <div className="bg-[#eaf2ea] rounded-full w-fit h-fit p-4 flex justify-center items-center">
              <img src={RibbionLogo} alt="" className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Focus on prevention</h3>
              <p className="text-xs">Stop problems even before they start.</p>
            </div>
            
          </div>
          <div className="flex flex-col w-fit gap-1 items-center text-center border-2 rounded-lg shadow-lg py-6 px-3">
          <div className="bg-[#fcf1f1] rounded-full w-fit h-fit p-4 flex justify-center items-center">
              <img src={LotusLogo} alt="" className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Mind-Body Connection</h3>
              <p className="text-sm"></p>
              <p className="text-xs">
                Keep your mind and body in sync for a happy life.
              </p>
            </div>
            
          </div>
          <div className="flex flex-col w-fit gap-1 items-center text-center border-2 rounded-lg shadow-lg py-6 px-3">
            <div className="bg-[#f5f3fc] rounded-full w-fit h-fit p-4 flex justify-center items-center">
              <img src={ProtectionLogo} alt="" className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Holistic Healing</h3>
              <p className="text-xs">
                Fix the root problem for long-lasting health.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-fit gap-1 items-center text-center border-2 rounded-lg shadow-lg py-6 px-3">
            <div className="bg-[#f5f3fc] rounded-full w-fit h-fit p-4 flex justify-center items-center">
              <img src={AyurvedaLogo} alt="" className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Natural Remedies</h3>
              <p className="text-xs">
                Using herbs and natural therapies for healing.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-fit gap-1 items-center text-center border-2 rounded-lg shadow-lg py-6 px-3">
            <div className="bg-[#eaf2ea] rounded-full w-fit h-fit p-4 flex justify-center items-center">
              <img src={StrongLogo} alt="" className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Boosting immunity</h3>
              <p className="text-xs">
                Stay strong and healthy for life, not just for today.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex gap-3 justify-center items-center text-end w-[400px] p-4 lg:absolute lg:top-[900px] lg:left-[90px]">
          <div>
            <h3 className="text-lg font-semibold">Personalized Wellness</h3>
            <p className="text-sm">
              Get treatments made just for you based on your individual doshas (
              body type)
            </p>
          </div>
          <div className="bg-[#edf5fa] rounded-full w-fit h-fit p-4 flex justify-center items-center">
            <img src={HeartLogo} alt="" className="w-20 h-10" />
          </div>
        </div>
        <div className="hidden lg:flex gap-3 justify-center items-center text-end w-[400px] p-4 lg:absolute lg:top-[1020px] lg:left-[40px]">
          <div>
            <h3 className="text-lg font-semibold">Focus on prevention</h3>
            <p className="text-sm">Stop problems even before they start.</p>
          </div>
          <div className="bg-[#eaf2ea] rounded-full w-fit h-fit p-4 flex justify-center items-center">
            <img src={RibbionLogo} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="hidden lg:flex gap-3 justify-center items-center text-end w-[400px] p-4 lg:absolute lg:top-[1180px] lg:left-[90px]">
          <div>
            <h3 className="text-lg font-semibold">Mind-Body Connection</h3>
            <p className="text-sm"></p>
            <p className="text-sm">
              Keep your mind and body in sync for a happy life.
            </p>
          </div>
          <div className="bg-[#fcf1f1] rounded-full w-fit h-fit p-4 flex justify-center items-center">
            <img src={LotusLogo} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="hidden lg:flex gap-3 justify-center items-center text-start w-[400px] p-4 lg:absolute lg:top-[900px] lg:left-[850px]">
          <div className="bg-[#f5f3fc] rounded-full w-fit h-fit p-4 flex justify-center items-center">
            <img src={ProtectionLogo} alt="" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Holistic Healing</h3>
            <p className="text-sm"></p>
            <p className="text-sm">
              Fix the root problem for long-lasting health.
            </p>
          </div>
        </div>
        <div className="hidden lg:flex gap-3 justify-center items-center text-start w-[400px] p-4 lg:absolute lg:top-[1040px] lg:-right-[0px]">
          <div className="bg-[#f5f3fc] rounded-full w-fit h-fit p-4 flex justify-center items-center">
            <img src={AyurvedaLogo} alt="" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Natural Remedies</h3>
            <p className="text-sm"></p>
            <p className="text-sm">
              Using herbs and natural therapies for healing.
            </p>
          </div>
        </div>
        <div className="hidden lg:flex gap-3 justify-center items-center text-start w-[400px] p-4 lg:absolute lg:top-[1180px] lg:left-[850px]">
          <div className="bg-[#eaf2ea] rounded-full w-fit h-fit p-4 flex justify-center items-center">
            <img src={StrongLogo} alt="" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Boosting immunity</h3>
            <p className="text-sm"></p>
            <p className="text-sm">
              Stay strong and healthy for life, not just for today.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-16 bg-[#fff7e3]">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold border-b-2 border-green-500">
            What sets Ayurvedic <br className="lg:hidden"/> consultations apart?
          </h1>
        </div>
        <div className="flex flex-col mt-10 gap-4 w-4/5">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="w-full lg:w-[500px] h-56 rounded-lg border-green-500 border-t-4 bg-white shadow-md flex flex-col justify-center items-center text-center px-4 gap-2">
              <h1 className="text-xl lg:text-3xl">
                स्वस्थस्य स्वास्थ्य रक्षणं, <br /> आतुरस्य विकार प्रशमनं ।"
              </h1>
              <p className="text-sm">
                [ Meaning: The Goal of Ayurveda is to maintain the health of a
                healthy person and to cure the disease of a <br /> diseased
                person. ]
              </p>
            </div>
            <div className="w-fit h-fit">
              <img src={PeopleLogo} alt="" className="w-full h-60" />
            </div>
            <div className="w-full lg:w-[270px] h-56 rounded-lg border-green-500 border-t-4 bg-white shadow-md px-8 flex flex-col gap-4 justify-center items-start text-start">
              <h1 className="text-2xl font-semibold">Precise Diagnosis</h1>
              <p className="text-sm">
                Ayurveda's core principles revolve around Vata, Pitta, and Kapha
                doshas, guiding you with precise diagnosis and treatment.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-1">
            <div className="w-full lg:w-[300px] h-60 rounded-lg border-green-500 border-t-4 bg-white shadow-md flex flex-col justify-center items-start gap-4 px-6">
              <h1 className="text-2xl font-semibold ">Zero side-effects</h1>
              <p>
                Ayurvedic treatments are devoid of chemicals, and are based
                completely on natural herbs 
              </p>
            </div>
            <div className="">
              <img src={PeopleLogo1} alt="" className="h-full lg:w-80 lg:h-64" />
            </div>
            <div className="w-full lg:w-[330px] h-60 rounded-lg border-green-500 border-t-4 bg-white shadow-md flex flex-col justify-center items-start gap-4 px-6">
              <h1 className="text-2xl font-semibold ">Individual Treatment</h1>
              <p>
                All Treatments are personalized based on a person's unique
                constitution and health concerns.
              </p>
            </div>
            <div className="">
              <img src={PeopleLogo2} alt="" className="h-full lg:w-80 lg:h-64" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit lg:h-fit">
        <img src={BG01V} alt="" className="w-full h-full brightness-50 lg:hidden"/>
        <img src={BG01} alt="" className="hidden lg:block h-full brightness-50" />
        <div className="w-full h-[550px] flex flex-col justify-center items-center gap-12 absolute top-[4460px] lg:top-[2050px]">
          <h1 className="w-4/5 lg:w-1/2 text-center leading-normal text-3xl lg:text-5xl font-semibold text-white">
            Ready to restore harmony in your mind, body and spirit?
          </h1>
          <button className="bg-[#335f34] px-4 py-2 rounded-lg font-semibold text-white">
            Book a consultation
          </button>
        </div>
      </div>
    </>
  );
}
