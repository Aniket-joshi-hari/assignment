import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';


const CardList = (props) => {
    return (
        <div className="card_container">

            <div className="card_inner">
            
        
            <Card  style={{Width:'400px'}}>
            <h2 style={{textAlign:'center'}}> {props.name}</h2>
            <CardMedia
          style={{height:' 60px',
          paddingTop: '1'}}
          image={props.image}
          title="Paella dish"
        />
            <CardContent>
          <Typography >
            {/* style={{height:' 60px',
                        paddingTop: '1'}} */}

          </Typography>
        </CardContent>
            </Card>
            </div>
            
        </div>
    );
};

export default CardList;