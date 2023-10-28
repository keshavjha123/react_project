import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap"

import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";



const Course = ({course, update}) =>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success(`Course deleted successfully`);
                update(id);
            },(error)=>{
                toast.error("There was an error deleting the course");
            }
        )
    }
    return (
        <Card  className="text-center">
            <CardSubtitle className="mt-3">
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center mb-3">
                    <Button color="danger mr-3" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>{' '}
                    <Button color="warning ml-3">Update</Button>
                </Container>
            </CardSubtitle>
        </Card>
    )
};

export default Course;