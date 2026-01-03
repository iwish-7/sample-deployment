function changeText() {
  const title = document.getElementById("title");
  if (!title) {
    console.error("Title element not found");
    return;
  }
  title.innerText = "GitHub Pages Deployment Works ✅";
}
