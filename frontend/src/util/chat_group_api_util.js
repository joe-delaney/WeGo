import axios from "axios";
import { updateUser } from "./users_api_util";

export const createChatGroup = chatGroup => (
    axios.post(`/api/chatgroups`, chatGroup)
);

export const updateChatGroup = chatGroup => (
    axios.post(`/api/chatgroups/${chatGroup.id}`, chatGroup)
);