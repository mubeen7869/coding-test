import React from "react";
import './File.css';

const File = ({ name }) => {
    return (
        <div className="file">
            {name}
        </div>
    );
};

export default File;