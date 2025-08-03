import React, { useState } from 'react'

const SearchItem = () => {
    const items = ['Apple','Banana','Orange','Grapes','Pineapple','Strawberry','Blueberry'];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter items based on the search term
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(term)
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <h2>Searchable Item List</h2>
      <input type="text" placeholder="Search items..." value={searchTerm} onChange={handleSearch} />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchItem
