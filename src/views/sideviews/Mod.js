import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Loading from "../../components/Loading"
import "../../styles/ListMod.css";

const Mod = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {

        getUsers(`${process.env.API_URL}api/users`)

        return () => { }
    }, [])

    const getUsers = (url, options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }) => {

        fetch(url, options)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((response) => {
                console.log(response);
                setUsers(response);
            }).catch(e => {
                console.log(e);
            });
    }

    return (
        <div className="modrow row d-flex justify-content-center">
            <div className="modtable col-md-9 my-5">
                <table className="table table-dark table-hover table-responsive text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!users &&
                            users.length > 0 ?
                            users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td className="text-start">{user.email}</td>
                                        <td>{user.profile_id}</td>
                                        <td><FaEdit /></td>
                                        <td><FaTrashAlt /></td>        
                                    </tr>                                    
                                )
                            }) :
                            (
                                <tr><td colSpan="5" ><Loading /></td></tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Mod;