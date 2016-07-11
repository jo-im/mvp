var CauseTable = (props) => (
  <div>
    <button onClick={props.onCauseButtonClick} type="button">Product</button>
    <button onClick={props.onCauseButtonClick} type="button">Lack Of Sleep</button>
    <button onClick={props.onCauseButtonClick} type="button">Poor Diet</button>
    <button onClick={props.onCauseButtonClick} type="button">Stress</button>
  </div>
);

window.CauseTable = CauseTable;