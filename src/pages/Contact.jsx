import React from 'react'
import DisplayCard from '../components/DisplayCard'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Contact = () => {
const users = useSelector(state => state.users);

return (
    <div>
        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          <Link to="/create">Create Contact</Link>
          </button>
        </div>
        
      <DisplayCard users ={users}/>
    </div>
  )
}

export default Contact
