import { useRef } from "react";
import Member1 from "./img/member1.png";
import Member2 from "./img/member2.png";
import Member3 from "./img/member3.png";
import Member4 from "./img/member4.png";
import "./aboutUs.css";

const membersImg = [
    Member1, Member2, Member3, Member4
]

const TeamMemberCard = ({name, role, index}) => {
    const members = useRef(membersImg).current;
    return (
        <div className="dja_teamCard_container">
            <div className="dja_teamCard_img_ctn">
                <img src={members[index]} alt={name} />
            </div>
            <p className="dja_teamCard_name">{name}</p>
            <p>{role}</p>
        </div>
    )
}

export default TeamMemberCard;