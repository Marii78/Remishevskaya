var urlParams = new URLSearchParams(window.location.search);
var lastName = urlParams.get('lastName');

loadSpecialistInfo(lastName);

function loadSpecialistInfo(specialistLastName) {
    var specialists = {
        "spec1": {
            "photo": "img/specialist/1.png",
            "name": "Горина Анна Александровна",
            "position": "терапевт, гастроэнтеролог",
            "age": 16,
            "education": `Хакасский государственный университет имени Катанова 
            2015
            Лечебное дело, Базовое образование
            2017 
            Терапия, Ординатура`,
            "skill": `ГБУЗ РХ «Республиканский клинический перинатальный центр»
            2019 — 2021
            Врач терапевт
            ФГБОУ ВО «Хакасский государственный университет им. Н.Ф. Катанова»
            2019 — н. в.
            Ассистент кафедры внутренних болезней`
        },
        "spec2": {
            "photo": "img/specialist/2.png",
            "name": "Руденко Юлия Владимировна ",
            "position": "гастроэнтеролог, терапевт",
            "age": 12,
            "education": `Красноярский государственный медицинский университет имени профессора Войно-Ясенецкого
            2016
            Лечебное дело 
            Базовое образование
            2017
            Терапия
            Интернатура`,
            "skill": ``
        },
        "spec3": {
            "photo": "img/specialist/3.png",
            "name": "Селина Алина Андреевна",
            "position": "гинеколог, врач узи",
            "age": 12,
            "education": `Сибирский государственный медицинский университет
            2012
            Лечебное дело 
            Базовое образование
            2013
            Акушерство и гинекология
            Интернатура
            Красноярский государственный медицинский университет имени профессора Войно-Ясенецкого
            2018
            Акушерство и гинекология
            Повышение квалификации`,
            "skill": ``
        },
        "spec4": {
            "photo": "img/specialist/4.png",
            "name": "Демчук Наталья Григорьевна",
            "position": "гинеколог, акушер",
            "age": 18,
            "education": `Хакасский государственный университет имени Катанова
            2016
            Лечебное дело 
            Базовое образование
            2018
            Акушерство и гинекология
            Ординатура`,
            "skill": ``
        },
        "spec5": {
            "photo": "img/specialist/5.png",
            "name": "Субраков Геннадий Евгеньевич",
            "position": "кардиолог",
            "age": 18,
            "education": `Красноярский государственный медицинский университет имени профессора Войно-Ясенецкого
            1994
            Лечебное дело 
            Базовое образование
            2015
            Кардиология
            Повышение квалификации`,
            "skill": ``
        },
        "spec6": {
            "photo": "img/specialist/6.png",
            "name": "Лемешова Екатерина Викторовна",
            "position": "кардиолог, функциональный диагност",
            "age": 20,
            "education": `Новосибирский государственный медицинский университет
            2014
            Лечебное дело 
            Базовое образование
            2015
            Кардиология
            Интернатура`,
            "skill": ``
        }
    };

    if (specialists.hasOwnProperty(specialistLastName)) {
        var specialist = specialists[specialistLastName];
        document.getElementById("photo").src = specialist.photo;
        document.getElementById("name").innerText = specialist.name;
        document.getElementById("position").innerText = specialist.position;
        document.getElementById("age").innerText = specialist.age;
        document.getElementById("education").innerText = specialist.education;
        document.getElementById("skill").innerText = specialist.skill;

    } else {
        console.log("Информация о специалисте не найдена");
    }
}

document.getElementById("myButton").addEventListener("click", function () {
    window.location.href = "../Specialists/specialists.html";
});

document.getElementById("button-form").addEventListener("click", function () {
    window.location.href = "../Application_form/firm.html";
});
