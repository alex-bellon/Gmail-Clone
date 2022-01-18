import React from "react";
import {
  Logo,
  SearchHeader,
  Search,
  HeaderSearchInput,
  HeaderSearchIcon,
  HeaderArrowIcon,
  HeaderRightIcons,
  PersonIcon,
} from "./searchbar.styles";

const Header = () => {
  return (
    <SearchHeader>
      <Logo>
        <div>
          <img
            className="gb_uc"
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            // srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png 2x "
            alt="logo"
            aria-hidden="true"
            // style="width:109px;height:40px"
          />
        </div>
      </Logo>
    </SearchHeader>
  );
};

export default Header;
