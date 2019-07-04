import React from 'react'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import axios from 'axios'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles={
form:{
  textAlign:'center'
},
pageTitle:{
  margin: '20px auto 20px auto'
},
textField:{
  margin :'10px auto 10px auto'
},
button:{
  margin:'20px'
}
}

class login extends React.Component{
  state={
   email:"",
   password:"",
   loading:false,
   errors:{}
 }
 handleSubmit=(event)=>{
   event.preventDefault();
   this.setState({
     loading:true
   });
   const userData={
     email:this.state.email,
     password:this.state.password
   }
   axios.post('/login',userData).then(result=>{
     console.log(result.data);
     this.setState({
       loading:false
     });
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
   })
 }
  render(){
    const {classes}=this.props;
    const {errors,loading}=this.state;
    return(
      <Grid container className={classes.form}>
      <Grid item sm/>
      <Grid item sm>
      <Typography variant="h4" className={classes.pageTitle}>Login</Typography>
      <form noValidate onSubmit={this.handleSubmit}>
      <TextField required id="email" name="email"  type="email" label="Email ID" className={classes.textField}
      value={this.state.email} onChange={this.handleChange} helperText={errors.email} fullWidth/>
      <TextField required id="password" name="password" label="Password" type="password" error={errors.email ? true : false}
       className={classes.textField} value={this.state.password} onChange={this.handleChange} helperText={errors.password} error={errors.password ? true : false} 
      fullWidth/>
      <Button type="submit" variant="contained" color="primary" className={classes.button}>Submit</Button>
      </form>
      </Grid>
      <Grid item sm>

      </Grid>


      </Grid>
    );
  }
}
export default withStyles(styles)(login);
