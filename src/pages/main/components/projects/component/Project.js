import React from "react";
import { Col, Row } from "antd";
import "./Project.less";
import { useRequest } from "ahooks";
import CardProject from "./CardProject";

const Project = () => {

    const { data: projects } = useRequest('https://intens.herokuapp.com/projects');

    return (

        <div className="Project">
            <Row justify="center">
                {projects && projects.map((project, i) => (
                    <Col lg={8} md={12} key={`project${i}`}>
                        <CardProject data={project} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Project;