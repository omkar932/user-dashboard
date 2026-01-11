import "../App.css";

interface Props {
  disabled: boolean;
}

const ActionsPanel = ({ disabled }: Props) => {
  return (
    <div className={`actions-panel ${disabled ? "disabled" : ""}`}>
      <h3>Actions</h3>

      <button disabled={disabled}>Edit</button>
      <button disabled={disabled}>Disable</button>
      <button disabled={disabled}>Delete</button>

      {disabled && <p className="muted">Select a user to enable actions</p>}
    </div>
  );
};

export default ActionsPanel;
