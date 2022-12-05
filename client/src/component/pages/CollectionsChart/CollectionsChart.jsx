import "./CollectionsChart.css";
import React from "react";
import { useEffect, useState } from "react";
import { coursesAPI } from "../../../services/courses-service";
import { studentsAPI } from "../../../services/students-service";
import { lastStudentsAPI, lastStudentsWorkingAPI } from "../../../services/lastStudents-service";
import { studentsExamsAPI } from "../../../services/exams-service";



const styleBox = {
  width: "250px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

function CollectionChart() {
  const [courses, setCourses] = useState()
  const [students, setStudents] = useState()
  const [lastStudents, setLastStudents] = useState()
  const [studentExams, setStudentExams] = useState()
  const [studentsWorking, setStudentsWorking] = useState()

  useEffect(() =>{
    coursesAPI().then(res => setCourses(res.result))
    studentsAPI().then(res=>setStudents(res.result))
    lastStudentsAPI().then(res=>setLastStudents(res.result))
    lastStudentsWorkingAPI().then(res=>setStudentsWorking(res.result))
    studentsExamsAPI().then(res=>setStudentExams(res.result))
    }, [])

    return (

    <div className="col-12 d-flex justify-content-center text-white" style={{ height: "22vh" }} >
      <div className="bg-dark col-lg-2 m-3 mb-3 text-center fs-4" style={styleBox} ><b className="fs-5">Courses</b><br /><br /><b className="fs-1">{courses?.length}</b></div>
      <div className="bg-dark col-lg-2 m-3 mb-3 text-center fs-4" style={styleBox} ><b className="fs-5">Students Full-Stack</b><br /><br /><b className="fs-1">{students?.length}</b></div>
      <div className="bg-dark col-lg-2 m-3 mb-3 text-center fs-4" style={styleBox} ><b className="fs-5">Entrance exams</b><br /><br /><b className="fs-1">{studentExams?.length}</b></div>
      <div className="bg-dark col-lg-2 m-3 mb-3 text-center fs-4" style={styleBox} ><b className="fs-5">Last Full-Stack</b><br /><br /><b className="fs-1">{lastStudents?.length}</b></div>
      <div className="bg-dark col-lg-2 m-3 mb-3 text-center fs-4" style={styleBox} ><b className="fs-5">Last Full-Stack Working</b><br /><br /><b className="fs-1">{studentsWorking?.length}</b></div>
    </div>
  );
};

export default CollectionChart;
