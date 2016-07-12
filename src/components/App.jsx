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
  	firstData();
    createGraph();
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

    if (buttonText === 'Products') {
      if (productData[selectedDate].attr === '0') {
        productData[selectedDate].attr = '0.9';
      } else {
        productData[selectedDate].attr = '0';
      }
    }
    console.log('buttonText is', buttonText);
    if (buttonText === 'Lack Of Sleep') {
       console.log('Entering this if statement for sleep');
      if (sleepData[selectedDate].attr === '0') {
        sleepData[selectedDate].attr = '0.8';
      } else {
        sleepData[selectedDate].attr = '0';
      }
    }

    if (buttonText === 'Poor Diet') {
      if (poorDietData[selectedDate].attr === '0') {
        poorDietData[selectedDate].attr = '0.7';
      } else {
        poorDietData[selectedDate].attr = '0';
      }
    }

    if (buttonText === 'Stress') {
      if (stressData[selectedDate].attr === '0') {
        stressData[selectedDate].attr = '0.6';
      } else {
        stressData[selectedDate].attr = '0';
      }
    }
    
    console.log('productData is now', productData);
    createGraph();

    this.setState({
      month: currentMonth
    })
  }

  onCreateCause(event) {
  	var newCause = event.currentTarget[0].form[0].value;
  	buttons.push({title: newCause});
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