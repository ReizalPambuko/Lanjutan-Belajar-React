import React, { Fragment } from "react";
import './CrudApi.css'




let CrudApi = (props) => {
    return(
        <Fragment>
            <div className="crud">
                <div className="img-thumb">
                    <img src="https://placeimg.com/200/150/any/grayscale" alt="" />
                </div>
                <div className="content-crud">
                    <h3>{props.data.title}</h3>
                    <p>{props.data.body}</p>
                    <button className="update" onClick={() => props.update(props.data)}>Update</button>
                    <button className="delete" onClick={() => props.remove(props.data.id)}>Delete</button>
                </div>
            </div>
        </Fragment>
    )
}

export default CrudApi;