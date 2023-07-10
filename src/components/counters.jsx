import React, { Component } from "react";
import Counter from "./counter";
export default class Counters extends Component {
  
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset} 
          type="button"
          className="btn btn-warning"
        >
          RESET ALL
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onUpdate={this.props.onUpdate}
            counter={counter}
          >
            <span> This from Counters H3 passing to Counter #{counter.id}</span>
          </Counter>
        ))}
      </div>
    );
  }
}
