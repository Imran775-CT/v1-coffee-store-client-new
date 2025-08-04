import { useEffect, useState } from "react";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  // loadedCoffees = useLoaderData(); // usestate er moddhe coffees diye dite hobe..alternative. process.
  const [coffees, setCoffees] = useState([]); // Default to empty array

  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched coffees:", data);
        if (Array.isArray(data)) {
          setCoffees(data);
        } else {
          console.error("Expected array, but got:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching coffees:", error);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-right">☕ Coffee List</h1>

      {coffees.length === 0 ? (
        <p>No coffee items available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffees={coffees}
              setCoffees={setCoffees}
              coffee={coffee}
            ></CoffeeCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
