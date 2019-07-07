import {SET_USER,SET_ERRORS,CLEAR_ERRORS,LOADING_UI} from '../type.js';

import axios from 'axios'
export const loginUser=(userData,history)=>(dispatch)=>{
  dispatch({type:LOADING_UI});
  axios.post('/login',userData).then(result=>{
    localStorage.setItem('FBIDToken',FBIDToken);
    axios.defaults.header.common['Authorization']=FBIDToken;
    dispatch(getUserData());
    dispatch({type:CLEAR_ERRORS});
    history.push('/');
    console.log(result.data);
    this.setState({
      loading:false
    });
    const FBIDToken=`Bearer ${result.data.token}`
    localStorage.setItem('FBIDToken',FBIDToken); 
    axios.default.header.common['Authorization']=FBIDToken;
    this.props.history.push('/');
  }).catch(error=>{
    dispatch({
      type:SET_ERRORS,
      payload:error.response.data
      })
  });
}
export const getUserData=()=>(dispatch)=>{
  axios.get('/user').then(result=>{
    dispatch({
      type:SET_USER,
      payload:result.data
    })
  }).catch(error=>{
    console.log(error)
  })
}
