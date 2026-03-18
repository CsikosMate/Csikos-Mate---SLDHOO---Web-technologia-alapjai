// Gombra kattintás eseménykezelője
document.getElementById("submit-btn").addEventListener("click", function() {
    let inputValue = document.getElementById("maszek").value;

    const maszekLi = document.createElement('li');
    maszekLi.textContent = inputValue;
    maszekLi.classList.add('maszek');
    
    const maszekokUl = document.querySelector('#maszekok');
    maszekokUl.append(maszekLi);
    
});

document.querySelector("#maszekok").addEventListener("click", function(event) {
    event.target.classList.add("kesz");
});
