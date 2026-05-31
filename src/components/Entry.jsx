import Pin from "../assets/pin.png"

export default function Entry(props){
    return(
        <article className="entry">
            <img src={props.img.src} alt={props.img.alt} className="entry--img"/>
            <div className="entry--content">
                <div className="entry--location">
                    <img src={Pin} alt="Location pin" className="pin"/>
                    <h2>{props.country}</h2>
                    <a href={props.googleMaps} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <div className="entry--info">
                    <h3>{props.title}</h3>
                    <p className="entry--dates">{props.dates}</p>
                    <p>{props.text}</p>
                </div>
            </div>
        </article>
    )

}