import React from 'react'
import ColorList from './ColorList'
import StudentGrades from './StudentGrades';
import ListDeletion from './ListDeletion';
import CatalogList from './CatalogList';
import SearchItem from './SearchItem';


// 🔷 Lists & Keys
// 26.	Color List Display
// Store an array of color names and render them in a list where each color appears in a list item.

// 27.	Student Grades Table
// Map through an array of student objects and display each student’s name and grade in a table or list format.


// 28.	List with Deletion Functionality
// Create a list of items. Add a delete button for each item to remove it from the list when clicked.


// 29.	Product Catalog List
// Render an array of product objects showing each product’s name and price in a neat layout.


// 30.	Searchable Item List
// Implement a search bar that filters a list of items in real time based on user input.

const ListKeys = () => {
    return (
        <div>
            {/* // 26.	Color List Display */}
            {/* <ColorList/> */}

            {/* // 27.	Student Grades Table */}
            {/* <StudentGrades /> */}


            {/* // 28.	List with Deletion Functionality */}
            {/* <ListDeletion/> */}

            {/* // 29.	Product Catalog List */}
            {/* <CatalogList/> */}

            {/* // 30.	Searchable Item List */}
            <SearchItem />
        </div>
    )
}

export default ListKeys
