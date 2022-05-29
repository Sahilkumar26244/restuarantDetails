import "./styles.css";
import Card from "./components/Card";
import Form from "./components/Form";
import Restaurant from "./components/Restaurant";
import db from "./restaurantDetails/db.json";
export default function App() {
  return (
    <div className="App">
      <Card />
      <Form />
      <Restaurant />
    </div>
  );
}
