export function Cube() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="image-cube">
              <div className="front">
                  <div style={{"width":"100%","height": "100%", "backgroundColor": "#46B1C9", "borderRadius": "1åpx"}}></div>
              </div>
              <div className="right">
                  <div style={{"width":"100%","height": "100%", "backgroundColor": "#B1740F", "borderRadius": "1åpx"}}></div>    
              </div>
              <div className="back">
                  <div style={{"width":"100%","height": "100%", "backgroundColor": "#FDB833", "borderRadius": "1åpx"}}></div>    
              </div>
              <div onDoubleClick={() => console.log(88)} className="left">
                  <div style={{"width":"100%","height": "100%", "backgroundColor": "#542344", "borderRadius": "1åpx"}}>
                  </div>    
              </div>
          </div>
        </div>
      </div>
    );
  }