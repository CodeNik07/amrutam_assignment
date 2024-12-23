import StarLogo from "../assets/Star.svg";
import GirlLogo from "../assets/Girl.svg";

export default function Testimonial() {
  return (
    <>
      <div className="bg-[#fff7e2] w-full h-fit py-20 lg:py-0 lg:h-screen flex flex-col gap-8 justify-center items-center">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-semibold border-b-4 lg:border-green-500">
            Stories from our <br className="lg:hidden" /> valued customers!
          </h1>
        </div>
        <div className="flex gap-8 justify-center items-center overflow-auto w-full">
          <div className="w-80 flex-shrink-0 h-80 bg-white rounded-xl shadow-lg border overflow-hidden">
            <h1 className="w-full h-12 bg-[#ece7ff] p-3 font-semibold">
              Consulted for skin
            </h1>
            <div className="flex justify-center items-start gap-12 pt-6 pb-3">
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full bg-black"></div>
                <div>
                  <h1 className="font-semibold">Sophie Moore</h1>
                  <p className="text-sm">Chennai</p>
                </div>
              </div>
              <div className="align-text-top">
                <p className="text-sm">17/02/2024</p>
              </div>
            </div>
            <div className="flex px-6">
              <img src={StarLogo} alt="" />
              <img src={StarLogo} alt="" />
              <img src={StarLogo} alt="" />
              <img src={StarLogo} alt="" />
              <img src={StarLogo} alt="" />
            </div>
            <div className="px-3 pt-4">
              <h1 className="text-lg font-semibold">"One of a kind service"</h1>
              <p>
                Ultrices eros in cursus turpis massa tincidunt sem nulla
                pharetra diam sit amet nisl suscipit adipis.
              </p>
            </div>
          </div>
          <div className="w-80 flex-shrink-0 h-80 bg-white rounded-xl shadow-lg border overflow-hidden">
            <h1 className="w-full h-12 bg-[#ece7ff] p-3 font-semibold">
              Consulted for skin
            </h1>
            <div className="flex justify-center items-start gap-12 pt-6 pb-3">
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full bg-black"></div>
                <div>
                  <h1 className="font-semibold">Sophie Moore</h1>
                  <p className="text-sm">Chennai</p>
                </div>
              </div>
              <div className="align-text-top">
                <p className="text-sm">17/02/2024</p>
              </div>
            </div>
            <div className="flex px-6">
              <img src={StarLogo} alt="" />
              <img src={StarLogo} alt="" />
              <img src={StarLogo} alt="" />
              <img src={StarLogo} alt="" />
              <img src={StarLogo} alt="" />
            </div>
            <div className="px-3 pt-4">
              <h1 className="text-lg font-semibold">"One of a kind service"</h1>
              <p>
                Ultrices eros in cursus turpis massa tincidunt sem nulla
                pharetra diam sit amet nisl suscipit adipis.
              </p>
            </div>
          </div>
          <div className="w-80 flex-shrink-0 h-80 bg-white rounded-xl shadow-lg border overflow-hidden">
            <h1 className="w-full h-12 bg-[#ece7ff] p-3 font-semibold">
              Consulted for skin
            </h1>
            <div className="flex justify-center items-start gap-12 pt-6 pb-3">
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full bg-black"></div>
                <div>
                  <h1 className="font-semibold">Sophie Moore</h1>
                  <p className="text-sm">Chennai</p>
                </div>
              </div>
              <div className="align-text-top">
                <p className="text-sm">17/02/2024</p>
              </div>
            </div>
            <div className="flex px-6">
              <img src={StarLogo} alt="" />
              <img src={StarLogo} alt="" />
              <img src={StarLogo} alt="" />
              <img src={StarLogo} alt="" />
              <img src={StarLogo} alt="" />
            </div>
            <div className="px-3 pt-4">
              <h1 className="text-lg font-semibold">"One of a kind service"</h1>
              <p>
                Ultrices eros in cursus turpis massa tincidunt sem nulla
                pharetra diam sit amet nisl suscipit adipis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-12 bg-white w-full h-screen p-2">
        <div>
          <h1 className="text-3xl font-semibold border-b-4 border-green-500 text-center">
            Meet Our <br className="lg:hidden" /> Ayurveda Experts
          </h1>
        </div>
        <div className="flex justify-center items-center gap-8 px-6 w-full overflow-x-auto">
          <div className="w-64 flex-shrink-0 lg:w-fit h-fit bg-[#fff7e2] border-2 shadow-lg rounded-3xl flex flex-col justify-between overflow-hidden">
            <div className="p-4 flex flex-col gap-4">
              <div className="flex justify-center items-start w-full">
                <img src={GirlLogo} alt="" className="w-20 h-20 rounded-full" />
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex flex-col items-center">
                  <h1 className="text-lg font-semibold">Dr. Vaishali Sharma</h1>
                  <p className="text-sm text-gray-400">
                    Ayurveda Practitioner (BAMS, MD)
                  </p>
                  <p>25 years of experience</p>
                </div>
                <div className="px-4 py-2 bg-[#e7e5ce] rounded-3xl w-fit cursor-pointer">
                  <p className="text-sm">Skin Specialist</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#3a643b] p-2 text-center text-white">
              <h1 className="text-lg font-semibold">Book Session</h1>
            </div>
          </div>
          <div className="w-64 flex-shrink-0 lg:w-fit h-fit bg-[#fff7e2] border-2 shadow-lg rounded-3xl flex flex-col justify-between overflow-hidden">
            <div className="p-4 flex flex-col gap-4">
              <div className="flex justify-center items-start w-full">
                <img src={GirlLogo} alt="" className="w-20 h-20 rounded-full" />
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex flex-col items-center">
                  <h1 className="text-lg font-semibold">Dr. Vaishali Sharma</h1>
                  <p className="text-sm text-gray-400">
                    Ayurveda Practitioner (BAMS, MD)
                  </p>
                  <p>25 years of experience</p>
                </div>
                <div className="px-4 py-2 bg-[#e7e5ce] rounded-3xl w-fit cursor-pointer">
                  <p className="text-sm">Skin Specialist</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#3a643b] p-2 text-center text-white">
              <h1 className="text-lg font-semibold">Book Session</h1>
            </div>
          </div>
          <div className="w-64 flex-shrink-0 lg:w-fit h-fit bg-[#fff7e2] border-2 shadow-lg rounded-3xl flex flex-col justify-between overflow-hidden">
            <div className="p-4 flex flex-col gap-4">
              <div className="flex justify-center items-start w-full">
                <img src={GirlLogo} alt="" className="w-20 h-20 rounded-full" />
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex flex-col items-center">
                  <h1 className="text-lg font-semibold">Dr. Vaishali Sharma</h1>
                  <p className="text-sm text-gray-400">
                    Ayurveda Practitioner (BAMS, MD)
                  </p>
                  <p>25 years of experience</p>
                </div>
                <div className="px-4 py-2 bg-[#e7e5ce] rounded-3xl w-fit">
                  <p className="text-sm">Skin Specialist</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#3a643b] p-2 text-center text-white cursor-pointer">
              <h1 className="text-lg font-semibold">Book Session</h1>
            </div>
          </div>
          <div className="lg:hidden w-64 flex-shrink-0 lg:w-fit h-fit bg-[#fff7e2] border-2 shadow-lg rounded-3xl flex flex-col justify-between overflow-hidden">
            <div className="p-4 flex flex-col gap-4">
              <div className="flex justify-center items-start w-full">
                <img src={GirlLogo} alt="" className="w-20 h-20 rounded-full" />
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex flex-col items-center">
                  <h1 className="text-lg font-semibold">Dr. Vaishali Sharma</h1>
                  <p className="text-sm text-gray-400">
                    Ayurveda Practitioner (BAMS, MD)
                  </p>
                  <p>25 years of experience</p>
                </div>
                <div className="px-4 py-2 bg-[#e7e5ce] rounded-3xl w-fit">
                  <p className="text-sm">Skin Specialist</p>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#3a643b] p-2 text-center text-white cursor-pointer">
              <h1 className="text-lg font-semibold">Book Session</h1>
            </div>
          </div>
        </div>
        <div className="w-fit px-6 py-2 border-2 bg-[#f1f5f2] rounded-md">
          <h1 className="font-semibold text-gray-500">Find more experts </h1>
        </div>
      </div>
    </>
  );
}
