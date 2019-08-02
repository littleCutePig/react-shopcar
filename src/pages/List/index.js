import React, { Component } from "react";
import { connect } from "react-redux";
// import axios from "axios";
import { getListAction,addAction } from "./action";
class List extends Component {
  state = {};
  render() {
    const { list,handleAdd } = this.props;
    return (
      <div className="list">
        List:
        <div>
          {// console.log(this.props)
          list.map(item => (
            <dl key={item.id}>
              <dt>
              {/* <img src={item.img} alt=""/> */}
              </dt>
              <dd>
                <p>{item.name}</p>
                <p>￥{item.price}元</p>
                <button onClick={() => handleAdd(item)}>添加</button>
              </dd>
            </dl>
          ))}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.getData();
  }
}
const mapState = state => {
  // console.log(state)
  return {
    list: state.listReducer.list
  };
};
const mapDispatch = dispatch => {
  // console.log(dispatch)
  return ({
  handleAdd(value){
    dispatch(addAction(value))
  },
  getData() {
    dispatch(getListAction())
  }
})};

export default connect(
  mapState,
  mapDispatch
)(List);
