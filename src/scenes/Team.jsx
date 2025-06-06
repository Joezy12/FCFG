import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import {mockDataTeam} from "../data/mockdata";
import  AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import  LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import  SecurityOutlinedIcon   from "@mui/icons-material/SecurityOutlined";
import Header from "../dashcomponent/Header";
import nodata from "../../public/woman.svg"

const Team = () => {
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);

 const noData = {
   background: `url(${nodata})`,
   backgroundSize: "cover",
   backgroundPosition: "center"

 }

 const columns = [

    {field: "date", headerName: "Date", flex: 1, cellClassName: "name-column--cell"},
    
    {field: "amount", headerName: "Amount", flex: 1,},
    {field: "email", headerName: "Type", flex: 1,},
    {field: "access", headerName: "status", flex: 1, 
    renderCell: ({row: {access}})=> {
       return (
        <Box
         width="60%"
         m="0 auto"
         p="5px"
         display="flex"
         justifyContent="center"
         backgroundColor={
            access === "pending"
            ? "orangered"
            : colors.greenAccent[700]
         }
         borderRadius="4px"
        className="histo-btn">
        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
        {access === "manager" && <SecurityOutlinedIcon/>}
        {access === "user" && <LockOpenOutlinedIcon/>}
        <Typography color={colors.grey[100]} sx={{ml: "5px"}}>
            {access}
        </Typography>

        </Box>
       )
    }},
 ]

 return (
    <Box m="20px">
        <Header title="HISTORY" subtitle=""/>
        <Box
        m="40px 0 0 0"
      sx={{
         "& .MuiDataGrid-root": {
            border: "none",
         },
         "& .MuiDataGrid-cell": {
            borderBottom: "none",
         },
         "& .name-column--cell": {
            color: colors.greenAccent[300]
         },
         "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
         },
         "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400]
         },
         "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
         }
      }}
        >
            {/* <DataGrid 
             rows={mockDataTeam}
             columns={columns}
            /> */}
            <div className="no-data" style={noData}>

            </div>
            <h1 className="tran">No transaction Yet</h1>
        </Box>
    </Box>
 )
}

export default Team;
