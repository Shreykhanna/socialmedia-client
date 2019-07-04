import React from 'react'
import TextField from '@material-ui/core/TextField'
export class signup extends React.Component{
  render(){
    return(
      <div className="container">
      <form>
      <TextField
      required
      id="id_email"
      label="Email ID"
      />
      <TextField
      required
      id="id_password"
      label="Password"
      type="password"
      margin="normal"
      />
      <TextField
      required
      id="id_confirmpassword"
      label="Confirm Password"
      type="password"
      margin="normal"
      />
      </form>
      </div>
    )
  }
}
export default signup;
