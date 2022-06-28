import FrontContext from "./Components/front/FrontContext";


function Front() {

    
    return (
        <FrontContext.Provider value={
            {
                
            }
        }>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                       list
                    </div>
                    
                </div>
            </div>
        </FrontContext.Provider>
    )
}

export default Front