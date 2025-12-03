

import { useState } from 'react';

const Task1 = () => {
  let students = [
    { id: 1, name: 'Abirame', dept: 'CSE', year: 2025 },
    { id: 2, name: 'Akilan', dept: 'CSE', year: 2025 },
    { id: 3, name: 'Arun', dept: 'CSE', year: 2025 },
  ];

  const [student, setStudents] = useState(students);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap',justifyContent:"space-around",}}>
      {student.map((element) => {
        return (
          <div key={element.id} className="card" style={{ width: '18rem', marginBottom: '20px' }}>
            <ul className="list-group">
              <li className="list-group">{element.name}</li>
              <li className="list-group">{element.dept}</li>
              <li className="list-group">{element.year}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Task1;

