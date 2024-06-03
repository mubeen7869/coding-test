import React, { useState } from 'react';
import File from './File';
import './Folder.css';


const Folder = ({name, folders = [], files = []}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <div className='folder' onClick={toggle}>
                {isOpen ?  '-' : '+'} {name}
            </div>
            {isOpen && (
                <div className='folder-content'>
                    {folders.map((folder, index) => (
                        <Folder key={index} {...folder} />
                    ))}
                    {files.map((file, index) => (
                        <file key={index} name= {file}/>
                    ))}
        </div>
            )}
            </div>
    );
};
export default Folder;