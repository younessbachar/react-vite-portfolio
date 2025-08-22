import Logo from "./Subheadercomponent/Logo";
import Navbar from "./Subheadercomponent/Navbar";

const Header = () => {
  return (
    <div className="w-full bg-[#1f1f3f]/30 backdrop-blur-[5px] z-40 shadow-lg fixed top-0">
      <header className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo */}
        <Logo />
        {/* Navbar */}
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
