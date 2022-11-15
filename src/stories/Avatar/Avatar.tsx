import './avatarStyle.css';

import avatarSmall from "../assets/avatar/avatar-small.png"
import avatarMedium from "../assets/avatar/avatar-medium.png"

interface HeaderProps {
    size: string;
}

export const Avatar = ({ size }: HeaderProps) => (
    <img src={size === "small" ? avatarSmall : avatarMedium} alt={size} className={`avatar-${size}`} />
);