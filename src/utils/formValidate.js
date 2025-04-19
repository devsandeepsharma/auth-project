const formValidate = (type = "signup", fullName="", email="", password="") => {
    const errObj = {};

    if(type === "signup" && fullName.trim() === "") {
        errObj.fullName = "Full name is required";
    }

    if(email === "" || !email.includes("@gmail.com")) {
        errObj.email = "Please enter a valid Gmail address";
    }

    if(password.length < 6) {
        errObj.password = "Password must be at least 6 characters";
    }

    if(Object.keys(errObj).length > 0) {
        return errObj;
    }

    return null;
};

export default formValidate;