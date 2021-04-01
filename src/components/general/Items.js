import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchItems } from "./../../redux/actions/itemActions";

const Items = (props) => {
  useEffect(() => {
    props.fetchItems();
  }, []);

  // const allItems = props.items.map((item) => (
  //   <div key={item.id}>
  //     <h3>{item.name}</h3>
  //     <p>{item.description}</p>
  //   </div>
  // ));

  return (
    <div>
      <h1>Items</h1>
      {props.items.length > 0 ? (
        props.items.map((item, index) => (
          <h3 key={index}>{item.name}</h3>
        ))
      ) : (
        <p>No Items Loaded</p>
      )}
    </div>
  );
};

Items.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  newItem: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    items: state.inventory.items,
    newItem: state.inventory.item,
  };
};

export default connect(mapStateToProps, { fetchItems })(Items);
