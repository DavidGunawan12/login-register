import { Link } from "react-router-dom";
import { useState } from "react";



function Register() {
    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    // const [validasi, setValidasi] = useState('')
    // const [validsi,  setValidsi]  = useState('')
    const [nama, setnama] = useState('')

    const Register = () => {
        // if(username === '') {
        //     setValidasi('Username harus diisi')
        // }else if(password ==='') {
        //     setValidsi('Password Harus Di Isi')
        // }
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
             </div>
               
     
            <div className="form-grup">
                <label>Password</label>
                <input type='password' className="form-control" onChange={(e)=>{setpassword(e.target.value) }} />
                
            </div>
            <div className="form-grup">
                <label>Nama</label>
                <input type='text' className="form-control" onChange={(e)=>{setnama(e.target.value) }} />
                
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