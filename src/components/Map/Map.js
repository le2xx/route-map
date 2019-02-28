import React, { Component } from 'react';
import './Map.css';
import ymaps from 'ymaps';

class Map extends Component {
  initMap() {
    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {
      this.map = new maps.Map('map', {
        center: [55.75, 37.6],
        zoom: 9,
        controls: ['geolocationControl', 'zoomControl']
      });
    })
      .catch(error => console.log('Failed to load Yandex Maps', error));
  }

  render() {
    return (
      <div className="map" id="map">
        {this.initMap()}
      </div>
    );
  }
}

export default Map;
