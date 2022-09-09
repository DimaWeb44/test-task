import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import {News} from './ui/pages/News';
import {Profile} from './ui/pages/Profile';
import {Header} from "./ui/components/common/Header";
import {Grid, Paper} from '@mui/material';
import Navbar from "./ui/components/common/Navbar";

export const PATH = {
    PROFILE: '/profile',
    NEWS: '/news',
}

function App() {
    return (<>
            <Header/>
            <div className="App">
                <Grid   container spacing={2} sx={{height: 'auto', padding: '20px 70px 20px 70px'}}>
                    <Grid item xs="auto">
                        <Navbar/>
                    </Grid>
                    <Grid item xs>
                        <Paper elevation={4} style={{height: '100%'}}>
                            <Grid sx={{height: 'auto', padding: '30px'}}>
                                <Routes>
                                    <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>
                                    <Route path={PATH.NEWS} element={<News/>}/>
                                    <Route path={PATH.PROFILE} element={<Profile/>}/>
                                    <Route path={'/*'} element={<h1>Error 404</h1>}/>
                                </Routes>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default App;
