export function makeHomePage() {
    const head = document.createElement("h2");
    const main = document.createElement("div");
    const main2 = document.createElement("h3");
    const main3 = document.createElement("div");

    main2.appendChild(document.createElement("p"));
    content.appendChild(head);
    content.appendChild(main);
    content.appendChild(main2);
    content.appendChild(main3);
    
    head.textContent = "Generic Pub Name";
    main.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam impedit explicabo ea. Itaque veniam laudantium odio aut facilis dolorem iste perferendis illo a ex cumque nesciunt eius repellat incidunt, fugiat esse cupiditate quasi accusantium dolore laboriosam doloremque! Quos atque inventore, accusamus facere alias, voluptates repellat, animi adipisci cumque amet eum. Adipisci nulla reiciendis debitis! Porro veniam commodi consequuntur autem nihil quaerat, dolorem pariatur.";
    main2.textContent = "EXAMPLE TEXT WOOHOO"
    main3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam impedit explicabo ea. Itaque veniam laudantium odio aut facilis dolorem iste perferendis illo a ex cumque nesciunt eius repellat incidunt, fugiat esse cupiditate quasi accusantium dolore laboriosam doloremque! Quos atque inventore, accusamus facere alias, voluptates repellat, animi adipisci cumque amet eum. Adipisci nulla reiciendis debitis! Porro veniam commodi consequuntur autem nihil quaerat, dolorem pariatur.";
}
