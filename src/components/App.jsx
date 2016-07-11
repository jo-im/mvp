class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  daysOfMonth: this.props.allDates
  	};
  }

  onPrevButtonClick() {
  	if (currentMonth === 1) {
      currentMonth = 12
      currentYear--;
  	} else {
  	  currentMonth--;
  	}

  	this.setState({
   	  daysOfMonth: listCalendar(currentMonth, currentYear)
  	})
  }

  onNextButtonClick() {
  	if (currentMonth === 12) {
  	  currentMonth = 1;
  	  currentYear++;
  	} else {
  	  currentMonth++;
  	}

  	this.setState({
  	  daysOfMonth: listCalendar(currentMonth, currentYear)
  	})
  }

  onBreakOutClick(event) {
  	var index = event.currentTarget.id;
    var clickedDay = this.state.daysOfMonth[index];
    if (clickedDay.breakout === 'false') {
      clickedDay.breakout = 'true';
    } else {
      clickedDay.breakout = 'false';
    }

    this.setState({
      daysOfMonth: this.props.allDates
    })
  }

  render() {
  	return (
  	  <div>
  	    <button onClick={this.onPrevButtonClick.bind(this)} type="button">Prev</button>
  	    <button onClick={this.onNextButtonClick.bind(this)} type="button">Next</button>
  	    <ListOfDates allDates={this.state.daysOfMonth} onBreakOutClick={this.onBreakOutClick.bind(this)} />
  	    <CauseTable />
  	  </div>
  	)
  }
}

window.App = App;