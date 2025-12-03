import React, { useState, useMemo } from 'react';


const studentList = [
  'Rohit',
  'Jaiswal',
  'Virat',
  'Iyer',
  'Rahul',
  'Pant',
  'Pandya',
  'jadeja',
  'Bumrah',
  'Steyn',
];

function Task9() {
  
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const filteredStudents = useMemo(() => {
    
    const lowerCaseSearch = searchTerm.toLowerCase();

   
    if (lowerCaseSearch === '') {
      return studentList;
    }

    
    return studentList.filter(student =>
      student.toLowerCase().includes(lowerCaseSearch)
    );
  }, [searchTerm]); 

  return (
    <div >
      <h2> Student Name Filter</h2>
      
      
      <input
        type="text"
        placeholder="Start typing a name..."
        value={searchTerm}
        onChange={handleChange}
        style={{ 
          width: '100%', 
          padding: '10px', 
          fontSize: '16px', 
          marginBottom: '15px',
          borderRadius: '4px',
          border: '1px solid #a56b6bff'
        }}
      />

      

     
      <h3>Matching Students ({filteredStudents.length})</h3>
      
      <ul>
        
        {filteredStudents.map((name, index) => (
          <li 
            key={index} 
            style={{ 
              padding: '8px', 
              borderBottom: '1px dotted #eee', 
              backgroundColor: index % 2 === 0 ? '#a43131ff' : 'white'
            }}
          >
            {name}
          </li>
        ))}
        
        
        {filteredStudents.length === 0 && (
          <li style={{ padding: '8px', color: 'red' }}>No students found matching "{searchTerm}"</li>
        )}
      </ul>
    </div>
  );
}

export default Task9;