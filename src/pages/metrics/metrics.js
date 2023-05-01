import { SkillCard } from "../../components/skillCard/skillCard";
import {
  MdOutlineMenuBook,
  MdOutlineHeadsetMic,
  MdOutlineVolumeUp,
  MdOutlineNoteAlt,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineCheck,
} from "react-icons/md";
import classes from "./metrics.module.scss";
import HeaderNav from "../../components/header-nav/header-nav";

const MetricsPage = () => {
  const statsData = [
    {
      name: "Reading",
      progress: 100,
      icon: <MdOutlineMenuBook />,
    },
    {
      name: "Writing",
      progress: 85,
      icon: <MdOutlineNoteAlt />,
    },
    {
      name: "Speaking",
      progress: 100,
      icon: <MdOutlineVolumeUp />,
    },
    {
      name: "Listening",
      progress: 70,
      icon: <MdOutlineHeadsetMic />,
    },
  ];

  const septData = [
    {
      date: 2,
      day: "Mon",
      isChecked: false,
      isActive: false,
    },
    {
      date: 3,
      day: "Tue",
      isChecked: true,
      isActive: false,
    },
    {
      date: 4,
      day: "Wed",
      isChecked: true,
      isActive: false,
    },
    {
      date: 5,
      day: "Thu",
      isChecked: false,
      isActive: true,
    },
    {
      date: 6,
      day: "Fri",
      isChecked: false,
      isActive: false,
    },
    {
      date: 7,
      day: "Sat",
      isChecked: false,
      isActive: false,
    },
    {
      date: 8,
      day: "Sun",
      isChecked: false,
      isActive: false,
    },
  ];

  return (
    <main className={classes.skill_page_container}>
      <section className={classes.main_title_section}>
        <div className={classes.arrow}>
          <MdOutlineKeyboardArrowLeft />
        </div>

        <h3 className={`${classes.title} mb-0`}>September</h3>

        <div className={classes.arrow}>
          <MdOutlineKeyboardArrowRight />
        </div>
      </section>

      <section className={`${classes.calendar_container} py-4`}>
        {septData.map(({ date, day, isActive, isChecked }) => (
          <div
            className={`
            ${classes.day_container} 
            ${isActive ? classes.active_day : ""}
            ${isChecked ? classes.checked_day : ""}
            `}
          >
            <div className={classes.date_holder}>
              {!isChecked && <>{date}</>}
              {isChecked && <MdOutlineCheck />}
            </div>
            <div className={classes.day}>{day}</div>
          </div>
        ))}
      </section>

      <section className="row py-4">
        <div className={classes.section_title}>
          <HeaderNav>Skill</HeaderNav>
        </div>

        {statsData.map(({ name, progress, icon }, index) => (
          <div className="col-6 mb-4" key={index}>
            <SkillCard name={name} progress={progress} icon={icon} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default MetricsPage;
