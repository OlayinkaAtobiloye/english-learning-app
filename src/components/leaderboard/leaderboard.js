// import { ProfileImage } from "../../../public/images/Olayinka Atobiloye.jpeg";
import { AiOutlineArrowUp, AiFillFire } from "react-icons/ai";
import classes from "./leaderboard.module.scss";

const Leaderboard = () => {
  return (
    <div className={`${classes.leaderboard}`}>
      <img src="/images/Olayinka Atobiloye.jpeg" />

      <div>
        <p>Yasmine Lee</p>
        <p>Taiwan</p>
      </div>

      <div>
        <span>
          <AiOutlineArrowUp />
        </span>
        <p>
          <AiFillFire /> <span>1230</span>
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;
