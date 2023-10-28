import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input ,Button} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import {toast} from "react-toastify"


const AddCourses = () =>{

    useEffect(() =>{
        document.title = "Add Course || Learn Code With Keshav";
    }, []);

    const [course, setCourse] = useState({});

    // creating function to post data in the server
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log("response",response);
                toast.success("course added successfully");
                
            },
            (error)=>{
                console.log("error",error);
            }
        ).then(()=>{
            setCourse({});
        });
    }

    const handleForm = (e) =>{
        console.log(course);
        e.preventDefault();
        postDatatoServer(course);
    };
    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input 
                        type="text"
                        placeholder="Enter Here"
                        name="userId"
                        id="userId"
                        onChange={(e) => {
                            setCourse({...course,id: e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input 
                        type="text"
                        placeholder="Enter title Here"
                        id="userId"
                        onChange={(e) => {
                            setCourse({...course,title: e.target.value});
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="description">Course description</label>
                    <Input 
                        type="textarea"
                        placeholder="Enter Description Here"
                        id="description"
                        style={{height:150}}
                        onChange={(e) => {
                            setCourse({...course,description: e.target.value});
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button  type = "submit" color="success">Add Course</Button>{' '}
                    <Button  type="reset" color="warning ml-10" onClick={() => {
                        setCourse({});
                    }}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourses;