import axios from "axios";

export const createMessage = message => (
    axios.post('/api/messages', message)
);

export const readMessage = messageInfo => (
    axios.post('/api/messages/read', messageInfo)
)