// or less ideally
const url =
  "https://cors-anywhere.herokuapp.com/https://nut-case.s3.amazonaws.com/jobs.json";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

const getJobs = async () => {
  //   headers.Authorization = localStorage.getItem("token");
  return fetch(url, {
    method: "Get", // or 'PUT'
    headers: headers
  }).then(res => {
    return res.json();
  });
};

export default {
  getJobs
};
