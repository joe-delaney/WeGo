import React from "react";
import { Link } from "react-router-dom";

const PendingRequestItem = ({user, closeModal, approveUser, denyUser}) => {
        let name = user ? `${user.fname} ${user.lname}` : "";
        let userId = user ? user.id : 0;

        return (
            <li>
                <Link to={`/profile/${userId}`} onClick={() => closeModal()}>
                    <span>{name}</span>
                </Link>
                <button onClick={() => approveUser(userId)}>Approve</button>
                <button onClick={() => denyUser(userId)}>Deny</button>
            </li>
        )
}

export default PendingRequestItem;