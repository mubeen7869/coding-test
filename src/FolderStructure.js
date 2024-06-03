import React from "react";
import { data } from "./config";
import Folder from "./Folder";

const FolderStructure = () => {
    return(
        <div>
            {data.folders.map((folder,index) => (
                <Folder key={index} {...folder} />
            ))}
        </div>
    );
};
export default FolderStructure;