const storyText = document.getElementById("story-text");
const optionsDiv = document.getElementById("options");
let xp = 0;

function gainXP(amount) {
  xp += amount;
  console.log("XP gained:", amount, "Total XP:", xp);
}


function showScene(text, options) {
  storyText.innerText = text;
  optionsDiv.innerHTML = '';
  options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option.text;
    btn.onclick = () => showScene(option.next.text, option.next.options);
    optionsDiv.appendChild(btn);
  });
}

const startScene = {
  text: "You are a Level 1 Developer. What do you want to explore?",
  options: [
    { text: "Education", next: { text: "You studied CS at Kristianstad University.", options: [] } },
    { text: "Skills", next: { text: "You mastered Python, CSS, JavaScript, Java, C and C#.", options: [] } },
  ]
};

showScene(startScene.text, startScene.options);
