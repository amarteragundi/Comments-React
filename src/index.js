import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errMessage: "" };

  getLocation() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

  render() {
    if (this.state.errMessage && !this.state.lat)
      return <div>error: {this.state.errMessage}</div>;

    if (this.state.lat) return <SeasonDisplay lat={this.state.lat} />;

    return (
        <div className="bg">
          <img onClick={this.getLocation.bind(this)}
            style={{ "display":"block" ,position: "absolute", bottom: "60px", left: "20%", "cursor":"pointer" }}
            src={process.env.PUBLIC_URL + "/has_winter_come.png"}
          />
        </div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
