import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CamperList from './camperlist';

class App extends Component {
 constructor(props){
   super(props);
   this.state = {
     recentCampers : [],
     allTimeCampers :[],
     currentView : 'recentCampers'
   }
 }

 componentWillMount(){
   axios.all([this.fetchRecentCampers(),this.fetchAllTimeCampers()])
   .then(axios.spread((recentCampers,allTimeCampers) => {
     this.setState({
       recentCampers : recentCampers.data,
       allTimeCampers: allTimeCampers.data
     });
   }));
 }

 fetchRecentCampers(){
   return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
 }

 fetchAllTimeCampers(){
   return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
 }

 changetView(currentView){
   this.setState({currentView});
 }



  render() {
    return (
      <div className="App jumbotron">
        <h1>LeaderBoard</h1>
        <h2>{'Viewing Top ' + this.state.currentView}</h2>
        <button onClick={()=> this.changetView('recentCampers')} className="btn btn-primary">Recent</button>
        <button onClick={()=> this.changetView('allTimeCampers')} className="btn btn-primary">All Time</button>
        <CamperList campers={this.state[this.state.currentView]}/>
      </div>
    );
  }
}

export default App;
