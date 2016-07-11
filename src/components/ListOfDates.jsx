var ListOfDates = (props) => (
  <ul>
    {props.allDates.map(day => 
      <li> <span id={day.id} onClick={props.onBreakOutClick}>{day.breakout}</span> {day.date}</li>
    )}
  </ul>
);

window.ListOfDates = ListOfDates;