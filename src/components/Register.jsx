import { useState } from "react"

export default function Register(){
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const handleSubmit = async() => {
        try{
            const url = "https://localhost:8080/api/users/register";
            const result = await axios.post(url, user);
            setError("Data saved successfully");
        } catch(err) {
            console.log(err);
            setError("Something went Wrong");
        }
    };
    return (
        <div>
            <h2>Registration Form</h2>
            <p>
                <input type="text" placeholder="First name" onChange={(e)=>setUser({...user,firstName: e.target.value})}/>
            </p>
            <p>
                <input type="text" placeholder="Last name" onChange={(e)=>setUser({...user,firstName: e.target.value})}/>
            </p>
            <p>
                <input type="text" placeholder="Email address" onChange={(e)=>setUser({...user,firstName: e.target.value})}/>
            </p>
            <p>
                <input type="password" placeholder="Password" onChange={(e)=>setUser({...UserActivation,firstName: e.target.value})}/>
            </p>
        </div>
    )
}