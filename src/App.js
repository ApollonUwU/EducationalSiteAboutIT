import React, { useState } from 'react';
import './App.css';
import './background.webp'
import TopCss from './paraghraps/topCss/TopCss';
import TopJS from './paraghraps/topJS/TopJS';
import TopHtml from './paraghraps/topHtml/TopHtml';

function App() {
  let arrTop = ["HTML", "CSS", "JS", "Titile screen"]; //arr of all topics

  const [curTop, setTop] = useState(""); //state of what is shown

  const listTop = arrTop.map((top) => //generator content of the site 
     <div onClick = { (e) => { e.preventDefault(); setTop(top)}} > 
        <div className='ListOfTop'>
         <b>{top}</b>
        </div> 
    </div>
  );

  const topInfo = () =>{ //returns to user a topic which he choosed
    switch (curTop) {
      case"HTML":
        return(<div><TopHtml></TopHtml></div>);

      case "CSS":
        return(<div><TopCss></TopCss></div>);

      case "JS":
        return(<div><TopJS></TopJS></div>);

      default:
        return( //title screen html
          <div>
            <div className='aboutSite'>
              <h2>
                This is my site about Internet Technologies!!
              </h2>
            </div>
            <div className='listOftech'>
                <h4>
                  Technologies i used to create this site:
                </h4>
            </div>
            <div>
              <li>Html</li>
              <li>Css</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </div>
          </div>
        );
}
  }
  return (
    <div className="App">        
      <header>
        <div className='alltext'>
        <h2 className='Ftext'>Internet Technologies</h2>
        <div className="SelectBar">
          <div>
            <b className='Ftext'>Select topic to read about it more:</b>
              {listTop}
          </div>
        </div>
        </div>
      </header>
      <body>
        <div className="Inform">
              {topInfo()}
        </div>
      </body>
    </div>
  );
}

export default App;
