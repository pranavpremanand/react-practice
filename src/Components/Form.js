import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      comment: "",
      skill: "",
    };
  }
  changeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  changeComment = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  changeSkill = (event) => {
    this.setState({
      skill: event.target.value,
    });
  };
  submitForm = (event) => {
    alert(`${this.state.name}, ${this.state.comment}, ${this.state.skill}`);
    event.preventDefault();
  };

  render() {
    const {name, comment, skill} = this.state;
    return (
      <div>
        <h4>Form Component</h4>
        <form onSubmit={this.submitForm}>
          <div>
            <label htmlFor="">Name</label>
            <input
              onChange={this.changeName}
              type="text"
              value={name}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <label htmlFor="">Comment</label>
            <textarea
              value={comment}
              onChange={this.changeComment}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Skill</label>
            <select
              onChange={this.changeSkill}
              value={skill}
              name=""
              id=""
            >
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        <h3>{this.state.name}</h3>
        <h4>{this.state.comment}</h4>
        <h4>{this.state.skill}</h4>
      </div>
    );
  }
}

export default Form;
