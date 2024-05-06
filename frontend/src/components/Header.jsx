import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center px-5 py-2 border-gray-400 border-b-2">
        <Link className="flex items-center gap-3" to={"/"}>
          <img width={80} src="/logo.png" alt="" />
          <span className="font-bold text-3xl max-sm:hidden">Filmolog</span>
        </Link>

        <Link
          to={"/create"}
          className=" transition border rounded-full px-5 py-1 hover:bg-black hover:text-white"
        >
          Film Olustur
        </Link>
      </header>
    </div>
  );
};

export default Header;
