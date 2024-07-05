import axios from "axios";
import { useEffect, useState } from "react"
import { IconEmailOutline, IconTelephoneFill } from "../icons/ReactIcons";

export default function UsersList(){
    const [values, setValues] =useState([]);
    const [page, setPage] = useState(1);
    const handleClick=(selectedpage)=>{
        setPage(selectedpage);
    }
    useEffect(()=>{
        const fetchUsers= async()=>{
            try{
                const response= await axios.get(`https://give-me-users-forever.vercel.app/api/users/${page}/next`)
                setValues(response.data.users);
                }
            catch(error){
                console.log(error.response.data);
            }
        }
        fetchUsers();
    }, [page]);
    return (
        <div className="users">
            <ul>
            {   values.length>0 && 
                values.map(item=>(
                    <li key={item.ID} className="content-items">
                        <div className="content">
                        <h1 className="name">{item.FirstNameLastName}</h1>
                        <p className="title job">{item.JobTitle}</p>
                        <h3><span className="title"><IconEmailOutline /></span> {item.EmailAddress}</h3>
                        <p><span className="title"><IconTelephoneFill/></span> {item.Phone}</p>
                        </div>
                        <div className="company">
                            <p className="title">{item.Company}</p>
                            
                        </div>
                    </li>
                ))
            }
            </ul>
            <section className="pagination">
                <span className="change-but prev" onClick={()=>{page>1?setPage(page-1) : setPage(6)}}>Prev</span>
                {[...Array(6)].map((_,i)=>{
                    return <span key={i} id="num" className={page===i+1? "change-but": ""} onClick={()=>handleClick(i+1)}>{i+1}</span>
                }
                )}
                <span className="change-but next" onClick={()=>{page<6?setPage(page+1): setPage(1)}}>Next</span>
            </section>
        </div>
    )
}