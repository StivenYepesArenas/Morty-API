// eslint-disable-next-line react/prop-types
const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((x, index) => (
          <option key={index} value={x + 1}>
            {name} - {x + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputGroup;
