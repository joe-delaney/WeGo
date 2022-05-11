import React from "react";
import { Link } from "react-router-dom";

const ApprovedUserItem = ({user, closeModal}) => {
    let userId = user ? user.id : 0;
    let name = user ? `${user.fname} ${user.lname}` : "";
    
    return (
        <Link to={`/profile/${userId}`} onClick={() => closeModal()}>
            {name}
        </Link>
    )
}

export default ApprovedUserItem;