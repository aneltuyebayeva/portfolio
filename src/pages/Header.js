import resume from '../assets/AT_resume.pdf'
const Header = () => {
    return (
        <div>
            <div className="headerSection">
                <div className="name">
                    <h1>Anel Tuyebayeva</h1>
                    <h3>Software Engineer</h3>
                </div>
                <div className="contactInfo">
                    <a href="https://github.com/aneltuyebayeva" target="_blank" rel="noreferrer">
                    <img className="img" src="https://icongr.am/fontawesome/github.svg?size=128&color=7a7a7a" alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/anel-tuyebayeva-4914521ba/" target="_blank" rel="noreferrer">
                    <img className="img" src="https://icongr.am/fontawesome/linkedin-square.svg?size=128&color=7a7a7a" alt="linkedin icon" />
                    </a>
                    <a href={resume} target="_blank" rel="noreferrer">
                    <img className="img" src="https://icongr.am/fontawesome/file-pdf-o.svg?size=128&color=7a7a7a" alt="resume icon" />
                    </a> 
                </div>

            </div>
        </div>
    )
}


export default Header