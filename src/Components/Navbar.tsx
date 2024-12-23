import HamburgerLogo from "../assets/Hamburger.svg"

export default function Navbar() {
  return (
    <div className="w-full flex items-center p-4 text-center lg:text-start lg:justify-between">
      <div className="float-start lg:hidden">
        <img src={HamburgerLogo} alt="" />
      </div>
      <div className="w-full">
        <h2 className="tracking-[.25em] font-semibold text-[#346540]">
          AMRUTAM
        </h2>
      </div>
    </div>
  );
}
