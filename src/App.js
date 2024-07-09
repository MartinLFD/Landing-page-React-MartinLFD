import logo from './logo.svg';
import './App.css';

import Jumbotron from './components/Jumbotron';
import Card from './components/Cards';
import Navbar from './components/Navbar';
import Footer from './components/Footer'




function App() {

  let cardData = [{
    id: 1,
    title: 'Hotel N°1 de Ski',
    body: 'En este hotel se cobra un total de $350.000 por una estadía de 4 noches + clases de Ski en horario de 12:00 pm a 4:00 pm. ',
    imgUrl: 'https://www.gochile.cl/fotos/full/109258-portillo.jpg'
  },
  {
    id: 2,
    title: 'Hotel N°2 de Ski',
    body: 'En este 2do Hotel se cobra un total de $230.000 por una estadía de 4 noches, contando con clases de Ski por un valor de $20.000 p/día en horario de 12:00 pm a 5:00 pm',
    imgUrl: 'https://storage.googleapis.com/chile-travel-cdn/2023/05/18d95107-portada.jpg'
  },
  {
    id: 3,
    title: 'Hotel N°3 de Ski',
    body: 'En este 3er Hotel se cobra un total de $150.000 por una estadía de 2 noches, contando con zona de práctica para Ski',
    imgUrl: 'https://www.lugaresdenieve.com/sites/default/files/nevados-chillan_4.jpg'
  },
  {
    id: 4,
    title: 'Escuela Top N°1 para Skydiving',
    body: 'Esta es la escuela N°1 de Skydiving, donde se te enseñará en clases privadas todo lo necesario para poder realizar de manera correcta este deporte, incluyendo zona de práctica privada. Las clases tienen una duración de 1 semana por un valor de $300.000',
    imgUrl: 'https://bigwaveskydive.com.au/wp-content/uploads/2023/11/G0030516-scaled.jpg'
  },
  {
    id: 5,
    title: 'Escuela Top N°2 para Skydiving',
    body: 'Esta es la escuela N°2 de Skydiving, donde se enseñara en clases públicas lo necesario para poder realizar de manera segura este deporte, incluye zona pública de práctica. Duración de las clases: 1 semana. Todo por un valor de $150.000',
    imgUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a4/9b/5c/jumping-with-skydive.jpg?w=1200&h=-1&s=1'
  },
  {
    id: 6,
    title: 'Escuela Top N°3 para Skydiving',
    body: 'Esta es la escuela N°3 de Skydiving, donde se enseñara en clases públicas lo necesario para poder realizar de manera correcta y segura este deporte, no incluye zona de práctica. Duración de las clases: 1 semana. Todo por un valor de $100.000',
    imgUrl: 'https://res.cloudinary.com/adrenalinecomau/image/upload/q_auto,f_auto/v1691971679/adventures/eps_22575.jpg'
  }
  ]
  return (
    <div className="App">

      <Navbar />

      <div className='container'>
        <Jumbotron />



        <div class="container text-center">
          <div class="row">
            {cardData.map(item => {
              return <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
                <Card title={item.title} text={item.body} img={item.imgUrl} />
              </div>
            })}
          </div>
        </div>




      </div>

      <Footer />

    </div>
  );
}

export default App;
