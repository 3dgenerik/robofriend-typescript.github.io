import React from "react";

interface IRobotCardProps{
    name:string,
    email:string,
    num:number,
    text:string
}

export const RobotCards: React.FC<IRobotCardProps> = ({name, email, num, text}) => {

    const classNameSufix = text && name.toLowerCase().includes(text.toLowerCase()) ? 1 : 0

    return(
            <div
                style={{
                    height:'400px'
                }} 
                className={`d-flex flex-column align-items-center justify-content-center bg-light gap-1 m-2 rounded-4 border shadow-sm p-2 item-${classNameSufix}`}> 
                <img src={`https://robohash.org/${num}`} alt={`robot_${num}`} className="w-50"/>
                <div className="fw-bold mt-4">{name}</div>
                <div className="text-secondary">{email}</div>
            </div>
    )
}