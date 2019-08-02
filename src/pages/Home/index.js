import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MapRoute } from "../../routes";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="wrap">
        <nav>
          <NavLink to="/list">列表</NavLink>&nbsp;&nbsp;&nbsp;
          <NavLink to="/shop">购物车</NavLink>
        </nav>
        <div>
          <MapRoute route={this.props.route} />
        </div>
      </div>
    );
  }
}

export default Home;
