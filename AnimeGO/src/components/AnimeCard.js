import React from 'react';
import Button from '@material-ui/core/Button';
import history from './../history';



function AnimeCard({anime}) {
    return (
        <article className="anime-card"> 
            <a href={`/Info/${anime.mal_id}`}>
                <figure>
                    <img src={anime.image_url} alt="Anime Thumbnail"></img>
                </figure>
                <h3>{anime.title}</h3>
                
            </a>

            <h4><Button variant="outlined" onClick={() => history.push(`/Info/${anime.mal_id}`)} >Information</Button></h4>
 
        </article>
    )
}
export default AnimeCard
