import React, { Component } from 'react';
import './Route-list.css';

class RouteList extends Component {
  points = ['Москва, метро Смоленская', 'Москва, метро Арбатская', [55.734876, 37.59308]];

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  deleteListItem = (list, i) => {
    list.splice(i, 1);
    this.setState({ count: this.state + 1 });
  };

  render() {
    return (
      <div className="route-list">
        <input className="route-list__input" placeholder="введите адрес ..."/>
        <ul className="route-list__list-items">
          {this.points.map((item, index) => (
            <li key={index} className="route-list__list-item">
              {item}
              <button className="route-list__button" onClick={() => this.deleteListItem(this.points, index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RouteList;
