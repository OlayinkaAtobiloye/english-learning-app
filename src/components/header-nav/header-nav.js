import classes from "./header-nav.module.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HeaderNav = (props) => {
  return (
    <div className={`${classes.headerNav}`}>
      <p>{props.children}</p>
      {props.children.toLowerCase() !== "skill" && (
        <div className={classes.arrow}>
          <MdOutlineKeyboardArrowRight />
        </div>
      )}
    </div>
  );
};

export default HeaderNav;
