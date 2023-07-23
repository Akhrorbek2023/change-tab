
import Navbar from "./Navbar";
import { BrowserRouter as Router , Route , Routes
} from "react-router-dom";
import Positive from "./Positive";
import Negative from "./Negative";
import Native from "./Native";



const Content = ()=>{
    return(
        <div className="content">
            <Router>
                
                <Navbar/>
                    <Routes>
                        <Route path="positive" key="positive" element={<Positive/>}> </Route>
                        <Route path="negative" key="negative" element={<Negative/>}> </Route>
                        <Route path="native" key="native" element={<Native/>}> </Route>
                    </Routes>
                </Router>
        </div>
    )
}

export default Content