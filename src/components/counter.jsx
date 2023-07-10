import React, { Component } from "react";
export default class Counter extends Component {

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
  }
  getBadge() {
    let m_class = "badge bg-";
    return (m_class += this.props.counter.value === 0 ? "danger" : "primary");
  }

  render() {
    return (
      <div>
        <br />
        <h1 className={this.getBadge()}>
          <span>{this.formatCount()}</span>
          <br />
        </h1>
        <span> | </span>
        <button
          onClick={() => {
            this.props.onUpdate("+",this.props.counter);
          }}
          type="button"
          className="btn btn-primary"
        >
          Increment
        </button>
        <span> | </span>
        <button
          className="btn btn-warning"
          onClick={() => {
            this.props.onUpdate("-",this.props.counter);
          }}
        >
          Reduce
        </button>
        <span> | </span>
        <button
          className="btn btn-danger"
          onClick={() =>this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
