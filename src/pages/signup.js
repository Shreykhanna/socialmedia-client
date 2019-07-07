import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

const styles={
form:{
    textAlign:'center'
  },
  pageTitle:{
    margin:'20px auto 20px auto'
  },
  textField:{
    margin :'10px auto 10px auto'
  },
  button:{
    margin:'20px'
  }
}
export class signup extends React.Component{

  state={
    email:"",
    password:"",
    confirmpassword:"",
    handle:"",
    errors:{}
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    this.setState({
      loading:true
    });
    const newUserData={
      email:this.state.email,
      password:this.state.password,
      confirmpassword:this.state.confirmpassword,
      handle:this.state.handle
    }
    axios.post('/signup',newUserData).then(result=>{
      console.log(result);
      this.setState({
        loading:false
      })
      this.props.history.push('/');
    }).catch(error=>{
      this.setState({
        errors:error.response.data,
        loading:false
      })
    })
  }
  handleChange=(event)=>{
    this.setState({
    [event.target.name]:event.target.value
  });
}
  render(){
    const {classes}=this.props;
    const {errors,loading}=this.state

    return(
      <Grid container className={classes.form}>
      <Grid item sm/>
      <Grid item sm>
      <Typography variant="h4" className={classes.pageTitle}>Signup</Typography>
      <form noValidate onSubmit={this.handleSubmit}>
      <TextField id="email"            className={classes.textField}      name="email"            label="Email ID"   value={this.state.email} fullWidth />
      <TextField id="password"         className={classes.textField}      name="password"        label="Password"  type="password" value={this.state.password} margin="normal" fullWidth/>
      <TextField id="confirmpassword"  className={classes.textField}      name="confirmpassword" label="Confirm Password" value={this.state.confirmpassword} type="password" margin="normal" fullWidth/>
      <TextField id="handle" className={classes.textField} name="handle" label="Handle" value={this.state.handle} margin="normal" fullWidth/>
      <Button className={classes.button} type="submit" className={classes.textField} variant="contained" color="primary">SignUp</Button>
      <br/>
      <small>Already have an account ? Login <Link to="/login">here</Link></small>
      </form>
      </Grid>
      <Grid item sm/>

      </Grid>
    )
  }
}
signup.propTypes={
  classes:PropTypes.object.isRequired
}
export default withStyles(styles)(signup);
