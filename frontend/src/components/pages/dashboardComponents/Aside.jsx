import LogoDiv from "./LogoDiv";
import { NavBar } from "./NavBar";

function Aside() {
  return (
    <div className="w-1/4 sm:w-1/5  h-screen flex flex-col justify-start items-center !sticky !top-0 ">
      <LogoDiv/>
      <NavBar />
    </div>
  );
}

export default Aside;
