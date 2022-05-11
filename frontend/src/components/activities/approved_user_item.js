import React from "react";
import { Link } from "react-router-dom";

const ApprovedUserItem = ({user, closeModal}) => {
    let userId = user ? user._id : 0;
    let name = user ? `${user.fname} ${user.lname}` : "";

    let display = user ? (
        <div className="approved-user-item">
            <span className="approved-user-label">{name}</span>
            <img src={user.profilePhotoPath} className='nav__avatar approved-user-img' />
        </div>
    ) : null;
    
    return (
        <Link to={`/profile/${userId}`} onClick={() => closeModal()}>
            {display}
        </Link>
    )
}

export default ApprovedUserItem;