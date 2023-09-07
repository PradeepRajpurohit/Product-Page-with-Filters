import React, { useState } from 'react'
import { BsFilterLeft, BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs'
import Search from './Search';
import { useDispatch } from 'react-redux';
import * as Actions from '../store/filterSlice'

const Filters = () => {

    const dispatch = useDispatch();
    const [show, setShow] = useState('hidden');
    const [cate, setCate] = useState('');

    const [filt, setFilt] = useState([]);

    const handleChange = (e) => {
        if (e.target.checked) {
            setFilt([...filt, e.target.value])
        }
        else {
            setFilt(
                filt.filter((f) => f !== e.target.value
                )
            )
        }
    }

    dispatch(Actions.setCategory(filt));


    // const filterData = filt.every((f)=>{
    //     data(()=> )
    // })

    const handleShow = (part) => {
        switch (part) {
            case 'slide':
                // code block
                if (show === '') {
                    setShow('hidden')
                }
                else {
                    setShow('');
                }
                break;
            case 'category':
                // code block
                if (cate === '') {
                    setCate('hidden')
                }
                else {
                    setCate('');
                }
                break;
            default:
            // code block
        }


    }
    return (
        <div className='p-4'>
                <div className='flex justify-between md:hidden'>
                    <div onClick={() => handleShow('slide')} className='text-3xl'>
                        <BsFilterLeft />
                    </div>
                    <Search />
                </div>
            <div>
                <div className={`bg-green-600 w-4/6 md:w-2/6 p-6 space-y-4 z-10 shadow-lg shadow-red-800/50 absolute md:fixed overflow-auto rounded-md ${show} md:block`}>
                    <div className='md:flex justify-between'>
                        <h2 className='text-lg font-semibold'>All Filters</h2>
                        <p>Applied ({filt.length}) </p>
                    </div>
                    <hr></hr>
                    <div>
                        <div onClick={() => handleShow('category')} className='flex cursor-pointer items-center justify-between text-xl font-medium mb-2'>
                            <h3 className=''>Categories</h3>
                            <p>{cate === 'hidden' ? <BsArrowDownShort /> : <BsArrowUpShort />}</p>

                        </div>
                        <div className={`space-y-1 ${cate}`}>
                            <div class="flex items-center">
                                <input type="checkbox" id="home-decoration" name='homeDecor' value={'home-decoration'} onChange={handleChange} class="form-checkbox h-5 w-5 text-blue-600" />
                                <label htmlFor="checkbox" class="ml-2 block text-black font-medium">Home Decor</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="groceries" value={'groceries'} onChange={handleChange} class="form-checkbox h-5 w-5 text-blue-600" />
                                <label htmlFor="checkbox" class="ml-2 block text-black font-medium">Groceries</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="skincare" value={"skincare"} onChange={handleChange} class="form-checkbox h-5 w-5 text-blue-600" />
                                <label htmlFor="checkbox" class="ml-2 block text-black font-medium">Skincares</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="fragrances" value={'fragrances'} onChange={handleChange} class="form-checkbox h-5 w-5 text-blue-600" />
                                <label htmlFor="checkbox" class="ml-2 block text-black font-medium">Fragrances</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="laptops" value={'laptops'} onChange={handleChange} class="form-checkbox h-5 w-5 text-blue-600" />
                                <label htmlFor="checkbox" class="ml-2 block text-black font-medium">Laptops</label>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" id="smartphones" value={'smartphones'} onChange={handleChange} class="form-checkbox h-5 w-5 text-blue-600" />
                                <label htmlFor="checkbox" class="ml-2 block text-black font-medium">Smartphones</label>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Filters
