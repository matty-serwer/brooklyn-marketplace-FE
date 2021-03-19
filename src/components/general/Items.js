import React, { useEffect, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchItems } from "./../../redux/actions/itemActions";

const Items = (props) => {
  useEffect(() => {
    props.fetchItems();
  }, []);

  const allItems = this.props.items.map((item) => (
    <div key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  ));

  return (
    <div>
      <h1>Items</h1>
      {allItems}
    </div>
  );
};

Items.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  newItem: PropTypes.object,
};

const mapStateToProps = (state) => ({
  items: state.inventory.items,
  newItem: state.inventory.item,
});

export default connect(mapStateToProps, { fetchItems })(Items);
