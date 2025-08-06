import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";

const UpdateCoffee = () => {
  const navigate = useNavigate();
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedName = form.coffeeName.value;
    const updatedQuantity = form.quantity.value;
    const updatedSupplier = form.supplier.value;
    const updatedTaste = form.taste.value;
    const updatedCategory = form.category.value;
    const updatedDetails = form.details.value;
    const updatedPhoto = form.photoURL.value;

    const updatedCoffee = {
      name: updatedName,
      quantity: updatedQuantity,
      supplier: updatedSupplier,
      taste: updatedTaste,
      category: updatedCategory,
      details: updatedDetails,
      photo: updatedPhoto,
    };

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          }).then(() => {
            navigate("/");
          });
        }
      })
      .catch((err) => {
        console.error("Update failed:", err);
        Swal.fire({
          title: "Error!",
          text: "Failed to update coffee.",
          icon: "error",
        });
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-6 md:p-24">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
        Update Coffee: {name}
      </h2>

      <form onSubmit={handleUpdateCoffee} className="space-y-6">
        {/* row 1 */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              name="coffeeName"
              defaultValue={name}
              placeholder="Enter coffee name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Enter quantity"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* row 2 */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter supplier name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Enter taste"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* row 3 */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Enter category"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter details"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* photo url */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photoURL"
            defaultValue={photo}
            placeholder="Enter photo URL"
            className="input input-bordered w-full"
          />
        </div>

        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block mt-2"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
