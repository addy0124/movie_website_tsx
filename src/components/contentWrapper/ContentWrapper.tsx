import React, { ReactNode } from 'react'

import './contentWrapperStyled.scss';

type Props = {
    children: ReactNode;
  };

const ContentWrapper:React.FC<Props> = ({ children }) => {
  return (
    <div className="contentWrapper">{children}</div>
  )
}

export default ContentWrapper