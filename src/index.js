import "./style.css";
import { makeHomePage } from "./home.js";
import { makeMenuPage } from "./menu.js";
import { makeContactsPage } from "./contacts.js";

document.querySelector("body").appendChild(document.createElement("div")).id = "bg";
const content = document.querySelector("#content");
makeHomePage();

document.querySelector("#home").addEventListener("click", () => {
    content.replaceChildren();
    makeHomePage();
}
);

document.querySelector("#menu").addEventListener("click", () => {
    content.replaceChildren();
    makeMenuPage();
}
);

document.querySelector("#contacts").addEventListener("click", () => {
    content.replaceChildren();
    makeContactsPage();
}
);