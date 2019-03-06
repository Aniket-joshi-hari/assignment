import React from 'react';
import slide_two from './Header-footer/Resources/slide_two.jpg';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const authorsName = (props) => {

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
        <div >
            <div className="Auth_cont"  >
           
            <Grid >
        <Avatar   src={props.tom}   />
        </Grid>
        <p>{props.name}</p> 
       
            
            </div>
           
        </div>
    );
};

export default authorsName;