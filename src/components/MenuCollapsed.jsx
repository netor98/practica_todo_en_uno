import { ArrowRightToLine, ArrowLeftToLine, Car, Earth, PlaneLanding, Users, PersonStanding, Film } from "lucide-react";
import { useState } from "react";
import MenuItem from "./MenuItem";

const menuItems = [
  { to: "/movies", icon: <Film color="white" />, text: "Peliculas" },
  { to: "/planets", icon: <Earth color="white" />, text: "Planetas" },
  { to: "/species", icon: <PersonStanding color="white" />, text: "Especies" },
  { to: "/airships", icon: <PlaneLanding color="white" />, text: "Naves" },
  { to: "/vehicles", icon: <Car color="white" />, text: "Vehiculos" },
  { to: "/characters", icon: <Users color="white" />, text: "Personajes" },
];

export default function MenuCollapsed() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={`h-screen bg-black text-white flex my-5 ml-5
      flex-col rounded-xl py-4 space-y-4 transition-all duration-200 ease-in-out
      ${isCollapsed ? "w-16 items-center px-2" : "w-60 items-start px-4"}`}>
      <div onClick={() => setIsCollapsed(!isCollapsed)}
        className="w-full h-10 rounded-full hover:bg-gray-300 transition-colors
        bg-white flex items-center justify-center cursor-pointer">
        {isCollapsed ?
          <ArrowRightToLine color="black" /> :
          <ArrowLeftToLine color="black" />}
      </div>

      {menuItems.map((item) => (
        <MenuItem
          key={item.to}
          to={item.to}
          icon={item.icon}
          text={item.text}
          isCollapsed={isCollapsed}
        />
      ))}
    </div>
  );
}
