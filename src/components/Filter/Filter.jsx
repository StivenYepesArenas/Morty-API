/* eslint-disable react/prop-types */
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = ({
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  const clearFilters = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    // Consider alternative approaches to clearing filters without a full page reload
    // window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clearFilters}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
    </div>
  );
};

export default Filter;
