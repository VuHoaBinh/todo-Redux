import React from "react";
import { connect } from "react-redux";
import "./ListUsers.scss";

class ListUsers extends React.Component {
  render() {
    let { dataRedux } = this.props;
    console.log("redux : ", dataRedux);
    return (
      <>
        <div className="content">
          {dataRedux &&
            dataRedux.length > 0 &&
            dataRedux.map((item, index) => {
              return (
                <>
                  <div className="todo-child" key={item.id}>
                    <iframe
                      width="1000"
                      height="800"
                      src={item.link}
                      title={index + 1}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </>
              );
            })}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.Links };
};

export default connect(mapStateToProps)(ListUsers);
