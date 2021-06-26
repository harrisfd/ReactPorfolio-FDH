import projects from "../../projects.json"
import Projectcard from "../Projectcard"

function Portfolio() {
    return (
        <section id="portfolio" class="portfolio">

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="heading">Portfolio</h1>

                    </div>

                    {projects.map(project => (
                        <Projectcard project={project} />
                    ))}
                </div>
            </div>
        </section>

    )
}


export default Portfolio