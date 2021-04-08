import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core';
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage'>
                <div className='searchPage_info'>
                    <p>62 stays . 26 august to 30 august . 2 guest</p>
                    <h1>Stays nearby</h1>
                    <Button variant="outlined">Cancellation Flexibility</Button>
                    <Button variant="outlined">Type of place</Button>
                    <Button variant="outlined">Rooms and beds</Button>
                    <Button variant="outlined">More filters</Button>
                </div>
                <SearchResult 
                    img="https://media.cntraveler.com/photos/56799015c2ebbef23e7d927b/master/pass/Hotelroom-Alamy.jpg"
                    location="Private room in London"
                    title = "30 mins from Oxford street, Excel London"
                    description="1 guest .  1 room . 1 bed . 1.5 shared bathroom . wifi . kitchen "
                    star={4.1}
                    price="55 / night"
                    total = "£320 total" />
                <SearchResult />
            </div>
        </div>
    )
}

export default SearchPage