import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -logo
 *  -nav items
 * Body
 *  -search bar
 *  -restaurant container
 *      -restaurant card
 *          -image
 * Footer
 *  -copyright
 *  -address
 *  -contact info
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const { resData } = props;

    const { image, name, cuisines, rating } = resData;
    return (
        <div className="restaurant-card">
            <img className="res-image" src={image} />
            <h4 className="res-name">{name}</h4>
            <h5 className="res-cuisine">{cuisines.join(", ")}</h5>
            <h5 className="res-rating">{rating} stars</h5>
        </div>
    );
};

const resList = [
    {
        "id": 1,
        "name": "Spice Garden",
        "image": "data:image/jpeg;base64,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",
        "cuisines": ["Indian", "North Indian", "Biryani"],
        "rating": 4.5
    },
    {
        "id": 2,
        "name": "Pizza Hub",
        "image": "https://c.ndtvimg.com/2021-01/78btgdc_pizza_625x300_15_January_21.jpg",
        "cuisines": ["Italian", "Fast Food"],
        "rating": 4.2
    },
    {
        "id": 3,
        "name": "Sushi World",
        "image": "https://images.unsplash.com/photo-1553621042-f6e147245754",
        "cuisines": ["Japanese", "Seafood"],
        "rating": 4.7
    },
    {
        "id": 4,
        "name": "Cafe Delight",
        "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        "cuisines": ["Cafe", "Desserts", "Beverages"],
        "rating": 4.3
    },
    {
        "id": 5,
        "name": "Burger Town",
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349",
        "cuisines": ["American", "Fast Food"],
        "rating": 4.1
    },
    {
        "id": 6,
        "name": "Tandoori Nights",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        "cuisines": ["Indian", "Mughlai"],
        "rating": 4.6
    },
    {
        "id": 7,
        "name": "Dragon Bowl",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        "cuisines": ["Chinese", "Asian"],
        "rating": 4.0
    },
    {
        "id": 8,
        "name": "Green Leaf",
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        "cuisines": ["Healthy", "Salads", "Vegan"],
        "rating": 4.4
    },
    {
        "id": 9,
        "name": "BBQ Nation",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
        "cuisines": ["BBQ", "Grill", "North Indian"],
        "rating": 4.3
    },
    {
        "id": 10,
        "name": "Pasta Palace",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDo9rVFENLOZt92g3d89AK8gURFumLDccjpg&s",
        "cuisines": ["Italian", "Continental"],
        "rating": 4.2
    },
    {
        "id": 11,
        "name": "Street Eats",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        "cuisines": ["Street Food", "Indian Snacks"],
        "rating": 4.1
    },
    {
        "id": 12,
        "name": "Sweet Tooth",
        "image": "https://images.unsplash.com/photo-1551024601-bec78aea704b",
        "cuisines": ["Desserts", "Bakery"],
        "rating": 4.5
    }
];


const Body = () => {
    return (
        <div className="restaurant-container">
            <div className="search-bar">search</div>
            <div className="restaurant-container">
                {
                    resList.map((res) => {
                        <RestaurantCard key={res.id} resData={res} />
                    })
                }
            </div>

        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    );
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);