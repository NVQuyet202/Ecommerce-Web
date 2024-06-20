import axios from "axios";

export const axiosJWT = axios.create();

export const loginUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_AI_URL}/user/sign-in`,
    data
  );
  return res.data;
};

export const signUpUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_AI_URL}/user/sign-up`,
    data
  );
  return res.data;
};

export const getDetailsUser = async (id, access_token) => {
  const res = await axiosJWT.get(
    `${process.env.REACT_APP_AI_URL}/user/get-details/${id}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const refreshToken = async () => {
  const res = await axios.post(
    `${process.env.REACT_APP_AI_URL}/user/refresh-token`,
    {
      withCredentials: true,
    }
  );
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post(`${process.env.REACT_APP_AI_URL}/user/log-out`);
  return res.data;
};

export const updateUserService = async (dataUser) => {
  const { id, access_token, ...rests } = dataUser;

  const res = await axiosJWT.put(
    `${process.env.REACT_APP_AI_URL}/user/update-user/${id}`,
    rests,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};
