import classes from "./ExerciseTrackerCard.module.css";

const ExerciseTrackerCardRow = ({ exercise, work, rest, rowActive }) => {

  const rowClasses = rowActive ? `${classes.row} ${classes.rowActive}` : classes.row;

  return (
    <div className={rowClasses}>
      <p className={classes.exerciseRow}>{exercise}</p>
      <p className={classes.workRow}>{work} secs</p>
      <p className={classes.restRow}>{rest} secs</p>
      <div className={classes.questionContainer}>
        <form>
          <input type="number" min={0} placeholder={0}/>
        </form>
      </div>
    </div>
  );
};

export default ExerciseTrackerCardRow;
