import React from "react";

const Item = (props) => {
  return (
    <div className="col-lg-4">
      <div className="text-center card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img src={props.img} className="rounded-circle img-thumbnail" alt="imagen"/>
          </div>
          <div className="">
            <h4>{props.name}</h4>
            <p className="text-muted">{props.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Promise

const promesa = new Promise ( (resolve, reject) => {
    setTimeout(() => {
        const respuesta = 500;
        reject("Error en la respuesta")
    }, 3000)
})

promesa.then((param) => {
    console.log(param);
}).catch((error) => {
    console.log("Error!: "+error);
})

export default Item;