import React from "react";
import { Row, Col, Card } from "antd";
import "./ListFamily.less";
import { useRequest } from "ahooks";

const { Meta } = Card;

const ListFamily = () => {

    const { data: family } = useRequest("https://intens.herokuapp.com/teams");

    return (
        <div className="ListFamily">
            <Row justify="center" gutter={[16,16]}>
                {family && family.map((family, i) => (
                     <Col lg={8} md={12} key={`family${i}`}>
                     <Card
                     cover={<img src={family.gambar} alt={family.name} />}
                     >
                         <Meta
                             title={family.nama}
                             description={family.jabatan}
                         ></Meta>
                     </Card>
                 </Col>
                ))}
            </Row>
        </div>
    )
}

export default ListFamily;