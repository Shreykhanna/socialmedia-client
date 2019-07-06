import React from 'react'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
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
  margin:'20px',
  position:'relative'
},
customError:{
  color:'red',
  fontSize:'0.8rem',
  marginTop:'10px'
},
progress:{
  position:'absolute'
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
     localStorage.setItem('FBIDToken',`Bearer ${result.data.token}`);
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
      <TextField id="email" name="email"  type="email" label="Email ID" className={classes.textField}
      value={this.state.email} onChange={this.handleChange} helperText={errors.email} fullWidth/>
      <TextField id="password" name="password" label="Password" type="password" error={errors.email ? true : false}
       className={classes.textField} value={this.state.password} onChange={this.handleChange} helperText={errors.password} error={errors.password ? true : false}
      fullWidth/>
      {errors.general && (
        <Typography variant="body2" className= {classes.customError}>
          {errors.general}
        </Typography>
      )}
      <Button type="submit" variant="contained" color="primary" className={classes.button}>
      Login
      {
        loading &&(
            <CircularProgress size={20} className={classes.progress}/>
      )
    }
      </Button>
      <br/>
      <small>Dont have an account? Sign up <Link to="/signup">here</Link></small>
      </form>
      </Grid>
      <Grid item sm>

      </Grid>


      </Grid>
    );
  }
}
export default withStyles(styles)(login);
