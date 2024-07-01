import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NewUserForm = ( {users }) => {

    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        password: ''
    })

    const [user, setUser] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3005/api/user').then(res => setUser(res.data))
    }, [])

    const handleInput = (event) => {
        const {name, value} = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

        if(regex.test(formData.password) === false ) {
            alert("Password is not valid.\nMust contian:\n&middot; one uppercase lestter\n&middot; one lowercase letter\n&middot; one number\n&middot; one special character &\n&middot; at least 8 characters")
        } else {
            axios({
                method: 'post',
                url: 'http://localhost:3005/api/user/create',
                data: formData
            })
        }
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-Up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fName"><strong>First Name</strong></label>
                        <input 
                            type="fName" 
                            placeholder="First Name" 
                            name="fName" 
                            value={formData.fName}
                            onChange={handleInput}  
                            className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lName"><strong>Last Name</strong></label>
                        <input 
                            type="lName" 
                            placeholder="Last Name" 
                            name="lName" 
                            value={formData.lName}
                            onChange={handleInput}  
                            className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="username"><strong>Username</strong></label>
                        <input 
                            type="username" 
                            placeholder="Enter Username" 
                            name="username" 
                            value={formData.username}
                            onChange={handleInput}  
                            className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleInput}  
                            className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password" 
                            value={formData.password}
                            onChange={handleInput} 
                            className="form-control rounded-0"/>
                    </div>
                    <button type='submit' className="btn btn-success w-100 rounded-0">Create Account</button>
                    <Link to="/userform" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Log In</Link>
                </form>
            </div>
        </div>
    )
};

export default NewUserForm;