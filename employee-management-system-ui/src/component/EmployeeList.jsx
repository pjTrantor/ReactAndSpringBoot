import React, { useState, useEffect  } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployee();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => Navigate("/addEmployee")}
          className="rounded bg-teal-500 hover:bg-teal-800 px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-green-50 ">
            <tr>
              <th className="font-medium text-left text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="font-medium text-left text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="font-medium text-left text-gray-500 uppercase tracking-wider py-3 px-6">
                Email Id
              </th>
              <th className="font-medium text-right text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employees.map((employees) => (
                <Employee employees = {employees} key={employees.employeeId}/>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
