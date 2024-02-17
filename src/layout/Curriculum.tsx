import exp from "constants";
import React from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';

type CurriculumTypes = {
    name: string;
    goal: string;
    children: CourseTypes[];
}

type CourseTypes = {
    name: string;
    goal: string;
    level: string;
    children: ModuleTypes[];
}

type ModuleTypes = {
    name: string;
    goal: string;
    children: LessonTypes[];
}

type LessonTypes = {
    name: string;
    goal: string;
    content: string;
    id: number;
}

const Curriculum = ({curriculum, show, setShow}) => {
    return(
        <Offcanvas show={show} onHide={() => {setShow(false)}}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{curriculum.name}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h6>{curriculum.goal}</h6>
                <ul>
                    {curriculum.children &&  curriculum.children.length > 0 && curriculum.children.map((course: CourseTypes) => {
                        return(
                            <li>
                                <h4>{course.name}</h4>
                                <p>{course.goal}</p>
                                <ul>
                                    {course.children && course.children.length > 0 && course.children.map((module: ModuleTypes) => {
                                        return(
                                            <li>
                                                <h6>{module.name}</h6>
                                                <p>{module.goal}</p>
                                                <ul>
                                                    {module.children && module.children.length > 0 && module.children.map((lesson: LessonTypes) => {
                                                        return(
                                                            <li>
                                                                <h6>{lesson.name}</h6>
                                                                <p>{lesson.goal}</p>
                                                                <p>{lesson.content}</p>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Curriculum;