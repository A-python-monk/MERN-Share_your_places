import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./Map.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: null}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={90.955413}
            lng={30.337844}
            text="Your place"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;