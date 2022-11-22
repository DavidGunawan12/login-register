import { Link } from "react-router-dom";
import { useState } from "react";
import './style.css'



function Login() {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [validasi, setValidasi] = useState('')
    const [validsi,  setValidsi]  = useState('')

    const Login = () => {
        if(username === '') {
            setValidasi('Username harus diisi')
        }else if(password ==='') {
            setValidsi('Password Harus Di Isi')
        }
    }
    return ( 
        <>
        <div className="Container">
        <div className="container py-5">
            <h1 className="text-muted">LOGIN</h1>
            <p className="text-muted">
                Please Login To Aunthethicate
            </p>
            <hr/>
            <div className="form-grup">
                <label className="text-muted">Username</label>
                <input type='text' className="form-control" onChange={(e)=>{setUsername(e.target.value) }} />
                </div>
                <b className="text-danger">{validasi}</b>
     
            <div className="form-grup">
                <label className="text-muted">Password</label>
                <input type='password' className="form-control" onChange={(e)=>{setpassword(e.target.value) }} />
                <b className="text-danger">{validsi}</b>
            </div>
            <div className="form-group">
                <button className="btn btn-danger" onClick={Login}>
                    Login
                </button>
            </div>
            <p className="text-muted">
                Don't have Account? Please Register <Link to='/register'> Click Here!!!</Link>
            </p>
        </div>
        </div>
        </>
     );
}

export default Login;