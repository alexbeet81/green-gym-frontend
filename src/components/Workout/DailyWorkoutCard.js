import { Link } from "react-router-dom";
import classes from "./DailyWorkoutCard.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const DailyWorkoutCard = () => {
  return (
    <Card className={classes.container}>
      <div className={classes.title}>
        <h1>Daily Workout</h1>
      </div>
      <div className={classes.image}>
        <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya291dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="workout"
        />
      </div>
      <div className={classes.buttonContainer}>
        <Link to="workout">
          <Button>Today's Workout</Button>
        </Link>
      </div>
    </Card>
  );
};

export default DailyWorkoutCard;
