import { Person } from "./Person.js";

const URL = "https://randomuser.me/api/";
let person;

export function SetTextContent(type) {
    switch (type) {
        case "name":
            dataType.textContent = "name";
            displayData.textContent = person.name;
            break;
        case "email":
            dataType.textContent = "email";
            displayData.textContent = person.email;
            break;
        case "birthday":
            dataType.textContent = "birthday";
            displayData.textContent = person.birthday;
            break;
        case "phone number":
            dataType.textContent = "phone number";
            displayData.textContent = person.phoneNumber;
            break;
        case "city":
            dataType.textContent = "city";
            displayData.textContent = person.location;
            break;
    }
}

async function GetUser() {
    const res = await fetch(URL);
    const json = await res.json();
    const data = json.results[0];
    const { email, phone } = data;
    const { first, last } = data.name;
    let { date } = data.dob;
    date = date.slice(0, 10);
    const { city } = data.location;
    const { large: image } = data.picture
    return new Person
        (
            `${first} ${last}`,
            email,
            date,
            phone,
            city,
            image
        );
}

export async function ShowUser(icons, dataType, image, displayData, nameIcon) {
    person = await GetUser();
    image.src = person.image;
    dataType.textContent = "name";
    displayData.textContent = person.name;
    icons.forEach(icon => icon.classList.remove("icon-active"));
    nameIcon.classList.add("icon-active");
}