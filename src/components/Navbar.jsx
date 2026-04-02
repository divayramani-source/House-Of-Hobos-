import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/home", icon: "🏠" },
    { name: "Menu", path: "/menu", icon: "🍕" },
    { name: "Events", path: "/events", icon: "🎉" },
    { name: "Gallery", path: "/gallery", icon: "📸" },
    { name: "Our Story", path: "/story", icon: "✨" },
    { name: "Contact", path: "/contact", icon: "📍" },
    { name: "Franchise", path: "/franchise", icon: "🏪" },
    { name: "Community Love", path: "/community", icon: "💛" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center mt-4 px-4">
      
      {/* NAV CONTAINER */}
      <div className="flex flex-wrap items-center justify-center gap-3 bg-[#f5efe6]/90 backdrop-blur-md px-5 py-3 rounded-full shadow-xl border-2 border-[#2a0f3f]">

        {/* LOGO */}
        <div className="hidden md:flex items-center gap-2 font-bold text-[#2a0f3f] mr-4">
          ☮ <span>HOUSE OF <span className="text-orange-500">HOBOS</span></span>
        </div>

        {/* NAV ITEMS */}
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold
                transition-all duration-300
                border-2 border-[#2a0f3f]

                ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-purple-500 text-white scale-105 shadow-[0_0_0_3px_rgba(255,255,255,0.4),4px_4px_0_#2a0f3f]"
                    : "bg-[#f5efe6] text-[#2a0f3f] hover:scale-105 hover:bg-white hover:shadow-[4px_4px_0_#2a0f3f]"
                }
              `}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          );
        })}

        {/* CALL BUTTON */}
        <a
          href="tel:+919313132195"
          className="ml-2 px-6 py-2 rounded-full font-bold text-white 
          bg-orange-500 border-2 border-[#2a0f3f]
          shadow-[4px_4px_0_#2a0f3f]
          hover:scale-105 hover:bg-orange-600 transition-all duration-300"
        >
          📞 Call Us!
        </a>
      </div>
    </div>
  );
}