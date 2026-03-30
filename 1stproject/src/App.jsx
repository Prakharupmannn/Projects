import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(data);
  }, []);

  const addUser = () => {
    const newUsers = [...users, name];
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
    setName("");
  };

  const deleteUser = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  return (
    <div className='p-4 justify-center items-center '>

      <h1 className='text-4xl justify-center'>CRUD using chrome Storage</h1>
<div className='flex gap-2 w-[20%] p-8'>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

      <button className='bg-[white] hover:bg-gray-400 hover:text-white' onClick={addUser}>Add</button>
</div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button className='bg-white hover:bg-gray-400 hover:text-white' onClick={() => deleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
