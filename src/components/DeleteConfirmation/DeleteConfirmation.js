import classes from "./DeleteConfirmation.module.css";

export const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className={classes.deleteConfirmation}>
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div className={classes.confirmationActions}>
        <button onClick={onCancel} className={classes.buttonText}>
          No
        </button>
        <button onClick={onConfirm} className={classes.button}>
          Yes
        </button>
      </div>
    </div>
  );
};