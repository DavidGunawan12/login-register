import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Khalid from './images/khalid.jpeg';
// import { Link } from 'react-router-dom';

import jwt_decode from "jwt-decode";

function Dashboard() {

    let navigate = useNavigate();
    var username;
    
    if (sessionStorage.getItem('token') === null) {
        username = '';
    }
    else {
        var token = sessionStorage.getItem('token');
        var decoded = jwt_decode(token);
        username = decoded.username;
    }

    const logout = () => {
        sessionStorage.removeItem("token");
        navigate('/');
    }

    useEffect(() => {
        if (sessionStorage.getItem('token') === null) {
            navigate('/');
        }
        else {
            navigate('/Dashboard')
        }
    }, [navigate]);

    return ( 
        <>
            <nav className="navbar navbar-expand-lg bg-light shadow">
                <div className="container">
                    <h3 className="text-dark">Dashboard RPL Website</h3>
                    <div className="">
                        <ul className="navbar-nav me-auto">
                            {/* <li className="nav-item m-1">
                                <Link to={'/register'} className="btn btn-primary">Register</Link>
                            </li>
                            <li className="nav-item m-1">
                                <Link to={'/'} className="btn btn-primary">Login</Link>
                            </li> */}
                            <li className="nav-item m-1">
                                <button className="btn btn-danger" onClick={logout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <div className="container-fluid bg-light">
                <div className="container py-5">
                    <br/>
                    <h3 className="text-center">Selamat Datang <u>{username}</u> Di Halaman Dashboard</h3>
                    <br/><br/>
                    Selamat Datang, <u><b>{username}</b></u> !
                    <p>Ini adalah halaman dashboard implementasi <b>Login</b> dan <b>Register</b> menggunakan <b>ReactJS-ExpressJS-MySQL</b> menggunakan <b>JWT Token</b>.</p>
                    <blockquote>
                        Harapannya dengan pembelajaran ini, peserta  didik sudah mampu untuk membuat dan mengimplementasikan sistem <b>Login-Register</b> ini untuk keperluan pembuatan aplikasi yang lebih kompleks.
                    </blockquote>
                    <p>
                        Terimakasih kami ucapkan kepada guru kejuruan kami, tanpa arahan dan bimbingannya, kami tidak dapat mampu untuk membuat berbagai desain dan website seperti ini.
                        <br />
                            <p className="ms-5">- Pengembangan Perangkat Lunak dan Gim.</p>
                    </p>
                    <p>
                        <br />
                        
                    </p>

                </div>
            </div>

            <div className="container-fluid fixed-bottom py-1 text-center bg-secondary text-light">
                Copyright &copy; David Gunawan - 2022
                <br/>
                &copy; 2022. Login-Register Website. All Rights Reserved. Designed, Developed & Maintained by <b>David Gunawan</b>
            </div>
        </>
     );
}

export default Dashboard;