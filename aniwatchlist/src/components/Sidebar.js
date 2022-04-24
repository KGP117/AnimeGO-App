import React from 'react'
import history from './../history';
function Sidebar({topAnime}) {
    return(
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {topAnime.map(anime=>

<a  key={anime.mal_id} onClick={() => history.push(`/Info/${anime.mal_id}`)}>{anime.title}</a>
                    )}
               
                
            </nav>
        </aside>
    )
}

export default Sidebar