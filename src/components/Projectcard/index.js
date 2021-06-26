function Projectcard(props) {
    return (
        <div className="col-md-6 col-sm-6">
            <a href={props.project.url}><img src={props.project.image}
                alt={props.project.alt} /></a>

        </div>
    )
}


export default Projectcard