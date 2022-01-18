import React, { useState } from "react";
import {
  changePage,
  hidePromo,
  hideSocial,
} from "../../redux/paginate/paginate.actions";
import {
  selectPromo,
  selectSocial,
} from "../../redux/paginate/paginate.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  BottomBorder1,
  BottomBorder2,
  BottomBorder3,
  CategoryButtonContainer,
  CategoryButton1,
  CategoryButton2,
  CategoryButton3,
  ButtonImageContainer,
  ButtonInfo,
  ButtonInfoTop,
  ButtonInfoBottom,
  ButtonInfoTitle,
} from "./category-buttons.styles";

const CategoryBtn = ({
  changePage,
  hidePromo,
  hideSocial,
  selectPromo,
  selectSocial,
}) => {
  const [color, setColor] = useState("red");

  const handleChange1 = () => {
    setColor("red");
    changePage(1);
  };

  const handleChange2 = () => {
    setColor("blue");
    changePage(2);
    hideSocial();
  };

  const handleChange3 = () => {
    setColor("green");
    changePage(3);
    hidePromo();
  };

  return (
    <CategoryButtonContainer>
    </CategoryButtonContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  selectSocial,
  selectPromo,
});
const mapDispatchToProps = (dispatch) => ({
  changePage: (value) => dispatch(changePage(value)),
  hideSocial: () => dispatch(hideSocial()),
  hidePromo: () => dispatch(hidePromo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBtn);
