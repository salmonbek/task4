import React, { Component } from "react";

class StudentList extends Component {
  render() {
    const { Students } = this.props;
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Group</th>
              <th>Doeswork</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Students.map((Students, i) => (
              <tr key={Students.id}>
                <td>{i + 1}</td>
                <td>{Students.firstname}</td>
                <td>{Students.lastname}</td>
                <td>{Students.group}</td>
                <td>{Students.doeswork ? "Ishlaydi" : "Bekorchi"}</td>
                <td className="d-flex gap-2">
                  <button className="btn btn-warning btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
