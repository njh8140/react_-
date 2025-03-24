import React, {useEffect, useState} from "react";
import Useritem from './Useritem';
const Userlist = () => {
const[users, setUsers] = useState([]);
useEffect(() =>{
    fetch('http://localhost:35001/api/list')
    .then((res) => res.json())
    .then((res)=>{
        console.log(1,res);
        setUsers(res);
    });
},[]);
    return(
        <div>
            {users.map((user)=>(
            <Useritem key={user.id} user={user}/>
            ))}

        </div>
    );
};
export default Userlist;