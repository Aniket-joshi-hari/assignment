import React, { Component } from 'react';
import Header from './Header-footer/Header';
// import Authors from './Authors/Authors';
import Popular_vocation from './Popular_vocation/Popular_vocation';
import CardList from './Cards/Card';
import axios from 'axios';
import { any } from 'prop-types';
import Aname from './AuthorsName';




import './App.css';
// import { Avatar } from '@material-ui/core';




class App extends Component {
  state ={
    authorsdata:[],
    themesdata:[],
    categorydata:[]
    }


  componentWillMount(){
    this.readyit(); 
  }
  readyit(){
    axios.get('https://test-zypher.herokuapp.com/test/test').then((response) => {
      
      this.setState({authorsdata: response.data.authors,themesdata: response.data.themes,categorydata: response.data.category});
      console.log(this.state.authorsdata[0].authorName);
      console.log(this.state.themesdata);
      console.log(this.state.authorsdata[0].authorImageURL);
      console.log('componentwillmount is running now');

      });

  }
  





  
    
      
 
 

    
   
  render(){

    const names=(
      <div style={{display:"flex",width:'65%',margin:'auto'}}>
    {
      this.state.authorsdata.map(author =>{
           return <Aname name={author.authorName} tom={author.authorImageURL}   style={{width:'80px',float:'left'}}/>

      }
        )
    
    }
    </div>
    );


    const category=(
      <div style={{display:"flex",width:'80%',margin:'auto',}}>
    {
      this.state.categorydata.map(category =>{
           return <CardList name={category.categoryName} image={category.categoryImageURL}   style={{width:'80px',float:'left'}}/>

      }
        )
    
    }
    </div>
    );
     console.log(this.state.authorsdata[0]);
     console.log('reder methods is running now');
        return (
      <div>
       
        <Header/>
           <div>
          <h2 style={{position:'relative',top:'55px',left:'50px',color:'#636e72'}}>Authors</h2><br/><br/>
          </div>
        {names}
       
        
      <Popular_vocation/>
      {category}
      <br/><br/>
      
      
      </div> 
    );
  }
}




export default App;
