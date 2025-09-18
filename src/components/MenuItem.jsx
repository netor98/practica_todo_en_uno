import { NavLink } from 'react-router';

export default function MenuItem({ to, icon, text, isCollapsed }) {
  return (
    <div className="w-full rounded-lg flex items-center justify-start">
      <NavLink
        to={to}
        className={({ isActive }) =>
          `w-full h-10 rounded-lg flex items-center
          justify-center hover:bg-gray-500 cursor-pointer transition-colors
          ${isActive ? 'bg-gray-700' : ''}
          ${isCollapsed ? 'justify-center' : 'justify-start px-4'}`
        }
      >
        {icon}
        {!isCollapsed && <span className="text-white ml-2">{text}</span>}
      </NavLink>
    </div>
  );
}

