var CauseTable = (props) => (
  <div>
    {props.buttons.map(button =>
      <button onClick={props.onCauseButtonClick} type="button">{button}</button>
    )}
    <form onSubmit={props.onCreateCause}>
      <p>Create another cause</p>
      <input type="text"></input>
      <input type="submit" value="Submit"></input>
    </form>
  </div>
);

window.CauseTable = CauseTable;