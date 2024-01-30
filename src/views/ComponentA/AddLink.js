import React from "react";
import { connect } from "react-redux";
import AddLink from "./AddComponents";
import "./ComponentA.scss";
class Home extends React.Component {
  state = {
    listLinks: [],
    updateLink: {},
  };

  // add new link from input
  addNewLink = (element) => {
    let addLink = this.state.listLinks;
    addLink.push(element);
    this.setState({
      listLinks: addLink,
    });

    this.props.addLinkRedux(element);
  };

  render() {
    return (
      <>
        <h1>Add link video Youtube && Tiktok && IG</h1>
        <AddLink addNewLink={this.addNewLink} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataRedux: state.Links };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLinkRedux: (link) => dispatch({ type: "ADD_LINK", payload: link }),
  };
};

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
