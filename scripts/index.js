let PHONENO = '890XXXX636';
let EMAIL = 'ravjduker@gmail.com';
let LINKEDIN = 'linkedin.com/in/ravjduker';
let LOCATION = 'Bangalore, Karnataka';
let OBJNAME = 'AADHIVIJAY R';
let OBJ =`Seeking for a workplace having the creative and talented environment to learn and get exposed to new innovative ideas to
full organizational goals.
I'm a Full Stack Developer, an enthusiastic problem solver and a fast learner. Excited to train me by learning new things
through problem-solving. Passionate about building end-to-end web applications.
`;

window.onload = () => {
    // phoneNo
    const phoneNo = document.getElementById('phoneNo');
    phoneNo.innerText = PHONENO;

    // eMail
    const eMail = document.getElementById('eMail');
    eMail.innerText = EMAIL;

    // linkedIn
    const linkedIn = document.getElementById('linkedIn');
    linkedIn.target = '_blank';
    linkedIn.innerText = LINKEDIN;
    linkedIn.href = `https://${LINKEDIN}`;

    // location
    const location = document.getElementById('location');
    location.innerText = LOCATION;

    // objName
    const objName = document.getElementById('objName');
    objName.innerText = OBJNAME;

    // obj
    const obj = document.getElementById('obj');
    obj.innerText = OBJ;
};