// Simple demo logic. Replace `getBotReply` with a real API call later.

const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight; // auto-scroll
}

function getBotReply(userText) {
  // Naïve keyword-based response for demo
  const lower = userText.toLowerCase();
  if (lower.includes("library"))
    return "The central library is open Mon–Sat 9 AM–9 PM.";
  if (lower.includes("dining") || lower.includes("food"))
    return "Dining Hall: Daily 7 AM–8 PM. North Café: Mon–Fri 8 AM–6 PM.";
  if (lower.includes("schedule") || lower.includes("class"))
    return "Upcoming events: Freshers Orientation on Sept 20, 9 AM, Main Auditorium.";
  if (lower.includes("facility") || lower.includes("gym"))
    return "Facilities include a gym (6 AM–10 PM) and a 400-seat auditorium.";
  return "I’m not sure, but you can visit the admin office for detailed help.";
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (!text) return;
  appendMessage(text, "user");
  userInput.value = "";

  // Simulate a small delay for bot typing
  setTimeout(() => {
    const reply = getBotReply(text);
    appendMessage(reply, "bot");
  }, 500);
});
