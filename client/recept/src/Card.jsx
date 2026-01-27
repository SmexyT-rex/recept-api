const Card = ({
  recipeTitle = "test",
  recipeDescription = "Description",
  ingredients = ["test", "test"],
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
        <p>{ingredients}</p>

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
              <h3 className="font-bold text-lg">{recipeTitle}</h3>
              <div className="overflow-x-auto rounded-box border border-base-content/5 bg-white">
                <p className="text-base/7 p-4 lg:pl-25 lg:pr-25">
                  Lorem ipsum sdfgsdfg sdfgsdfgs dfgsdfgsd fgsdfgsd fgsdfgsdf
                  gsdfgsdf gsdfgsdf gsdfgsd fgsdfgsdf gsdfgsdf gsdfgsdf gsdfgsdf
                  gsdfgsdfgsdfgsdfg sdfgsdfgsd fgsdfg Lorem ipsum sdfgsdfg
                  sdfgsdfgs dfgsdfgsd fgsdfgsd fgsdfgsdf gsdfgsdf gsdfgsdf
                  gsdfgsd fgsdfgsdf gsdfgsdf gsdfgsdf gsdfgsdf gsdfgsdfgsdfgsdfg
                  sdfgsdfgsd fgsdfgLorem ipsum sdfgsdfg sdfgsdfgs dfgsdfgsd
                  fgsdfgsd fgsdfgsdf gsdfgsdf gsdfgsdf gsdfgsd fgsdfgsdf
                  gsdfgsdf gsdfgsdf gsdfgsdf gsdfgsdfgsdfgsdfg sdfgsdfgsd
                  fgsdfgLorem ipsum sdfgsdfg sdfgsdfgs dfgsdfgsd fgsdfgsd
                  fgsdfgsdf gsdfgsdf gsdfgsdf gsdfgsd fgsdfgsdf gsdfgsdf
                  gsdfgsdf gsdfgsdf gsdfgsdfgsdfgsdfg sdfgsdfgsd fgsdfgLorem
                  ipsum sdfgsdfg sdfgsdfgs dfgsdfgsd fgsdfgsd fgsdfgsdf gsdfgsdf
                  gsdfgsdf gsdfgsd fgsdfgsdf gsdfgsdf gsdfgsdf gsdfgsdf
                  gsdfgsdfgsdfgsdfg sdfgsdfgsd fgsdfgLorem ipsum sdfgsdfg
                  sdfgsdfgs dfgsdfgsd fgsdfgsd fgsdfgsdf gsdfgsdf gsdfgsdf
                  gsdfgsd fgsdfgsdf gsdfgsdf gsdfgsdf gsdfgsdf gsdfgsdfgsdfgsdfg
                  sdfgsdfgsd fgsdfgLorem ipsum sdfgsdfg sdfgsdfgs dfgsdfgsd
                  fgsdfgsd fgsdfgsdf gsdfgsdf gsdfgsdf gsdfgsd fgsdfgsdf
                  gsdfgsdf gsdfgsdf gsdfgsdf gsdfgsdfgsdfgsdfg sdfgsdfgsd fgsdfg
                </p>
                <table className="table table-zebra">
                  {/* head */}
                  <thead className="text-stone-600">
                    <tr>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Card;
