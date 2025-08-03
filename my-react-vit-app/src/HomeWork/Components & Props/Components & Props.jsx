import React from 'react'
import Welcome from './Welcome';
import ProfileCard from './ProfileCard';
import HobbiesList from './HobbiesList';
import FavoriteColor from './FavoriteColor';
import MovieList from './MovieList';


// 1.	Welcome Message Component
// Design a reusable Welcome component that accepts a user’s name through props and displays a personalized greeting in the UI.

// 2.	User Profile Display
// Create a ProfileCard component that receives a user’s name, age, and location through props and displays them in a card-like layout.


// 3.	Hobbies List Renderer
// Build a component that takes an array of hobbies as props and renders them in an unordered list, with each hobby listed on a separate line.


// 4.	Favorite Color Component with Default Prop
// Implement a component that displays a user’s favorite color. If no color is passed via props, it should default to a predefined color.


// 5.	Movie List with Parent-Child Communication
// Develop a parent component that contains an array of movie objects and passes it to a child component to display each movie’s title and release year.


const ComponentsAndProps = () => {

 const movies = [
        { id: 1, title: "Inception", year: 2010 },
        { id: 2, title: "Interstellar", year: 2014 },
        { id: 3, title: "Dunkirk", year: 2017 }
    ];

    
    return (
    <div>
      {/* // 1. Welcome Message Component
    <Welcome name="John Doe" /> */}



        {/* // 2. User Profile Display */}
        {/* <ProfileCard name="Rishabh" age={22} location="Nagpur" /> */}

        {/* // 3. Hobbies List Renderer */}
        {/* <HobbiesList hobbies={['Reading', 'Traveling', 'Cooking']} />  */}

        {/* // 4.	Favorite Color Component with Default Prop */}
          {/* <FavoriteColor color="blue" /> */}

        {/* // 5.	Movie List with Parent-Child Communication */}
        <MovieList moviesarr={movies} />
      </div>
    )
}

export default ComponentsAndProps;