import React from "react";
import employees from "./profile-data";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { employeeData: employees };
  }

  render = () => {
    return (
      <div className="table">
        <table>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
          </tr>
          {this.state.employeeData.map(
            ({ id, name, username, email, phone, website }) => (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{website}</td>
              </tr>
            )
          )}
        </table>
      </div>
    );
  };
}

export default Profile;
