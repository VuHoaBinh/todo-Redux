import React from "react";

class Childcomponent extends React.Component {
  state = {
    showJob: false,
  };
  handleOnChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleOnChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleOnClickButtonShow = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };
  handleOnClickButtonHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handleOnClickDelete = (id) => {
    // alert("oke oke delete");
    console.log(id);
    this.props.deleteState(id);
  };
  render() {
    // let name = "binh";
    let { arrJobs } = this.props;
    let a = "";
    let { showJob } = this.state;
    return (
      <>
        {/* <div>
          hello, My name is {this.state.name}, {this.state.status}
        </div>
        <div>{console.log("binh dep trai qua")}</div>
        <div>{console.log({ name } + "dep trai qua")}</div>
        <div>
          <input
            value={this.state.status}
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          />
          Status: {this.state["status"]}
        </div>
        <div>
          <button type="button" onClick={(event) => this.handleOnClickButton(event)}>Submit</button>
        </div> */}
        {/* ///////////////////////////////////////////////////////////////////////////// */}
        {/* show and hide buttons */}
        {/* cach 1 */}
        {showJob === false ? (
          <div>
            <button onClick={(event) => this.handleOnClickButtonShow()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div>
              {/* <h2>My introduction: </h2>
              <h5>First Name: {this.props.name}</h5>
              <h5>Last Name: {this.props.lastName}</h5> */}

              {/* orther option: */}
              <div>
                {
                  (a = arrJobs.map((item, index) => {
                    return (
                      <>
                        <div key={item.id}>
                          {item.id} - {item.firstName} - {item.lastName}
                          <></>{" "}
                          <span onClick={() => this.handleOnClickDelete(item)}>
                            <button>X</button>
                          </span>
                        </div>
                      </>
                    );
                  }))
                }
                {console.log("list input: ", a)}
              </div>
            </div>
            <div>
              <button onClick={(event) => this.handleOnClickButtonHide()}>
                Hide
              </button>
            </div>
          </>
        )}

        {/* cach 2 */}
        {/* {showJob === false && (
          <div>
            <button onClick={(event) => this.handleOnClickButtonShow()}>
              Show
            </button>
          </div>
        )}
        {showJob && (
          <>
            <div>
              <div>
                {
                  (a = arrJobs.map((item, index) => {
                    return (
                      <div key={item.id}>
                        {item.id} - {item.firstName} - {item.lastName}
                      </div>
                    );
                  }))
                }
                {console.log("input list: ", a)}
              </div>
            </div>
            <div>
              <button onClick={(event) => this.handleOnClickButtonHide()}>
                Hide
              </button>
            </div>
          </>
        )} */}
      </>
    );
  }
}

// const Childcomponent = (props) => {
//   console.log("pros: ", props);
//   let { arrJobs } = props;
//   let a = "";
//   return (
//     <>
//       <div>hello arrow function hehe </div>
//       <div>
//         {
//           (a = arrJobs.map((item, index) => {
//             if (item.salary > 10000) {
//               return (
//                 <div key={item.id}>
//                   {item.id} - {item.age} - {item.salary}$
//                 </div>
//               );
//             }
//           }))
//         }
//         {console.log(a)}
//       </div>
//     </>
//   );
// };
export default Childcomponent;
