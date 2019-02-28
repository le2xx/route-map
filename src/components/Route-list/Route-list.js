import React, { Component } from 'react';
import './Route-list.css';
import ymaps from 'ymaps';

class RouteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: ['Москва, метро Смоленская', 'Москва, метро Арбатская', [55.734876, 37.59308]],
      address: ''
    };
  }

  initSuggest = () => {
    ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {
      this.suggest = new maps.SuggestView('suggest');
    });
  };

  deleteListItem = (list, i) => {
    list.splice(i, 1);
    this.setState({ count: this.state + 1 });
  };

  addressFind = (event) => {
    this.setState({address: event.target.value});
  };

  addressAdd = (event) => {
    if (event.key === 'Enter') {
      const newPoints = this.state.points;
      newPoints.unshift(event.target.value);
      this.setState({points: newPoints});
    }
  };

  normalizeLenStr = (str, len) => {
    return str.length > len ? str.substring(0, len - 3) + '...' : str;
  };

  render() {
    return (
      <div className="route-list">
        <input type="text" className="route-list__input" id="suggest" onKeyUp={this.addressFind} onKeyPress={this.addressAdd} placeholder="введите адрес ..."/>
        <ul className="route-list__list-items">
          {this.state.points.map((item, index) => (
            <li key={index} className="route-list__list-item">
              {this.normalizeLenStr(item, 28)}
              <button className="route-list__button" onClick={() => this.deleteListItem(this.state.points, index)}>Delete</button>
            </li>
          ))}
        </ul>
        {this.initSuggest()}
      </div>
    );
  }
}

export default RouteList;
