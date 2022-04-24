import React from 'react'
import{ useState, useEffect} from 'react';
import Header from './../components/Header';
import DenseAppBar from './../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SaveIcon from '@material-ui/icons/Save';
import history from './../history';




function Info({ match }) {
    useEffect(()=>{
        FetchAnime();

//console.log(match);
}, []);



const [details,setDetails]=useState({});

const FetchAnime= async()=>{
    const FetchAnime= await fetch(`https://api.jikan.moe/v3/anime/${match.params.id}`);

    const details= await FetchAnime.json();
    setDetails(details);
    //console.log(details);
};

const useStyles = makeStyles({
    root: {
      maxWidth: 500
    },
  });
const classes = useStyles();

const checkAdd= (show)=>{
  for (var i=0; i< localStorage.length; i++) {
    if(localStorage.getItem(localStorage.key(i)==show)){
        alert("Show already in list!");
    }
    else{
      localStorage.setItem(show,show);

    }
}
}
//for (var key in localStorage) {
  //console.log(key + ':' + localStorage[key]);
//}
//const state={
    //show:[
    //    {id:details.mal_id}
  //  ]   
//}
//console.log(state);

    return (
        <div>
            <Header />
            <DenseAppBar />
            <div className="content-wrap">

            </div>
            <div style={{ display:'flex', justifyContent:'center' }}>
            <Card className={classes.root}>
      <CardActionArea>
         
        <CardMedia
          component="img"
          alt="Anime Image"
          height="800"
          image={details.image_url}
          title={details.title}

        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {details.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {details.synopsis}
          </Typography>
          <br></br>
          <Typography variant="body2" color="textPrimary">
            Rating: {details.rating}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button
        variant="contained"
        size="large"
        startIcon={<SaveIcon />}
        onClick={()=> checkAdd(details.mal_id)}
        
      >
        Save
      </Button>
        <Button variant="outlined" size="large"  onClick={() => history.push('/Search')}> Back to Search</Button>
      </CardActions>
    </Card>
</div>
            
        </div>
    );
}

export default Info
