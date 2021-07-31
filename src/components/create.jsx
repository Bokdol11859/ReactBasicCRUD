import React, { Component } from 'react';

export class Create extends Component {
  render() {
    return (
      <article>
        <h1>Create</h1>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            this.props.ifSubmitted(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="Create Title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="Create Description"></textarea>
          </p>
          <p>
            <input type="submit" value="Submit"></input>
          </p>
        </form>
      </article>
    );
  }
}
