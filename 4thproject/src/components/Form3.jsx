import React, { useEffect, useState } from 'react'

const Form3 = () => {

    const My_URL = 'http://192.168.1.36:5000/api/v1';

    // this will store selected ids
    const [data,setData] = useState({
        name: "",
        phone: "",
        state: "",
        city: "",
        district: "",
        tehsil: "",
        address: "",
    });

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [districts,setDistricts] = useState([]);
    const [tehsils, setTehsils] = useState([]);
    const [saveData, setSaveData] = useState('')

    const fetchStates = async () => {
        const result = await fetch(`${My_URL}/states`);
        const res = await result.json();
        setStates(res.data);
    }
    
    useEffect(() => {
        fetchStates();
    }, []);

    //when state change
    const handleStateChange = async (e) => {
        const stateId = e.target.value;
        console.log(stateId);
        // store selected state 
        setData((prev) => ({
            ...prev,
            state: stateId,
            city: "",
            district: "",
            tehsil: "",
        }));

        //reset dropdowns
        setCities([]);
        setDistricts([]);
        setTehsils([]);

        // fetch cities
        const cityResult = await fetch(`${My_URL}/cities/${stateId}`);
        const cityData = await cityResult.json();
        setCities(cityData.data);
    }

    const handleCitiesChange = async (e) => {
        const cityId = e.target.value;

        setData((prev) => ({
            ...prev,
            city: cityId,
            district: "",
            tehsil: ""
        }));

        setDistricts([]);
        setTehsils([]);

        const districtResult = await fetch(`${My_URL}/districts/${cityId}`);
        const districtData = await districtResult.json();
        setDistricts(districtData.data);
    }

    //when districts change
    const handleDistrictChange = async (e) => {
        const districtId = e.target.value;

        setData((prev) => ({
            ...prev,
            district: districtId,
            tehsil: "",
        }))

        setTehsils([]);

        const tehsilResult = await fetch(`${My_URL}/tehsils/${districtId}`);
        const result = await tehsilResult.json();
        setTehsils(result.data)
    };

    const handleTehsilChange = (e) => {
        const tehsilId = e.target.value;

        setData((prev) => ({
            ...prev,
            tehsil: tehsilId,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            name: data.name,
            phone: data.phone,
            state: data.state,
            city: data.city,
            district: data.district,
            tehsil: data.tehsil,
            address: data.address,
        };

        localStorage.setItem("formData", JSON.stringify(payload));

        console.log("savedPayload:" , payload);

        alert("Data Saved Successfully");
    };

    // useEffect(()=>{
    //     const savedData = localStorage.getItem("formData");
    //     console.log(savedData)

    //     // if(savedData) {
    //     //     const parsedData = JSON.parse(savedData);
    //     //     setData(parsedData);
    //     // }
    // },[])

    const handleView = (e) => {
        e.preventDefault();

        const saved = JSON.parse(localStorage.getItem("formData"));
            setSaveData(saved)

        console.log(saved)
    }

    // useEffect(() => {
    //     localStorage.setItem("formData", JSON.stringify(data));
    // },[data]);

  return (
    <>
        <form onSubmit={handleSubmit}>

            <div className='p-5 grid grid-cols-2 gap-2'>
                <input type="text" placeholder='Enter Name' value={saveData.name} onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))} className='border w-full'/>

                <input type="text" placeholder='Enter Phone' value={saveData.phone} onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value}))} className='border w-full'/>
            </div>
            
            <div className='p-5 grid grid-cols-4'>
                <select value={saveData.state} onChange={handleStateChange}>
                <option value="">Select State</option>
                {states?.map((item) => (
                    <option value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>

            <select value={saveData.city} onChange={handleCitiesChange} disabled={!data.state}>
                <option value="">Select City</option>
                {cities?.map((item) => (
                    <option value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>

            <select value={saveData.district} onChange={handleDistrictChange} disabled={!data.city}>
                <option value="">Select District</option>
                {districts?.map((item) => (
                    <option value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>

            <select value={saveData.tehsil} onChange={handleTehsilChange} disabled={!data.district}>
                <option value="">Select Tehsil</option>
                {tehsils?.map((item) => (
                    <option value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            </div>

            <div className='border border-black w-80 grid grid-cols-1 p-2'>
                <textarea name="address" value={saveData.address} placeholder='Enter address' onChange={(e) => setData((prev) => ({ ...prev, address: e.target.value}))}></textarea>
            </div>
            
            <div className='grid grid-cols-1'>
                <button type='submit'>Submit</button>
            </div>
            
            <div className='grid grid-cols-1'>
                <button type='submit' onClick={handleView}>View</button>
            </div>

        </form>
    </>
  )
}
export default Form3