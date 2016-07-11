var ListOfDates = (props) => (
  <ul>
    {props.allDates.map(day => 
      <li id={day.id} onClick={props.onSelectDateClick} > <span id={day.id} onClick={props.onBreakOutClick}>{day.breakout}</span> {day.date}</li>
    )}
  </ul>
);

window.ListOfDates = ListOfDates;