import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AllCourses= () =>{
    useEffect(()=>{
        document.title="All Course";
    },[]);
    const getAllCoursesFromServer=()=>{

        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response);
                toast.success("Course has been loaded")
                setCourses(response.data);
            },
            (error)=>{
                console.log("checking the error");
                console.log(error);
                toast.success("Server Down");
            }
        )
    }

    const updateCourseById=(id)=> {
        setCourses(courses.filter(c=>c.id !== id))
    }

    const [courses,setCourses] = useState([]);
    useEffect(()=>{getAllCoursesFromServer();},[]);

    return (
        <div>
            <h1> All Courses</h1>
            <p>List of courses are as follows</p>  
            {
                courses.length > 0 ?courses.map((course) => (
                    <Course course={course} key={course.id} update={updateCourseById}/>
                )):"No courses available"
            } 
        </div>      
    );
}

export default AllCourses;