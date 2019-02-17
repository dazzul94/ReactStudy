import React from 'react';
import './Pallete.css';

const Pallete = (param) => {
    const { colors, colorClick } = param;
    return (
        <div className="pallete">
            {colors.map((color, colorIdx) => 
                <div key={color}
                     className="color"
                     style={{background: color}}
                     onClick={(e) => {
                        e.stopPropagation(); 
                        colorClick(colorIdx)}}
                />   
            )}
        </div>
    );
};

export default Pallete;