import React from "react";
import { Row, Col } from "antd";
import { useRequest } from "ahooks";
import "./Client.less";
import CardClients from "./CardClients";

const Client = () => {

    const { data: clients } = useRequest("https://intens.herokuapp.com/clients");

    return (
        <div className="client">
                <Row justify="center" gutter={[16,16]}>
                    {clients && clients.map((client, i) => (
                        <Col lg={8} md={12} key={`client${i}`}>
                            <CardClients data={client} />
                        </Col>
                    ))}
                </Row>
            </div>
    )
}

export default Client;