const Popup = (props) => {
    return props.trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn">x</button>
          {props.children}
        </div>
      </div>
    ) : (
      ""
    );
  };
  
  export default Popup;
  