function checkScore() {
    let score = 0;

    const answers = {
        q1: "c",
        q2: "c",
        q3: "b",
        q4: "b",
        q5: "b"
    };

    for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score += 20;
        }
    }

    const result = document.getElementById("result");
    
    let innerText = `Skor Anda: ${score}<br>`;

    if (score >= 70) {
        innerText += "Status: LULUS ";
        result.style.color = "green";
    } else {
        innerText += "Status: TIDAK LULUS ";
        result.style.color = "red";
    }

    document.getElementById("result").innerHTML = innerText;
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("result").innerHTML = "";
}
