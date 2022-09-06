import React, { useState } from "react";
import { deleteUser } from "../Redux/action";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUsers } from "../Redux/action";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const Bhag1Table = () => {

  
  const handledelete = (id) => {
    if (window.confirm("Are You Sure To Delete User Data ?")) {
      dispatch(deleteUser(id));
    }
  };

  let n = 1;

  const { users } = useSelector((state) => state.data);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead style={{ backgroundColor: "grey" }}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="left">कार्य का स्वरूप</TableCell>
                  <TableCell align="left">कार्य की प्रकृति 1</TableCell>
                  <TableCell align="left">कार्य की प्रकृति 2</TableCell>
                  <TableCell align="left">कार्य की प्रकृति 3</TableCell>
                  <TableCell align="left">नाम </TableCell>
                  <TableCell align="left">पिता / पति का नाम </TableCell>
                  <TableCell align="left">जन्म तिथि </TableCell>
                  <TableCell align="left">लिंग </TableCell>
                  <TableCell align="left">आयु </TableCell>
                  <TableCell align="left">जाति </TableCell>
                  <TableCell align="center" colSpan={2}>
                    ACTION
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell>{n++}</TableCell>
                    <TableCell>{user.karyaSwaroop}</TableCell>
                    <TableCell component="th" scope="row">
                      {user.karyaPrakriti1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.karyaPrakriti2}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.karyaPrakriti3}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.fatherName}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.dob}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.gender}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.age}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {user.caste}
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <Button
                        variant="contained"
                        onClick={() => handledelete(user.id)}
                      >
                        {" "}
                        <DeleteOutlineIcon />
                        Delete
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Link to={`/update-applicant-form-part-1/${user.id}`}>
                        <Button variant="contained">
                          <ModeEditOutlineOutlinedIcon /> Edit
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Container>
    </>
  );
};

export default Bhag1Table;
