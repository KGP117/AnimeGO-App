import React, { Component } from "react";
import{ useState, useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import history from './../history';
import '../assets/css/Login.css';


export default function Home() {
    const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

    function isBob(){
      if(email=="bob"&&password=="bobpass"){
        history.push("/Search");
      }
    }
  
    return (
      <div className="container">

      <div className="">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <br></br>
            <Form.Control
              autoFocus
              //type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <br></br>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="loginButton" onClick={() =>isBob()} block size="lg" type="button" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
      </div>
    );
}
