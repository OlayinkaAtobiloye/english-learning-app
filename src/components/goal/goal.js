import classes from "./goal.module.scss";
import { AiFillFire } from "react-icons/ai";

const Goal = () => {
  return (
    <section className={`${classes.goal}`}>
      <div>
        <p>Today's goal</p>
        <div className={`${classes.progress}`}>
          <progress value="70" min="0" max="100">
            70%
          </progress>
        </div>
      </div>
      <div>
        <p>Excellent!</p>
        <p>You're almost there.</p>
        <p>Finish the goal to achieve</p>
        <p>
          <AiFillFire /> 10
        </p>
      </div>
    </section>
  );
};

export default Goal;
