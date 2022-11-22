import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from 'axios';



function Register() {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [validasi, setValidasi] = useState('')
    const [validsi,  setValidsi]  = useState('')
    const [vldsi, setVldsi] = useState('')
    const [nama, setnama] = useState('')

    const Register = () => {
        if(username === '') {
            setValidasi('Please Check Your Username');
        }else if(password ==='') {
            setValidsi('Please Check Your Password')
        }else if(nama ===''){
            setVldsi('Please Check Your Name')
        }else {
            // console.log(username,password,nama);
            Axios.post("http://localhost:3001/register",{
                username: username,
                password: password,
                nama: nama,
            })
        }
    }
    return ( 
        <>
        <div className="container">
        <div className="Container py-5">
            <h1 className="text-muted">Register</h1>
            <p className="text-muted">
                Please Create Account To In The Website♥
            </p>
            <hr/>
            <div className="form-grup">
                <label>Username</label>
                <input type='text' className="form-control" onChange={(e)=>{setUsername(e.target.value) }} />
                <b className="text-danger">{validasi}</b>
             </div>
               
     
            <div className="form-grup">
                <label>Password</label>
                <input type='password' className="form-control" onChange={(e)=>{setpassword(e.target.value) }} />
                <b className="text-danger">{validsi}</b>
                
            </div>
            <div className="form-grup">
                <label>Nama</label>
                <input type='text' className="form-control" onChange={(e)=>{setnama(e.target.value) }} />
                <b className="text-danger">{vldsi}</b>
                
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={Register}>
                    Register
                </button>
            </div>
            <p className="text-muted">
                You Have A Account Please Login <Link to='/'> Click Here!!!</Link>
            </p>
        </div>
        </div>
        </>
     );
}

export default Register;