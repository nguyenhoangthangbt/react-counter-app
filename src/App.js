import { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    total_value: 0,
  };

  handleReset = () => {
    const m_counters = [...this.state.counters];
    m_counters.forEach(c => c.value = 0)
    this.setState({ counters: m_counters })
  }
  handleDelete = (counterID) => {
    console.log(`handleDelete=(${counterID})`);
    const counters2 = this.state.counters.filter(
      (item) => item.id !== counterID
    );
    this.setState({ counters: counters2 });
  };

  updateCount = (sign, counter) => {

    const m_counters = this.state.counters;
    const id = m_counters.indexOf(counter);
    m_counters[id] = { ...counter };
    sign === "+" ? m_counters[id].value++ : m_counters[id].value--;
    this.setState({ counters: m_counters });
  };

  get_total_qty = () => {
    const tot = this.state.counters.filter(i => i.value>0).length;
    this.setState({ total_value: tot });
  };

  render() {
    return (
      <div className="App" >
        <NavBar getCount={this.state.counters.filter(i => i.value>0).length} getSum={this.state.counters.reduce((sum,i) => sum + i.value,0)}/>
        <Counters counters={this.state.counters} onDelete={this.handleDelete} onUpdate={this.updateCount} onReset={this.handleReset} />
      </div>
    );
  }

}

export default App;
