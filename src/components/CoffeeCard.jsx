import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, photo } = coffee;

  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                const remaining = coffees.filter((coff) => coff._id !== _id);
                setCoffees(remaining);
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="card card-side bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <figure className="w-48 h-48 p-4">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <p className="text-red-500">No image provided</p>
        )}
      </figure>
      <div className="flex justify-between items-center w-full p-4">
        {/* Text Section */}
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-800">
            Coffee: {name}
          </h2>
          <p className="text-sm text-gray-600">Quantity: {quantity}</p>
          <p className="text-sm text-gray-600">Supplier: {supplier}</p>
          <p className="text-sm text-gray-600">Taste: {taste}</p>
          <p className="text-sm text-gray-600">Category: {category}</p>
        </div>

        {/* Button Section */}
        <div className="flex flex-col gap-2 ml-4">
          <Link to={`/viewCoffee/${_id}`}>
            <button
              type="button"
              className="btn btn-sm bg-green-500 hover:bg-green-600 text-white"
            >
              View
            </button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button
              type="button"
              className="btn btn-sm bg-yellow-500 hover:bg-yellow-600 text-white"
            >
              Edit
            </button>
          </Link>
          <button
            type="button"
            onClick={() => handleDelete(_id)}
            className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
