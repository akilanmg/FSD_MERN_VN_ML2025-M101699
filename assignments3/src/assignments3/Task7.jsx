import React from 'react';


function ChildComponent({ handleAlertClick }) {
  return (
    <div >
      <h3> Child Component</h3>
      <p>Click the button below to call the function defined in the Parent.</p>
      
      
      <button onClick={handleAlertClick} >
        Call Parent's Function
      </button>
    </div>
  );
}


function Task7() {
  
 
  const showAlert = () => {
    alert('This is a Parent function');
    console.log('Parent function executed successfully.');
  };
  
  return (
    <div >
      <h2>‍ Parent Component</h2>
      <p>I define the `showAlert()` function and pass it down as a prop.</p>
      
      
      <ChildComponent handleAlertClick={showAlert} />
    </div>
  );
}


export default Task7;