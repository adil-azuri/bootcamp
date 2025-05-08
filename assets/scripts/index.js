let myProjects = []

function getData(e) {
    e.preventDefault()

    let projectName = document.getElementById("projectName").value
    let areaText = document.getElementById("areaText").value
    let start = new Date(document.getElementById("startDate").value)
    let end = new Date(document.getElementById("endDate").value)

    let nodejs = document.getElementById("nodejs");
    let reactjs = document.getElementById("reactjs");
    let nextjs = document.getElementById("nextjs");
    let typescript = document.getElementById("typescript");

    let imageNodejs = "";
    let imageReactjs = "";
    let imageNextjs = "";
    let imageTypescript = "";

    if (nodejs.checked) {
        imageNodejs = '<img src="assets/img/node-js-brands.svg" class="icon-checkbox"/>';
    } else {
        imageNodejs = '<img src="" />';
    }
    if (reactjs.checked) {
        imageReactjs = '<img src="assets/img/react-brands.svg" class="icon-checkbox"/>';
    } else {
        imageReactjs = '<img src="" />';
    }
    if (nextjs.checked) {
        imageNextjs = '<img src="assets/img/icons8-nextjs-48.png" class="icon-checkbox"/>';
    } else {
        imageNextjs = '<img src="" />';
    }
    if (typescript.checked) {
        imageTypescript = '<img src="assets/img/icons8-typescript-50.png" class="icon-checkbox"/>';
    } else {
        imageTypescript = '<img src="" />';
    }


    let yearDifference = end.getFullYear() - start.getFullYear();
    let monthsFromYears = yearDifference * 12;
    let monthDifference = end.getMonth() - start.getMonth();
    let durationInMonths = monthsFromYears + monthDifference;

    let durationLabel = "";
    if (durationInMonths < 1) {
        durationLabel = "<1 bulan";
    } else if (durationInMonths >= 36) {
        durationLabel = "<3 tahun";
    } else if (durationInMonths >= 24) {
        durationLabel = "2 tahun";
    } else if (durationInMonths >= 12) {
        durationLabel = "1 tahun";
    } else {
        durationLabel = ` ${durationInMonths} bulan`;
    }

    let myProject = {
        projectName,
        areaText,
        durationLabel,
        imageNodejs,
        imageReactjs,
        imageNextjs,
        imageTypescript
    }

    myProjects.push(myProject)

    changeElement()
}

function changeElement() {
    document.getElementById("content").innerHTML = ""
    for (let i = 0; i < myProjects.length; i++) {
        document.getElementById("content").innerHTML += `
    <div class="card">
        <h3> ${myProjects[i].projectName}</h3>
        <p>Durasi : ${myProjects[i].durationLabel}</p>
        <p>${myProjects[i].areaText}</p>

        <div>
        ${myProjects[i].imageNodejs}
        ${myProjects[i].imageReactjs}
        ${myProjects[i].imageNextjs}
        ${myProjects[i].imageTypescript}
        </div>

        <div class"button-op">
        <button type="button" class="btn opButton btn-dark fw-bold">Edit</button>
        <button type="button" class="btn opButton btn-dark fw-bold">Delete</button>
        </div>
    </div>
    `
    }
}