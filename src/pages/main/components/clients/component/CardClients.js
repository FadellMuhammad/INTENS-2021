import React from "react";
import { Card } from "antd";

const {Meta} = Card;

const CardClients = (props) => {
    return (
        <Card
        cover={<img src={props.data.gambar} alt={props.data.nama} />}
        className="card-item"
    >
         <Meta
        title={props.data.nama}
    ></Meta> 
     </Card>
    )
}

export default CardClients;