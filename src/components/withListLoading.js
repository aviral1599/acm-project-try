import React from 'react';

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return ( 
        <div className="container">
    
    <Component {...props} />
    </div>
    
    );
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' , color: "white" }}>
        Hold on, fetching data may take some time :)
      </p>
    );
  };
}
export default WithListLoading;
