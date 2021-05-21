import React, { useState } from 'react'
import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import ReposCard from './ReposCard.jsx';
import UserCard from './UserCard.jsx'

import userDefault from '../utils/userDefault.js';
import reposDefault from '../utils/reposDefault.js';

 const User = () => {
     const [data, setData] = useState(userDefault);
     const [userName, setUserName] = useState("");
     const [repos, setRepos] = useState(reposDefault)

     const onChangeHandler = e => {
         setUserName(e.target.value);
     };

     const submitHandler = async e => {
         e.preventDefault();
         
         const user = await fetch(`https://api.github.com/users/${userName}`);
         const userJson = await user.json();
         //console.log(userJson);
         
         const repo = await fetch(userJson.repos_url);
         const repoJson = await repo.json()
         //console.log(repoJson);

         if (userJson){
             setData(userJson);
             setRepos(repoJson);
         } else
                alert('Error Usuario invalido')
     }
    return (
        <> 
            <div>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="#home">GH-React</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link>{userName}</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Usuario de GitHub" className="mr-sm-2" onChange={onChangeHandler} />
                        <Button variant="outline-info" onClick={submitHandler} >Buscar</Button>
                    </Form>
                </Navbar>
            </div>
            <div className="App-header p-5">
                <UserCard profile={data}/>
                <ReposCard repos={repos}/>
            </div>
        </>
    );
};
export default User;
