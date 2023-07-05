import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../../componentsDash/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../config";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [userData, setUserData] = useState([
    {
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      is_superuser: false,
      is_delete: false,
    },
  ]);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "first_name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "last_name",
      headerName: "Last Name",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "is_superuser",
      headerName: "Admin",
      flex: 1,
    },
    {
      field: "is_delete",
      headerName: "Is Delete",
      flex: 1,
    },

    {
      field: "Delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params) => {
        const handleDelete = () => {
          const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
          );

          if (confirmDelete) {
            axios
              .patch(`${API_URL}/codec/api/users/${params.row.id}/`, {
                is_delete: true,
              })
              .then((response) => {
                setUserData(response.data);
                window.location.reload();
              })
              .catch((error) => {
                console.error("Error deleting user:", error);
              });
          }
        };

        return <DeleteIcon onClick={handleDelete}>delete</DeleteIcon>;
      },
    },
  ];

  useEffect(() => {
    axios
      .get(`${API_URL}/codec/api/users/`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users data:", error);
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
        <DataGrid rows={userData} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};

export default Team;
