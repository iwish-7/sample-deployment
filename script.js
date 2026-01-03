let state = false;

function changeText() {
  const title = document.getElementById("title");

  state = !state;

  title.innerText = state
    ? "GitHub Pages Deployment Works ✅ or Does It?"
    : "Hello My World 🚀";
}
