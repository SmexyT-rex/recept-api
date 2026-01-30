const Card = ({
  recipeTitle = "test",
  recipeDescription = "Description",
  ingredients = [{ name: "test", quantity: "1" }],
  recipeInstructions = "Instructions",
}) => {
  return (
    <div className="card bg-orange-100 text-gray-950 w-96 xs:w-86 shadow-sm p-5">
      <figure>
        <img
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipeTitle}</h2>
        <p>{recipeDescription}</p>
        <p>{ingredients.map((ing) => ing.name).join(", ")}</p>

        <div className="card-actions flex justify-around">
          <button
            className="btn bg-pink-700 border-0"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            View recipe
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-white w-full min-w-full xs:min-h-full max-w-md h-auto">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg pb-5">{recipeTitle}</h3>
              <div className="overflow-x-auto rounded-box border border-base-content/5 bg-white">
                <div className="xl:p-4 flex justify-center">
                  <img
                    src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                    alt="Shoes"
                    className=" flex-1 xl:max-w-5xl rounded-xl"
                  />
                </div>
                <table className="table table-zebra">
                  {/* head */}
                  <thead className="text-stone-600">
                    <tr>
                      <th>Ingredient</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ingredients.map((ing) => (
                      <tr key={ing.id}>
                        <td>{ing.name}</td>
                        <td>{ing.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-base/7 p-4 lg:pl-25 lg:pr-25">
                  {recipeInstructions}
                </p>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Card;
