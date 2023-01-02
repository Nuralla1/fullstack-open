import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const create = (name, phone) => {
  const request = axios.post(baseUrl, { name: name, number: phone });
  return request.then((res) => res.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((res) => res.data);
};

const update = (updatedPerson) => {
  const request = axios.put(`${baseUrl}/${updatedPerson.id}`, updatedPerson);
  return request.then((res) => res.data);
};

const service = {
  getAll,
  create,
  remove,
  update,
};

export default service;
