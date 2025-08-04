import { useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="p-8 max-w-xl mx-auto shadow-lg rounded-xl">
      <img src={photo} alt={name} className="w-full h-64 object-cover rounded-md" />
      <h2 className="text-2xl font-bold mt-4">{name}</h2>
      <p><strong>পরিমাণ:</strong> {quantity}</p>
      <p><strong>সরবরাহকারী:</strong> {supplier}</p>
      <p><strong>স্বাদ:</strong> {taste}</p>
      <p><strong>বিভাগ:</strong> {category}</p>
      <p><strong>বিস্তারিত:</strong> {details}</p>
    </div>
  );
};

export default CoffeeDetails;