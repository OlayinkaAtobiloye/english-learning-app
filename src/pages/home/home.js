import Goal from "../../components/goal/goal";
import HeaderNav from "../../components/header-nav/header-nav";
import { Navbar } from "../../components/navbar/navbar";
// import { Image1 } from "../../../public/images/image1.jpg";
import Lesson from "../../components/lesson/lesson";
import Leaderboard from "../../components/leaderboard/leaderboard";
import Welcome from "../../components/welcome/welcome";
import classes from "./home.module.scss";

const HomePage = () => {
  const lessons = [
    {
      value: 60,
      max: 100,
      course: "English 101",
      days: 30,
      image: "images/image1.jpg",
    },
    {
      value: 60,
      max: 100,
      course: "English 101",
      days: 30,
      image: "images/image1.jpg",
    },
    {
      value: 60,
      max: 100,
      course: "English 101",
      days: 30,
      image: "images/image1.jpg",
    },
  ];

  return (
    <main className={`${classes.home}`}>
      <Welcome />
      <Goal />
      <HeaderNav>Your lesson</HeaderNav>
      <div className={`${classes.overflow}`}>
        {lessons.map((lesson) => (
          <Lesson {...lesson} />
        ))}
      </div>

      <HeaderNav>Leaderboard</HeaderNav>
      <Leaderboard />
      <Leaderboard />

      <Navbar></Navbar>
    </main>
  );
};

export default HomePage;
