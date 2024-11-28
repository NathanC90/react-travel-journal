import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {
  const entryElements = data.map(entry => {
    return <Entry 
              img={entry.img}
              title={entry.title}
              country={entry.country}
              googleMapsLink={entry.googleMapsLink}
              dates={entry.dates}
              text={entry.text}
            />
  })
  return (
    <div className="App">
      <Header />
      {entryElements}
    </div>
  );
}

export default App;
