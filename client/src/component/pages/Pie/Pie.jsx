import "./Pie.css";
import React from "react";
import { Pie } from 'react-chartjs-2';
import { useEffect } from "react";
import { studentsAPI } from "../../../services/students-service";
import { useState } from "react";

const styleBox = {
  width: "200px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

};

function PieChart() {
  const [students,setStudents] = useState()
  useEffect(()=>{
    studentsAPI().then(res=>setStudents(res.result))
  },[])


const numStudents = students?.length;

const num90 = students?.filter(student=>{
   return student.sumTests > 90
  })
const num80 = students?.filter(student=>{
   return (student.sumTests < 91 && student.sumTests >80)
  })
const num70 = students?.filter(student=>{
   return (student.sumTests < 81 && student.sumTests >70)
  })
const num60 = students?.filter(student=>{
   return (student.sumTests < 71 && student.sumTests>60)
  });

  
  return (
    <div className="pie d-flex col-lg-12 justify-content-around flex-wrap">
      
  <div className="col-lg-4 col-sm-12 col-md-3 mt-4 " style={styleBox} >
    
          <Pie
            data={{
              labels: ['100<90', '90<80', '80<70','70<60'],
              datasets: [
                {
                  label: '# of votes',
                  data: [num90?.length,num80?.length, num70?.length, num60?.length ],
                }
              ]
            }}
          />
        </div>

        <div className="col-lg-4 col-sm-12 col-md-3 mt-4" style={styleBox} >
          
          <Pie
            data={{
              labels: ['Working',"Search Work",'Not Search'],
              datasets: [
                {
                  label: '# of votes',
                  data: [12, 19,3],
                },
              ],
            }}
          />
        </div>
            </div>
  );
};

export default PieChart;
