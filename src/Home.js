import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="Home">            
            <Banner />

            <div className="home_section">            
                <Card 
                    src="https://s23444.pcdn.co/wp-content/uploads/2019/02/Cookswood-property-at-dusk.jpg.optimal.jpg"
                    title="Entire homes"
                    description="This is some example text"
                    price = "£150 per night"
                />    

                <Card 
                    src="https://s23444.pcdn.co/wp-content/uploads/2019/02/Cookswood-property-with-balcony.jpg.optimal.jpg"
                    title="Unique stays"
                    description="This is some example text"
                    price = "£120 per night"
                />     

                <Card 
                    src="https://www.digsdigs.com/photos/retro-glam-take-on-the-traditional-english-holiday-home-1-554x395.jpg"
                    title="Farms and nature"
                    description="This is some example text"
                    price = "£200 per night"
                />            
            </div>

            <div className="home_section">            
                <Card 
                    src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=240"
                    title="Experiences"
                    description="This is some example text"                    
                />    

                <Card 
                    src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=240"
                    title="Online Experiences"
                    description="This is some example text"
                />     

                <Card 
                    src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=240"
                    title="Adventure"
                    description="This is some example text"
                />            
            </div>
        </div>
    )
}

export default Home