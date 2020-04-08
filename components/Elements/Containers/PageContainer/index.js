import React from 'react'

const PageContainer = props => {
    return (
        <div className="container">
           {props.children}
        </div>
    )
}

export default PageContainer
