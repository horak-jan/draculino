import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class PobockaMap extends Component {
  render() {
    const style = {
      width: "100%",
      height: "100%",
      maxHeight: "450px",
      maxWidth: "1200px",
    };

    const containerStyle = {
      position: "absolute",
      width: "100%",
      maxWidth: "1200px",
      height: "100%",
      maxHeight: "450px",
      backgroundColor: "black",
    };
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: this.props.coordinates.lat,
          lng: this.props.coordinates.lng,
        }}
        zoom={14}
        style={style}
        containerStyle={containerStyle}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={this.props.link}
          position={{
            lat: this.props.coordinates.lat,
            lng: this.props.coordinates.lng,
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: xxx,
})(PobockaMap);
