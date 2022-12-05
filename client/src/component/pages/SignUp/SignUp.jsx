import "./SignUp.css";
import React from "react";
import { useState } from "react";

function SignUp() {
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    });

    const onchangeInput = (e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
        console.log(inputs);
    }

    const postUser = async()=>{
        try{
            return await fetch("http://localhost:3030/api/users/create",{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            })
        }
        catch(err){console.log(err);}
    }


    return (
        <div className="sign-up d-flex justify-content-center box effect5 " >
            <div className="text-center  p-5  mt-3" action="#!">

                <p className="h4 mb-4">Sign up</p>

                <div className="form-row mb-4">
                    <div className="col">
                        <input type="text"  className="form-control" name="firstName" placeholder="First name" onChange={onchangeInput}/>
                    </div>
                    <div className="col">
                        <input type="text"  className="form-control" name="lastName" placeholder="Last name" onChange={onchangeInput}/>
                    </div>
                </div>

                <input type="email"  className="form-control mb-4" name="email" placeholder="E-mail" onChange={onchangeInput}/>

                <input type="password"  className="form-control mb-4" name="password" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={onchangeInput}/>

                <input type="password"  className="form-control "  name="confirmPassword" placeholder="Confirm Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={onchangeInput}/>
                <small  className="form-text text-muted mb-4">
                    At least 8 characters and 1 digit
                </small>

                <input type="text" id="defaultRegisterPhonePassword" name="phone" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" onChange={onchangeInput}/>
                <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                    Optional - for two step authentication
                </small>

                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
                    <label className="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
                </div>
                <a href="/">
                <button className="btn btn-info my-4 btn-block"  onClick={postUser} > Sign Up</button>
                </a>
                <br />
                <br />


                <em>Do you have a account?  </em>
                <a href="/" >Sign In</a>

            </div>
        </div>
    );
};

export default SignUp;
