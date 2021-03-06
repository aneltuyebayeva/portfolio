const Projects = (props) => {
    return (
        <div className="singleProjectSection">
            <div className="singleProject">
                <span>{props.title}</span>
                <img className="projectImg" src={props.image} alt={props.imageAlt} />
                <p className ="projectDescription">{props.description}</p>
                <div className="iconProject">
                    <a href={props.heroku} target="_blank" rel="noreferrer">
                    <img className="projectIconImg" src="https://icongr.am/entypo/browser.svg?color=7a7a7a" alt="website icon" />
                    </a>
                    <a href={props.github} target="_blank" rel="noreferrer">
                    <img className="projectIconImg" src="https://icongr.am/fontawesome/github.svg?size=35&color=7a7a7a" alt="github icon" />
                    </a>
                </div>

            </div>


        </div>
    )
}


export default Projects