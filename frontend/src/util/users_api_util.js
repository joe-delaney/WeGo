import axios from "axios";

//Fetch a specific user
export const fetchUser = (userId) => {
    return axios.get(`/api/users/${userId}`);
};

//Update a specific user
export const updateUser = (user) => {
    return axios.post(`/api/users/${user.id}`, user);
};