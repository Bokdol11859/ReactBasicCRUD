import React, { Component } from 'react';

export class Control extends Component {
  render() {
    return (
      <div>
        <p>
          <a
            href="/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode('create');
            }.bind(this)}
          >
            Create
          </a>
        </p>
        <p>
          <a
            href="/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode('update');
            }.bind(this)}
          >
            Update
          </a>
        </p>
        <input
          type="button"
          value="Delete"
          onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)}
        ></input>
      </div>
    );
  }
}
