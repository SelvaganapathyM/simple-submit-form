import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      emailid: " ",
      mobileno: " ",
      gender: " ",
      cardtype: " ",
      check: " "
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitUser = this.submitUser.bind(this);
    this.setCheck = this.setCheck.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitUser(event) {
    alert(
      "Name : " +
        this.state.username + "\n" +
        "Email : " +  
        this.state.emailid + "\n" +
        "Mobile : " + 
        this.state.mobileno + "\n" +
        "Gender : " + 
        this.state.gender + "\n" +
        "Cardtype : " + 
        this.state.cardtype
    );
    event.preventDefault();
  }
  setCheck(event) {
    this.setState({
      check: event.target.checked
    });
  }

  render() {
    return (
      <form>
        <h3>Card Registration Form</h3>
        <label>Name :</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <label>Email ID :</label>
        <input
          type="text"
          name="emailid"
          value={this.state.emailid}
          onChange={this.handleChange}
        />
        <br />
        <label>Mobile Number :</label>
        <input
          type="text"
          name="mobileno"
          value={this.state.mobileno}
          onChange={this.handleChange}
        />
        <br />
        <label>Gender :</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={this.state.gender == "Male"}
          onChange={this.handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={this.state.gender == "Female"}
          onChange={this.handleChange}
        />
        Female
        <br />
        <label>Cardtype :</label>
        <select
          name="cardtype"
          value={this.state.cardtype}
          onChange={this.handleChange}
        >
          <option value="Mastercard">Mastercard</option>
          <option value="Visa">Visa</option>
          <option value="Rupay">Rupay</option>
          <option value="Maestro">Maestro</option>
        </select>
        <br />
        <input
          type="checkbox"
          checked={this.state.check}
          onChange={this.setCheck}
        />
        Check me out
        <br />
        <button onClick={this.submitUser}>Submit</button>
      </form>
    );
  }
}
export default Form;
