import React from 'react'

const Task2 = () => {
    const isLoggedIn = true; 
  return (
   
    <div>
      {isLoggedIn ? ( <h1>Welcome back! </h1> ) : (<h1>Please log in </h1>)}
    </div>
  );
}

export default Task2
