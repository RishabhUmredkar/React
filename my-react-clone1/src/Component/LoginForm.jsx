import { Component } from "react";
import InputGroup1 from "./InputGroup1";
import FormOptions from "./FormOption";
import Button from "./Button";
import InputGroup2 from "./InputGroup2";

class LoginForm extends Component{
    constructor()
    {
        super();
    }
    render() {
        return (
            <form className="login-form">
                <h2>User Login</h2>
                <InputGroup1 />
                <InputGroup2 />
                <FormOptions />
                <Button />
            </form>
        );
    }
}

export default LoginForm;