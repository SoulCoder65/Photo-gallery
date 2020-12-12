import React from "react"
const Footer=()=>{
    const newdate=new Date();

    return<>
        <div style={{textAlign:"center"}}>
            <h5>Copyright &copy;  {newdate.getUTCFullYear()} All Right Reserved Akshay Saxena</h5>
        </div>
    </>
}
export default Footer