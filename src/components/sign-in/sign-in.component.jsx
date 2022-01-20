import React from 'react';

import './sign-in.styles.scss'

class SignIn extends React.Component{

    constructor(){
        super();

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            email:'',
            password:''
        })
    }

    handleOnChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name] : value })
    }


    render(){
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        onChange={this.handleOnChange}
                        required
                    />
                    <label>Email</label>

                    <input 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        onChange={this.handleOnChange}
                        required
                    />
                    <label>Password</label>

                    <input type='submit' value='Submit Form'/>
                </form>

            </div>
        )
    }
}

export default SignIn