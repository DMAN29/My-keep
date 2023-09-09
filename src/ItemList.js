import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const ItemList = (props) => {
    return <div key ={props.id} className='bg-slate-200 shadow-lg shadow-gray-600 w-60 m-3 p-2 relative'>
            <h2 className='font-semibold text-2xl'>{props.heading}</h2>
            <p className='text-lg'>{props.text}</p>
            <span className='absolute bg-yellow-300 rounded-full px-5 py-3 font-bold text-2xl -right-8 -bottom-8 cursor-pointer hover:text-red-500  transition ease-in-out duration-300' onClick={()=>{props.onClick(props.id)}}><DeleteIcon/></span>
        </div>
}

export default ItemList