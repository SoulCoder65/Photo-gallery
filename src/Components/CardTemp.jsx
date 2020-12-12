import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height:350,
  },
  media: {
    height: 200,
  },
});

const CardTemp=({props})=> {
  // array destructuring to get specific data from object
    const {title,url}=props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h5">
            {title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
export default CardTemp;