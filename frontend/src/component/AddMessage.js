import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../utils";

const AddMessage = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const saveMessage = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL}/Messages`, {
                name,
                message
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveMessage}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                            />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Message"
                                rows="4" // Sesuaikan tinggi text box
                            ></textarea>
                        </div>
                    </div>
                    <div className="field">
                        <button type="submit" className="button is-success">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMessage;
