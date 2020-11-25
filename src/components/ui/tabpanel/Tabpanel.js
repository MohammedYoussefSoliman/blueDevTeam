import React from 'react';

const TabPanel = ({children, value, index}) => {
  
    return (
      <div style={{height: "100%"}}
        hidden={value !== index}
      >
        {value === index && (
            children
        )}
      </div>
    );
  }

export default TabPanel