import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './style.css'
import { Axios } from "axios";



function Login() {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [validasi, setValidasi] = useState('')
    const [validsi,  setValidsi]  = useState('')
    let navigate = useNavigate();

    const Login = () => {
        if(username === '') {
            setValidasi('Username harus diisi')
        }else if(password ==='') {
            setValidsi('Password Harus Di Isi')
        }else {
            Axios.post("http://localhost:3000/login", {
                username: username,
                password: password,
            }).then((response) => {
                if (response.data.massage) {
                    setValidasi(response.data.massage);
                }else {
                    sessionStorage.setItem('token', response.data);
                    navigate('/dashboard');
                }
            });
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem('token') === null) {
            navigate('/');
        }else {
            navigate('/dashboard');
        }
    }, [navigate]);
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