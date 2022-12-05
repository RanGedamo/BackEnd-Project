import "./Chart.css";
import 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import TableData from "../Table/Table";
import PieChart from "../Pie/Pie";
import CollectionChart from "../CollectionsChart/CollectionsChart";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Sale Items",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(20,0,0,0.5)",
      borderColor: "rgba(20,120,192,1)"
    }
  ]
};

const styleBox = {
  width: "250px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  textAlign: "center"
};


function Chart() {

  return (
    <div className="chart  d-flex container-fluid " style={{ flexWrap: "wrap" }}>
      <div className="col-12" style={{ height: "22vh" }} >
        <CollectionChart />
      </div>

      <div className=" col-md-7 col-lg-12 col-sm-12 d-flex text-center mt-4" >
        <Line data={data}  height="12vh"  width="100vw"/>
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
