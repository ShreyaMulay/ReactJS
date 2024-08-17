import React from 'react'

export default function Netflix() {
    const movies = [
        { id: 1, title: 'Mismached', year: 2018 ,image:'https://staticg.sportskeeda.com/editor/2020/11/871d2-16063743342078-800.jpg'},
        { id: 2, title: 'Dark Web', year: 2018,image:'https://miro.medium.com/v2/0*zoZLSwn-NVSfSR2A.jpeg' },
        { id: 3, title: 'Stranger Things', year: 2016,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7rXKFL8rzmC-5CxC3KOoUz8-GdlW2gr8yMyeHO3PFw&s' },
        { id: 4, title: 'Little Things', year: 2016 ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QQOc5PJ1itC-nmIfEKLe27bx-cbmimfxdH1X7NEoOA&s'},
        { id: 5, title: 'Black Mirror', year: 2011 ,image:'https://image.tmdb.org/t/p/original/7PRddO7z7mcPi21nZTCMGShAyy1.jpg' },
        { id: 6, title: 'John', year: 2011 ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oP_zL7qsu82VY5abZFRCX4NnQ87Mb335oJf9glGBLA&s' },
      ];
  return (
    <div className='netflix'>
        {/* <div className="card" style={{width: '18rem'}} >
            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Dark Web</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div> */}
        <h3 className="heading_style">List of Netflix Series</h3>

        <div className='cards'>

        

        { movies.map( movie => (
            <div className="card">
                <img src={movie.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">{movie.title} | {movie.year}   </h4> 

                    <a href="/" className="btn btn-primary btn_go">watch now</a>
                </div>
            </div>
            
        ))}

         
        {/* {movies.map(function (movie) {
            return(
            <div className="card">
                <img src={movie.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">{movie.title} | {movie.year}   </h4> 

                    <a href="/" className="btn btn-primary btn_go">watch now</a>
                </div>
            </div>
        )
        })} */}
        </div>
       

    </div>
  )
}
