import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";

const UsersTable = () => {
  const [userData, setUserData] = useState([]);
  const getUsers = async () => {
    try {
      const response = await fetch("/api/quiz/get-users");
      if (response.ok) {
        const result = await response.json();
        console.log(result, " result ");
        setUserData(result);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  const columns = useMemo(
    () => [
      {
        name: "#",
        cell: (row, index) => index + 1,
        grow: 1,
      },
      // {
      //     name: "Actions",
      //     cell: (row) => (
      //         <>
      //             <button className="mr-4" onClick={() => handleEditClick(row)}>Edit</button>
      //             <button className="text-red" onClick={() => handleDeleteClick(row)}>Delete</button>
      //         </>
      //     ),
      //     ignoreRowClick: true,
      //     allowOverflow: true,
      //     grow: 2,
      // },
      {
        name: "User Name",
        selector: (row) => row.name,
        center: true,
        sortable: true,
        grow: 2,
      },
      {
        name: "City",
        selector: (row) => row.city,
        center: true,
        sortable: true,
      },
      {
        name: "Email",
        selector: (row) => row.email,
        sortable: true,
        center: true,
        width: "230px",
      },
      {
        name: "Phone Number",
        selector: (row) => row.phonenumber,
        sortable: true,
        center: true,
        width: "150px",
      },
      {
        name: "Subject",
        selector: (row) => row.subject,
        sortable: true,
        center: true,
      },
      {
        name: "Score",
        selector: (row) => row.score,
        sortable: true,
        center: true,
      },
    ],
    []
  );
  return (
    <div>
      <DataTable
        title="Users"
        data={userData}
        columns={columns}
        //onSelectedRowsChange={handleChange}
      />
    </div>
  );
};

export default UsersTable;
