import { useState } from 'react';
import Card from './Card';
function Cards(props){
    let courses = props.courses;
    let category = props.category;
    const [likedCourses,setLikedCourses] = useState([]);

    let allCourses = [];
    const getCourses = ()=>{
        if(category =="All"){
            Object.values(courses).forEach( (courseCategory)=>{
                courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
        
    }

    return(
        <div className='flex w-[950px] mx-auto flex-wrap gap-3 py-[15px]'>
            {getCourses().map(course=>{
                return (<Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>);
            })}
        </div>
    );
}

export default Cards;
