import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { studentsAPI } from '../../../services/students-service';
import { useState } from 'react';
import { useContext } from 'react';
import { studentContext } from '../../../context/students-context';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  }
}));



export default function TableData() {
  const { student, setStudent } = useContext(studentContext)

  const [students, setStudents] = useState()
  useEffect(() => {
    studentsAPI().then(res => setStudents(res.result))
  }, [])


  const deleteStudent = async (email) => {
    if (window.confirm("Are you sure you want to delete this student?") === true) {
      localStorage.setItem("student", JSON.stringify(student))
      try {
        return await fetch("http://localhost:3030/api/students/delete", {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email })
        })
      }
      catch (err) { console.log(err) }
      console.log(student);
    }
  }

  // try {
  //   return await fetch("http://localhost:3030/api/students/update", {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(inputs)
  //   })
  // }
  // catch (err) { console.log(err); }
  // console.log(inputs);
  // };

  return (
    <TableContainer component={Paper} sx={{ height: 310 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell align='center'>First Name</StyledTableCell>
            <StyledTableCell align='center'>Last Name</StyledTableCell>
            <StyledTableCell align='center'>Email</StyledTableCell>
            <StyledTableCell align='center'>Update</StyledTableCell>
            <StyledTableCell align='center'>Del</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students?.map((row) => (
            <StyledTableRow >
              <StyledTableCell align='center'>{row.firstName}</StyledTableCell>
              <StyledTableCell align='center'>{row.lastName}</StyledTableCell>
              <StyledTableCell align='center'>{row.email}</StyledTableCell>
              <StyledTableCell align='center'><button onClick={() => setStudent(row)} ><a href='/Update' >update</a></button></StyledTableCell>
              {localStorage.setItem("student", JSON.stringify(student))}
              <StyledTableCell align='center'><button onClick={() => deleteStudent(row.email)}><a href='/chart'>del</a></button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  );
}