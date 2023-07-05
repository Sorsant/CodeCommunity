import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../componentsDash/Header";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { API_URL } from "../../../config";

const PostScenes = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [postData, setPostData] = useState([
    {
      id: 0,
      title: "",
      user: "",
      description: "",
      image: "",
      likes: 0,
      created: "",
    },
  ]);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },

    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "user",
      headerName: "User",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      field: "likes",
      headerName: "Likes",
      flex: 1,
    },
    {
      field: "created",
      headerName: "Created",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "is_delete",
      headerName: "Is Delete",
      flex: 1,
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params) => {
        const handleDelete = () => {
          const confirmDelete = window.confirm(
            "Are you sure you want to delete this post?"
          );

          if (confirmDelete) {
            axios
              .patch(`${API_URL}/codec/api/post/${params.row.id}/`, { is_delete: true})
              .then((response) => {
                console.log("User deleted successfully");
                setPostData(response.data);
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
      .get( `${API_URL}/codec/api/post/`)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error("Error post data:", error);
      });
  }, [setPostData]);
  console.log(postData);

  return (
    <Box m="20px">
      <Header title="Post Users" subtitle="List of user posts" />

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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={postData}
          columns={columns}
          element={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default PostScenes;
