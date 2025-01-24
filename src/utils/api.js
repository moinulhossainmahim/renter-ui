import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Login
export const login = async (email, password) => {
  try {
    const response = await api.post(
      "/auth/login",
      { email, password },
      {
        timeout: 10 * 1000,
      }
    );

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Login failed. Please check your credentials.");
    throw error;
  }
};

//createUser or registration
export const createUser = async (
  name,
  email,
  password,
  password_confirmation
) => {
  try {
    const response = await api.post(
      `/auth/register`,
      { name, email, password, password_confirmation }
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    );
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const logout = async () => {
  try {
    await api.delete("/auth/logout");
  } catch (error) {
    toast.error("Logout failed. Please try again.");
    throw error;
  }
};

//my Profile
export const profileMe = async (token) => {
  try {
    const response = await api.post(`/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      transformResponse: (res) => {
        return JSON.parse(res).data.user;
      },
    });
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Old api endpoints
export const getAllProperties = async (search, page = 1, minPrice = 1, maxPrice = 100000) => {
  try {
    const response = await api.get("/listing/list", {
      params: { search, page, min_price: minPrice, max_price: maxPrice },
      timeout: 10 * 1000,
      transformResponse: (res) => {
        return JSON.parse(res).data.listings;
      },
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

// Create a new property
export const createProperty = async (propertyDetails) => {
  console.log("propertyDetails", propertyDetails);
  const formData = new FormData();

  Object.entries(propertyDetails).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => formData.append(`${key}[]`, item));
    } else {
      formData.append(key, value);
    }
  });

  try {
    const response = await api.post("/listing/store", formData);
    return response.data;
  } catch (error) {
    toast.error("Something went wrong while creating the property");
    throw error;
  }
};

//updateMyProfile
export const updateProfile = async (profileData) => {
  const token = localStorage.getItem("access-token");
  try {
    const response = await api.put(`/auth/profile-update`, profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get a single property
export const getProperty = async (id) => {
  try {
    const response = await api.get(`/listing/${id}/show`, {
      timeout: 10 * 1000,
      transformResponse: (res) => {
        return JSON.parse(res).data.listing;
      },
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    // toast.error("Something went wrong");
    // throw error;
    console.log('error', error);
  }
};

// Delete a property
export const deleteProperty = async (id) => {
  try {
    const response = await api.delete(`/listing/${id}/delete`);
    return response.data;
  } catch (error) {
    toast.error("Something went wrong while deleting the property");
    throw error;
  }
};
