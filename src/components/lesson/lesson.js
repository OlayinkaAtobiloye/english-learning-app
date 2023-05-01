import classes from "./lesson.module.scss";

const Lesson = (props) => {
    return <div className={`${classes.lesson}`}>
        <div>
        <img src={props.image}/>
        </div>

        <div>
        <progress value={props.value} max={props.max}></progress><span>{props.value}%</span>
        </div>
        
        <div>
            <p>{props.course}</p>
            <p>{props.days} days . daily</p>
        </div>
    </div>
}


export default Lesson;