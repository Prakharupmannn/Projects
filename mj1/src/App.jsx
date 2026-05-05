import React, { useState } from 'react'


const App = () => {
  const [tab, setTab] = useState("active");
  const [showModal, setShowModal] = useState(false);

  const [heading, setHeading] = useState([
    { id: 1, name: "Hormonal", scode: "Hormonal", order: 13 },
    { id: 2, name: "Cythology", scode: "Cythology", order: 12 }
  ]);

  // input states
  const [headName, setHeadName] = useState("");
  const [headSCode, setHeadSCode] = useState("");
  const [headOrder, setHeadOrder] = useState("");

  //save function
  const handleSave = () => {
    if(headName === "" || headSCode === "" || headOrder === "") {
      alert("Please fill all fields!");
      return;
    }
  }

  const newHeading = {
    id: headings.length + 1,
    name: headName,
    scode: headSCode,
    order: headOrder
  }

  setHeadings([...headings, newHeading]);

  setHeadName("");
  setHeadSCode("");
  setHeadOrder("");

  setShowModal(false);
};

  return (
    <div>

      <div className='bg-blue-900 text-white p-2 mx-5 my-5 rounded-2xl text-2xl'>
        Pathology Heading List
      </div>

      <div>

        <div className='border border-gray-300 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.3)] mx-5 my-5 m-0 p-0 h-screen'>

          <div className='mt-4 ml-1 flex gap-1'>

            <button onClick={() => setTab("active")} className={`px-6 py-2 rounded-xl transition-all duration-300 ${tab === "active"
              ? "bg-white text-black font-bold border border-gray-300"
              : "bg-blue-900 text-white"
              }`}>Active</button>

            <button onClick={() => setTab("inactive")} className={`px-6 py-2 rounded-xl transition-all duration-300 ${tab === "inactive"
              ? "bg-white text-black font-bold border border-gray-300"
              : "bg-blue-900 text-white"
              }`}>Inactive</button>

          </div>
          <hr className='border-blue-300' />

          <div>
            <select className=" mt-3 ml-3 border border-gray-400 px-4 py-2 rounded w-60">
              <option value="">Search Heading</option>
              <option value="1">BODY FLUID</option>
              <option value="2">CARDIAC</option>
              <option value="3">CLINICAL</option>
              <option value="4">COAGULATION</option>
            </select>

            <input className='border border-yellow-300 px-3 ml-1 h-10 rounded' type="text" placeholder='Search by S Code' />

            <input className='border border-yellow-300 px-3 ml-1 h-10 rounded' type="text" placeholder='Search by Order' />

            <button className='bg-green-600 text-white h-10 w-20 ml-1 rounded'>Search</button>

            <button onClick={() => setShowModal(true)} className='bg-purple-600 text-white h-10 w-40 ml-1 rounded'>Add New Heading</button>

          </div>

          <div>
            <table className='mt-3 w-full border-separate border-gray-300 rounded'>

              <thead className='bg-blue-900 text-white rounded'>
                <tr>
                  <th>S No.</th>
                  <th>Head Name</th>
                  <th>Head Short Name</th>
                  <th>Head Order</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                <tr className='text-center'>
                  <td>1</td>
                  <td>Hormonal</td>
                  <td>Hormonal</td>
                  <td>13</td>
                  <td><button className='bg-white text-green-400 border m-1 px-3 py-1 rounded'>Edit</button></td>
                  <td className="p-3 border border-white">
                    <div className="flex justify-center items-center">
                      <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>

                <tr className='text-center'>
                  <td>2</td>
                  <td>Cythology</td>
                  <td>Cythology</td>
                  <td>12</td>
                  <td><button className='bg-white text-green-400 border m-1 px-3 py-1 rounded'>Edit</button></td>
                  <td className="p-3 border border-white">
                    <div className="flex justify-center items-center">
                      <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {showModal && (
            <div className="fixed inset-0 bg-gray-300 bg-opacity-40 flex justify-center items-center z-50">

              <div className="bg-white w-[90%] max-w-lg p-5 rounded-xl shadow-lg border-gray-200">

                <h2 className="text-2xl font-bold mb-4 text-green-800">Create New Head</h2>

                <hr className='border-gray-300' />
                <div className='grid grid-cols-3 gap-2'>
                  <div> Head Name
                    <input
                      type="text"
                      placeholder="Type Head Name"
                      className="w-full border border-yellow-400 shadow-amber-300 rounded px-3 py-2 mb-4"
                    />
                  </div>

                  <div> Head SCode
                    <input
                      type="text"
                      placeholder="Type Head SCode"
                      className="w-full border border-yellow-400 shadow-amber-300 rounded px-3 py-2 mb-4"
                    />
                  </div>

                  <div> Head Order
                    <input
                      type="text"
                      placeholder="Type your Order"
                      className="w-full border border-yellow-400 shadow-amber-300 rounded px-3 py-2 mb-4"
                    />
                  </div>

                </div>
                <hr className='border-gray-300' />


                <div className="flex justify-end gap-3 mt-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-gray-500"
                  >
                    Save
                  </button>

                  <button onClick={() => setShowModal(false)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Cancel
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  )
}

export default App