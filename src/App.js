import './App.css';
import React, { Component } from 'react';
import { Subject } from './components/subject';
import { List } from './components/list';
import { Content } from './components/content';
import { Control } from './components/control';
import { Create } from './components/create';
import { Update } from './components/update';

class App extends Component {
  constructor(props) {
    super(props);
    this.content_num = 3;
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: {
        title: 'WEB',
        intro: 'HELLO, MY NAME IS ERIC',
      },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        {
          id: 1,
          title: 'HTML',
          desc: 'HTML is for information',
        },
        {
          id: 2,
          title: 'CSS',
          desc: 'CSS is for design',
        },
        {
          id: 3,
          title: 'JavaScript',
          desc: 'JavaScript is for interactive',
        },
      ],
    };
  }
  render() {
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <Content title={_title} desc={_desc} />;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
        }
        i++;
      }
      _article = <Content title={_title} desc={_desc} />;
    } else if (this.state.mode === 'create') {
      _article = (
        <Create
          ifSubmitted={function (_title, _desc) {
            this.content_num++;
            var newContent = this.state.contents.concat({
              id: this.content_num,
              title: _title,
              desc: _desc,
            });
            this.setState({ contents: newContent });
          }.bind(this)}
        ></Create>
      );
    } else if (this.state.mode === 'update') {
      if (this.state.contents.length > 0) {
        _article = (
          <Update
            id={this.state.selected_content_id}
            title={
              this.state.contents[this.state.selected_content_id - 1].title
            }
            desc={this.state.contents[this.state.selected_content_id - 1].desc}
            ifSubmitted={function (_title, _desc) {
              var new_contents = Array.from(this.state.contents);
              new_contents[this.state.selected_content_id - 1].title = _title;
              new_contents[this.state.selected_content_id - 1].desc = _desc;
              this.setState({ contents: new_contents });
            }.bind(this)}
          ></Update>
        );
      }
    } else if (this.state.mode === 'delete') {
      if (this.state.contents.length > 0) {
        var del_contents = Array.from(this.state.contents);
        del_contents.pop();
        this.setState({
          mode: 'welcome',
          contents: del_contents,
          selected_content_id: 1,
        });
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          intro={this.state.subject.intro}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        />
        <List
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id),
            });
          }.bind(this)}
          data={this.state.contents}
        />
        <Control
          onChangeMode={function (_mode) {
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        ></Control>
        {_article}
      </div>
    );
  }
}

export default App;
