import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
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
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleOnChange={this.handleOnChange}
                        label='email'
                        required
                    />
                    

                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleOnChange={this.handleOnChange}
                        label='password'
                        required
                    />
                    

                    <CustomButton type='submit'>
                        SIGN IN
                    </CustomButton>
                </form>

            </div>
        )
    }
}

export default SignIn