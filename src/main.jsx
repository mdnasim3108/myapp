import React, { useState } from 'react'
var headstyle={
    backgroundColor: '#f5ba13',
    margin: 'auto -16px',
    padding: '16px 32px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.3)',
}
var h1style={
    color: '#fff',
    fontFamily:' "McLaren", cursive',
    fontWeight: 200
}
var btnstyle={
    float:'right',
    marginTop: '-48px',
    marginRight:'60px'
}
var cardstyle={
    width: '18rem',
    textAlign:'center',
    display:'inline-block',
    margin:"2rem 5rem 2rem 4rem",
    backgroundColor:'violet'
}
var image={
    borderRadius:'50%'
}
function Nav(){
    const[userData,setUsers]=useState([]);
    const loadUsers=async()=>{
        const response=await fetch("https://reqres.in/api/users?page=1")
        const jsonResponse=await response.json();
        setUsers(jsonResponse.data)
    };
    return(
        <div>
        <header style={headstyle}>
            <h1 style={h1style}>Task 1</h1>
            <button className='btn btn-success' style={btnstyle} onClick={loadUsers}>Get users</button>
        </header>
        {userData.map((data) => (
            <div className="card" style={cardstyle}>
            <img src={data.avatar} alt="Avatar" style={image}/>
            <h3>{data.first_name}{data.last_name}</h3>
            <p>{data.email}</p>
            </div>
        ))}
        </div>
    )
        }
export default Nav
