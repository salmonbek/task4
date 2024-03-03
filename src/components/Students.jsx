import React, { Component } from "react";
import { ButtonGroup } from "react-bootstrap";
import StudentList from "./StudentList";

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Students: [
        {
          id: 1,
          firstname: "sally",
          lastname: "Doe",
          group: "React n58",
          doeswork: false,
        },
        {
          id: 2,
          firstname: "Salmonbek",
          lastname: "Akbarov",
          group: "React n45",
          doeswork: true,
        },
        {
          id: 3,
          firstname: "Sardor",
          lastname: "Avazonov",
          group: "React n38",
          doeswork: false,
        },
      ],
    };
  }
  render() {
    const { Students } = this.state;
    return (
      <div className="py-5">
        <form className="container" action="">
          <ButtonGroup className="w-100">
            <input
              className="form-control "
              placeholder="  Search...🔎"
              type="text"
            />
            <select className="form-select w-auto" name="filter" id="filter">
              <option value="All">All</option>
              <option value="React n35">React n35</option>
              <option value="React n38">React n38</option>
              <option value="React n45">React n45</option>
              <option value="React n58">React n58</option>
            </select>
            <button className="btn btn-outline-success w-auto">Add</button>
          </ButtonGroup>
        </form>
        <StudentList Students={Students} />
      </div>
    );
  }
}

export default Students;
