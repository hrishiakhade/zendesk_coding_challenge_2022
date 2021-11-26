import React from 'react'
import strings from '../../utils/constants/strings';

const Header = () => (
  <header className="header">
    <h3 className="header__title">{strings.app_name}</h3>
  </header>
)

export default Header