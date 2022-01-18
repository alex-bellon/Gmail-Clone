import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SidebarContainer,
  ComposeButton,
  ComposeImg,
  SideNavContainer,
  ListImg,
  SideNavList,
  Meet,
  MeetText,
  Hangout,
  HangoutFlex,
  HangoutText,
  CapitalT,
  HangoutName,
  HangoutCross,
  HangoutArrow,
} from "./sidebar.styles";

const SideBar = ({ shouldMessageShow }) => {
  const [hightlight, setHighlight] = useState("inbox");

  const handleClick = () => {
    shouldMessageShow(false);
  };
  return (
    <SidebarContainer className="sidebar">
      <div className="compose">
        <ComposeButton onClick={handleClick}>
          <ComposeImg />
          <div> Compose</div>
        </ComposeButton>
      </div>
      <div>
        <SideNavContainer>
          <Link to="/">
            <SideNavList
              className={hightlight === "inbox" ? "red-highlight" : ""}
              onClick={() => setHighlight("inbox")}
            >
              <span className="icon">
                {hightlight === "inbox" ? (
                  <img
                    src="https://www.gstatic.com/images/icons/material/system/1x/inbox_gm_googlered600_20dp.png"
                    alt="img"
                  />
                ) : (
                  <ListImg
                    src="https://www.gstatic.com/images/icons/material/system/1x/inbox_black_20dp.png"
                    alt="inbox"
                  />
                )}
              </span>
              <span className="title">Inbox</span>
              <span className="number">71</span>
            </SideNavList>
          </Link>
        </SideNavContainer>
      </div>
    </SidebarContainer>
  );
};

export default SideBar;
