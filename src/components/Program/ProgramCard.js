import { BsFillGearFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import classes from "./ProgramCard.module.css";
import Card from "../UI/Card";

const ProgramCard = ({ title, image, description, onDelete, admin }) => {
  return (
    <Card className={classes.card}>
      {admin && (
        <div className={classes.icons}>
          <div className={classes.iconGear}>
            <BsFillGearFill />
          </div>
          <div className={classes.iconBin} onClick={onDelete}>
            <AiFillDelete />
          </div>
        </div>
      )}
      <h1 className={classes.title}>{title}</h1>
      <img src={image} alt={title} />
      <h3 className={classes.description}>{description}</h3>
    </Card>
  );
};

export default ProgramCard;
