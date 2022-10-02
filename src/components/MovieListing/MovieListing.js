


import React from 'react';
import { useSelector } from 'react-redux';
import { getAllcards } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard'
import { MovieListingStyle } from '../style/componentsStyle';

const MovieListing = () => {
    // const { data } = props;
    const cards = useSelector(getAllcards);
    console.log(cards);
    let renderCards = "";


    renderCards =
        cards && cards.length ? (
            cards.map((card, id) => {
                return <MovieCard data={card} key={id} />;
            })
        ) : (
            <p>not found</p>
        )

    return (

        <MovieListingStyle>



            <section>
                <h1>Job Card</h1>
                <div class="jobcard">
                    <div ><p>Job Card no</p></div>
                    <div ><p>company_name</p></div>
                    <div ><p>deliver_date</p></div>
                    <div ><p>Production</p></div>
                    <div ><p>Detail</p></div>
                </div>
            </section>

            <>

                <div> {renderCards} </div>
            </>

        </MovieListingStyle>
    );
};

export default MovieListing;