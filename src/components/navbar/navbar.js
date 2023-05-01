import classes from "./navbar.module.scss";
import {
  MdHomeFilled,
  MdLeaderboard,
  MdSettings,
  MdGroup,
} from "react-icons/md";
import { useLocation, Link } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();
  const menuItems = [
    {
      name: "Home",
      icon: <MdHomeFilled />,
      link: "/",
    },
    {
      name: "Stat",
      icon: <MdLeaderboard />,
      link: "/stat",
    },
    {
      name: "Team",
      icon: <MdGroup />,
      link: "/team",
    },
    {
      name: "Setting",
      icon: <MdSettings />,
      link: "/setting",
    },
  ];

  return (
    <nav class={`${classes.mobile_bar} container`}>
      <div class={`${classes.bar_icon}`}>
        {menuItems.map(({ name, icon, link }, index) => (
          <Link
            to={link}
            key={`${name}-${index}`}
            className={`${pathname === link ? classes.active_nav : ""}`}
          >
            {icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};
