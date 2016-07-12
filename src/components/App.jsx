class App extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  daysOfMonth: this.props.allDates,
  	  month: currentMonth,
  	  buttons: buttons
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

    if (spData[index].attr === '0') {
      spData[index].attr = '1';
    } else {
      spData[index].attr = '0';
    }

    createGraph();
    this.setState({
      month: currentMonth
    })
  }

  onSelectDateClick(event) {
    selectedDate = event.target.parentNode.id;
  }

  onCauseButtonClick(event) {
    var buttonText = event.currentTarget.textContent;
    var daySelected = this.state.daysOfMonth[selectedDate];
    if (daySelected.effects.indexOf('   ' + buttonText) === -1) {
      daySelected.effects.push('   ' + buttonText);
    } 

    this.setState({
      month: currentMonth
    })
  }

  onCreateCause(event) {
  	var newCause = event.currentTarget[0].form[0].value;
  	console.log('newCause is', newCause);
  	buttons.push(newCause);
  	this.setState({
      buttons: buttons
  	});
  	event.preventDefault();
  }

  render() {
  	return (
  	  <div>
  	    <button onClick={this.onPrevButtonClick.bind(this)} type="button">Prev</button>
  	    <button onClick={this.onNextButtonClick.bind(this)} type="button">Next</button>
  	    <ListOfDates allDates={this.state.daysOfMonth} onBreakOutClick={this.onBreakOutClick.bind(this)} onSelectDateClick={this.onSelectDateClick.bind(this)} />
  	    <CauseTable onCauseButtonClick={this.onCauseButtonClick.bind(this)} onCreateCause={this.onCreateCause.bind(this)} buttons={buttons}/>
  	  </div>
  	)
  }
}

window.App = App;