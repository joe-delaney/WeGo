import React from "react";
import { Link } from "react-router-dom";

const PendingRequestItem = ({user, closeModal, approveUser, denyUser}) => {
        let name = user ? `${user.fname} ${user.lname}` : "";
        let userId = user ? user._id : 0;
        let img = user ? (
            <img src={user.profilePhotoPath} className='nav__avatar' />
        ) : null;

        return (
            <li className="pending-request-item">
                <div className="pending-request-item-left">
                    {img}
                    <Link to={`/profile/${userId}`} onClick={() => closeModal()}>
                        <span className="pending-request-name">{name}</span>
                    </Link>
                </div>
                <div>
                    <button className="btn btn--blue-dark btn--medium btn--pending" onClick={() => approveUser(userId)}>Approve</button>
                    <button className="btn btn--accent btn--medium btn--pending" onClick={() => denyUser(userId)}>Deny</button>
                </div>
            </li>
        )
}

export default PendingRequestItem;