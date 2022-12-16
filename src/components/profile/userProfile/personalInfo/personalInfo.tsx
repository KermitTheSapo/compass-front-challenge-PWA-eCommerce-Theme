import * as S from "./personalInfoStyle"
import profile from "@/assets/imgs/userProfile/profilePicture.png"
import eye from "@/assets/imgs/userProfile/eye.svg"
import { useEffect, useState } from "react";
import { getContact, postContact } from "../../../../products/contact";
import { useNavigate } from "react-router-dom";
import arrow from "@/assets/imgs/userProfile/arrowLeft.svg"

export default function PersonalInfo() {
    const [image, setImage] = useState(profile)
    const [phone, setPhone] = useState("")
    const [phoneMask, setPhoneMask] = useState("")
    const [passwordCurrentType, setPasswordCurrentType] = useState(false)
    const [passwordNewType, setPasswordNewType] = useState(false)
    const [passwordConfirmType, setPasswordConfirmType] = useState(false)
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
    const [contact, setContact] = useState({
        _id: "",
        ddd: "",
        phone: "",
        firstName: "",
        LastName: "",
        email: "",
        dateBirth: "",
        password: "",
        image: "",
        name: ""
    })
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
    useEffect(() => {
        getContact().then(res => setContact(res[res.length - 1]))
    }, [])
    useEffect(() => {
        setPhone(contact.phone)
        setPhoneMask(maskPhone(contact.phone))
        setFirstName(contact.firstName)
        if (contact.firstName) {
            setFirstNameMask(maskOnlyLetters(contact.firstName))
            setLastNameMask(maskOnlyLetters(contact.LastName))
            setDate(contact.dateBirth.replace(/\//g, " ").split(" ").reverse().join("-"))
        } else if (contact.name) {
            setFirstNameMask(contact.name.split(" ")[0])
            setLastNameMask(contact.name.split(" ")[1])
        }
        setLastName(contact.LastName)
        setEmail(contact.email)
        setDDD(contact.ddd)
        setDDDmask(maskDDD(contact.ddd))
        if (contact.image) {
            setImage(contact.image)
        } else {
            setImage("/src/assets/imgs/userProfile/profilePicture.png")
        }
    }, [contact])
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
        if (newPassword.length > 0) {
            if (newPassword.length < 6) {
                alert("New password is invalid")
                return
            }
            if (newPassword !== confirmPassword) {
                alert("The new password and the confirm password have to be the same")
                return
            }
        }
        const info = {
            phone: phone,
            firstName: firstName,
            LastName: lastName,
            email: email,
            ddd: ddd,
            dateBirth: date.replace(/-/g, " ").split(" ").reverse().join("/"),
            password: newPassword,
            image: image
        }
        postContact(info)
        alert("Save")
    }
    // @ts-ignore
    const getImage = (event) => {
        const files = event.target.files[0]
        const reader = new FileReader()
        reader.onload = (eventReader) => {
            setImage(eventReader.target?.result as string)
        }
        reader.readAsDataURL(files)
        setTimeout(() => {
            event.target.value = ""
        }, 500)
    }


    return (
        <S.PersonalInfoContainer>
            <S.InfoHeader>
                <S.ArrowTitleDiv>
                    <S.ImgArrowLeft src={arrow} alt="left arrow" onClick={() => navigate(-1)} />
                    <S.InfoTitle>Personal Information</S.InfoTitle>
                </S.ArrowTitleDiv>
                <S.Separator></S.Separator>
            </S.InfoHeader>
            <S.InfoContent>
                <S.ProfilePicture>
                    <S.ImgProfile src={image} alt="profile user img" />
                    <S.InputFile type="file" id="upload" onChange={(e) => getImage(e)} />
                    <S.LabelInput htmlFor="upload">
                        <S.BtnUpload>Upload</S.BtnUpload>
                    </S.LabelInput>
                    <S.BtnDelete onClick={() => setImage(profile)}>Delete</S.BtnDelete>
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
                        <S.InputPasswordShow>
                            <S.InputPassword type={passwordCurrentType ? "text" : "password"} placeholder="********" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                            <S.ImgEye src={eye} alt="one eye icon" onClick={() => setPasswordCurrentType(!passwordCurrentType)} />
                        </S.InputPasswordShow>
                    </S.DivInputPassword>
                    <S.DivInputPassword>
                        <S.Label htmlFor="">New Password</S.Label>
                        <S.InputPasswordShow>
                            <S.InputPassword type={passwordNewType ? "text" : "password"} placeholder="******" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            <S.ImgEye src={eye} alt="one eye icon" onClick={() => setPasswordNewType(!passwordNewType)} />
                        </S.InputPasswordShow>
                    </S.DivInputPassword>
                    <S.DivInputPassword>
                        <S.Label htmlFor="">Confirm Password</S.Label>
                        <S.InputPasswordShow>
                            <S.InputPassword type={passwordConfirmType ? "text" : "password"} placeholder="******" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <S.ImgEye src={eye} alt="one eye icon" onClick={() => setPasswordConfirmType(!passwordConfirmType)} />
                        </S.InputPasswordShow>
                    </S.DivInputPassword>
                </S.ChangeContent>
            </S.ChangePassword>
            <S.DivSave>
                <S.BtnSave onClick={() => saveInfo()}>Save Changes</S.BtnSave>
            </S.DivSave>
        </S.PersonalInfoContainer>
    )
}