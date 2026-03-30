import { useEffect, useState } from 'react'
import Cart from './Cart';

function App() {

  const [formData,setFormData] = useState({
    name: "",
    city: "",
    skills: [],
    gender: "",
  })

  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [errors , setError] = useState({});

  // delete logic 

  const handleDelete = (index) => {
    const updateData = data.filter((_, i) => i !== index);

    setData(updateData);
    localStorage.setItem("formData", JSON.stringify(updateData));
  };


  //edit logic 
  
  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  // for storing in the local storage
  useEffect(()=>{
    const savedData = JSON.parse(localStorage.getItem("formData")) || [];
    setData(savedData);
  },[]);

  // handle inputchange
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //handle checkbox
  const handleSkills = (e) => {
    const { value , checked } = e.target;

  if(checked) {
    setFormData({
      ...formData,
      skills: [...formData.skills, value],
    });
  } else {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill !== value),
    });
  }
}

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    //validation

    if(!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if(!formData.city) {
      newErrors.city = "Atleast one city is required";
    }

    if(formData.skills.length == 0){
      newErrors.skills = "Atleast one skill is required";
    }

    if(!formData.gender) {
      newErrors.gender = "Select your gender"
    }

    // if any error exist => stop
    if(Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    //clear error is valid
    setError({});

    let updatedData;

    if(editIndex !== null) {

      //edit mode
      updatedData = data.map((item, index) => 
        index === editIndex ? formData : item
      );
    } else {
      // add mode
      updatedData = [...data, formData];
    }

    setData(updatedData);

    localStorage.setItem("formData", JSON.stringify(updatedData));

    //reset form

    setFormData({
      name : "",
      city : "",
      skills : [],
      gender : "",
    });

    setEditIndex(null);
  };


  return (
    
     <div className='grid grid-cols-1 md:grid-cols-1 p-6'>

      <h1 className='text-3xl font-bold mb-4 ml-55'>STUDENT FORM</h1> 
      <div className='flex flex-1 justify-inbetween gap-5 lg:ml-42'>
      
      <div className='grid lg:grid-cols-2'>
        <form onSubmit={handleSubmit} className='bg-gray-100 p-6 rounded shadow'>

        <input type="text" name='name' placeholder='Enter your name' className='w-full mb-3 p-2 border rounded' value={formData.name} onChange={handleChange}/>
        {errors.name && <p className='text-red-600 text-sm '>{errors.name}</p>}

        <select name="city" className='w-full mb-3 p-2 border rounded' value={formData.city} onChange={handleChange}>
          <option value="">Select city</option>
          <option>Jabalpur</option>
          <option>Bhopal</option>
          <option>Indore</option>
          <option>Sagar</option>
          <option>Rewa</option>
        </select>
        {errors.city && <p className='text-red-600 text-sm'>{errors.city}</p>}

        <div className='mb-3'>
          <p className='font-semibold'>Skills:</p>

          {["C", "C++", "Java", "Python", "React"].map((skill) => (
            <label key={skill} className="block">
              <input type="checkbox" value={skill} checked={formData.skills.includes(skill)} onChange={handleSkills} /> {" "}
              {skill}
            </label>
          ))}
          {errors.skills && <p className='text-red-600 text-sm'>{errors.skills}</p>}
        </div>
        


        <div className='mb-3'>
          <p className='font-semibold'>Gender:</p>

          <label >
            <input type="radio" name='gender' value="Male" onChange={handleChange} checked={formData.gender === "Male"} /> {" "}
            Male
          </label>

          <label className='ml-3'>
            <input type="radio" name='gender' value="Female" onChange={handleChange} checked={formData.gender === "Female"} /> {" "}
            Female
          </label>

          <label className='ml-3'>
            <input type="radio" name='gender' value="Transgender" onChange={handleChange} checked={formData.gender === "Transgender"} /> {" "}
            Transgender
          </label> 
          {errors.gender && <p className='text-red-600 text-sm'>{errors.gender}</p>}
        </div>


        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full'>Submit</button>
      </form>
      </div>
      

      {/* display data*/}         

      <div className='mt-6 '>
        <h2 className='font-bold mb-2'>Saved Data:</h2>

        {data.map((item, index) => (
          <div key={index} className='bg-white p-3 mb-2 shadow rounded'>
              <p><b>Name:</b> {item.name}</p>
              <p><b>City:</b> {item.city}</p>
              <p><b>Skills:</b> {item.skills.join(", ")}</p>
              <p><b>Gender:</b> {item.gender}</p>
              <div>
                <button onClick={() => handleEdit(index)} className='gap-4 border-2 p-1 bg-black text-white hover:bg-gray-700 cursor-pointer rounded'>Edit</button>
                <button onClick={() => handleDelete(index)} className='gap-4 border-2 p-1 bg-black text-white  hover:bg-gray-700 cursor-pointer rounded'>Delete</button>
              </div>
          </div>
          
        ))}

      </div>
      </div>
    

    </div>

    
  )
}

export default App
