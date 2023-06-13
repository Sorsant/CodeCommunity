import React from 'react'
import { useState } from 'react'
import validate from './validate'

interface formRegister {
    account: string
    name: string
    lastname: string
    email: string
    password: string
}

const Register: React.FC = (): JSX.Element => {
    const [register, setRegister] = useState<formRegister>({
        account: "",
        name: "",
        lastname: "",
        email: "",
        password: "",
    })
    const [error, setErrors] = useState<formRegister>({
        account: "",
        name: "",
        lastname: "",
        email: "",
        password: "",
    })

    const handleonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegister({
            ...register,
            [event.target.name]: event.target.value
        })
        // setErrors(
        //     validate({
        //       ...register,[event.target.name]: event.target.value
        //     })
        //   )
    }
    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

    }
    return (
        <div>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <label>My account</label>
                        <input onChange={handleonChange} value={register.account} type="text" name='name' placeholder="Your account" />

                        <label>Name</label>
                        <input onChange={handleonChange} value={register.name} type="text" name='name' placeholder="Name" />

                        <label>Lastname</label>
                        <input onChange={handleonChange} value={register.lastname} type="text" name='lastname' placeholder="Lastname" />

                        <label>Email</label>
                        <input onChange={handleonChange} value={register.email} type="email" name='email' placeholder="Your email" />

                        <label >Password</label>
                        <input onChange={handleonChange} value={register.password} type="password" name="password" placeholder='Your password' />
                        <button>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register

