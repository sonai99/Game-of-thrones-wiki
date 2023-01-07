/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import UserItem from './UserItem'

const Characters = ({users}) => {
    // console.log(users)
    const [search, setSearch] = useState("")
  return (
    <><>
          <section className='search'>
              <form action="">
                  <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search a Breaking Bad character" />
              </form>
          </section>
      </><div className='cards'>
              {users.filter((value) => {
                  if (value.fullName.toLowerCase().includes(search.toLowerCase())) {
                      return value;
                  }
              }).map((user) => (
                  <UserItem user={user} />
              ))}
          </div></>
  )
}

export default Characters