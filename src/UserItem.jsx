import React from 'react'

const UserItem = ({user}) => {
  return (
  <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={user.imageUrl} alt="character" />
        </div>
        <div className="card-back">
          <h1>{user.fullName}</h1>
          <ul>
            <li>
              <strong>Family:</strong> {user.family}
            </li>
            <li>
              <strong>Title:</strong> {user.title}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserItem