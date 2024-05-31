import React from "react";

//create your first component
export const Card = ({title, description, image}) => {
    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title pt-3 pb-3">{ title }</h5>
                            <p className="card-text pb-3">{ description }</p>
                        </div>
                        <div className="card-footer p-3">
                            <button className="btn btn-primary">Find out more!</button>
                        </div>
                </div>
            </div>
        </div>
    );
};