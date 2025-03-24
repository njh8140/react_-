import React, { useState} from 'react';
const Userform = () => {
const[user, setUser] = useState({
    id:'',
    name:''
});
const changeValue=(e)=>{
    setUser({
        ...user,
        [e.target.name]:e.target.value
    })
}
const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:35001/api/signup',{
        method:"POST",
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        },
        body: JSON.stringify(user)
    })
    .then((response)=>{
        if(response.status==200){
            alert("저장되었습니다");
        }
    });
};
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="id"
            onChange={(e) => changeValue(e)}
        />
        <input
            type="text"
            name="name"
            onChange={(e) => changeValue(e)}
        />
        <button type="submit">저장</button>
        </form>
        </div>
    );
};
export default Userform;