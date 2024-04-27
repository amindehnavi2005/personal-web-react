import React from 'react'

export default function UserComment({ userImage }) {
    return (
        <div className='userCommentBox'>
            <img className={"userImage"} src={userImage} alt="user" />
            <div className="userCommentCard">
                <p className='userCommentText'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
            </div>
        </div>
    )
}
