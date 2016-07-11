class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  daysOfMonth: this.props.allDates
  	};
  }

  onPrevButtonClick() {
  	console.log('PREVBUTTONCLICK HAS BEEN CLICKED');
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

  render() {
  	return (
  	  <div>
  	    <button onClick={this.onPrevButtonClick.bind(this)} type="button">Prev</button>
  	    <button type="button">Next</button>
  	    <ListOfDates allDates={this.state.daysOfMonth}/>
  	  </div>
  	)
  }
}

window.App = App;