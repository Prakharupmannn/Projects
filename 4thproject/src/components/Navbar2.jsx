import React from 'react'
import { Link, useLocation } from 'react-router-dom';


const Navbar2 = () => {

    const location = useLocation(); //current route info
    const role = location.state?.role; //get role from the navigation if available

  return (
    <div>
        <div className='flex gap-5 bg-gray-200 p-4'>

            <Link to="/home">Home</Link>
            <Link to="/about">AboutUs</Link>

            {role === "admin" && (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/admin-dashboard">Dashboard</Link>                
                </>
            )

            }
        </div>
    </div>
  )
}

export default Navbar2








// import { Link } from "react-router-dom";

// const Navbar2 = ({ setRole }) => {
//   const role = localStorage.getItem("role");

//   return (
//     <div className="flex justify-between items-center px-10 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-md">
      
//       <div className="text-xl font-bold tracking-wide">
//         MyApp
//       </div>

//       <div className="flex gap-6 text-[16px]">
//         <Link className="hover:text-sky-400 transition duration-300" to="/">
//           Home
//         </Link>

//         {role === "admin" && (
//           <Link className="hover:text-sky-400 transition duration-300" to="/about">
//             Aboutus
//           </Link>
//         )}

//         {role === "user" && (
//           <Link className="hover:text-sky-400 transition duration-300" to="/login">
//             Login
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar2;