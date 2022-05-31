import './kolt.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <div className="container">
              <div className='form'>
                <div>
                  <h2>Naujo paspirtuko forma</h2>  
                </div>
                <div className="form-group">
                    <label className="label">ID:</label>
                    <input type="text" className="form-row"/>
                </div>
                <div className="form-group">
                    <label className="label">Registration Code:</label>
                    <input type="text" className="form-row"/>
                </div>
                <div className="form-group">
                    <label className="label">Last time used:</label>
                    <input type="text" className="form-row"/>
                </div>
                <div className="form-group">
                    <label className="label">Total Ride Kilometers:</label>
                    <input type="text" className="form-row"/>
                </div>
                <button type="button" className="btn">Pridėti</button>
            </div>
            </div>
            </header>
        </div>
    );
}

export default App;


//
//<main class="container">
//<form class="form">
//    <div class="form-row">
//        <h1>Get In Touch</h1>
//    </div>
//    <div class="form-row">
//        <input type="text" class="input input1" placeholder="First Name">
//        <input type="text" class="input input1" placeholder="Last Name" >
//    </div>