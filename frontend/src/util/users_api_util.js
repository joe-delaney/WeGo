import axios from "axios";

//Fetch a specific user
export const fetchUser = (userId) => {
    return axios.get(`/api/users/${userId}`);
};

//Update a specific user
export const updateUser = (user) => {
    return axios.post(`/api/users/${user.id}`, user);
};

export const uploadPhoto = user => {
    return axios.post(`/api/users/${user.get('id')}/upload`, user);
};

export const deletePhoto = user => {
    return axios.patch(`/api/users/${user.id}/delete`, user);
};

export const updateUserWithForm = (userFormData) => {
    return axios({method: 'post', url: `/api/users/${userFormData.get('id')}`, data: userFormData, headers: { "Content-Type": "multipart/form-data" }});
};
