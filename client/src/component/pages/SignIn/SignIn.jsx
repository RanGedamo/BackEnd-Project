import "./SignIn.css";
import { useState } from "react";
import { useEffect } from "react";
import { usersAPI } from "../../../services/users-service";





function SignIn() {
    const [users, setUsers] = useState()

    const [btn, setBtn] = useState(true)

    useEffect(() => {
        usersAPI().then(result => setUsers(result.data))

    }, [])
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        const userPassword = inputs.password
        users?.map(user =>{
            if(inputs.email == user.email && userPassword.length > 5){
                return setBtn(false)
            }
        })
    }, [inputs])


    const onchangeInput = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

  
    const login = ()=>{
        localStorage.setItem("user",inputs.email)
        postUser()
    };

    const postUser = async () => {
        try {
            return await fetch("http://localhost:3030/api/users/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            })
        }
        catch (err) { console.log(err); }
    };

    return (
        <div className="sign-in d-flex justify-content-center  effect5 ">
            
                <div className="text-center  p-5 mt-3 col-md-3 " action="#!" >

                    <p className="h4 mb-4">Sign in</p>

                    <input type="email" id="defaultLoginFormEmail" name="email" className="form-control mb-4" placeholder="E-mail" onChange={onchangeInput} />

                    <input type="password" id="defaultLoginFormPassword" name="password" className="form-control mb-4" placeholder="Password" onChange={onchangeInput} />
                    <button className="btn btn-info btn-block my-4 " disabled={btn} onClick={login}><a href="/chart">Sign in</a></button>
                    <br />
                    <p>Not a member?
                        <a href="signUp"> Register Here</a>
                    </p>

                </div>

        </div>
    );
};

export default SignIn;
