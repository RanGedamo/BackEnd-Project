import "./Chart.css";
import 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import TableData from "../Table/Table";
import PieChart from "../Pie/Pie";
import CollectionChart from "../CollectionsChart/CollectionsChart";
import { useEffect } from "react";
import { studentsAPI } from "../../../services/students-service";
import { useState } from "react";



const styleBox = {
  width: "250px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  textAlign: "center"
};


function Chart() {
  const [students, setStudents] = useState()
  useEffect(() => {
    studentsAPI().then(res => setStudents(res?.result))
  }, [])

  const names = []
  students?.map((item,i) => {
    if(i<15){
        names.push(`${item?.firstName} ${item?.lastName}`)
}
return
})

  const sum = []
   students?.map((item) =>{
    sum.push(item.sumTests)
   })


  const data = {
    labels: [...names],
    datasets: [
      {
        label: "Sale Items",
        data: [...sum],
        fill: true,
        backgroundColor: "rgba(20,0,0,0.5)",
        borderColor: "rgba(20,120,192,1)"
      }
    ]

  };
  return (
    <div className="chart  d-flex container-fluid " style={{ flexWrap: "wrap" }}>
      <div className="col-12" style={{ height: "22vh" }} >
        <CollectionChart />
      </div>

      <div className=" col-md-7 col-lg-12 col-sm-12 d-flex text-center mt-4" >
        <Line data={data} height="12vh" width="100vw" />
      </div>


      <div className="col-lg-7 col-sm-12 ">
        <PieChart />
      </div>
      <div className=" col-lg-5 col-sm-12 col-md-3 mt-4 d-flex">
        <TableData />
      </div>
    </div>

  );
};

export default Chart;
