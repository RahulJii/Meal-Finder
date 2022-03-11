import React from "react";
import RecipeModal from "./RecipeModal";

const RecipeItem = (props) => {
  const { name, image, ingredientLines } = props;
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="col-md-3">
      <RecipeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        label={name}
        ingredientLines={ingredientLines}
      />
      <div className="card py-2 my-4 text-center">
        <img
          src={image}
          className="img-fluid w-50 mx-auto rounded-circle"
          alt="recipe"
        />
        <div className="card-body">
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={() => {
              setModalShow(true);
            }}
          >
            <h5>{name}</h5>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
