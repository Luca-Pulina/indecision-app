import React from 'react'

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                <h2 className="header__subtitle">{props.subTitle}</h2>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: 'Default title'
}

export default Header