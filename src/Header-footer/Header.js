import React ,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import slide_one from './Resources/slide_one.jpg';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';




class Header extends Component {

    
   
   render(){
    const styles = theme => ({
        root: {
          color: theme.palette.text.primary,
        },
        icon: {
          margin: theme.spacing.unit,
          fontSize: 32,
        },
      });
    return (
        
            <AppBar style={{borderBottom:'1px solid #ccc'}}>
            
            <Toolbar>

            <IconButton>

                <MenuIcon style={{color:'#fff'}}/>
            </IconButton>

            <div className="Logo">#Zypher</div>

            <div style={{display:'flex',justifyContent:'flex-end',width:'90%'}}>
           
           
            <IconButton>
               <SearchIcon style={{color:'#fff'}}/>
               </IconButton>
           
            <div>
             <IconButton>
          <NotificationsIcon style={{color:'#ffffff'}}/>
          </IconButton>
           </div>     
            
           
      
            <Grid >
            
            <Avatar src={slide_one} width="500"  alt="Remy Sharp" style={{  background:`url(${slide_one})`,marginTop:'4px'}} className="image1"/>
            </Grid>
            </div>

            </Toolbar>
           

            </AppBar>
            
     
    );
}
};

export default Header;