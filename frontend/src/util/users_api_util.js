import axios from "axios";

//Fetch a specific user
export const fetchUser = (userId) => {
    return axios.get(`/api/users/${userId}`);
};

//Update a specific user
export const updateUser = (user) => {
    return axios.patch(`/api/users/${user.id}`, user);
};

export const uploadPhoto = user => {
    return axios.post(`/api/users/${user.get('id')}/upload`, user);
};

export const deletePhoto = user => {
    debugger
    return axios.patch(`/api/users/${user.id}/delete`, user);
};