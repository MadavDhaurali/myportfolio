import React from 'react'
import {useNavigate} from 'react-router-dom';//hoke provided by reaact, to navigate away once submitted
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetupPages = () => {
  const navigate =useNavigate();
  function addMeetupHandler(meetupData){
    fetch('https://react-started-38d49-default-rtdb.firebaseio.com/meetups.json',
    {
      method: 'POST', // by default it will be get
      body: JSON.stringify(meetupData),
      headers:{
        'Content-Type':'application/json'
      }
    }
    ).then(() =>{
      navigate('/'); // leave that meetup page once we are done 

    })

// fatch () javascript function that allow us to send http request
// add .json is what firebase required, not js
// by default fatch send get request but we want 
//we need post request to send the data and store
  }
  return (
   <section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
   </section>
  )
}

export default NewMeetupPages