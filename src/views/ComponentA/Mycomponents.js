import React from "react";
import Childcomponent from "./ChildComponents";
import AddComponent from "./AddComponents";
// import { connect } from "react-redux";

class Mycomponent extends React.Component {
  state = {
    // firstfirstName :"",
    // lastfirstName :"",
    arrJob: [
      {
        id: "001",
        firstName: "binh",
        age: "20",
        lastName: "dep trai",
        salary: "5000",
      },
      {
        id: "002",
        firstName: "hoa",
        age: "21",
        lastName: "dang cao",
        salary: "10000",
      },
      {
        id: "003",
        firstName: "vu",
        age: "22",
        lastName: "dien trai",
        salary: "25000",
      },
    ],
  };
  ///////////////////////////////////////////
  // add data
  // cach 1
  // addNewState = (element) => {
  //   console.log(element);
  //   this.setState({
  //     arrJob: [...this.state.arrJob,element]
  //   });
  // };
  // cach 2
  addNewState = (element) => {
    console.log(element);
    let currentArrJob = this.state.arrJob;
    currentArrJob.push(element);
    this.setState({
      arrJob: currentArrJob,
    });
  };
  /////////////////////////////////////////

  ///////////////////////////////////////////
  // delete data
  deleteState = (job) => {
    let currenJobs = this.state.arrJob;
    currenJobs = currenJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJob: currenJobs,
    });
  };
  /////////////////////////////////////////

  // lifecycle reactJS
  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">> run didupdate: ",
      "prev state: ",
      prevState,
      " current state: ",
      this.state
    );
  }
  componentDidMount() {
    console.log(">>> run component did mount");
  }




  render() {
    // let firstName = "binh";
    return (
      <>
        {/* <div>
          hello, My firstName is {this.state.firstName}, {this.state.lastName}
        </div>
        <div>{console.log("binh dep trai qua")}</div>
        <div>{console.log({ firstName } + "dep trai qua")}</div>
        <div>
          <input
            value={this.state.lastName}
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          />
          lastName: {this.state["lastName"]}
        </div>
        <div>
          <button type="button" onClick={(event) => this.handleOnClickButton(event)}>Submit</button>
        </div> */}

        <h2>HTML Forms</h2>

        <Childcomponent
          // firstfirstName ={this.state.firstfirstName}
          // lastfirstName ={this.state.lastfirstName}
          arrJobs={this.state.arrJob}
          deleteState={this.deleteState}
        />
        <AddComponent addNewState={this.addNewState} />
      </>
    );
  }
}

export default Mycomponent;
