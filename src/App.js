import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='main'>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    {/*<Route path='/dialogs' component={Dialogs} />
                <Route path='/profile' component={Profile} />*/}

                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile'
                           render={() => <Profile state={props.state.profilePage}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
