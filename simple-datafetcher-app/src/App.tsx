import { useEffect, useState } from 'react'

import './App.css'
import type { User } from './User'

function App() {
  
  const [userData, setData] = useState<User[]>([]);

  const fetchData =async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    
    const filteredData: User[] = data.map((u: any) => {
      return {id: u.id,
      username: u.username,
      name: u.name,
      email: u.email}
    });


    setData(filteredData);


  }

  useEffect(()=>{
    fetchData();
  }, [])


  if(userData.length == 0){
    return(
      <p>loading....</p>
    )
  }
  return (
    <>
    <ul>
      {userData.map(u => {
        return (
          
          <li>{u.email}</li>
        )
      })}

    </ul>
    </>
  )
}

export default App
