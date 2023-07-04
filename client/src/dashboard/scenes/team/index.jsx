import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../../componentsDash/Header";
import axios from "axios";
import { useEffect, useState } from "react";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [userData, setUserData] = useState([
    {
      id: 0,
      user_image: "",
      birthday: "",
      language: "",
      premium: false,
      postulation: false,
      created: ""
    }
  ]);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "user_image",
      headerName: "Image",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "birthday",
      headerName: "Birthday",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "created",
      headerName: "Created",
      flex: 1,
    },
    {
      field: "language",
      headerName: "Language",
      flex: 1,
    },
    {
      field: "premium",
      headerName: "Premium",
      type: "boolean",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "postulation",
      headerName: "Postulation",
      type: "boolean",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params) => {
        const handleDelete =  () => {
          
          const confirmDelete = window.confirm("Are you sure you want to delete this user?");
          
          if (confirmDelete) {
            axios.delete(`http://127.0.0.1:8000/codec/api/user_extras/${params.row.id}`)

              .then(() => {
                axios.get("http://127.0.0.1:8000/codec/api/user_extras/")
                
                console.log("User deleted successfully");
                
              })
              .then(response => {
                
                setUserData(response.data);
              })
              .catch((error) => {
                console.error("Error deleting user:", error);
              });
          }
        };

        return (
          <DeleteIcon onClick={handleDelete}>delete</DeleteIcon>
        )
      },
    },
  ];


  useEffect(() => {
    axios.get("http://127.0.0.1:8000/codec/api/user_extras/")
    .then(response => {
      setUserData(response.data);
    }).catch(error => {
      console.error('Error fetching users data:', error);
    });
  }, []);
  console.log(userData);

  return (
    <Box m="20px">
      <Header title="Users" subtitle="Members Premium and others" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={userData} columns={columns} checkboxSelection  />
        
      </Box>
    </Box>
  );
};

export default Team;