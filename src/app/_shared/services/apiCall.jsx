// or less ideally
const url =
  "http://localhost:3001/";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

const getDocuments = async () => {
  headers.Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFub2pvd24xQGdtYWlsLmNvbSIsImlkIjoiNWRjNmFlY2YyYzY0NDI0ZDlkMjhkYmQzIiwiaWF0IjoxNTczMzAxOTc5fQ.ex00wzsdClBX6ip9pLfWx2NeTwOryKqdAoPSL1mhBBU'//localStorage.getItem("token");

  return fetch(url + 'document', {
    method: "Get", // or 'PUT'
    headers: headers
  }).then(res => {
    return res.json();
  });
};

const createDocuments = async (body) => {
  headers.Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFub2pvd24xQGdtYWlsLmNvbSIsImlkIjoiNWRjNmFlY2YyYzY0NDI0ZDlkMjhkYmQzIiwiaWF0IjoxNTczMzAxOTc5fQ.ex00wzsdClBX6ip9pLfWx2NeTwOryKqdAoPSL1mhBBU'//localStorage.getItem("token");
  console.log("body createDocuments", body)
  return fetch(url + 'document', {
    method: "Post", // or 'PUT'
    headers: headers,
    body: JSON.stringify(body)
  }).then(res => {
    return res.json();
  });
};

const editDocument = async (body) => {
  headers.Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFub2pvd24xQGdtYWlsLmNvbSIsImlkIjoiNWRjNmFlY2YyYzY0NDI0ZDlkMjhkYmQzIiwiaWF0IjoxNTczMzAxOTc5fQ.ex00wzsdClBX6ip9pLfWx2NeTwOryKqdAoPSL1mhBBU'//localStorage.getItem("token");
  console.log("body createDocuments", body)
  return fetch(url + 'document', {
    method: "Put", // or 'PUT'
    headers: headers,
    body: JSON.stringify(body)
  }).then(res => {
    return res.json();
  });
};
const deleteDocument = async (id) => {
  headers.Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWFub2pvd24xQGdtYWlsLmNvbSIsImlkIjoiNWRjNmFlY2YyYzY0NDI0ZDlkMjhkYmQzIiwiaWF0IjoxNTczMzAxOTc5fQ.ex00wzsdClBX6ip9pLfWx2NeTwOryKqdAoPSL1mhBBU'//localStorage.getItem("token");
  // console.log("body createDocuments", body)
  return fetch(url + `document/${id}`, {
    method: "Delete", // or 'PUT'
    headers: headers,
    // body: JSON.stringify(body)
  }).then(res => {
    return res.json();
  });
};

export default {
  getDocuments,
  createDocuments,
  editDocument,
  deleteDocument
};
