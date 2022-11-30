import { useRef } from "react";
import Member1 from "./img/member1.png";
import Member2 from "./img/member2.png";
import Member3 from "./img/member3.png";
import Member4 from "./img/member4.png";
import "./aboutUs.css";

const TeamMemberCard = ({profile, index}) => {
    return (
        <div key={index} className="">
            <div className="">
                <img src={profile.image} alt={profile.name} className="w-full rounded-[10px]" />
            </div>
            <p className="font-bold text-base mt-[8px]">{profile.name}</p>
            <p className="text-base">{profile.role}</p>
        </div>
    )
}

export default TeamMemberCard;