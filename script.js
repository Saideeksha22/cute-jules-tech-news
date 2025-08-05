
const endpoint = "http://localhost:5000/news";
function loadNews() {
  fetch(endpoint)
    .then(res => res.json())
    .then(json => {
      const ul = document.getElementById('news-list');
      ul.innerHTML = '';
      json.articles.forEach((a, i) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${a.title}</strong> <br><a href="${a.url}" target="_blank">Read more</a>`;
        ul.append(li);
      });
      setJulesComment(json.articles[0]?.title);
    })
    .catch(err => {
      document.getElementById('news-list').innerHTML = '<li>Failed to fetch news 😢</li>';
      console.error(err);
    });
}

function setJulesComment(headline) {
  const comment = document.getElementById('jules-text');
  if (!headline) {
    comment.innerText = "Hmm, no news today? I'll go debug my code!";
  } else if (headline.toLowerCase().includes('ai') || headline.toLowerCase().includes('chip')) {
    comment.innerText = "Whoa! My circuits are tingling with excitement!";
  } else {
    comment.innerText = "Beep boop — Jules is curious!";
  }
}

function setDate() {
  document.getElementById('date').innerText = '📅 ' + new Date().toDateString();
}
const julesQuotes = [
  "Tech news just landed! 🚀",
  "Scanning latest AI gossip... 🤖",
  "Jules reporting in! 📡",
  "Chip wars heating up 🔥",
  "Big brains, big data 💾🧠"
];

function updateJulesBubble() {
  const bubble = document.getElementById("jules-bubble");
  const randomQuote = julesQuotes[Math.floor(Math.random() * julesQuotes.length)];
  bubble.innerText = randomQuote;
}

// Call it when news loads
window.onload = () => {
  setDate();
  loadNews();
  updateJulesBubble(); // 🐣
  setInterval(loadNews, 1000 * 60 * 30);
};
window.onload = () => {
  setDate();
  loadNews();
  updateJulesBubble();
  setInterval(loadNews, 1000 * 60 * 30); // every 30 minutes
};
