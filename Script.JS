// DATA: Game Schedule, Results, and Opponent Information Layer
function getGamesData() {
  return [
    {
      id: "g1",
      opponent: "Clarkson Golden Knights",
      date: "2025-10-11",
      time: "7:05 PM",
      isHome: true,
      arena: "Gene Polisseni Center",
      played: true,
      ritScore: 4,
      oppScore: 2,
      result: "W"
    },
    {
      id: "g2",
      opponent: "St. Lawrence Saints",
      date: "2025-10-18",
      time: "7:00 PM",
      isHome: false,
      arena: "Appleton Arena",
      played: true,
      ritScore: 2,
      oppScore: 3,
      result: "L"
    },
    {
      id: "g3",
      opponent: "Sacred Heart Pioneers",
      date: "2025-10-25",
      time: "7:05 PM",
      isHome: true,
      arena: "Gene Polisseni Center",
      played: true,
      ritScore: 5,
      oppScore: 1,
      result: "W"
    },
    {
      id: "g4",
      opponent: "Mercyhurst Lakers",
      date: "2025-11-01",
      time: "7:05 PM",
      isHome: true,
      arena: "Gene Polisseni Center",
      played: true,
      ritScore: 3,
      oppScore: 3,
      result: "T"
    },
    {
      id: "g5",
      opponent: "Air Force Falcons",
      date: "2025-11-08",
      time: "9:05 PM",
      isHome: false,
      arena: "Cadet Ice Arena",
      played: false,
      ritScore: null,
      oppScore: null,
      result: null
    },
    {
      id: "g6",
      opponent: "Canisius Golden Griffins",
      date: "2025-11-15",
      time: "7:05 PM",
      isHome: true,
      arena: "Gene Polisseni Center",
      played: false,
      ritScore: null,
      oppScore: null,
      result: null
    },
    {
      id: "g7",
      opponent: "Niagara Purple Eagles",
      date: "2025-11-22",
      time: "7:00 PM",
      isHome: false,
      arena: "Dwyer Arena",
      played: false,
      ritScore: null,
      oppScore: null,
      result: null
    }
  ];
}

// DATA: Player Roster and Skater Statistics Layer
function getSkaterStatsData() {
  return [
    { number: 10, name: "Tyler Fukakusa", pos: "F", gp: 4, g: 3, a: 4, pts: 7, pim: 2 },
    { number: 11, name: "Matthew Wilde", pos: "F", gp: 4, g: 4, a: 2, pts: 6, pim: 4 },
    { number: 22, name: "Grady Hobbs", pos: "F", gp: 4, g: 2, a: 3, pts: 5, pim: 0 },
    { number: 8,  name: "Evan Miller", pos: "F", gp: 4, g: 1, a: 3, pts: 4, pim: 6 },
    { number: 4,  name: "Dimitri Mikrogiannakis", pos: "D", gp: 4, g: 1, a: 2, pts: 3, pim: 8 },
    { number: 21, name: "Carter Wilkie", pos: "F", gp: 4, g: 2, a: 1, pts: 3, pim: 2 },
    { number: 14, name: "Jake Mahan", pos: "F", gp: 4, g: 1, a: 1, pts: 2, pim: 0 },
    { number: 27, name: "Crossley Stewart", pos: "D", gp: 4, g: 0, a: 2, pts: 2, pim: 4 }
  ];
}

// DATA: Goaltender Statistics Layer
function getGoalieStatsData() {
  return [
    { number: 30, name: "Tommy Scarfone", gp: 3, record: "2-0-1", gaa: "1.95", svPct: ".934", shutouts: 0 },
    { number: 1,  name: "Luke Lush", gp: 1, record: "0-1-0", gaa: "3.04", svPct: ".897", shutouts: 0 }
  ];
}

// DATA: Detailed Play-by-Play Events Layer
function getPlayByPlayData() {
  return {
    "g1": [
      { period: "P1", time: "18:22", type: "GOAL", desc: "GOAL RIT! Tyler Fukakusa (1) wrist shot from the slot. Assists: Hobbs, Mikrogiannakis." },
      { period: "P1", time: "11:05", type: "PENALTY", desc: "PENALTY Clarkson - 2 min for Hooking ( #14 Johnson )." },
      { period: "P2", time: "14:10", type: "GOAL", desc: "GOAL Clarkson! Equalizer on the powerplay. Tied 1-1." },
      { period: "P2", time: "03:45", type: "GOAL", desc: "GOAL RIT! Matthew Wilde (1) tip-in on Power Play. Assists: Fukakusa, Stewart." },
      { period: "P3", time: "12:50", type: "GOAL", desc: "GOAL RIT! Grady Hobbs (1) breakaway backhand. RIT leads 3-1." },
      { period: "P3", time: "05:12", type: "GOAL", desc: "GOAL Clarkson! Cut lead to 3-2." },
      { period: "P3", time: "00:44", type: "GOAL", desc: "GOAL RIT! Carter Wilkie (1) Empty Netter. Final Score 4-2 RIT." }
    ],
    "g2": [
      { period: "P1", time: "15:30", type: "GOAL", desc: "GOAL St. Lawrence! Early lead for Saints 1-0." },
      { period: "P2", time: "09:12", type: "GOAL", desc: "GOAL RIT! Matthew Wilde (2) slap shot from the point. Tied 1-1." },
      { period: "P3", time: "18:01", type: "GOAL", desc: "GOAL St. Lawrence! Power Play Goal. Saints lead 2-1." },
      { period: "P3", time: "08:20", type: "GOAL", desc: "GOAL RIT! Evan Miller (1) rebound control. Tied 2-2." },
      { period: "P3", time: "02:15", type: "GOAL", desc: "GOAL St. Lawrence! Game winner on a defensive turnover. St. Lawrence wins 3-2." }
    ],
    "g3": [
      { period: "P1", time: "17:10", type: "GOAL", desc: "GOAL RIT! Tyler Fukakusa (2). Assists: Wilde." },
      { period: "P1", time: "08:45", type: "GOAL", desc: "GOAL RIT! Matthew Wilde (3). Power Play Goal." },
      { period: "P2", time: "12:00", type: "GOAL", desc: "GOAL Sacred Heart! Reduces deficit 2-1." },
      { period: "P2", time: "04:30", type: "GOAL", desc: "GOAL RIT! Dimitri Mikrogiannakis (1) slap shot." },
      { period: "P3", time: "15:20", type: "GOAL", desc: "GOAL RIT! Jake Mahan (1) short handed goal." },
      { period: "P3", time: "02:10", type: "GOAL", desc: "GOAL RIT! Matthew Wilde (4) hat-trick goal!" }
    ],
    "g4": [
      { period: "P1", time: "10:15", type: "GOAL", desc: "GOAL Mercyhurst! Lakers strike first." },
      { period: "P2", time: "16:40", type: "GOAL", desc: "GOAL RIT! Carter Wilkie (2) PPG." },
      { period: "P2", time: "05:10", type: "GOAL", desc: "GOAL RIT! Grady Hobbs (2)." },
      { period: "P3", time: "14:22", type: "GOAL", desc: "GOAL Mercyhurst! Tied 2-2." },
      { period: "P3", time: "06:05", type: "GOAL", desc: "GOAL RIT! Tyler Fukakusa (3)." },
      { period: "P3", time: "01:12", type: "GOAL", desc: "GOAL Mercyhurst! Extra attacker goal ties game 3-3." },
      { period: "OT", time: "00:00", type: "EVENT", desc: "Overtime ends scoreless. Game finishes in a 3-3 tie." }
    ]
  };
}

// DATA: Player Injury & Roster Status Layer
function getInjuryReportData() {
  return [
    { name: "Tanner Laskowski", pos: "Forward", status: "Day-to-Day", details: "Upper Body Injury - Expected back next weekend." },
    { name: "Aidan de La Gorgendiere", pos: "Defense", status: "Out", details: "Lower Body Injury - Evaluated weekly." },
    { name: "Philippe Jacques", pos: "Forward", status: "Probable", details: "Illness - Fully cleared for non-contact skate." }
  ];
}

// LOGIC: Filter Schedule List Logic Layer
function getFilteredGames(filterKey) {
  const games = getGamesData();
  if (filterKey === "HOME") return games.filter(g => g.isHome);
  if (filterKey === "AWAY") return games.filter(g => !g.isHome);
  if (filterKey === "PAST") return games.filter(g => g.played);
  if (filterKey === "UPCOMING") return games.filter(g => !g.played);
  return games;
}

// LOGIC: Calculate Upcoming Game Logic Layer
function getNextUpcomingGame() {
  const games = getGamesData();
  return games.find(g => !g.played) || null;
}

// LOGIC: Compute Overall Team Record and Overall Stats Layer
function getTeamSummaryStats() {
  const games = getGamesData();
  let wins = 0, losses = 0, ties = 0;
  let gf = 0, ga = 0;

  games.forEach(g => {
    if (g.played) {
      if (g.result === "W") wins++;
      if (g.result === "L") losses++;
      if (g.result === "T") ties++;
      gf += g.ritScore;
      ga += g.oppScore;
    }
  });

  return {
    record: `${wins}-${losses}-${ties}`,
    winPct: ((wins + ties * 0.5) / (wins + losses + ties)).toFixed(3).replace(/^0/, ''),
    goalsFor: gf,
    goalsAgainst: ga
  };
}

// DISPLAY: Render Next Game Spotlight Display Layer
function renderNextGameSpotlight() {
  const spotlightContainer = document.getElementById("next-game-spotlight");
  const nextGame = getNextUpcomingGame();

  if (!nextGame) {
    spotlightContainer.innerHTML = `<div class="spotlight-header">No Upcoming Games Scheduled</div>`;
    return;
  }

  const dateStr = new Date(nextGame.date + "T00:00:00").toLocaleDateString("en-US", {
    weekday: 'short', month: 'short', day: 'numeric'
  });

  spotlightContainer.innerHTML = `
    <div class="spotlight-header">NEXT UPCOMING MATCHUP</div>
    <div class="spotlight-teams">
      <div class="spotlight-team">
        <div class="spotlight-team-name">RIT Tigers</div>
      </div>
      <div class="spotlight-vs">VS</div>
      <div class="spotlight-team">
        <div class="spotlight-team-name">${nextGame.opponent}</div>
      </div>
    </div>
    <div class="spotlight-details">
      🗓️ ${dateStr} @ ${nextGame.time} | 📍 ${nextGame.arena} (${nextGame.isHome ? 'Home' : 'Away'})
    </div>
  `;
}

// DISPLAY: Render Schedule List Display Layer
function renderSchedule(filterKey = "ALL") {
  const container = document.getElementById("schedule-list");
  const games = getFilteredGames(filterKey);

  if (games.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:#aaa; padding:20px;">No games match the selected filter.</p>`;
    return;
  }

  container.innerHTML = games.map(g => {
    const formattedDate = new Date(g.date + "T00:00:00").toLocaleDateString("en-US", {
      month: 'short', day: 'numeric', year: 'numeric'
    });

    const locationBadge = g.isHome
      ? `<span class="location-badge home">HOME</span>`
      : `<span class="location-badge away">AWAY</span>`;

    const resultBox = g.played
      ? `<div class="game-result-box">
           <span class="score-text">${g.ritScore} - ${g.oppScore}</span>
           <span class="outcome-tag ${g.result}">${g.result}</span>
         </div>`
      : `<div style="color:var(--rit-orange); font-weight:700; font-size:0.9rem;">${g.time}</div>`;

    return `
      <div class="game-card">
        <div class="game-card-header">
          <span>${formattedDate}</span>
          ${locationBadge}
        </div>
        <div class="game-card-body">
          <div class="opponent-title">${g.opponent}</div>
          ${resultBox}
        </div>
        <div class="game-card-footer">
          📍 ${g.arena}
        </div>
      </div>
    `;
  }).join('');
}

// DISPLAY: Render Stats Tab Display Layer
function renderStats() {
  const overviewContainer = document.getElementById("team-overview-stats");
  const skatersBody = document.getElementById("skater-stats-body");
  const goaliesBody = document.getElementById("goalie-stats-body");

  const summary = getTeamSummaryStats();
  const skaters = getSkaterStatsData();
  const goalies = getGoalieStatsData();

  // Render Team Overview Cards
  overviewContainer.innerHTML = `
    <div class="overview-stat-card">
      <div class="stat-val">${summary.record}</div>
      <div class="stat-lbl">Record (W-L-T)</div>
    </div>
    <div class="overview-stat-card">
      <div class="stat-val">${summary.winPct}</div>
      <div class="stat-lbl">Win %</div>
    </div>
    <div class="overview-stat-card">
      <div class="stat-val">${summary.goalsFor}</div>
      <div class="stat-lbl">Goals For</div>
    </div>
    <div class="overview-stat-card">
      <div class="stat-val">${summary.goalsAgainst}</div>
      <div class="stat-lbl">Goals Against</div>
    </div>
  `;

  // Render Skaters Table
  skatersBody.innerHTML = skaters.map(s => `
    <tr>
      <td><strong>${s.number}</strong></td>
      <td>${s.name}</td>
      <td>${s.pos}</td>
      <td>${s.gp}</td>
      <td>${s.g}</td>
      <td>${s.a}</td>
      <td><strong>${s.pts}</strong></td>
      <td>${s.pim}</td>
    </tr>
  `).join('');

  // Render Goalies Table
  goaliesBody.innerHTML = goalies.map(g => `
    <tr>
      <td><strong>${g.number}</strong></td>
      <td>${g.name}</td>
      <td>${g.gp}</td>
      <td>${g.record}</td>
      <td>${g.gaa}</td>
      <td>${g.svPct}</td>
      <td>${g.shutouts}</td>
    </tr>
  `).join('');
}

// DISPLAY: Render Play-by-Play Options & Feed Display Layer
function renderPlayByPlay() {
  const selectEl = document.getElementById("pbp-game-select");
  const headerEl = document.getElementById("pbp-game-header");
  const feedEl = document.getElementById("pbp-feed");

  const gamesData = getGamesData().filter(g => g.played);
  const pbpData = getPlayByPlayData();

  if (selectEl.children.length === 0) {
    selectEl.innerHTML = gamesData.map(g => `
      <option value="${g.id}">vs ${g.opponent} (${g.ritScore}-${g.oppScore})</option>
    `).join('');

    selectEl.addEventListener("change", (e) => {
      updatePBPFeed(e.target.value);
    });
  }

  const selectedGameId = selectEl.value || gamesData[0].id;
  updatePBPFeed(selectedGameId);

  function updatePBPFeed(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    const events = pbpData[gameId] || [];

    headerEl.innerHTML = `
      <h3 style="color: var(--rit-white); font-size:1.05rem;">RIT Tigers ${game.ritScore} - ${game.oppScore} ${game.opponent}</h3>
      <p style="font-size:0.8rem; color:var(--rit-text-muted); margin-top:4px;">${game.arena}</p>
    `;

    if (events.length === 0) {
      feedEl.innerHTML = `<p style="text-align:center; color:#aaa; padding:15px;">No detailed play-by-play logs for this game.</p>`;
      return;
    }

    feedEl.innerHTML = events.map(e => `
      <div class="pbp-event ${e.type}">
        <div class="pbp-meta">
          <span class="pbp-period">${e.period}</span>
          <span class="pbp-time">${e.time}</span>
        </div>
        <div class="pbp-desc">${e.desc}</div>
      </div>
    `).join('');
  }
}

// DISPLAY: Render Injury Report Display Layer
function renderInjuryReport() {
  const container = document.getElementById("injury-report-list");
  const injuries = getInjuryReportData();

  container.innerHTML = injuries.map(i => `
    <div class="injury-card ${i.status}">
      <div class="injury-header">
        <span class="injury-player">${i.name} (${i.pos})</span>
        <span class="injury-status-badge ${i.status}">${i.status}</span>
      </div>
      <div class="injury-details">${i.details}</div>
    </div>
  `).join('');
}

// DISPLAY: Initialization and App Navigation Handler Layer
function initApp() {
  renderNextGameSpotlight();
  renderSchedule();
  renderStats();
  renderPlayByPlay();
  renderInjuryReport();

  // Tab switching handler
  const navBtns = document.querySelectorAll(".nav-btn");
  const panes = document.querySelectorAll(".tab-pane");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      navBtns.forEach(b => b.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(`pane-${targetTab}`).classList.add("active");
    });
  });

  // Schedule Filter Listener
  const filterSelect = document.getElementById("schedule-filter");
  filterSelect.addEventListener("change", (e) => {
    renderSchedule(e.target.value);
  });
}

// Start application when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);
