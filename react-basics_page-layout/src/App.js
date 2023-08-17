import "./Header.css"; // Import CSS file for Header component
import "./MainContent.css"; // Import CSS file for MainContent component
import "./Footer.css"; // Import CSS file for Footer component

function Header() {
  return (
    <div>
      <h1 className="header">How to learn coding fast ...</h1>
    </div>
  );
}

function MainContent() {
  return (
    <>
      <section className="main-content">
        If you want to learn coding as fast as possible, you have to book a
        neufische course and then just trust the process.
      </section>
    </>
  );
}

function Footer() {
  return (
    <>
      <ul>
        <li>
          <a
            className="footer"
            href="https://www.neuefische.de/en?gad=1&gclid=EAIaIQobChMIsbK9xrfjgAMVUw6zAB3wZgQcEAAYASAAEgJrd_D_BwE#bootcamps?utm_source=sea_google&utm_medium=search&utm_campaign=brand_neue_fische_bundesweit"
          >
            neuefische
          </a>
        </li>
      </ul>
    </>
  );
}

function App() {
  // Render components within App
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
