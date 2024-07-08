import { IconBxSort, IconFiltering, IconGenderMaleFemale, IconShirt } from "./icons"
import prof1 from "./images/profile/aiony.jpg"
import prof2 from "./images/profile/jessi.jpg"
import prof3 from "./images/profile/prakhar.jpg"

export default function Upper(){
    return(
        <div id="">
            <div className="profile-section">
                <ul className="story">
                    <li className="user1">
                        <img src={prof1} alt="profile" className="profile"></img>
                        <h4>Akshay</h4>
                    </li>
                    <li className="">
                        <img src={prof2} alt="profile" className="profile"></img>
                        <h4>Omi</h4>
                    </li>
                    <li >
                        <img src={prof3} alt="profile" className="profile"></img>
                        <h4>Bipin</h4>
                    </li>
                    <li >
                        <img src={prof1} alt="profile" className="profile"></img>
                        <h4>Gouravi</h4>
                    </li>
                    <li>
                        <img src={prof2} alt="profile" className="profile"></img>
                        <h4>Omi</h4>
                    </li>
                    <li>
                        <img src={prof3} alt="profile" className="profile"></img>
                        <h4>Bipin</h4>
                    </li>
                </ul>
            </div>
            <hr></hr>
            <div>
                <ul className="categories">
                    <li>
                    <button>
                        <IconGenderMaleFemale />
                        <h5>Gender</h5>
                    </button>
                    </li>
                <li>
                    <button>
                        <IconShirt />
                        <h5>Collection</h5>
                    </button>
               </li> 
               <li>
                <button>
                    <IconBxSort />
                    <h5>Sort By</h5>
                </button>
                </li>
                <li>
                <button>
                    <IconFiltering />
                    <h5>Filter</h5>
                </button>
                </li>
                </ul>
            </div>
        </div>
    )
}