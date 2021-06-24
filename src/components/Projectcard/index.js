function Projectcard(props) {
    return (
        <div className="col-md-6 col-sm-6">
            <a href={props.url}><img src={props.image}
                alt={props.alt} /></a>

        </div>
    )
}


export default Projectcard