/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";

export const getSupportsApi = async () => {
  const config = {
    headers: {
      "Content-Type": "multipart/application/json", // Important for sending files
      Authorization: `Bearer ${useToken()}`,
    },
  };
  // const response = await axios.get(
  //   "https://osicrypto-backend.onrender.com/api/supports",
  //   config
  // );
  const response = await axios.get(
    "http://localhost:3000/api/supports",
    config
  );
  return response;
};

export const getSupportByIdApi = async (id) => {
  const config = {
    headers: {
      "Content-Type": "multipart/application/json", // Important for sending files
      Authorization: `Bearer ${useToken()}`,
    },
  };
  // const response = await axios.get(
  //   `https://osicrypto-backend.onrender.com/api/supports/${id}`,
  //   config
  // );
  const response = await axios.get(
    `http://localhost:3000/api/supports/${id}`,
    config
  );
  return response;
};
const storedData = localStorage.getItem("token");

const useToken = () => {
  if (storedData) return JSON.parse(storedData).data;

  return "";
};

export const createSupportApi = async (cred) => {
  const formData = new FormData();
  formData.append("subject", cred.subject);
  formData.append("priority", cred.priority);
  formData.append("category", cred.category);
  formData.append("message[msg]", cred.message);
  cred.file && formData.append("message[fileImage]", cred.file, cred.file.name);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data", // Important for sending files
      Authorization: `Bearer ${useToken()}`,
    },
  };

  // const response = await axios.post(
  //   "https://osicrypto-backend.onrender.com/api/supports",
  //   formData,
  //   config
  // );
  const response = await axios.post(
    "http://localhost:3000/api/supports",
    formData,
    config
  );

  return response;
};

export const deleteSupportByIdApi = async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${useToken()}`,
      "Content-Type": "multipart/form-data", // Important for sending files
    },
  };

  // const response = await axios.delete(
  //   `https://osicrypto-backend.onrender.com/api/supports/${id}`,
  //   config
  // );
  const response = await axios.delete(
    `http://localhost:3000/api/supports/${id}`,
    config
  );
  return response;
};
