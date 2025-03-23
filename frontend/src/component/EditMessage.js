import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from "../utils";

const EditMessage = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Membungkus getMessageById dengan useCallback agar tidak berubah di setiap render
    const getMessageById = useCallback(async () => {
        try {
            const response = await axios.get(`${BASE_URL}/Messages/${id}`);
            setName(response.data.name);
            setMessage(response.data.message);
        } catch (error) {
            console.log("Error fetching Message data:", error);
        }
    }, [id]);

    useEffect(() => {
        getMessageById();
    }, [getMessageById]); // Memasukkan ke dependency array sesuai aturan ESLint

    const updateMessage = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${BASE_URL}/Messages/${id}`, {
                name,
                message
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateMessage}>
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
                        <button type="submit" className="button is-success">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditMessage;