import './App.css';
import restaurant from './restaurant.jpg'

function Header(props){
  return(
    <header className = "header">
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

const dishes = [
  "Lobster Mac & Cheese",
  "Caviar",
  "Tomahwack Steak"
]

const dishObjects = dishes.map((dish, i) => ({id: i, name: dish}))

function Main(props){
  return(
    <section className = "main">
      <img src = {restaurant} height = {500} alt = "Dinning room"/>
      <p>We serve the mose {props.adjective} food in town.</p>
      <ul style = {{textAlign: "left"}} >
        {props.dishObjects.map((dish) => (
          <li key = {dish.id}>{dish.name}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props){
  return(
    <footer className = "footer">
      <p>Copyright {props.year} </p>
    </footer>
  );
}


function App() {
  return (
    <div className="App">
      <Header name = "Sophie" />
      <Main adjective = "fanciest" dishObjects = {dishObjects}/>
      <Footer year = {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
