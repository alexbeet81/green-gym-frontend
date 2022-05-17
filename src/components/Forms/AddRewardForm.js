import { useCreateReward } from "../Reward/Hooks/use-create-reward";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import classes from "./Form.module.css";

const AddRewardForm = ({ onClose }) => {
  const createReward = useCreateReward();

  const textNotEmpty = (value) => value !== "";
  const isNumber = (value) => {
    const number = parseInt(value);
    return !isNaN(number); 
  };

  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: restTitle,
  } = useInput(textNotEmpty);

  const {
    value: pointsValue,
    isValid: pointsIsValid,
    hasError: pointsHasError,
    valueChangeHandler: pointsChangeHandler,
    inputBlurHandler: pointsBlurHandler,
    reset: restPoints,
  } = useInput(isNumber);

  const addRewardHandler = (event) => {
    event.preventDefault();
    const reward = {
      reward_name: titleValue,
      reward_image: "https://picsum.photos/200",
      reward_points: pointsValue
    }

    createReward(reward);

    // t.string "reward_name"
    // t.string "reward_image"
    // t.integer "reward_points"
  };

  const formIsValid = titleIsValid && pointsIsValid;

  const titleClasses = titleHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const pointsClasses = pointsHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  return (
    <div>
      <h1 className={classes.title}>Add Reward</h1>
      <form onSubmit={addRewardHandler}>
        <div className={classes.controlGroup}>
          <div className={titleClasses}>
            <label htmlFor="title">Reward Name</label>
            <input
              type="text"
              id="title"
              value={titleValue}
              onChange={titleChangeHandler}
              onBlur={titleBlurHandler}
            />
            {titleHasError && (
              <p className={classes.errorText}>Must include a name</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="image">Cover Image</label>
            <input type="text" id="image" />
          </div>
          <div className={pointsClasses}>
            <label htmlFor="points">Points</label>
            <input
              type="number"
              id="points"
              min={0}
              value={pointsValue}
              onChange={pointsChangeHandler}
              onBlur={pointsBlurHandler}
            />
            {pointsHasError && (
              <p className={classes.errorText}>Must include points</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="points">Program (optional)</label>
            <select id="program">
              <option>1</option>
            </select>
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small" type="submit" disabled={!formIsValid}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRewardForm;
