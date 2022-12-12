const Item = ({ el }) => {
  const { idNum, text } = el;

  return (
    <div className="list-item">
      <input type="checkbox" className="hidden-box" id={`my-id-${idNum}`} />
      <label htmlFor={`my-id-${idNum}`} className="check--label">
        <span className="check--label-box"></span>
        <span className="check--label-text">{text}</span>
      </label>
    </div>
  );
};

export default Item;
