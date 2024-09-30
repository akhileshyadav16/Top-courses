import { FcLike ,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

function Card(props){
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function likeHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses(    (prev)=> prev.filter(cid=>(cid !==course.id)));
            toast.warning("Liked removed");
        }
        else{
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=> [...prev,course.id]);
            }
            toast.success("Liked successfully");
        }
    }
    return(
        <div className="w-[300px] rounded-md h-[300px] overflow-hidden text-white bg-slate-800">
            <div>
                <div className="relative">
                    <img src={course.image.url}></img>
                    <button onClick={likeHandler} className="absolute rounded-full bg-white w-[30px] h-[30px] ml-[250px] top-[150px]">
                        {
                            likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)                
                        }
                    </button>
                </div>
            </div>
            <div className="ml-[10px] mt-[20px]">
                <p className="font-medium text-[20px]">{course.title}</p>
                <p>{
                course.description.length>100 ? (course.description.substr(0,100))+'...' : (course.description)
                }</p>
            </div>
        </div>
    );
}

export default Card;