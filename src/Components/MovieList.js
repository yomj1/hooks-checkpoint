import MovieCard from './MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const MovieList = (props) => {

    return <div className="row">
        {console.log("stars = " + props.searchrate)}
        {console.log(props.searchrate!==0?props.searchrate:true)}
        {props.items.map(function(item){
            if(item.title.includes(props.searchtext) && item.rate == (props.searchrate!==0?props.searchrate:item.rate)){
               return <div className="col-sm-4">
                    <MovieCard id={item.id} title={item.title} description={item.description} url={item.url} rate={item.rate}/>
                </div>;
            }
            }
        )}
        
    </div>
}

export default MovieList;