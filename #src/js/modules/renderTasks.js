const renderTasks = () => {
    const taskList = document.querySelector(".task__list")
    const taskItemsList = [
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "dota2",
            mobileImg: "./img/dota2-mini.png",
            desktopImg: "./img/dota2.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "csgo",
            mobileImg: "./img/csgo-mini.png",
            desktopImg: "./img/CS.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "wot",
            mobileImg: "./img/wot-mini.png",
            desktopImg: "./img/wot.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "pubg",
            mobileImg: "./img/pubg-mini.png",
            desktopImg: "./img/PUBG.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "heartstone",
            mobileImg: "./img/hearth-stone-mini.png",
            desktopImg: "./img/hearth-stone.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "lol",
            mobileImg: "./img/lol-mini.png",
            desktopImg: "./img/lol.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "minecraft",
            mobileImg: "./img/minecraft-mini.png",
            desktopImg: "./img/Minecraft.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "warface",
            mobileImg: "./img/warface-mini.png",
            desktopImg: "./img/Warface.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "dota2",
            mobileImg: "./img/dota2-mini.png",
            desktopImg: "./img/dota2.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "csgo",
            mobileImg: "./img/csgo-mini.png",
            desktopImg: "./img/CS.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "wot",
            mobileImg: "./img/wot-mini.png",
            desktopImg: "./img/wot.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "pubg",
            mobileImg: "./img/pubg-mini.png",
            desktopImg: "./img/PUBG.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "heartstone",
            mobileImg: "./img/hearth-stone-mini.png",
            desktopImg: "./img/hearth-stone.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "lol",
            mobileImg: "./img/lol-mini.png",
            desktopImg: "./img/lol.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "minecraft",
            mobileImg: "./img/minecraft-mini.png",
            desktopImg: "./img/Minecraft.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "warface",
            mobileImg: "./img/warface-mini.png",
            desktopImg: "./img/Warface.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "dota2",
            mobileImg: "./img/dota2-mini.png",
            desktopImg: "./img/dota2.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "csgo",
            mobileImg: "./img/csgo-mini.png",
            desktopImg: "./img/CS.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "wot",
            mobileImg: "./img/wot-mini.png",
            desktopImg: "./img/wot.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "pubg",
            mobileImg: "./img/pubg-mini.png",
            desktopImg: "./img/PUBG.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "heartstone",
            mobileImg: "./img/hearth-stone-mini.png",
            desktopImg: "./img/hearth-stone.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "lol",
            mobileImg: "./img/lol-mini.png",
            desktopImg: "./img/lol.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "minecraft",
            mobileImg: "./img/minecraft-mini.png",
            desktopImg: "./img/Minecraft.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "warface",
            mobileImg: "./img/warface-mini.png",
            desktopImg: "./img/Warface.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "dota2",
            mobileImg: "./img/dota2-mini.png",
            desktopImg: "./img/dota2.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "csgo",
            mobileImg: "./img/csgo-mini.png",
            desktopImg: "./img/CS.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "wot",
            mobileImg: "./img/wot-mini.png",
            desktopImg: "./img/wot.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "pubg",
            mobileImg: "./img/pubg-mini.png",
            desktopImg: "./img/PUBG.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "heartstone",
            mobileImg: "./img/hearth-stone-mini.png",
            desktopImg: "./img/hearth-stone.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "lol",
            mobileImg: "./img/lol-mini.png",
            desktopImg: "./img/lol.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "minecraft",
            mobileImg: "./img/minecraft-mini.png",
            desktopImg: "./img/Minecraft.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "warface",
            mobileImg: "./img/warface-mini.png",
            desktopImg: "./img/Warface.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "dota2",
            mobileImg: "./img/dota2-mini.png",
            desktopImg: "./img/dota2.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "csgo",
            mobileImg: "./img/csgo-mini.png",
            desktopImg: "./img/CS.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "wot",
            mobileImg: "./img/wot-mini.png",
            desktopImg: "./img/wot.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "pubg",
            mobileImg: "./img/pubg-mini.png",
            desktopImg: "./img/PUBG.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "heartstone",
            mobileImg: "./img/hearth-stone-mini.png",
            desktopImg: "./img/hearth-stone.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "lol",
            mobileImg: "./img/lol-mini.png",
            desktopImg: "./img/lol.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "minecraft",
            mobileImg: "./img/minecraft-mini.png",
            desktopImg: "./img/Minecraft.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
        {
            title: "Dota 2, Играем на SF, мид до 2 смертей или до падения т1",
            gameName: "warface",
            mobileImg: "./img/warface-mini.png",
            desktopImg: "./img/Warface.png",
            price: "1000 сом",
            view: "562",
            offer: "0"
        },
       
    ];
    function render() {
        taskItemsList.forEach(task => {
             const taskItem = document.createElement("li");
             taskItem.classList.add("task__item");
             taskItem.dataset.game = task.gameName;
             taskItem.innerHTML = `
             <a href="./pages/fighting_response_1x1.html" class="task__link">
                <img src="${task.mobileImg}" alt="user-image" class="task__mobile-img">
                <div class="task__descr">
                    <h2 class="task__title"${task.title}</h2>
                    <img src="${task.desktopImg}" alt="user-image" class="task__desktop-img">
                    <p class="task__date">Игра начинается: <span class="task__date-time">20:00, 05.06.21</span></p>
                    <p class="task__bet">Ставка: <span class="task__bet-price">${task.price}</span></p>
                    <div class="task__info">
                        <span class="task__views">
                            <svg class="task__views-icon task__info-icons" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99999 0.25C13.044 0.25 16.4085 3.16 17.1142 7C16.4092 10.84 13.044 13.75 8.99999 13.75C4.95599 13.75 1.59149 10.84 0.885742 7C1.59074 3.16 4.95599 0.25 8.99999 0.25ZM8.99999 12.25C10.5296 12.2497 12.0138 11.7301 13.2096 10.7764C14.4055 9.82264 15.2422 8.49121 15.5827 7C15.2409 5.50998 14.4037 4.18 13.208 3.22752C12.0122 2.27504 10.5287 1.7564 8.99999 1.7564C7.47126 1.7564 5.98776 2.27504 4.79202 3.22752C3.59629 4.18 2.75907 5.50998 2.41724 7C2.75781 8.49121 3.5945 9.82264 4.79035 10.7764C5.9862 11.7301 7.47039 12.2497 8.99999 12.25ZM8.99999 10.375C8.10489 10.375 7.24644 10.0194 6.61351 9.38649C5.98057 8.75355 5.62499 7.89511 5.62499 7C5.62499 6.10489 5.98057 5.24645 6.61351 4.61351C7.24644 3.98058 8.10489 3.625 8.99999 3.625C9.8951 3.625 10.7535 3.98058 11.3865 4.61351C12.0194 5.24645 12.375 6.10489 12.375 7C12.375 7.89511 12.0194 8.75355 11.3865 9.38649C10.7535 10.0194 9.8951 10.375 8.99999 10.375ZM8.99999 8.875C9.49727 8.875 9.97419 8.67746 10.3258 8.32582C10.6774 7.97419 10.875 7.49728 10.875 7C10.875 6.50272 10.6774 6.02581 10.3258 5.67417C9.97419 5.32254 9.49727 5.125 8.99999 5.125C8.50271 5.125 8.0258 5.32254 7.67417 5.67417C7.32254 6.02581 7.12499 6.50272 7.12499 7C7.12499 7.49728 7.32254 7.97419 7.67417 8.32582C8.0258 8.67746 8.50271 8.875 8.99999 8.875Z" fill="#E4E4E4"/>
                            </svg>
                            <span class="task__views-num">${task.view}</span>
                            просмотров
                        </span>
                        <span class="task__offers">
                            <svg class="task__offers-icon task__info-icons" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25 12L0.75 6L8.25 0V3.75C12.3923 3.75 15.75 7.10775 15.75 11.25C15.75 11.4548 15.7425 11.6572 15.726 11.8575C14.6287 9.777 12.4785 8.33925 9.98475 8.25375L9.75 8.25H8.25V12ZM6.75 6.75H9.7755L10.0357 6.75525C10.9995 6.7875 11.9287 6.98775 12.7927 7.32975C11.6925 6.05625 10.065 5.25 8.25 5.25H6.75V3.12075L3.1515 6L6.75 8.87925V6.75Z" fill="#E4E4E4"/>
                            </svg>
                            <span class="task__offers-num">${task.view}</span>
                            предложений
                        </span>
                    </div>
                </div>
            </a>
             `
             taskList.appendChild(taskItem);
        });
    };
    render()

};
export default renderTasks;