import React from "react";
import { toast } from "react-toastify";

class AddComponent extends React.Component {
  state = {
    link: "",
  };

  handleLinkChange = (event) => {
    this.setState({ link: event.target.value });
  };

  handleButtonClick = (event) => {
    event.preventDefault();
    // Regular expressions for YouTube, TikTok, and Instagram video links
    const youtubeLinkRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const tiktokLinkRegex =
      /^(https?:\/\/)?(?:www\.)?tiktok\.com\/(?:@[\w.-]+\/video\/|v\/)([0-9]+)/;
    const instagramLinkRegex =
      /^(https?:\/\/)?(?:www\.)?instagram\.com\/(?:p\/|tv\/[\w.-]+\/\?taken-by=|reel\/[\w.-]+\/\?taken-by=)?([\w.-]+)/;

    // Test
    const isYouTubeLink = youtubeLinkRegex.test(this.state.link);
    const isTikTokLink = tiktokLinkRegex.test(this.state.link);
    const isInstagramLink = instagramLinkRegex.test(this.state.link);

    if (isYouTubeLink || isTikTokLink || isInstagramLink) {
      if (!this.state.link) {
        // check empty
        toast.error("Please fill in the Link!");
        return;
      }
      this.props.addNewLink({
        id: Math.floor(Math.random() * 1000),
        link: this.state.link,
      });
      console.log(this.state.link);
      this.setState({
        link: "",
      });
      toast.success("Valid Link!");
    } else {
      toast.error("Invalid Link!");
    }
  };

  render() {
    return (
      <>
        <div class="row">
          <label class="mr-sm-2">Link </label>
          <input
            style={{ width: "500px", height: "40px" }}
            type="text"
            class="form-control"
            placeholder="Link youtube && tiktok && IG"
            value={this.state.link}
            onChange={(event) => this.handleLinkChange(event)}
          />
          <button
            type="button"
            className="btn btn-primary ml-sm-2"
            onClick={(event) => this.handleButtonClick(event)}
          >
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default AddComponent;
