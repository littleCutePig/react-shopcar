import React, { Component } from "react";
import { connect } from "react-redux";
import { allAction, checkAction, reduceAction, addAction } from "./action";
class Shop extends Component {
  state = {};
  render() {
    // console.log(this.props);
    const {
      list,
      all,
      allPrice,
      handleCheck,
      handleAll,
      handleReduce,
      handleAdd
    } = this.props;
    return (
      <div>
        Shop:
        <label>
          <input checked={all} onChange={handleAll} type="checkbox" />
          全选
        </label>
        ---总价:
        {list.reduce((all, item) => {
          return all + (item.checked ? item.price * item.num : 0);
        }, 0)}元
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <input
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
                type="checkbox"
              />
              名称：{item.name} <br />
              价格:￥{item.price}元 <br />
              <br /> 数量：
              <button onClick={() => handleReduce(item.id)}>-</button>
              {item.num} <button onClick={() => handleAdd(item.id)}>+</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({
  list: state.shopReducer.list,
  all: state.shopReducer.all,
  allPrice: state.shopReducer.allPrice
});

const mapDispatch = dispatch => ({
  /**
   * @function  -
   * @param {*} value 
   */
  handleReduce(value) {
    dispatch(reduceAction(value));
  },
  /**
   * @function  +
   * @param {*} value 
   */
  handleAdd(value) {
    dispatch(addAction(value));
  },
  /**
   * @function  总价
   */
  handleAll() {
    dispatch(allAction());
  },
  handleCheck(value) {
    dispatch(checkAction(value));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Shop);
