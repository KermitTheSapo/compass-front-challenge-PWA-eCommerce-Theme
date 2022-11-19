import * as S from "./inviteFriendsStyle"
import invite from "../../../assets/imgs/productPage/inviteImg.png"
import inviteArrow from "../../../assets/imgs/productPage/inviteArrow.svg"

export default function InviteFriends() {
    return (
        <S.InviteFriends>
            <S.InviteFriendsContent>
                <S.InviteFriendsTitle>Invite Friends & Earn</S.InviteFriendsTitle>
                <S.InviteFriendsParagraph>Invite yourGet uptp 100 reward points for every friend you invite</S.InviteFriendsParagraph>
                <S.LinkInvite>
                    <S.InviteText>Invite Now</S.InviteText>
                    <S.ImgArrowInvite src={inviteArrow} alt="blue right arrow" />
                </S.LinkInvite>
            </S.InviteFriendsContent>
            <S.InviteFriendsPicture>
                <S.InviteFriendsImg src={invite} alt="clear square" />
            </S.InviteFriendsPicture>
        </S.InviteFriends>
    )
}