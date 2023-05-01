import classes from "./skillCard.module.scss";

export const SkillCard = ({ name, progress, icon }) => {
  return (
    <div className={`${classes.skill_card} shadow`}>
      <div className={classes.content}>
        <div className={classes.icon_container}>{icon}</div>

        <h4 className={classes.title}>{name} </h4>
        <div className={classes.percent}>{progress}%</div>

        <button
          className={`${
            progress === 100 ? classes.btn_primary : classes.btn_primary_outline
          } btn`}
        >
          <> {progress === 100 ? "Completed" : "Good work"} </>
        </button>
      </div>
    </div>
  );
};
