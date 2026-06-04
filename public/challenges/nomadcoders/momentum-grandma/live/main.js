/* =========================================================================
 * 할머니 댁 안방 · Momentum — main.js
 * 사물 = 기능: 벽시계(시계) · TV(날씨) · 전축(랜덤배경) · 전화기(로그인) · 달력(투두)
 *
 * 내러티브 흐름:
 *   첫 방문 → 전화벨이 울림(다른 사물 잠금) → 전화 받기=로그인 → 잠금 해제 → 방 탐색
 *   재방문 → 이름이 저장돼 있으니 게이트 스킵, 바로 자유 탐색
 *
 * 줌 내비게이션은 CSS 라디오(#v-room/#v-tv…)가 담당. JS는 데이터 기능과
 * "잠금 게이트"만 제어한다(라디오를 강제 체크 + body.locked 토글).
 * ======================================================================= */

const STORAGE_KEYS = {
  USERNAME: "momentum.username",
  TODOS: "momentum.todos",
  BG_SEED: "momentum.bgseed",
};

const body = document.body;
/* 라디오를 JS로 체크하면 CSS 줌이 그대로 따라온다(상태는 CSS가 소유) */
const viewRoom = document.querySelector("#v-room");
const viewPhone = document.querySelector("#v-phone");

/* ========================= ① 벽 LED 시계 (항상 켜짐) ========================= */
/* 콜론(:)은 CSS가 깜빡이므로 JS는 시·분 숫자만 갱신 */
const clockH = document.querySelector("#clock-h");
const clockM = document.querySelector("#clock-m");

function pad(n) {
  return String(n).padStart(2, "0");
}

function updateClock() {
  const now = new Date();
  /* 벽시계는 작아서 시:분만 (room.png의 빨간 LED 자리에 맞춤) */
  clockH.textContent = pad(now.getHours());
  clockM.textContent = pad(now.getMinutes());
}

updateClock();
setInterval(updateClock, 1000);

/* ========================= ④ 전화기 = 로그인 (게이트) ========================= */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const caption = document.querySelector(".caption");

function lockRoom() {
  /* 전화 받기 전: 다른 사물 잠그고 전화벨 울림(CSS가 body.locked로 처리) */
  body.classList.add("locked");
  viewPhone.checked = true; // 전화기로 바로 줌인 → "누고?" 다이얼로그
  caption.textContent = "☎ 전화벨이 울려요 — 받아서 이름을 대보이소";
}

function unlockRoom() {
  body.classList.remove("locked");
  caption.textContent = "★ 할머니 댁 안방 · 사물을 누르면 줌인 — 시계는 벽에 항상 켜져요 ★";
}

function paintGreeting(username) {
  greeting.innerHTML =
    `반갑데이, <b>${username}</b>야!<br />방 구경 실컷 하고 가래이~` +
    `<span class="logout">수화기 내려놓기(로그아웃)</span>`;
  greeting.classList.remove("hidden");
  loginForm.classList.add("hidden");
  /* 로그아웃 버튼은 새로 그릴 때마다 다시 연결 */
  greeting.querySelector(".logout").addEventListener("click", logout);
}

function logout() {
  localStorage.removeItem(STORAGE_KEYS.USERNAME);
  greeting.classList.add("hidden");
  loginForm.classList.remove("hidden");
  loginInput.value = "";
  lockRoom(); // 다시 전화벨 게이트로
}

function onLoginSubmit(event) {
  event.preventDefault(); // submit 새로고침 차단(안 하면 상태 날아감)
  const username = loginInput.value.trim();
  if (!username) return;
  localStorage.setItem(STORAGE_KEYS.USERNAME, username);
  paintGreeting(username);
  unlockRoom();
  viewRoom.checked = true; // 전화 받았으니 방으로 자동 복귀
}

loginForm.addEventListener("submit", onLoginSubmit);

/* 시작 분기: 저장된 이름 유무로 게이트 여부 결정 */
const savedUsername = localStorage.getItem(STORAGE_KEYS.USERNAME);
if (savedUsername === null) {
  lockRoom(); // 첫 방문 → 전화벨
} else {
  paintGreeting(savedUsername); // 재방문 → 인사말, 자유 탐색
}

/* ========================= ⑤ 벽 달력 = 투두리스트 ========================= */
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let todos = []; // 화면이 아니라 이 배열이 진실(source of truth)

function saveTodos() {
  localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(todos));
}

function renderEmptyHint() {
  /* 할 일이 없으면 안내문, 있으면 제거 */
  const existing = todoList.querySelector(".empty");
  if (todos.length === 0 && !existing) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "아직 적은 할 일이 없데이";
    todoList.appendChild(li);
  } else if (todos.length > 0 && existing) {
    existing.remove();
  }
}

function deleteTodo(event) {
  const li = event.target.closest("li");
  const id = Number(li.dataset.id);
  todos = todos.filter((todo) => todo.id !== id); // 해당 id만 빼고 새 배열
  li.remove();
  saveTodos();
  renderEmptyHint();
}

function paintTodo(todo) {
  const li = document.createElement("li");
  li.dataset.id = todo.id;

  const span = document.createElement("span");
  span.textContent = `☐ ${todo.text}`;

  const button = document.createElement("button");
  button.textContent = "✕";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function onTodoSubmit(event) {
  event.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;
  todoInput.value = "";
  const newTodo = { id: Date.now(), text };
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
  renderEmptyHint();
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(STORAGE_KEYS.TODOS);
if (savedTodos !== null) {
  todos = JSON.parse(savedTodos);
  todos.forEach(paintTodo);
}
renderEmptyHint();

/* ========================= ③ 전축 = 랜덤 배경(오늘의 한 장) ========================= */
const lpTitle = document.querySelector("#lp-title");
const bgShuffle = document.querySelector("#bg-shuffle");
const bgLayer = document.querySelector("#bg"); // 블러·톤 입힌 전용 배경 레이어

/* "오늘의 한 장" — 제목 + 그 곡의 분위기 색(배경 사진 위에 깔리는 톤) */
const LP_MOODS = [
  { title: "그 시절, 부산 밤바다", tint: "rgba(46, 52, 104, 0.45)" }, // 남보라 밤
  { title: "비 오는 날의 다방 LP", tint: "rgba(64, 92, 104, 0.45)" }, // 청회색
  { title: "할매가 아끼던 트로트 한 장", tint: "rgba(150, 92, 34, 0.45)" }, // 호박
  { title: "여름 마루의 선풍기 바람", tint: "rgba(86, 120, 64, 0.42)" }, // 풀빛
  { title: "토요일 밤의 가요톱텐", tint: "rgba(132, 58, 92, 0.45)" }, // 보라핑크
  { title: "겨울 아랫목 라디오", tint: "rgba(162, 72, 40, 0.46)" }, // 주홍
];

function applyBackground(seed) {
  /* 방(stage) 뒤 바탕화면을 랜덤 이미지로. keyless picsum이라 배포 후 바로 동작 */
  const url = `https://picsum.photos/seed/momentum-${seed}/1600/1000`;
  const img = new Image();
  img.src = url;
  img.addEventListener("load", () => {
    bgLayer.style.backgroundImage = `url(${url})`;
  });
  const mood = LP_MOODS[seed % LP_MOODS.length];
  lpTitle.textContent = mood.title;
  /* 분위기 색을 CSS 변수로 → body::before 오버레이가 이 색으로 갈림 */
  document.documentElement.style.setProperty("--mood", mood.tint);
}

/* 첫 로드: 저장된 seed 있으면 유지(같은 세션 느낌), 없으면 새로 뽑아 저장 */
let bgSeed = Number(localStorage.getItem(STORAGE_KEYS.BG_SEED));
if (!bgSeed) {
  bgSeed = Math.floor(Math.random() * 9999) + 1; // 정수 seed → Math.floor
  localStorage.setItem(STORAGE_KEYS.BG_SEED, bgSeed);
}
applyBackground(bgSeed);

/* "다른 판 걸기" → 새 seed 뽑아 즉시 교체 */
bgShuffle.addEventListener("click", () => {
  bgSeed = Math.floor(Math.random() * 9999) + 1;
  localStorage.setItem(STORAGE_KEYS.BG_SEED, bgSeed);
  applyBackground(bgSeed);
});

/* ========================= ② TV = 날씨 + 위치 ========================= */
const weatherIcon = document.querySelector("#weather-icon");
const weatherTemp = document.querySelector("#weather-temp");
const weatherLoc = document.querySelector("#weather-loc");
const weatherTalk = document.querySelector("#weather-talk");

/* Open-Meteo weathercode → [이모지, 상태, 할매 한마디] */
function weatherInfo(code) {
  if (code === 0) return ["☀️", "맑음", "오늘 날씨 억수로 좋데이~ 나들이 가이소"];
  if (code <= 3) return ["⛅", "구름 조금", "구름 좀 꼈네, 그래도 댕기기 좋다"];
  if (code <= 48) return ["🌫️", "안개", "안개 자욱타, 운전 살살 하래이"];
  if (code <= 67) return ["🌧️", "비", "비 온다, 우산 꼭 챙기래이"];
  if (code <= 77) return ["🌨️", "눈", "눈 온다, 따시게 입고 나가래이"];
  if (code <= 82) return ["🌧️", "소나기", "소나기 쏟아진다, 잠깐 피했다 가라"];
  if (code <= 86) return ["🌨️", "진눈깨비", "질척하다, 미끄러지지 말고"];
  return ["⛈️", "뇌우", "천둥 친다, 오늘은 방에 있그라"];
}

async function fetchWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const res = await fetch(url);
  const data = await res.json();
  const { temperature, weathercode } = data.current_weather;
  const [emoji, label, talk] = weatherInfo(weathercode);

  weatherIcon.textContent = emoji;
  weatherTemp.textContent = `${Math.round(temperature)}°C`;
  weatherTalk.textContent = talk;

  /* 좌표 → 도시 이름 (역지오코딩, 역시 keyless) */
  try {
    const geoUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=ko`;
    const geo = await (await fetch(geoUrl)).json();
    const city = geo.city || geo.locality || geo.countryName || "";
    weatherLoc.textContent = `${city} · ${label}`;
  } catch {
    weatherLoc.textContent = label; // 도시 못 구해도 날씨는 보이게
  }
}

function onGeoError() {
  weatherIcon.textContent = "📍";
  weatherTemp.textContent = "--";
  weatherLoc.textContent = "위치 권한이 필요해요";
  weatherTalk.textContent = "위치를 알려주면 날씨를 비춰주꾸마";
}

navigator.geolocation.getCurrentPosition(
  (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
  onGeoError
);

/* ========================= 편의: ESC = 방으로 ========================= */
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !body.classList.contains("locked")) {
    viewRoom.checked = true;
  }
});
