import IphoneLogo from "../assets/iPhone 13.svg";
import GplayLogo from "../assets/Gplay.svg";
import AppstoreLogo from "../assets/AppStore.svg";

export default function GetAndroid() {
  return (
    <>
      <div className="hidden lg:flex justify-center items-center w-full h-screen bg-[#fff7e2]">
        <div className="flex items-center w-4/5">
          <div className="w-3/4 flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl text-green-900 font-bold">
                Amrutam Home App
              </h1>
              <p className="text-sm">
                The Amrutam Home App is your one-stop app for all things
                Ayurveda! Apart from mimicking the significant characteristics
                of our website, this app offers a wide range of additional
                features.
              </p>
              <h2 className="text-3xl font-semibold">
                Get a diet & lifestyle consultation with ayurvedic experts
                across the globe
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="text-3xl font-bold">Get The App Now</h1>
              </div>
              <div className="flex gap-6">
                <img src={GplayLogo} alt="" className="w-60" />
                <img src={AppstoreLogo} alt="" className="w-60" />
              </div>
            </div>
          </div>
          <div className="relative top-40">
            <div className="relative z-10">
              <img src={IphoneLogo} alt="" className="z-50" />
            </div>
            <div className="bg-[#dfdfc7] w-44 h-44 rounded-full relative -top-96 left-24"></div>
            <div className="bg-[#dfdfc7] w-44 h-44 rounded-full relative -top-[350px] left-72"></div>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col justify-center items-center w-full h-fit gap-6 bg-[#fff7e2] px-6 text-center py-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-green-900 font-bold">
            Amrutam Home App
          </h1>
          <p className="text-sm">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
        </div>
        <div className="">
          <img src={IphoneLogo} alt="" className="" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-semibold">
          Get a diet & lifestyle consultation with ayurvedic experts across the
          globe
        </h2>

        <div>
          <h1 className="text-3xl font-bold">Get The App Now</h1>
        </div>

        <img src={GplayLogo} alt="" className="w-64" />
        <img src={AppstoreLogo} alt="" className="w-64" />
      </div>
    </>
  );
}
