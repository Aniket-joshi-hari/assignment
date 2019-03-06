import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import slide_one from '../Header-footer/Resources/slide_one.jpg';
import slide_two from '../Header-footer/Resources/slide_two.jpg';
import slide_three from '../Header-footer/Resources/slide_three.jpg';
import { withStyles } from '@material-ui/core/styles';
import { any } from 'prop-types';
import axios from 'axios';

class Authors extends Component {
    state ={
        authorsdata:any,
        themesdata:any,
        categorydata:any
        }
    
        componentDidMount(){
          this.getredit();
          }

          getredit(){
            axios.get('https://test-zypher.herokuapp.com/test/test').then((response) => {
                this.setState({authorsdata: response.data.authors,themesdata: response.data.themes,categorydata: response.data.category});
                // console.log(this.state.authorsdata[0].authorName);
                // console.log(this.state.themesdata);
                // console.log(this.state.authorsdata[0].authorImageURL);
          
                });

          }
       
    render(){
      // console.log(this.state.authorsdata[0]);
        const styles = {
            avatar: {
              margin: 10,
            },
            bigAvatar: {
              margin: 20,
             width: 150,
              height: 150, 
              borderRadius:'50%'
            }
        }
   
    return (
        <div>
            <div className="Author_name"><h2>Authors</h2></div>
        <div style={{position:'absolute',left:'30px',height:'300px',width:'90%',marginLeft:'5%',marginRight:'5%',display:'flex',justifyContent:'space-around'}}>
        
        <div  style={styles.bigAvatar}>
       { src=props.state.authorsdata[0].authorImageURL }
              </div>
       
        
        </div> 
        </div>  
        );
    }
}

export default withStyles(Authors) ;