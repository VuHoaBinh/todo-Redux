import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "./styles.scss";

class ListToDo extends React.Component {
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

  // delete link
  deleteLink = (element) => {
    console.log("id delete: ", element);
    let currentLink = this.state.listLinks;
    currentLink = currentLink.filter((item) => item.id !== element.id);
    this.props.removeLinkRedux(element.id);
    this.setState({
      listLinks: currentLink,
    });

    toast.success("Delete link successfully!");
  };

  checkValid = (Link) => {
    // Regular expressions for YouTube, TikTok, and Instagram video links
    const youtubeLinkRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const tiktokLinkRegex =
      /^(https?:\/\/)?(?:www\.)?tiktok\.com\/(?:@[\w.-]+\/video\/|v\/)([0-9]+)/;
    const instagramLinkRegex =
      /^(https?:\/\/)?(?:www\.)?instagram\.com\/(?:p\/|tv\/[\w.-]+\/\?taken-by=|reel\/[\w.-]+\/\?taken-by=)?([\w.-]+)/;

    // Test
    const isYouTubeLink = youtubeLinkRegex.test(Link);
    const isTikTokLink = tiktokLinkRegex.test(Link);
    const isInstagramLink = instagramLinkRegex.test(Link);

    if (isYouTubeLink || isTikTokLink || isInstagramLink) {
      toast.success("Valid Link!");
      return true;
    } else {
      toast.error("Invalid Link!");
      return false;
    }
  };
  UpdateLink = (element) => {
    // listLinks
    let { updateLink } = this.state;
    let { dataRedux } = this.props;
    let isEmptyObj = Object.keys(updateLink).length === 0;

    if (isEmptyObj === false && updateLink.id === element.id) {
      let listLinkCopy = [...dataRedux];
      let get_id = listLinkCopy.findIndex((item) => item.id === element.id); // get id
      let isCheckValid = this.checkValid(updateLink.link) === true;

      if (isCheckValid) {
        listLinkCopy[get_id].link = updateLink.link;
        this.props.updateLinkRedux(get_id, updateLink.link);
        this.setState({
          listLinks: listLinkCopy,
          updateLink: {},
        });
        toast.success("Update successfully!");
      } else {
        toast.error("Update unsuccessfully!");
      }
    } else {
      this.setState({
        updateLink: element,
      });
    }
  };

  handleOnchangeUpdateLink = (element) => {
    let updateLink = { ...this.state.updateLink };
    updateLink.link = element.target.value;
    this.setState({
      updateLink: updateLink,
    });
  };

  render() {
    let { listLinks, updateLink } = this.state;
    let { dataRedux } = this.props;
    let isEmptyObj = Object.keys(updateLink).length === 0;
    return (
      <>
        <div className="content">
          {dataRedux &&
            dataRedux.length > 0 &&
            dataRedux.map((item, index) => {
              return (
                <>
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.link}
                      </span>
                    ) : (
                      <>
                        {updateLink.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              style={{ width: "500px", height: "40px" }}
                              type="text"
                              value={updateLink.link}
                              onChange={(event) =>
                                this.handleOnchangeUpdateLink(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.link}
                          </span>
                        )}
                      </>
                    )}
                    <> </>
                    <button
                      type="button"
                      className="update"
                      onClick={() => this.UpdateLink(item)}
                    >
                      {isEmptyObj === false && updateLink.id === item.id
                        ? "Save"
                        : "Update"}
                    </button>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => this.deleteLink(item)}
                    >
                      Delete
                    </button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeLinkRedux: (id) => dispatch({ type: "DELETE_LINK", payload: id }),
    updateLinkRedux: (id, link) =>
      dispatch({ type: "UPDATE_LINK", payload: { id, link } }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);
