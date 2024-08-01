import React, { memo } from 'react'
const empty = 'https://thumbs.dreamstime.com/b/laptop-computer-user-icon-vector-isolated-white-person-work-online-pictogram-business-worker-analyst-student-coder-customer-316853739.jpg'

const UserCart = ({ user }) => {

    return (
        <div className='user__cart'>
            <img className="user__img" src={user.url ?? empty} alt="" />
            <div className="user__info">
                <li> <span>Full name:</span> <p>{user?.fname}{user?.lname}</p></li>
                <li> <span>Age:</span> <p>{user?.age}</p></li>
                <li> <span>Gander:</span> <p>{user?.gander}</p></li>
                <li> <span>Username:</span> <p>{user?.username}</p></li>
                <li> <span>Budget:</span> <p>{user?.budget}$</p></li>
                <li> <span>Email:</span> <p>{user?.email}</p></li>
            </div>
            <div className="cart__btns">
                <button className="edit__btn" >Edit</button>
                <button className="delete__btn" >Delete</button>
            </div>
        </div>
    )
}

export default memo(UserCart)