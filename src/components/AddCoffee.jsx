import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const navigate = useNavigate();
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.coffeeName.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photoURL.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    //  send data to the server

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          }).then(() => {
            navigate("/");
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24 ">
      <h2 className="text-3xl font-extrabold">Add a coffee</h2>

      <form onSubmit={handleAddCoffee}>
        {/* form row   ,, Name and quantity row*/}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <br />
            <label className="input-group">
              <input
                type="text"
                name="coffeeName"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <br />
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Enter quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row    Supplier*/}
        <div className="md:flex mb-8 ">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <br />
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Enter supplier name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <br />
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Enter taste quality"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">category</span>
            </label>
            <br />
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Enter category name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <br />
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Enter Cofee Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <br />
          <label className="input-group">
            <input
              type="text"
              name="photoURL"
              placeholder="Enter Photo URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block mt-2"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
