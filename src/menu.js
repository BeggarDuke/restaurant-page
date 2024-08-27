export function makeMenuPage() {
    const head = document.createElement("h2");
    const meals = document.createElement("button");
    const drinks = document.createElement("button");
    const main = document.createElement("div");
    const main2 = document.createElement("div");

    meals.textContent = "Meals";
    drinks.textContent = "Drinks";

    content.appendChild(head);
    head.textContent = "Menu";

    content.appendChild(document.createElement("nav"));
    document.querySelector("#content > nav").appendChild(meals);
    document.querySelector("#content > nav").appendChild(drinks);
    document.querySelector("#content > nav").style.backgroundColor = "transparent";
    document.querySelector("#content > nav").style.border = "none";

    main.id = "meals";
    main2.id = "drinks";

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
    const images = {};
    for (const [key, value] of Object.entries(importAll(require.context("./img", false, /\.(png|svg|jpg|jpeg|gif)$/i)))) {
        let img = new Image();
        img.src = value;
        images[key.replace(/.jpg|.jpeg/i, "")] = img;
    }
    main.appendChild(images.burger);
    main.appendChild(document.createElement("p")).textContent = "Borgir";
    main.appendChild(document.createElement("p")).textContent = "5$";
    main.appendChild(images.steak);
    main.appendChild(document.createElement("p")).textContent = "Something looks like a meat";
    main.appendChild(document.createElement("p")).textContent = "4.99$";
    main.appendChild(images["classic-fries"]);
    main.appendChild(document.createElement("p")).textContent = "Boring fries";
    main.appendChild(document.createElement("p")).textContent = "0.99$";
    main.appendChild(images["special-fries"]);
    main.appendChild(document.createElement("p")).textContent = "Overcooked fries. More oil, more time, more effort - higher price!";
    main.appendChild(document.createElement("p")).textContent = "1.5$";

    main2.appendChild(images.beer);
    main2.appendChild(document.createElement("p")).textContent = "Warm, expired beer";
    main2.appendChild(document.createElement("p")).textContent = "2.49$";
    main2.appendChild(images.whiskey);
    main2.appendChild(document.createElement("p")).textContent = "80% water, 19% ethanol and some color. But it looks like cool whiskey, so it is expensive";
    main2.appendChild(document.createElement("p")).textContent = "15$";


    meals.addEventListener("click", () => {
        if (content.lastChild == main2) {
            content.removeChild(main2)
        }
        if (content.querySelector("#meals")) {
            return;
        }
        else {
            content.appendChild(main);
        }
    });
    drinks.addEventListener("click", () => {
        if (content.lastChild == main) {
            content.removeChild(main)
        }
        if (content.querySelector("#drinks")) {
            return;
        }
        else {
            content.appendChild(main2);
        }
    });
}