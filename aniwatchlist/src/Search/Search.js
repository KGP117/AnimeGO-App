import{ useState, useEffect} from 'react';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import MainContent from './../components/MainContent';
import DenseAppBar from './../components/Navbar';
import React from 'react';

function Search(){

    const [animeList,SetAnimeList]= useState([]);
    const [topAnime, SetTopAnime]= useState([]);
    const[search, SetSearch]= useState("");
    const GetTopAnime= async()=>{
      const temp= await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`).then(res=> res.json())
      SetTopAnime(temp.top.slice(0,5));
    }
  
    useEffect(()=> {
      GetTopAnime();
    }, []);
  
    const HandleSearch =e =>{
      e.preventDefault();
      FetchAnime(search);
    }
  
    const FetchAnime= async(query)=>{
      const temp= await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=20`)
      .then(res=> res.json());
  
      SetAnimeList(temp.results);
  
    }



return(
    <div className="Search">
      <DenseAppBar />
      <Header />
      
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />

        <MainContent 
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}

        />
      </div>
    </div>
    );
}



export default Search