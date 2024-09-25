const information = () => {
    const title = ("Personal Information");
    const Kevin = {
        Nama: "Kevin WIjaya Tjiu",
        Age: 18,
        Status: "Single",
        Major: "Information System",
        Faculty: "Computer Science",
        Address: "Asrama Crystal",
        Interest: "Web development, Software developtment, AI",
    }
    return `
        <h2> ${title} </h2>
        <hr>
        <ul>
            <li> Nama : ${Kevin.Nama} </li>
            <li> Age  : ${Kevin.Age} </li>
            <li> Status : ${Kevin.Status} </li>
            <li> Major : ${Kevin.Major} </li>
            <li> Faculty : ${Kevin.Faculty} </li>
            <li> Address : ${Kevin.Address} </li>
            <li> Interest : ${Kevin.Interest} </li>
        </ul>
    `;
};

export default information;


