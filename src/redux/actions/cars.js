import axios from "axios";
import { toast } from "react-toastify";
import { setCars, setCar } from "../reducers/cars";

export const getCars = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setCars(data));
  } catch (error) {
    if (
      error.response?.status === 401 &&
      error.response?.data?.message === "jwt malformed"
    ) {
      toast.error("Invalid authentication token. Please login again.");
    } else {
      // Handle other errors
      toast.error(error?.response?.data?.message || "An error occurred.");
    }
    // toast.error(error?.response?.data?.message);
  }
};

export const getCar =
  (navigate, id, setIsLoading) => async (dispatch, getState) => {
    setIsLoading(true);

    const { token } = getState().auth;

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.request(config);
      const { data } = response.data;

      dispatch(setCar(data));
    } catch (error) {
      toast.error(error?.response?.data?.message);

      navigate("/");
    }
    setIsLoading(false);
  };

export const AddCar =
  (navigate, plate, manufacture, model, year, image, setIsLoading) =>
  async (dispatch, getState) => {
    setIsLoading(true);
    const { token } = getState().auth;

    let data = new FormData();
    data.append("plate", plate);
    data.append("manufacture", manufacture);
    data.append("model", model);
    data.append("year", year);
    if (image) {
      data.append("image", image);
    }

    let config = {
      method: "post",
      url: `${import.meta.env.VITE_BACKEND_API}api/cars`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);

      console.log(JSON.stringify(response.data));

      // redirect to home
      // navigate("/"); // it will be not consistent, so alternative we use window until we used the state management
      //window.location = "/"; // temporary solution
      toast.success("Data Mobil Berhasil Ditambahkan");
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    setIsLoading(false);
  };

export const UpdateCar =
  (navigate, plate, manufacture, model, year, image, setIsLoading, id) =>
  async (dispatch, getState) => {
    setIsLoading(true);
    const { token } = getState().auth;

    let data = new FormData();
    data.append("plate", plate);
    data.append("manufacture", manufacture);
    data.append("model", model);
    data.append("year", year);
    if (image) {
      data.append("image", image);
    }

    let config = {
      method: "put",
      url: `${import.meta.env.VITE_BACKEND_API}api/cars/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);

      console.log(JSON.stringify(response.data));

      // redirect to home
      // navigate("/"); // it will be not consistent, so alternative we use window until we used the state management
      //window.location = "/"; // temporary solution
      toast.success(`Car dengan id: ${id} berhasil diupdate`);
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    setIsLoading(false);
  };

export const DeleteCar =
  (id, navigate, setIsLoading) => async (dispatch, getState) => {
    setIsLoading(true);

    const { token } = getState().auth;

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      toast.success(`Car dengan id: ${id} berhasil di hapus`);
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    setIsLoading(false);
  };
