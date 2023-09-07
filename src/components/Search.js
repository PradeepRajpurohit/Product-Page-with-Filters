import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDebounce } from '../customHook/Debounce';
import { useDispatch } from 'react-redux';
import * as Actions from '../store/filterSlice';


const Search = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const debounced = useDebounce(search, 500);

    dispatch(Actions.setSearchTitle(debounced));

    return (
        <div className='flex items-center  bg-green-600 rounded'>
            <input className='p-1 border-2 border-green-500 rounded focus:border-green-600 focus:outline-none' type='search' value={search} placeholder='search jobs...' name='search' onChange={(e) => setSearch(e.target.value)} />
            <p className='p-2 text-white '><AiOutlineSearch /></p>
        </div>
    )
}

export default Search
