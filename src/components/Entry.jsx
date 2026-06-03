import Pin from "../assets/pin.png"

export default function Entry(props){
    return(
        <article className="entry">
            <img src={props.entry.img.src} alt={props.entry.img.alt} className="entry--img"/>
            <div className="entry--content">
                <div className="entry--location">
                    <img src={Pin} alt="Location pin" className="pin"/>
                    <h2>{props.entry.country}</h2>
                    <a href={props.entry.googleMaps} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <div className="entry--info">
                    <h3>{props.entry.title}</h3>
                    <p className="entry--dates">{props.entry.dates}</p>
                    <p>{props.entry.text}</p>
                </div>
            </div>
        </article>
    )

}