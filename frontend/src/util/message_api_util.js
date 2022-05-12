import axios from "axios";

export const createMessage = message => (
    axios.post('/api/messages', message)
);

export const updateMessage = message => (
    axios.post(`/api/messages/${message.id}`, message)
);