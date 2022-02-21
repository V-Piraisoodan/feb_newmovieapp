import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {

  const names = ["V.Pirai","V.Eniya","V.Oats"]
  const users = [
    {
      name:"V.Pirai",
      pic : "https://tinypng.com/images/social/website.jpg"
    },
    {
      name:"V.Eniya",
      pic : "https://static-s.aa-cdn.net/img/gp/20600007665016/1ac_UOzEV8CuwbyiL4W8iCVI_4jNNMvxNRH-zmfs34Cz5jmKFrdUvPdhCBtPrAd-UpE=s300?v=1"
    },
    {
      name:"V.Oats",
      pic : "https://1.bp.blogspot.com/-_bT4z-M-cNU/XylG25O3UYI/AAAAAAAAcj4/iEnd2NZlitw6_O-il8ndB-xhDnhGIqmsgCLcBGAsYHQ/s1600/love%2Bimages%2Bin%2Bcartoon%2B%25282%2529.jpg"
    },
  ];
  const movies =[
  {
    name : "Avenger-Endgame",
    pic : "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    rating : "8.4",
    summary : "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films,Avengers: Endgame.",
  },
  {
    name : "Spider-Man: No Way Home",
    pic : "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    rating : "8.7",
    summary : "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero.",
  },
  {
    name : "Doctor Strange",
    pic : "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg",
    rating : "7.5",
    summary : "In an accident, Stephen Strange, a famous neurosurgeon, loses the ability to use his hands. He goes to visit the mysterious Ancient One to heal himself and becomes a great sorcerer under her tutelage.",
  },
  {
    name : "Avatar",
    pic : "https://m.media-amazon.com/images/I/51tbokWKgwL.jpg",
    rating : "7.8",
    summary : "Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.",
  },
  {
    name : "Up",
    pic : "https://m.media-amazon.com/images/M/MV5BMTM1NzA0NTMzNV5BMl5BanBnXkFtZTcwOTU5OTIzMw@@._V1_.jpg",
    rating : "8.2",
    summary : "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
  },

]
  return (
    <div className="App">
    {/* <Msg
      name={"V.Pirai"}
      pic = "https://tinypng.com/images/social/website.jpg"
    /> 
    <Msg
      name={"V.Eniya"}
      pic = "https://static-s.aa-cdn.net/img/gp/20600007665016/1ac_UOzEV8CuwbyiL4W8iCVI_4jNNMvxNRH-zmfs34Cz5jmKFrdUvPdhCBtPrAd-UpE=s300?v=1"
    />
    <Msg
      name={"V.Oats"}
      pic = "https://1.bp.blogspot.com/-_bT4z-M-cNU/XylG25O3UYI/AAAAAAAAcj4/iEnd2NZlitw6_O-il8ndB-xhDnhGIqmsgCLcBGAsYHQ/s1600/love%2Bimages%2Bin%2Bcartoon%2B%25282%2529.jpg"
    /> */}

{/* transfoen array of string into array of jsx */}

      {/* {names.map((nm)=>(
        <Welcome name={nm}/>
      ))} */}

      {/* {users.map(({name,pic})=>(
        <Msg name={name} pic = {pic}/>
      ))} */}
      <section className='movie-list'>
        {movies.map(({name,pic,rating,summary})=>(
        <Movie name={name} pic={pic} rating={rating} summary={summary}/>
        ))}
      </section>
      
      {/* <Counter/> */}

    </div>

    
      
  );
}

export default App;

function Msg({name,pic}){
  return (
    <div>
      <img className='profile-pic' src={pic} alt={name} />
      <h1>😍,{name}</h1>
    </div>
  );
}

// function Movie({name}){
//   return (
//     <div className='movie-container'>
//       <img className='movie-poster'
//       src='https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810'
//       alt=''
//       />
//       <div className='movie-specs'>
//        <h3 className='movie-name'>Avengers:Endgame</h3>
//        <p className='movie-rating'>⭐ 8.4</p>
//       </div>
//       <p className='movie-summary'>The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, "Avengers: Endgame."</p>
//     </div>
//   );
// }

function Counter(){
  const [like,setLike] = useState(0);
  const [dislike,setdisLike] = useState(0);
  return (
    <div className='counter-container'>
      <button className='likes-dislikes' onClick={()=>setLike(like+1)}>
        👍{like}
      </button>
      <button className='likes-dislikes' onClick={()=>setdisLike(dislike+1)}>
        👎{dislike}
      </button>
    </div>
  );
}

function Movie({name,pic,rating,summary}){
  return (
    <div className='movie-container'>
      <img className='movie-poster'
      src={pic}
      alt={name}
      />
      <Counter/>
      <div className='movie-specs'>
       <h3 className='movie-name'>{name}</h3>
       <p className='movie-rating'>⭐{rating}</p>
      </div>
      <p className='movie-summary'>{summary}</p>
      {/* <Counter/> */}
    </div>
  );
}