import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

function Dashboard() {
    let navigate = useNavigate();
    var username;
    if (sessionStorage.getItem('token') === null) {
        username = '';
    }else {
        var token = sessionStorage.getItem('token');
        var decoded = jwt_decode(token);
        username = decoded.username;
    }

    const Logout = () => {
        sessionStorage.removeItem("token");
        navigate('/');
    }

    useEffect(() => {
        if (sessionStorage.getItem('token') === null) {
            navigate('/');
        }else {
            navigate('/Dashboard');
        }
    }, [navigate]);


return (
    <>
    <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container">
            <h3 className="text-muted">Dashboard</h3>
            <div className="">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <button className="btn btn-warning"  onClick={Logout}>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div className="container-fluid ">
        <div className="container py-5">
            Welcome Back, <b>
                {username}
            </b>!
            <p>Ini Adalah Halaman Dashboard yang dibuat Oleh David Gunawan Dengan Menggunakan ReactJS-ExpressJS-MySQL </p>
            <blockquote>
                Harapannya Pembelajaran Ini murid Sudah bisa Membuat sesuatu menggunakan reactJS
            </blockquote>
        </div>
    </div>
        <div className="container-fluid fixed-bottom py-3 text-center bg-dark text-light">
            Copyright &copy; David Gunawan - 2022
        </div>
        </>
    );
}

export default Dashboard;