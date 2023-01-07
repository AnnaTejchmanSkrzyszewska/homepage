{
    const welcome = () => {
        console.log("Smacznej kawusi!");
    }

    const toggleBackground = () => {
        const textClass = document.querySelector(".js-body");
        const nextColorName = document.querySelector(".js-nextColorName");

        textClass.classList.toggle("dark");
        nextColorName.innerText = textClass.classList.contains("dark") ? "jasne" : "ciemne";
    };



    const init = () => {
        const navigationButton = document.querySelector(".js-navigationButton");
        const header = document.querySelector(".header");
        const footerButton = document.querySelector(".js-footerButton");

        footerButton.addEventListener("click", toggleBackground);
        navigationButton.addEventListener("click", () => {
            header.remove();

        });
    }

    init();
    welcome();

}