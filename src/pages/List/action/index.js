import axios from 'axios'
const getDataAction = value => ({
  type: "INIT",
  value
});
export const addAction = value => ({
  type: "ADD",
  value
});
export const getListAction = () => dispatch =>
  axios.get("/data/list.json").then(({ data }) => {
    dispatch(getDataAction(data));
  });
