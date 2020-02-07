import React from 'react';

import { ReactBingmaps } from 'react-bingmaps';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ReactBingmaps
          bingmapKey="AnK1IGWE20I4jxXYE6lqu5sPHf9rQR5OEBs1vyrXBt6LGy4HpbAHqc0kGvq1pFpf"
          center={[42.6170006, 25.3999996]}
          zoom={8}
          mapTypeId={"aerial"}

          infoboxesWithPushPins = {[
            {
              "location":[42.6170006, 25.3999996], 
              "addHandler": "click", //on click the pushpin, infobox shown
              "infoboxOption": { title: '№ на станция', description: '...' },
              "pushPinOption":{ icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png' },
            },
          ]
          }
        >
        </ReactBingmaps>
      </header>

    </div>
  );
}

export default App;