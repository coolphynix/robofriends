import React from 'react';

const SearchBox = ({serachfield, searchChange}) => {
	return (
		<div className='pa2'>
             <input className='pa2 ba b--black bg-light-green' 
             type='search' 
             placeholder='Search Robots' 
             onChange={searchChange}/>
         </div>
		);
}

export default SearchBox;