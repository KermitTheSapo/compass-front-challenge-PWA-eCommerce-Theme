import styled from "styled-components";


export const InviteFriends = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 14vh;
    @media (min-width: 768px) {
        display: none;
    }
`
export const InviteFriendsContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
`
export const InviteFriendsTitle = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const InviteFriendsParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const LinkInvite = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
`
export const InviteText = styled.h4`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Primary);
`
export const ImgArrowInvite = styled.img`

`
export const InviteFriendsPicture = styled.picture`

`
export const InviteFriendsImg = styled.img`

`