import { AiTwotoneFire } from "react-icons/ai";
import classes from "./welcome.module.scss";

const Welcome = () => {
  return (
    <div className={`${classes.welcome}`}>
      <div>
        <p>Hello Rachel,</p>
        <p>
          Ready to <span>play English</span>
        </p>
      </div>

      <div className={`${classes.fire}`}>
        <div className={`${classes.outline}`}>
          <AiTwotoneFire />
        </div>

        <span>65</span>
      </div>
    </div>
  );
};

export default Welcome;
