import React from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
export class home extends React.Component{
  state={
    screams:null
  }
  componentDidMount(){
    axios.get('/screams').then(result=>{
      this.setState({
        screams:result.data
      })
    }).catch(error=>{
      console.log(error);
    })
  }
  render(){
    let recentScreamsMarkup=this.state.screams ? (
          this.state.scream.map(scream=><p>{scream.body}</p>)
    ):<p>Loading...</p>
    return(
      <div>
        <Grid container spacing={16}>
          <Grid item sm={8} xs={12}>
          <p>{recentScreamsMarkup}</p>
          </Grid>
          <Grid item sm={4} xs={12}>
          <p>Profile...</p>
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default home;
