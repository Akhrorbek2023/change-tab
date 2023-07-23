import Native from "./Native"
import Negative from "./Negative"
import Positive from "./Positive"
import { Link,useParams,useRoutes,useLocation,useNavigate } from "react-router-dom"
import "./navbar.css"
import "./header.css"
import { useEffect, useState } from "react"



const Navbar = ()=>{
    const navigate = useNavigate();

    const location = useLocation();
    
    const [inputValue, setInputValue] = useState(0);

    const input = document.querySelector("input")
  
    const whatIsThis = (e)=>{
      

        setInputValue(input.value);

    }
    const [toggle, setToggle] = useState(1);

    useEffect(() => {
        if(location.pathname == "/Positive") setToggle(1);
        if(location.pathname == "/Negative") setToggle(2);
        if(location.pathname == "/Native") setToggle(3);    
    },[])

    
    const stateTab = (index)=>{
        setToggle(index)
    }

    
    const listItem = [
        {
            id:1,
            title:"Positive"
        },
        {
            id:2,
            title:"Negative"
        },
        {
            id:3,
            title:"Native"
        }
    ]
    const changeTab = (e) => {
        e.preventDefault();
        
        if(input.value > 3 ){
            alert("Iltimos kichikroq son yozmog'iz darkordir!")
        }
        
        console.log(e.target.value)

        const item = listItem.find(item => item.id == inputValue);
        console.log(item);
        if(item) {
            setToggle(item.id);
            navigate(item.title);
        }
    }
    return(
        <div className="navbar">
            <form id="form">
                <input onChange={whatIsThis} type="number" className="search" id="search" placeholder="Enter the index..." />
                <button className="search__btn" type="submit" onClick={changeTab}>Change Tab</button>
            </form>
            <ul>
                {
                    listItem.map((item)=>(
                       
                         <li  key={item.id}><Link onClick={() => stateTab(item.id)} 
                         className={toggle === item.id ? "link__hover" : "link__hover-default"}
                         to={`./${item.title}`} key={item.id}>{item.title}</Link></li>
                    ))
                   
                }
            </ul>     
        </div>
    )
}
export default Navbar