import { GetElement, GetAllElements } from "./Utils/GetElement.js";
import { SetTextContent, ShowUser } from "./Utils/Functions.js";

const btn = GetElement("#btn");
const icons = [...GetAllElements(".icon")];
const image = GetElement("#image");
const displayData = GetElement("#displayData");
const dataType = GetElement("#dataType");
const nameIcon = GetElement("#name");

icons.forEach(i => {
    i.addEventListener("click", (e) => {
        icons.forEach(icon => icon.classList.remove("icon-active"));
        e.target.classList.add("icon-active");
        SetTextContent(e.target.dataset.type)
    });
})

btn.addEventListener("click", () => ShowUser(icons, dataType, image, displayData, nameIcon));

window.addEventListener("DOMContentLoaded", async () => {
    ShowUser(icons, dataType, image, displayData, nameIcon)
})

