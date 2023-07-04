import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../componentsDash/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [ communityData, setCommunityData ] = useState([
    {
      id: 0,
      name: "",
      description: "",
      image: "",
      created: "",
      language: [],
    }
  ])
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
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
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params) => {
        const handleDelete = () => {
          
          const confirmDelete = window.confirm("Are you sure you want to delete this community?");
          
          if (confirmDelete) {
            axios.delete(`http://127.0.0.1:8000/codec/api/community/${params.row.id}`)
              .then((response) => {
                // Aquí puedes realizar alguna acción después de eliminar al usuario
                console.log("User deleted successfully");
                // const updatedUserData = userData.filter(user => user.id !== params.row.id);
                // setUserData(updatedUserData);
              })
              .catch((error) => {
                console.error("Error deleting community:", error);
              });
          }
        };

        return (
          <DeleteIcon onClick={handleDelete}>delete</DeleteIcon>
        )
      },
        
    },
    
  ];

  useEffect(() =>{
    axios.get("http://127.0.0.1:8000/codec/api/community/")
    .then(response => {
      setCommunityData(response.data);
    })
    .catch(error => {
      console.error('Error community data:', error)
    });
  }, [setCommunityData])

  return (
    <Box m="20px">
      <Header title="COMMUNITYS" subtitle="List of Communitys" />
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
        <DataGrid checkboxSelection rows={communityData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;