import { Link } from "react-router-dom"

function Home() {
    return (

        <div>

            <h1>HOME</h1>
            <Link to="/">Home</Link>
            <Link to="/12MAY24">12MAY24</Link>
            <Link to="/13MAY24">13MAY24</Link>
            <Link to="/14MAY24">14MAY24</Link>


        </div>

    )
}

export default Home()