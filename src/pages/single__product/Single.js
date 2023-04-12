import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductData } from "../../static/static__data";
const Single = () => {
    const [id, setID] = useState({})
    let Location = useLocation()
    useEffect(() => {
        const Arr = () => {
            ProductData.map(item => {
                return item.id === Location.state && setID(item)
            })
        }
        Arr()
    }, [Location.state])



    return (
        <div>
            <h1>{id.ProductName}</h1>
            <img style={{ width: "500px" }} src={id?.ProductImage?.type} alt="" />
        </div>
    )
}

export default Single



