import { useState, useEffect } from "react"
import UserForm from "./UserForm"
import axios from "axios"

const LoginValidation =()=> {

        const [formData, setFormData] = useState({
            email: '',
            password: ''
        })

        const [users, setUsers] = useState([])

        useEffect(() => {
            axios.get('http://localhost:3005/api/user').then(res => setUsers(res.data))
        }, [])

        const handleInput = (event) => {
            const {name, value} = event.target

            setValues(prevState => {
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
            <>
                <UserForm
                    formData={formData}
                    handleInput={handleInput}
                    handleSubmit={handleSubmit}
                />
            </>
        )
}

export default LoginValidation