const answers = document.querySelectorAll(".btOptions .slide .b_cards");

answers.forEach((ans) => {
    console.log(ans.attributes.iscorrectoption);
    const correctOption = document.createElement("p");
    correctOption.innerText = ans.attributes.iscorrectoption.value;
    let c = ans.attributes.iscorrectoption.value.toString();
    correctOption.style.color = c == "True" ? "green" : "red";
    correctOption.style.fontWeight = "bold";
    correctOption.style.textAlign = "center";
    ans.appendChild(correctOption);
});
