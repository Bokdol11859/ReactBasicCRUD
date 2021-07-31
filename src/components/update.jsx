import React, { Component } from 'react';

export class Update extends Component {
  render() {
    return (
      <article>
        <h1>Update</h1>
        <form
          action="/update_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.ifSubmitted(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input
              type="text"
              name="title"
              placeholder={this.props.title}
            ></input>
          </p>
          <p>
            <textarea name="desc" placeholder={this.props.desc}></textarea>
          </p>
          <p>
            <input type="submit" value="Submit"></input>
          </p>
        </form>
      </article>
    );
  }
}
