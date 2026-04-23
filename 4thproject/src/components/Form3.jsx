import React, { useEffect, useState } from 'react';

const Form3 = () => {
  const My_URL = 'http://192.168.1.36:5000/api/v1';

  const [data, setData] = useState({
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
  const [districts, setDistricts] = useState([]);
  const [tehsils, setTehsils] = useState([]);

  const fetchStates = async () => {
    const result = await fetch(`${My_URL}/states`);
    const res = await result.json();
    setStates(res.data);
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const handleStateChange = async (e) => {
    const stateId = e.target.value;

    setData((prev) => ({
      ...prev,
      state: stateId,
      city: "",
      district: "",
      tehsil: "",
    }));

    setCities([]);
    setDistricts([]);
    setTehsils([]);

    if (!stateId) return;

    const cityResult = await fetch(`${My_URL}/cities/${stateId}`);
    const cityData = await cityResult.json();
    setCities(cityData.data);
  };

  const handleCitiesChange = async (e) => {
    const cityId = e.target.value;

    setData((prev) => ({
      ...prev,
      city: cityId,
      district: "",
      tehsil: "",
    }));

    setDistricts([]);
    setTehsils([]);

    if (!cityId) return;

    const districtResult = await fetch(`${My_URL}/districts/${cityId}`);
    const districtData = await districtResult.json();
    setDistricts(districtData.data);
  };

  const handleDistrictChange = async (e) => {
    const districtId = e.target.value;

    setData((prev) => ({
      ...prev,
      district: districtId,
      tehsil: "",
    }));

    setTehsils([]);

    if (!districtId) return;

    const tehsilResult = await fetch(`${My_URL}/tehsils/${districtId}`);
    const result = await tehsilResult.json();
    setTehsils(result.data);
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

  const handleView = async () => {
    const saved = JSON.parse(localStorage.getItem("formData"));
    if (!saved) return;

    setData(saved);

    if (saved.state) {
      const cityResult = await fetch(`${My_URL}/cities/${saved.state}`);
      const cityData = await cityResult.json();
      setCities(cityData.data);
    }

    if (saved.city) {
      const districtResult = await fetch(`${My_URL}/districts/${saved.city}`);
      const districtData = await districtResult.json();
      setDistricts(districtData.data);
    }

    if (saved.district) {
      const tehsilResult = await fetch(`${My_URL}/tehsils/${saved.district}`);
      const tehsilData = await tehsilResult.json();
      setTehsils(tehsilData.data);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='p-5 grid grid-cols-2 gap-2'>
          <input
            type="text"
            placeholder='Enter Name'
            value={data.name}
            onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
            className='border w-full'
          />

          <input
            type="text"
            placeholder='Enter Phone'
            value={data.phone}
            onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value }))}
            className='border w-full'
          />
        </div>

        <div className='p-5 grid grid-cols-4 gap-2'>
          <select value={data.state} onChange={handleStateChange}>
            <option value="">Select State</option>
            {states?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <select value={data.city} onChange={handleCitiesChange} disabled={!data.state}>
            <option value="">Select City</option>
            {cities?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <select value={data.district} onChange={handleDistrictChange} disabled={!data.city}>
            <option value="">Select District</option>
            {districts?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <select value={data.tehsil} onChange={handleTehsilChange} disabled={!data.district}>
            <option value="">Select Tehsil</option>
            {tehsils?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className='border border-black w-80 grid grid-cols-1 p-2'>
          <textarea
            name="address"
            value={data.address}
            placeholder='Enter address'
            onChange={(e) => setData((prev) => ({ ...prev, address: e.target.value }))}
          />
        </div>

        <div className='grid grid-cols-1'>
          <button type='submit'>Submit</button>
        </div>

        <div className='grid grid-cols-1'>
          <button type='button' onClick={handleView}>View</button>
        </div>
      </form>
    </>
  );
};

export default Form3;
