
function setCopy() {
    let copyEl = document.getElementById("copy");
    copyEl.innerHTML = `&copy; ${new Date().getFullYear()} @wing`
}

function triangleBeforeInSkillsChildren() {
    const skills = document.getElementById("skills");
    let children = skills.children
    for (let i = 0; i < children.length; i++) {
        let childText = children[i].innerText;
        children[i].innerHTML = `&triangleright; ${childText}`
    }
}

function createNameShadow() {
    let shadowName = document.createElement("h1");
    shadowName.innerText = "@WING";
    shadowName.classList.add("shadow");
    let names = document.getElementById("names");
    names.appendChild(shadowName);
}


function main() {
    setTimeout(createNameShadow, 500)
    triangleBeforeInSkillsChildren()
    setCopy()
}


main()