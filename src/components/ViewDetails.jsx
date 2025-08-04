import { useLoaderData, useNavigate } from "react-router-dom";

const ViewDetails = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200 py-10 px-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8 border border-orange-300">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={coffee.photo}
              alt={coffee.name}
              className="w-full h-64 object-cover rounded shadow"
            />
          </div>
          <div className="md:w-1/2 text-left space-y-3">
            <h2 className="text-3xl font-bold text-orange-600 mb-2">
              ☕ {coffee.name}
            </h2>
            <p>
              <span className="font-semibold">Supplier:</span> {coffee.supplier}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {coffee.category}
            </p>
            <p>
              <span className="font-semibold">Taste:</span> {coffee.taste}
            </p>
            <p>
              <span className="font-semibold">Quantity:</span> {coffee.quantity}
            </p>
            <p>
              <span className="font-semibold">Details:</span> {coffee.details}
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
