const q = [
  "Believe in yourself.",
  "Success is the sum of small efforts repeated daily.",
  "Dream big and dare to fail.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Stay hungry. Stay foolish.",
  "The future depends on what you do today.",
  "Learning never exhausts the mind.",
  "Push yourself, because no one else will.",
  "Great things never come from comfort zones.",
  "Failure is the opportunity to begin again.",
  "First, solve the problem. Then, write the code.",
  "Practice makes progress, not perfection.",
  "Your limitation—it’s only your imagination.",
  "Work hard in silence, let success make the noise.",
  "Consistency is more important than motivation.",
  "Small steps every day lead to big results.",
  "Discipline is choosing what you want most over what you want now.",
  "Don’t stop until you’re proud.",
  "The best time to start was yesterday. The next best time is now.",
  "Focus on progress, not perfection.",
  "Coding is not about typing, it’s about thinking.",
  "Turn your dreams into plans.",
  "Make today count.",
  "Never stop learning."
];

const qs=document.querySelector("#q");
const btn=document.querySelector('button');

btn.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*q.length);
    qs.textContent=q[index];
})
