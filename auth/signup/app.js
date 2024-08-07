import{createUserWithEmailAndPassword,doc, setDoc,ref, uploadBytes,getDownloadURL} from "../../utils/utils.js"

const signup_btn = document.getElementById("signup_form")
signup_btn.addEventListener("submit", function (e) {
    e.preventDefault
    console.log(e);
    console.log(e.target);

    const img = e.target[0].files[0]
    const email = e.target[1].value
    const password = e.target[2].value
    const firstName = e.target[4].value
    const lastName = e.target[5].value
    const phone = e.target[6].value
    const company = e.target[7].value


    const userInfo = {
        img,
        email,
        password,
        firstName,
        lastName,
        phone,
        company
    }

    console.log(userInfo);
})