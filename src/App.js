import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Card from './components/Card';
import './App.css';
import {filterData,apiURL} from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {
  const [courses,setCourses] = useState('');
  const [category,setCategory] = useState(filterData[0].title);

  useEffect(  ()=>{
    const fetchData = async()=>{
      try{
        const res = await fetch(apiURL);
        const  output   = await res.json();
        console.log(output);
        setCourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
    }
    fetchData();
  },[])

  return (
    <div className='bg-slate-600 h-fit'>
      <Navbar/>
      <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      <Cards courses={courses} category={category}/>
    </div>
  );
}

export default App;
