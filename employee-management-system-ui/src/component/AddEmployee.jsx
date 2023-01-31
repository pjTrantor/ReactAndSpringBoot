import React, { useState } from "react";

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id:"",
        firstName : "",
        lastName : "",
        email : ""
    })

    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]: value})
    }

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto h-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name = "firstName"
            value = {employee.firstName}
            onChange = {(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name = "lastName"
            value = {employee.lastName}
            onChange = {(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="text"
            name = "email"
            value = {employee.email}
            onChange = {(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="buttons row-auto">
          <div className="items-center justify-center h-14 w-full my-4 px-1 py-2 space-x-60">
            <button className="rounded text-white font-semibold bg-green-400 py-2 px-4 hover:bg-green-700">
              save
            </button>

            <button className="rounded text-white font-semibold bg-red-400 py-2 px-4 hover:bg-red-700">
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
