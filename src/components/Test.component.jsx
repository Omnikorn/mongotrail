
import react from "react"
const mongoose = require("mongoose");
const db = require ("../models")

const Wedding1 = () => {
  const harith = () => {db.Wedding.find({})
    // .then(wed => {
    //   res.json(wed);
    // })
    // .catch(err => {
    //   res.json(err);
    // });
;}

 
 
    return(
<div>
    <p>{harith}</p>
</div>

 )


}


export default Wedding1