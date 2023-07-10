import React, { Component } from "react";
import Counter from "./counter";
export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

    handleReset = () => {
      const m_counters = [...this.state.counters];
      m_counters.forEach(c=>c.value=0)
      this.setState({counters:m_counters})
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
    m_counters[id] = {...counter};
    sign === "+" ? m_counters[id].value++ : m_counters[id].value--;
    this.setState({ counters: m_counters });
  }
  
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.handleReset();
          }}
          type="button"
          className="btn btn-warning"
        >
          RESET ALL
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onUpdate={this.updateCount}
            counter={counter}
          >
            <span> This from Counters H3 passing to Counter #{counter.id}</span>
          </Counter>
        ))}
      </div>
    );
  }
}
