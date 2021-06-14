import axios from "axios";

const url = "https://reqres.in/api/users?page=";

const fetch = async (pageNum) => {
  const dataSet = await axios
    .get(`${url}${pageNum}`)
    .then((res) => res.data.data);
  return dataSet;
};

export default fetch;
