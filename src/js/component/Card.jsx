import React from "react";

export function Card() {
    return (
        <div className="container mb-3">
            <div className="card" style={{width: "18rem"}}>
            <img src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas cum aut enim illum harum non. Culpa, id excepturi, ut, accusamus perferendis optio eligendi est unde corporis maiores hic nemo adipisci.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
        </div>
        

    );
}