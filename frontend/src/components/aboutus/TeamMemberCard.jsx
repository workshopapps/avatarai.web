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