import './App.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import AppContainer from './components/AppContainer';
import { Routes, Route } from 'react-router-dom';
import StreamDetails from './components/StreamDetails';
import StreamList from './components/StreamList';
import { Link, Outlet } from 'react-router-dom';

function App() {
    const API_URL = 'https://liveapi.kumu.live/site/get-browse-live';
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUser() {
            let res = await fetch(API_URL);
            let data = await res.json();
            setUsers(data.data.lives);
        }

        fetchUser();
    }, []);
    console.log(users);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<AppContainer data={users} />}>
                    <Route
                        path="/streamerslist"
                        element={<StreamList data={users} />}
                    />
                    <Route
                        path="/streamerslist/:channel_id"
                        element={<StreamDetails data={users} />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
