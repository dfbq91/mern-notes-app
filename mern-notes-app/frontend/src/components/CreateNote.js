import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';


export default class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
    editing: false,
    id: ''
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: res.data.map((user) => user.username),
      userSelected: res.data[0].username,
    });
    if (this.props.match.params.id) {
      const res = await axios.get("http://localhost:4000/api/notes/" + this.props.match.params.id);
      this.setState({
        title: res.data.title,
        content: res.data.content,
        userSelected: res.data.author,
        date: new Date(res.data.date),
        editing: true,
        _id: this.props.match.params.id
      })
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected,
    };

    if (this.state.editing) {
      const res = await axios.put("http://localhost:4000/api/notes/" + this.state._id, newNote);
    } else {
      await axios.post("http://localhost:4000/api/notes", newNote);
    }
    window.location.href = "/";
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeDate = (date) => {
    this.setState({ date: date });
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create Note</h4>

          {/* Select User */}
          <div className="form-group">
            <select
              className="form-control"
              name="userSelected"
              value={this.state.userSelected}
              onChange={this.onInputChange}
            >
              {this.state.users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>

          {/* Título de Nota */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Título de Nota"
              value={this.state.title}
              onChange={this.onInputChange}
              required
            />
          </div>

          {/* Descripción de Nota */}
          <div className="form-group">
            <textarea
              className="form-control"
              name="content"
              value={this.state.content}
              placeholder="Descripción de Nota"
              onChange={this.onInputChange}
              required
            />
          </div>

          {/* Fijar fecha */}
          <div className="form-group">
            <DatePicker
              placeholder="Fijar fecha"
              className="form-control"
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>

          <form onSubmit={this.onSubmit}>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
