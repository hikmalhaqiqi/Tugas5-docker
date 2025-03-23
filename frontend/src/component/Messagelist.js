import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL } from "../utils";

const Messagelist = () => {

    const [Message, setMessage] = useState([]);

    useEffect(() => {
        getMessage();
    }, []);

    const getMessage = async () => {
        const response = await axios.get(`${BASE_URL}/Messages`);
        setMessage(response.data)
    }

    const deleteMessage = async (id) => {
        try{
            await axios.delete(`${BASE_URL}/Messages/${id}`);
            getMessage();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`add`} className='button is-success'>Addnew</Link>
                <table className="table is-fullwidth is-striped is-hoverable is-fullheight">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Message.map((Message, index) => (

                            <tr key = {Message.id}>
                                <td>{index +1}</td>
                                <td>{Message.name}</td>
                                <td>{Message.message}</td>
                                <td className='buttons is-flex is-flex-wrap-nowrap gap-2'>
                                    <Link to={`edit/${Message.id}`} className='button is-small is-info'>Edit</Link>
                                    <button onClick={() => deleteMessage(Message.id)} className='button is-small is-danger'>Hapus</button>

                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Messagelist