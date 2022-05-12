import axios from "axios";

export const createChatGroup = chatGroup => (
    axios.post(`/api/chatgroups`, chatGroup)
);

export const updateChatGroup = chatGroup => (
    axios.post(`/api/chatgroups/${chatGroup.id}`, chatGroup)
);