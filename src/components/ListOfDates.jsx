var ListOfDates = (props) => (
  <ul>
    {props.allDates.map(day => 
      <li>{day.breakout} {day.date}</li>
    )}
  </ul>
);

window.ListOfDates = ListOfDates;