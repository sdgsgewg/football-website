import { useNavigate } from "react-router-dom";
import useFixedNavbar from "../../hooks/useFixedNavbar";

export default function Header() {
  const navigate = useNavigate();

  useFixedNavbar();

  const renderLinks = () => {
    const links = [
      { url: "/nation/indonesia/men/players", text: "Indonesia" },
      { url: "/club/arsenal/men/players", text: "Arsenal" },
    ];

    return links.map((link) => (
      <li key={link.url}>
        <a href="#" onClick={() => navigate(`${link.url}`)}>
          {link.text}
        </a>
      </li>
    ));
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="flex flex-row items-center justify-between w-full relative px-8 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <div
            className="rounded-md shadow-md flex justify-center overflow-hidden"
            style={{ width: "100%", height: "30px" }}
          >
            <img
              src="/assets/img/teams.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <a href="" className="font-bold text-lg text-red-600 block ms-2">
            Teams
          </a>
        </div>

        {/* Navigation */}
        <div>
          <nav className="flex items-center">
            <ul className="flex gap-8">{renderLinks()}</ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
