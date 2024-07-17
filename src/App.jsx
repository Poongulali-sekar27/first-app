import React from 'react'
import Card from './Card'
function App() {
  let data = [
    {
      title:"Tajmahal",
      image:"https://cdn.britannica.com/86/170586-131-7E23E561/Taj-Mahal-Agra-India.jpg?w=200&h=200&c=crop",
      description:"Construction of the mausoleum was completed in 1648, but work continued on other phases of the project for another five years. The first ceremony held at the mausoleum was an observance by Shah Jahan, on 6 February 1643, of the 12th anniversary of the death of Mumtaz Mahal."
    },
    {
      title:"Cricket From India",
      image:"https://www.aljazeera.com/wp-content/uploads/2024/06/AFP__20240629__34ZU79L__v1__HighRes__CricketMenST20WorldCupFinalIndiaVSouthAfrica-1719687925.jpg?w=770&resize=770%2C513",
      description:"Construction of the mausoleum was completed in 1648, but work continued on other phases of the project for another five years. The first ceremony held at the mausoleum was an observance by Shah Jahan, on 6 February 1643, of the 12th anniversary of the death of Mumtaz Mahal."
    },
    {
      title:"Ananth Ambani vs Radhika Merchand",
      image:"https://assets.vogue.in/photos/65e1eef931367768d459032a/3:4/w_2560%2Cc_limit/GettyImages-1250367565.jpg",
      description:"Construction of the mausoleum was completed in 1648, but work continued on other phases of the project for another five years. The first ceremony held at the mausoleum was an observance by Shah Jahan, on 6 February 1643, of the 12th anniversary of the death of Mumtaz Mahal."
    }
  ]
  return <>
  {/* <!-- Page Content --> */}
<div className="container">

  {/* <!-- Page Heading --> */}
  <h1 className="my-4">Todays Top Of The News

  </h1>

  <div className="row">
  {
    data.map((e,i)=>{
      return <Card data={e} key={i}/>
    })
  }
  </div>
</div>
  </>  
}

export default App