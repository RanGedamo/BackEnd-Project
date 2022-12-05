import "./Update.css";
import { useState } from "react";


function Update() {
  const editStudent = JSON.parse(localStorage.getItem("student"))
  const [inputs, setInputs] = useState({
    firstName: editStudent.firstName,
    lastName: editStudent.lastName,
    email: editStudent.email,
    phone: editStudent.phone,
    lastUpdate: new Date()
  });


  const onchangeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })

  }

  const updateStudent = async () => {
    try {
      return await fetch("http://localhost:3030/api/students/update", {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs)
      })
    }
    catch (err) { console.log(err); }

    localStorage.removeItem("student")
  };

  return (
    <div className="updateStudent">
      <div className="sign-up d-flex justify-content-center box effect5 " >
        <div className="text-center  p-5  mt-3" action="#!">

          <p className="h4 mb-4 fs-3"><u><b>Update Student</b></u> </p>
          <br />

          <div className="form-row mb-4">
            <div className="col">
              <input type="text" className="form-control" defaultValue={editStudent.firstName} name="firstName" placeholder="First Name" onChange={onchangeInput} />
            </div>
            <div className="col">
              <input type="text" className="form-control" defaultValue={editStudent.lastName} name="lastName" placeholder="Last Name" onChange={onchangeInput} />
            </div>
          </div>

          <input type="email" className="form-control mb-4" defaultValue={editStudent.email} name="email" placeholder="email" onChange={onchangeInput} />


          <input type="text" id="defaultRegisterPhonePassword" defaultValue={editStudent.phone} name="phone" className="form-control mb-2" placeholder="Phone" aria-describedby="defaultRegisterFormPhoneHelpBlock" onChange={onchangeInput} />

          <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-1">
            Sum Test
          </small>
          <div className="d-flex justify-content-center text-center align-item-center">
            <input type="number" className="form-control  col-lg-4 text-center" defaultValue={editStudent.sumTests} name="SumTests" placeholder="Sum Tests" onChange={onchangeInput} />
          </div>



          <a href="/chart">
            <button className="btn btn-info my-4 btn-block" onClick={updateStudent}>Update </button>
          </a>
          <br />
          <br />


        </div>
      </div>
    </div>
  );
};

export default Update;
