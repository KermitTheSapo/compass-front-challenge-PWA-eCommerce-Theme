import * as S from "./personalInfoStyle"
import profile from "@/assets/imgs/userProfile/profilePicture.png"
import eye from "@/assets/imgs/userProfile/eye.svg"
import { useState } from "react";

export default function PersonalInfo() {
    const [phone, setPhone] = useState("")
    const [passwordType, setPasswordType] = useState(true)
    const maskPhone = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})(\d+?)$/, "$1");
    };
    return (
        <S.PersonalInfoContainer>
            <S.InfoHeader>
                <S.InfoTitle>Personal Information</S.InfoTitle>
                <S.Separator></S.Separator>
            </S.InfoHeader>
            <S.InfoContent>
                <S.ProfilePicture>
                    <S.ImgProfile src={profile} alt="" />
                    <S.BtnUpload>Upload</S.BtnUpload>
                    <S.BtnDelete>Delete</S.BtnDelete>
                </S.ProfilePicture>
            </S.InfoContent>
            <S.FormInformation>
                <S.DivName>
                    <S.FirstNameDiv>
                        <S.Label htmlFor="">First Name</S.Label>
                        <S.InputFirstName type="text" placeholder="John" />
                    </S.FirstNameDiv>
                    <S.FirstNameDiv>
                        <S.Label htmlFor="">Last Name</S.Label>
                        <S.InputFirstName type="text" placeholder="Doe" />
                    </S.FirstNameDiv>
                </S.DivName>
                <S.DivEmail>
                    <S.Label htmlFor="">Email</S.Label>
                    <S.InputEmail type="text" placeholder="Johndoe@johndoe.com" />
                </S.DivEmail>
                <S.DivPhone>
                    <S.Label htmlFor="">Mobile Number</S.Label>
                    <S.DivNumbers>
                        <S.InputDDD type="text" placeholder="+11" />
                        <S.InputPhone type="text" placeholder="202-555-0114" value={phone} onChange={(e) => setPhone(maskPhone(e.target.value))} />
                    </S.DivNumbers>
                </S.DivPhone>
                <S.DateDiv>
                    <S.Label htmlFor="">Date of birth</S.Label>
                    <S.InputDate type="date" />
                </S.DateDiv>
            </S.FormInformation>
            <S.ChangePassword>
                <S.ChangeHeader>
                    <S.ChangeTitle>Change Password</S.ChangeTitle>
                    <S.Separator></S.Separator>
                </S.ChangeHeader>
                <S.ChangeContent>
                    <S.DivInputPassword>
                        <S.Label htmlFor="">Current Password</S.Label>
                        <S.InputPassword type="password" placeholder="********" />
                    </S.DivInputPassword>
                    <S.DivInputPassword>
                        <S.Label htmlFor="">New Password</S.Label>
                        <S.InputPasswordShow>
                            <S.InputPassword type={passwordType ? "password" : "text"} placeholder="******" />
                            <S.ImgEye src={eye} alt="" onClick={() => setPasswordType(!passwordType)} />
                        </S.InputPasswordShow>
                    </S.DivInputPassword>
                    <S.DivInputPassword>
                        <S.Label htmlFor="">Confirm Password</S.Label>
                        <S.InputPassword type="password" placeholder="******" />
                    </S.DivInputPassword>
                </S.ChangeContent>
            </S.ChangePassword>
            <S.DivSave>
                <S.BtnSave>Save Changes</S.BtnSave>
            </S.DivSave>
        </S.PersonalInfoContainer>
    )
}