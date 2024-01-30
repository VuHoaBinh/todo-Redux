import React from "react";
import { connect } from "react-redux";
import InstagramEmbed from "react-instagram-embed";

class ListUsers extends React.Component {
  slipLink = (videoUrl) => {
    let videoCode = "";

    const youtubeRegex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const youtubeMatch = videoUrl.match(youtubeRegex);

    if (youtubeMatch) {
      videoCode = youtubeMatch[1];
    } else {
      const tiktokRegex =
        /(?:tiktok\.com\/(?:[^\/\n\s]+\/\S+\/|.*?i(?:d)?=))(\d+)/;
      const tiktokMatch = videoUrl.match(tiktokRegex);

      if (tiktokMatch) {
        videoCode = tiktokMatch[1];
      } else if (videoUrl.includes("instagram")) {
        const instagramRegex =
          /(?:instagram\.com\/(?:[^\/\n\s]+\/\S+\/|.*?r(?:eel)?\/|p\/)([a-zA-Z0-9_-]+)\/)/;
        const instagramMatch = videoUrl.match(instagramRegex);

        if (instagramMatch) {
          videoCode = instagramMatch[1];
        }
      }
    }

    return videoCode;
  };

  render() {
    let { dataLinkRedux } = this.props;
    let dataRedux = [...dataLinkRedux].reverse();
    console.log("redux : ", dataRedux);
    return (
      <>
        <div className="content">
          {dataRedux &&
            dataRedux.length > 0 &&
            dataRedux.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {item.link.includes("youtube") ? (
                    // YouTube iframe
                    <iframe
                      width="500"
                      height="600"
                      src={`https://www.youtube.com/embed/${this.slipLink(
                        item.link
                      )}`}
                      title={index + 1}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : item.link.includes("tiktok") ? (
                    // TikTok iframe
                    <iframe
                      width="500"
                      height="600"
                      src={`https://www.tiktok.com/embed/v2/${this.slipLink(
                        item.link
                      )}`}
                      title={index + 1}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : item.link.includes("instagram") ? (
                    <iframe
                      src={`https://www.instagram.com/p/${this.slipLink(
                        item.link
                      )}/embed`}
                      title={index + 1}
                      width="500"
                      height="600"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <p>Unsupported video link</p>
                  )}
                  {/* <p>Video Code: {this.slipLink(item.link)}</p> */}
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { dataLinkRedux: state.Links };
};

export default connect(mapStateToProps)(ListUsers);
