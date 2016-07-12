var CauseTable = (props) => (
  <div>
    {props.buttons.map(button =>
      <button id={button.id} onClick={props.onCauseButtonClick} type="button">{button.title}</button>
    )}
    <form onSubmit={props.onCreateCause}>
      <p>Create another cause</p>
      <input type="text"></input>
      <input type="submit" value="Submit"></input>
    </form>
  </div>
);

window.CauseTable = CauseTable;