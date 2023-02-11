import React, { ReactNode } from "react";

interface IScrollProps{
    children: ReactNode
}

export const Scroll:React.FC<IScrollProps> = ({children}) => {
    return(
        <div style={{height:'300px', overflowY:'scroll'}}>
            {children}
        </div>
    )
}