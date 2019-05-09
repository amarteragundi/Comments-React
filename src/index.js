import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./loader";
import LocationDenied from "./locationDenied";

class App extends React.Component {
  state = { lat: null, errMessage: "", showLoader: false };

  showLoader() {
    this.setState({ showLoader: true });
  }

  hideLoader() {
    this.setState({ showLoader: false });
  }

  getLocation() {
    this.showLoader();
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
        this.hideLoader();
      },
      err => {
        this.setState({ errMessage: err.message });
        this.hideLoader();
      }
    );
  }

  renderContent(){
    if (this.state.errMessage && !this.state.lat)
      return <LocationDenied />

    if (this.state.lat) return <SeasonDisplay lat={this.state.lat} />;

    if (this.state.showLoader) {
      return (
        <Loader />
      );
    }

    return (
      <div className="bg">
        <img
          onClick={this.getLocation.bind(this)}
          style={{
            display: "block",
            position: "absolute",
            bottom: "60px",
            left: "20%",
            cursor: "pointer"
          }}
          src={process.env.PUBLIC_URL + "/has_winter_come.png"}
        />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
