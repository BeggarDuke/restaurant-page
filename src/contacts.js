export function makeContactsPage() {
    const head = document.createElement("h2");
    const main = document.createElement("div");
    head.textContent = "Contacts";
    main.id = "contacts";
    main.appendChild(document.createElement("a")).textContent = "somemail@mail.com";
    main.lastChild.href = "google.com";
    main.appendChild(document.createElement("a")).textContent = "16 666 666 666";
    main.lastChild.href = "google.com";
    main.appendChild(document.createElement("a")).textContent = "x.com";
    main.lastChild.href = "google.com";
    main.appendChild(document.createElement("p")).textContent = "address";
    content.appendChild(head);
    content.appendChild(main);
}