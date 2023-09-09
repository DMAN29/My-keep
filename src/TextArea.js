import React, { useState } from 'react'
import ItemList from './ItemList'
import AddIcon from '@mui/icons-material/Add';

const TextArea = () => {
    const [data,setData] = useState([]);
    const [title,setTitle] = useState("");
    const [textarea,setTextarea] = useState("");
    const [state,setState] = useState(false);
    const add = ()=>{
        const newData = [...data,{t1:title, t2: textarea}];
        setData(newData);
        setTitle("");
        setTextarea("");
    }
    const bin = (id)=>{
        setData((old)=>{
            return old.filter((element,index)=>{
                return index!== id;
            })
        })
    };
    const change = ()=>{
        setState(true);
    }
    const changeAgain = ()=>{
        setState(false);
    }
    return <>
        <div  onClick={change} onDoubleClick={changeAgain} className="content w-[600px] shadow-lg shadow-slate-500 mx-auto my-10 rounded-lg text-center relative">
            <input type="text" placeholder='Title' style={{display:`${state?'block':'none'}`}} className='w-11/12 text-3xl font-semibold outline-none my-3 p-2 mx-auto' value={title} onChange={(e)=>setTitle(e.target.value)}
            />
            <textarea className='w-11/12 p-2 my-2 outline-none' value={textarea}
            onChange={(e)=>setTextarea(e.target.value)} placeholder='Write a note...'></textarea>
            <span className='bg-yellow-300 rounded-full px-5 py-3 font-bold text-2xl absolute -right-8 -bottom-8 cursor-pointer hover:bg-yellow-500  transition ease-in-out duration-300 ' onClick={add}><AddIcon/></span>
        </div>
        <div className='w-11/12  mx-auto sm:grid sm:grid-flow-cols md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
        {
            data.map((curElem,index)=>{
            return <ItemList key={index} id={index} heading={curElem.t1} text = {curElem.t2}
            onClick={bin} />
            })
        }
        </div>
    </>
}

export default TextArea