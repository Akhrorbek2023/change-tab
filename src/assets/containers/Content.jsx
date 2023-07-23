
import Navbar from "./Navbar";
import { BrowserRouter as Router , Route , Routes
} from "react-router-dom";
import Positive from "./Positive";
import Negative from "./Negative";
import Neutral from "./Neutral";



const Content = ()=>{
    return(
        <div className="content">
            <Router>
                
                <Navbar/>
                    <Routes>
                        <Route path="positive" key="positive" element={<Positive/>}> </Route>
                        <Route path="negative" key="negative" element={<Negative/>}> </Route>
                        <Route path="neutral" key="neutral" element={<Neutral/>}> </Route>
                    </Routes>
                </Router>
        </div>
    )
}

export default Content