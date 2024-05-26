import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {useRef} from "react"

import {useState} from "react"

import {users} from "../users"

import {useNavigate} from "react-router-dom"
import Alert from 'react-bootstrap/Alert';

const Login = () => {

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const[errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate();

  const doSubmit = (event) => {

    event.preventDefault();

    const userSuppliedUsername = usernameRef.current.value
    const userSuppliedPassword = passwordRef.current.value

    console.log(`Username is ${userSuppliedUsername}`)
    console.log(`Password is ${userSuppliedPassword}`)

    const returnValue = users.users.find( (usernamePasswordDetails) => {

      const result = 
       (userSuppliedUsername === usernamePasswordDetails.username && 
        userSuppliedPassword === usernamePasswordDetails.password
      )

      console.log(`Result is ${result}`)

      return result;
    })

    console.log(`Return Value is ${JSON.stringify(returnValue)}`)

    if (returnValue){
      // Success
      navigate("/home")
    }else{
      setErrorMessage("Username / Password is invalid")
      // Failure
    }

  }

  function loginForm() {
    return (
      <Form onSubmit={doSubmit}>

        {
          errorMessage && (

            <Alert key="danger" variant="danger">
              {errorMessage}             
            </Alert>
          )
        }

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" ref={usernameRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  return (
    <div>
      {
        loginForm()
      }
    </div>
  )


}

export { Login }