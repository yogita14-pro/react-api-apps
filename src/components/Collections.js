import data from "../datapics.json" 

export default function Collections(){
    return(
        <section className="collections">
                { 
                data.users.map(
                    photo =>(
                        <img key={photo.id} src={photo.imgsrc} alt="images" className="collect-item"></img>
                    )
                )}    
        </section>
    )
}