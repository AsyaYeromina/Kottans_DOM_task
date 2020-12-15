const tabContent = [
    {
        text : `I'm baby fam knausgaard before they sold out crucifix umami, fixie chia letterpress flannel actually leggings put a bird on it ethical. Direct trade chartreuse fixie hammock, PBR&B humblebrag roof party iPhone air plant cardigan echo park. Glossier post-ironic mixtape shabby chic food truck hexagon man braid seitan pabst actually. Portland leggings pickled semiotics, viral shoreditch farm-to-table cliche asymmetrical try-hard pitchfork yr migas.`, 
        tabName : "Deep House",
        audio: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/334671843&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/digitalstreams" title="Westcoast Radio (EDM)" target="_blank" style="color: #cccccc; text-decoration: none;">Westcoast Radio (EDM)</a> · <a href="https://soundcloud.com/digitalstreams/sets/deephousehits" title="Best of Deep House (Vol. 02)" target="_blank" style="color: #cccccc; text-decoration: none;">Best of Deep House (Vol. 02)</a></div>`
    }, 
    {
        text :`Keffiyeh pinterest fingerstache lo-fi, scenester aesthetic letterpress bitters whatever readymade kinfolk butcher man braid. Wayfarers butcher mlkshk pinterest, thundercats church-key four loko vape hot chicken iPhone master cleanse wolf. Woke fashion axe small batch +1 vegan. Yuccie franzen man braid stumptown. Locavore health goth sriracha, godard tumblr keffiyeh banh mi quinoa swag. Pinterest hashtag trust fund flannel yuccie synth taiyaki pop-up copper mug freegan PBR&B beard.`, 
        tabName : "Drum & Bass",
        audio: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/882397501&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/digitalstreams" title="Westcoast Radio (EDM)" target="_blank" style="color: #cccccc; text-decoration: none;">Westcoast Radio (EDM)</a> · <a href="https://soundcloud.com/digitalstreams/sets/technobass" title="Best of Drum &amp; Bass (Vol. 01)" target="_blank" style="color: #cccccc; text-decoration: none;">Best of Drum &amp; Bass (Vol. 01)</a></div>`
    },
    {
        text :`Shoreditch four dollar toast coloring book XOXO 90's craft beer blog sartorial prism swag thundercats. Post-ironic meh edison bulb, ennui deep v hella synth neutra you probably haven't heard of them ramps 8-bit skateboard. Freegan offal drinking vinegar, fanny pack locavore single-origin coffee mlkshk meh enamel pin. Organic meh shoreditch, gluten-free flexitarian bespoke hella godard kale chips XOXO cold-pressed palo santo four loko tattooed. Mumblecore prism brooklyn pork belly offal adaptogen leggings. Coloring book marfa hexagon beard health goth keytar adaptogen pork belly shoreditch, chillwave tbh pickled banjo roof party.`,
        tabName : "Progressive Tech House",
        audio: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/933599338&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/digitalstreams" title="Westcoast Radio (EDM)" target="_blank" style="color: #cccccc; text-decoration: none;">Westcoast Radio (EDM)</a> · <a href="https://soundcloud.com/digitalstreams/sets/newtracks" title="Best of Progressive Tech House" target="_blank" style="color: #cccccc; text-decoration: none;">Best of Progressive Tech House</a></div>`
    },
    {
        text :`Hot chicken lumbersexual schlitz mustache skateboard you probably haven't heard of them. Taxidermy meditation selfies deep v synth, thundercats asymmetrical twee semiotics offal tbh everyday carry hell of pok pok try-hard. Marfa pork belly kombucha, meggings brunch la croix retro DIY seitan. Green juice raclette street art austin actually you probably haven't heard of them, truffaut sriracha keffiyeh tilde food truck.`,
        tabName : "Electro",
        audio: `<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/819362814&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/digitalstreams" title="Westcoast Radio (EDM)" target="_blank" style="color: #cccccc; text-decoration: none;">Westcoast Radio (EDM)</a> · <a href="https://soundcloud.com/digitalstreams/sets/electroworkout" title="Best Electro of All-Time (Vol. 01)" target="_blank" style="color: #cccccc; text-decoration: none;">Best Electro of All-Time (Vol. 01)</a></div>`
    },
]

const buttonList = document.querySelector(".menu__tab-list");
const contentWrapper = document.querySelector(".content__wrapper");
const contentList = document.querySelector(".content__list");


function initApp() {
    generateHTML();
    layoutSetup();
}
initApp();

function generateHTML() {
    for (let i = 0; i < tabContent.length; i++) {
        const tabItem = tabContent[i];
        const tabName = tabItem["tabName"];
        buttonList.insertAdjacentHTML("beforeend", `<li><button data-id="${i}" class="tab-button">${tabName}</button></li>`);
        document.querySelectorAll(".tab-button")[i].addEventListener("click", contentToggle);
    }
}

function layoutSetup() {
    document.querySelector(".tab-button").classList.add("tab-button--active");
    contentWrapper.insertAdjacentHTML("beforeend", tabContent[0]["text"]);
    contentList.insertAdjacentHTML("beforeend", tabContent[0]["audio"]);
}

function contentToggle(evt) {
    const currentBtn = evt.target;
    const currentBtnId = currentBtn.dataset.id;
    const currentText = tabContent[currentBtnId]["text"];
    const currentAudio = tabContent[currentBtnId]["audio"];

    resetContent();
    // todo:
    // function name(currentBtn, "tab-button--active") {
    // }

    currentBtn.classList.add("tab-button--active");
    contentWrapper.insertAdjacentHTML("beforeend", currentText);
    contentList.insertAdjacentHTML("beforeend", currentAudio);
}

function resetContent() {
    contentWrapper.innerHTML = "";
    contentList.innerHTML = "";
    document.getElementsByClassName("tab-button--active")[0].classList.remove("tab-button--active");
}
