import React from "react";
import axios from "axios";
import "./ListUsers.scss";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class ListUsers extends React.Component {
  state = {
    listUsers: [],
  };

  //   componentDidMount() {
  //     axios.get("https://reqres.in/api/users?page=2").then((response) => {
  //       console.log(response);
  //     });
  //   }
  async componentDidMount() {
    let response = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUsers:
        response && response.data && response.data.data
          ? response.data.data
          : [],
    });
  }
  handleClick = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  render() {
    let { listUsers } = this.state;
    return (
      <>
        <div className="list-user-container">
          <div className="title">Fetch all list users</div>
          <div className="list-user-content">
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <div
                    className="child"
                    key={item.id}
                    onClick={() => this.handleClick(item)}
                  >
                    {index + 1} - {item.first_name} {item.last_name}
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ListUsers);
