import * as S from "./personalInfoStyle"
import profile from "@/assets/imgs/userProfile/profilePicture.png"
import eye from "@/assets/imgs/userProfile/eye.svg"
import { useState } from "react";
import { postContact } from "../../../../products/contact";
import { useNavigate } from "react-router-dom";
import arrow from "@/assets/imgs/userProfile/arrowLeft.svg"

export default function PersonalInfo() {
    const [phone, setPhone] = useState("")
    const [phoneMask, setPhoneMask] = useState("")
    const [passwordType, setPasswordType] = useState(true)
    const [firstName, setFirstName] = useState("")
    const [firstNameMask, setFirstNameMask] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastNameMask, setLastNameMask] = useState("")
    const [email, setEmail] = useState("")
    const [ddd, setDDD] = useState("")
    const [dddMask, setDDDmask] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [date, setDate] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const navigate = useNavigate()
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const maskPhone = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})(\d+?)$/, "$1");
    };
    const maskDDD = (value: string) => {
        return value.replace(/(\d{2})/, '+$1')
    }
    const maskOnlyLetters = (value: string) => {
        return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
    };
    const saveInfo = () => {
        if (phone.length !== 16) {
            alert("Phone number is invalid")
            return
        }
        if (firstName.length < 2) {
            alert("First name is invalid")
            return
        }
        if (lastName.length < 2) {
            alert("Last name is invalid")
            return
        }
        if (!emailRegex.test(email)) {
            alert("Email is invalid")
            return
        }
        if (ddd.length !== 2) {
            alert("DDD is invalid")
            return
        }
        if (date.length !== 10) {
            alert("Date is invalid")
            return
        }
        const info = {
            phone: phone,
            firstName: firstName,
            LastName: lastName,
            email: email,
            ddd: ddd,
            // confirmPassword: confirmPassword,
            dateBirth: date.replace(/-/g, " ").split(" ").reverse().join("/"),
            // currentPassword: currentPassword,
            // newPassword: newPassword
            password: newPassword
        }
        postContact(info)
    }
    return (
        <S.PersonalInfoContainer>
            <S.InfoHeader>
                <S.ArrowTitleDiv>
                    <S.ImgArrowLeft src={arrow} alt="" onClick={() => navigate(-1)} />
                    <S.InfoTitle>Personal Information</S.InfoTitle>
                </S.ArrowTitleDiv>
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
                        <S.InputFirstName type="text" placeholder="John" value={firstNameMask} onChange={(e) => { setFirstName(e.target.value); setFirstNameMask(maskOnlyLetters(e.target.value)) }} />
                    </S.FirstNameDiv>
                    <S.FirstNameDiv>
                        <S.Label htmlFor="">Last Name</S.Label>
                        <S.InputFirstName type="text" placeholder="Doe" value={lastNameMask} onChange={(e) => { setLastName(e.target.value); setLastNameMask(maskOnlyLetters(e.target.value)) }} />
                    </S.FirstNameDiv>
                </S.DivName>
                <S.DivEmail>
                    <S.Label htmlFor="">Email</S.Label>
                    <S.InputEmail type="text" placeholder="Johndoe@johndoe.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </S.DivEmail>
                <S.DivPhone>
                    <S.Label htmlFor="">Mobile Number</S.Label>
                    <S.DivNumbers>
                        <S.InputDDD type="text" placeholder="+11" value={dddMask} onChange={(e) => { setDDD(e.target.value); setDDDmask(maskDDD(e.target.value)) }} maxLength={3} />
                        <S.InputPhone type="text" placeholder="202-555-0114" value={phoneMask} onChange={(e) => { setPhoneMask(maskPhone(e.target.value)); setPhone(e.target.value) }} />
                    </S.DivNumbers>
                </S.DivPhone>
                <S.DateDiv>
                    <S.Label htmlFor="">Date of birth</S.Label>
                    <S.InputDate type="date" value={date} onChange={(e) => setDate(e.target.value)} maxLength={10} />
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
                        <S.InputPassword type="password" placeholder="********" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                    </S.DivInputPassword>
                    <S.DivInputPassword>
                        <S.Label htmlFor="">New Password</S.Label>
                        <S.InputPasswordShow>
                            <S.InputPassword type={passwordType ? "password" : "text"} placeholder="******" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            <S.ImgEye src={eye} alt="" onClick={() => setPasswordType(!passwordType)} />
                        </S.InputPasswordShow>
                    </S.DivInputPassword>
                    <S.DivInputPassword>
                        <S.Label htmlFor="">Confirm Password</S.Label>
                        <S.InputPassword type="password" placeholder="******" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </S.DivInputPassword>
                </S.ChangeContent>
            </S.ChangePassword>
            <S.DivSave>
                <S.BtnSave onClick={() => saveInfo()}>Save Changes</S.BtnSave>
            </S.DivSave>
        </S.PersonalInfoContainer>
    )
}