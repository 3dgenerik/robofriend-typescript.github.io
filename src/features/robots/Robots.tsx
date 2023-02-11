import React, { useEffect, useState } from "react";
import { fetchUsersPending } from "./robotsSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { rootState } from "../../redux/store";
import { IRobotInfo } from "./robotsSlice";
import { RobotCards } from "../robotCards/RobotCards";
import './robots.style.scss'
import { Scroll } from "../scroll/Scroll";

interface IRobotsProps {
    url:string
}

export const Robots: React.FC<IRobotsProps> = ({url}) => {
    const {isLoaded, robots, error} = useAppSelector((state:rootState) => state.robots)
    const dispatch = useAppDispatch()
    const [text, setText] = useState<string>('');

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setText(e.currentTarget.value)
    }

    useEffect(()=>{
        dispatch(fetchUsersPending(url))
    }, [])

    const robotCards = robots
        // .filter((item:IRobotInfo) => item.name.toLowerCase().includes(text.toLowerCase()))
        .map((item:IRobotInfo, idx:number) => {
            return <RobotCards
                key = {idx}
                name = {item.name}
                email = {item.email}
                num = {item.id}
                text = {text}
                />
    })

    return(
        <>
            <h1 style = {{fontSize:'4rem'}} className = "m-3 d-flex justify-content-center fw-light">ROBOFRIENDS</h1>
            <div className="container">
                <input
                    onChange={(e) => onTextChange(e)}
                    className="form-control w-75 m-auto p-2"
                    placeholder="...highlight robots"
                    />
            </div>
            {/* <Scroll> */}
                <div className="robot-container m-2">
                    {
                        isLoaded ? <p>...loading</p> : robotCards
                    } 
                </div>
            {/* </Scroll> */}
        </>
    )
}