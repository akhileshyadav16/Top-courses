import { filterData } from "../data";

function Filter(props){
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }

    return(
        <div className="flex gap-6 justify-center my-4 text-xl text-white font-semibold">
            {filterData.map(data=>{
                return (<button  className="bg-slate-800 w-auto px-2 h-10 rounded-md hover:bg-slate-900" key={data.id} onClick={()=>filterHandler(data.title)}>{data.title}</button>);
            })}
        </div>
    );
}
export  default Filter;