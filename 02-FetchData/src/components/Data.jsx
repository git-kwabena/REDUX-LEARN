import React from 'react'
import {useFetchUSersQuery} from "../features/users/usersApiSlice"
const Data = () => {
  const {data=[], isSuccess } =useFetchUSersQuery()
  console.log(data)
  return (
    <div>
      Data:
    </div>
  )
}

export default Data
