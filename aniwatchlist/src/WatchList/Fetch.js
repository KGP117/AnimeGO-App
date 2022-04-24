import React from "react";
import{ useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import history from './../history';

var cardInfo=[];

const FetchAnime= async(id)=>{
    const temp= await fetch(`https://api.jikan.moe/v3/anime/${id}`).then(res=> res.json());
    cardInfo.push({image: temp.image_url, title:temp.title, description:temp.synopsis});
    console.log(temp);

    //return temp;
}

const Fetch= ()=>{
for (var i=0; i< localStorage.length; i++) {
    var id=localStorage.getItem(localStorage.key(i));
    FetchAnime(id);
    //console.log(data);

}
 
        //console.log(details);


    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 200,
        },
      });
      const classes = useStyles();

const renderCard=(card, index)=>{
return(
    <div style={{ display:'flex', justifyContent:'center' }}>
  <Card key={index} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={card.image}
          title={card.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {card.description}
          </Typography>
          <Button variant="outlined" size="large"  onClick={() => history.push('/Search')}> Back to Search</Button>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
);
};


  return (
    <div>
        {cardInfo.map(renderCard)}
    </div>
  )
  };
  export default Fetch;