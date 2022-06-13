import { useUpdateLibraryItem } from "../AdminComponents/Library/Hooks/use-update-library-items";
import useInput from "./Hooks/use-input";
import Button from "../UI/Button";
import classes from "./Form.module.css";
import { useState, useRef } from 'react';

const UpdateLibraryItemForm = ({ libraryItem, onClose }) => {
  const [selectedVideoFile, setSelectedVideoFile] = useState();
  const videoRef = useRef();

  const updateLibraryItem = useUpdateLibraryItem();
  const textNotEmpty = (value) => value !== "";

  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHander,
    reset: resetTitle,
  } = useInput(textNotEmpty, libraryItem.title);

  const titleClasses = titleHasError
    ? `${classes.formControl} ${classes.invalid}`
    : classes.formControl;

  const addLibraryItemHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("library_item[title]", titleValue);

    if (selectedVideoFile != null) {
      formData.append("library_item[video]", selectedVideoFile);
    }

    const updatedLibraryItem = {
      id: libraryItem.id,
      library_item: formData,
    };

    updateLibraryItem(updatedLibraryItem);

    onClose();
  };

  const fileSelectHandler = (event) => {
    setSelectedVideoFile(event.target.files[0]);
  };

  return (
    <div>
      <h1 className={classes.title}>Update {libraryItem.title}</h1>
      <form onSubmit={addLibraryItemHandler}>
        <div className={classes.controlGroup}>
          <div className={titleClasses}>
            <label htmlFor="exercise_title">Exercise Title</label>
            <input
              type="text"
              id="exercise_title"
              value={titleValue}
              onChange={titleChangeHandler}
              onBlur={titleBlurHander}
            />
            {titleHasError && (
              <p className={classes.errorText}>Must have a title</p>
            )}
          </div>
          <div className={classes.formControl}>
            <label htmlFor="video">Video</label>
            <input
              style={{display: 'none'}}
              type="file"
              id="video"
              accept="video/*"
              onChange={fileSelectHandler}
              ref={videoRef}
            />
            <Button size="small" onClick={() => videoRef.current.click()}>Add Video</Button>
          </div>
          <div className={classes.formActions}>
            <Button color="blue" size="small" onClick={onClose}>
              Cancel
            </Button>
            <Button size="small" type="submit" disabled={titleHasError}>
              Update
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateLibraryItemForm;
