import React, { Component } from "react";
import ShortenerAPI from "../Service/GetAPI";
class Shortener extends Component {
  state = {
    url: [],
  };
  onFetchURL = async (api) => {
    try {
      const response = await ShortenerAPI.fetchURL(api);
      this.setState({
        url: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
  handleInput = (e) => {
    this.setState({
      url: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <div className="Shortener">
          <header>
            <h1>
              The <span>privacy-frendly</span> URL Shortener
            </h1>
          </header>
          <div className="Shortener-item">
            <h3>Link Shortener</h3>
            <p>
              <h4>Enter Link</h4>
              <form
                className="search-bar"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input
                  type="text"
                  onChange={this.handleInput}
                  placeholder="Exmple.com"
                ></input>
                <button className="search-btn">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </p>
            <p className="Shortener-list">
              <h4>Short domain</h4>
              <span>shrtco.de</span>
              <span>9qr.de</span>
              <span>shiny.link</span>
            </p>
            <p className="Shortener-text">
              With this free Link Shortener you can make Links shorter and
              easier to remember.Just enter a Link into th form and click on the
              above Button to generate a short Link .When visiting the
              short-Link , short-Links will immediately you to the Link
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Shortener;
