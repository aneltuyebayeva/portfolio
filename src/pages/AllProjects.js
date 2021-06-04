import Projects from "../components/Projects"


const AllProjects = () => {
    return (
        <div className="projectsSection">
            <div>
                <h3 className="projectsHeader">Latest Projects</h3>
            </div>
           
           <div className="projectsList">
               <Projects                     
                    image="https://i.imgur.com/JgrEsFp.png"
                    imageAlt="handmade"
                    title="Handmade"
                    description="An e-commerce website that allows users to buy exclusive, unique and handmade ONLY products. Built using JavaScript/Node/API/Express/PostgreSQL"
                    heroku="https://handmade-frontend.herokuapp.com/"
                    github="https://github.com/aneltuyebayeva/handmade-frontend" />
            
                <Projects                     
                    image="https://i.imgur.com/d7cboW3.png"
                    imageAlt="partylist"
                    title="Partylist"
                    description="This app contains information about any party providers that people need to plan their events and parties. Built using React/Node/Express/PostgreSQL"
                    heroku="https://partylistfrontend.herokuapp.com/"
                    github="https://github.com/aneltuyebayeva/partylist-frontend" />
                <Projects                     
                    image="https://i.imgur.com/IO1pOqc.png"
                    imageAlt="travellovers"
                    title="Travel Lovers"
                    description="This app allows travellers to plan ahead their travel and see a list of top sightseeing places in any city in the world. Users are able to save places they would want to visit. Built using JavaScript/Node/API/Express/PostgreSQL"
                    heroku="https://travel-loverss.herokuapp.com/"
                    github="https://github.com/aneltuyebayeva/travel-lovers-frontend" />
           </div>
        </div>
    )
}


export default AllProjects