import React,{useState} from 'react'

function Displayname() {
    const[fullName,setFullName] = useState({
        firstName:"",
        lastName:""
    })
    const[verified,setVerified] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(fullName.firstName !== "" && fullName.lastName!==""){
            console.log("in block");
            setVerified(true);
        }

    }
    const handleChange=(e)=>{
        const{name,value} = e.target;
        setFullName(prev=> ({...prev,[name]:value}));
    }
  return (
    <div>
        <form onSubmit={e=>handleSubmit(e)}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" placeholder='firstname' id='firstName' name="firstName" onChange={e=>handleChange(e)}/>   <br/>
            <label htmlFor="lastName">last Name:</label>
         
            <input type="text" placeholder='lastName' id='lastName' name="lastName" onChange={e=>handleChange(e)}/>
            <br/>
            <button type='submit'>submit</button>
        </form>
        {verified && `Full Name: ${fullName.firstName} ${fullName.lastName}`}
    </div>
  )
}

export default Displayname