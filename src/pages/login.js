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

//REDUX
import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/userActions'

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
   errors:{}
 }
 handleSubmit=(event)=>{
   event.preventDefault();

   const userData={
     email:this.state.email,
     password:this.state.password
   }
   this.props.loginUser(userData,this.props.history)
 }

 handleChange=(event)=>{
   this.setState({
     [event.target.name]:event.target.value
   })
}
  render(){
    const {classes,UI:{loading}}=this.props;
    const {errors}=this.state;
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
login.propTypes={
  classes:PropTypes.object.isRequired,
  loginUser:PropTypes.func.isRequired,
  user:PropTypes.object.isRequired,
  UI:PropTypes.object.isRequired
}

const mapStateToProps=(state)=>({
  user:state.user,
  UI:state.UI
})
const mapActionsToProps=(state)=>({
  loginUser
})
export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(login));
