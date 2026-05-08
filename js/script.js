// --------------------- TYPING ANIMATION ---------------------
function startTypingAnimation() {
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    // Reset animation by removing and re-adding the element
    const clone = typingElement.cloneNode(true);
    typingElement.parentNode.replaceChild(clone, typingElement);
  }
}

// Start animation when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startTypingAnimation);
} else {
  startTypingAnimation();
}

function gotopapers() {
  window.location.href = "papers.html";
}

function gotoindex() {
  window.location.href = "index.html";
}


// --------------------- Papers Page ---------------------

const yearChips = document.querySelectorAll("#year-chips .chip");
const semChips  = document.querySelectorAll("#sem-chips .chip");
const subjectsList = document.getElementById("subjects-list"); //visual

let selectedYear = "all";
let selectedSem  = "all";

//Sem filterign by year
const semsByYear = {
  all: [1,2,3,4,5,6,7,8],
  1:   [1,2],
  2:   [3,4],
  3:   [5,6],
  4:   [7,8]
};

// ---- YEAR CHIP CLICK ----
yearChips.forEach(chip => {  //for each year button click
  chip.addEventListener("click", () => {
    yearChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    selectedYear = chip.dataset.year;

    const allowed = semsByYear[selectedYear]; 

    // Reset sem chips
    semChips.forEach(s => {
      s.classList.remove("active", "disabled");
      if (s.dataset.sem === "all") {
        s.classList.add("active");
        selectedSem = "all";
        return;
      }
      if (!allowed.includes(parseInt(s.dataset.sem))) {
        s.classList.add("disabled");
      }
    });

    renderSubjects();
  });
});

// ---- SEM CHIP CLICK ----
semChips.forEach(chip => {    //for each sem button click
  chip.addEventListener("click", () => {
    if (chip.classList.contains("disabled")) return;
    semChips.forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    selectedSem = chip.dataset.sem;
    renderSubjects();
  });
});


// ---- RENDER SUBJECTS ----
function renderSubjects() {   //main
  subjectsList.innerHTML = ""; // clear subject list

  //collect which year+sem combos to show
  let pairs = []; 

  const years = selectedYear === "all"
    ? [1,2,3,4]
    : [parseInt(selectedYear)];

  years.forEach(y => {
    const allowedSems = semsByYear[y] || [];
    allowedSems.forEach(s => {
      if (selectedSem === "all" || parseInt(selectedSem) === s) {
        pairs.push([y, s]);
      }
    });
  });

  // For each pair, render subjects from papersData
  let anyFound = false;

  pairs.forEach(([y, s]) => {
    const semData = papersData[y] && papersData[y][s];
    if (!semData) return;

    semData.subjects.forEach(subject => {
      anyFound = true;
      const card = createSubjectCard(subject, y, s);
      subjectsList.appendChild(card);
    });
  });

  if (!anyFound) {
    subjectsList.innerHTML = `<p class="no-results">No papers found for this selection.</p>`;
  }
}


// ---- CREATE SUBJECT CARD ----
function createSubjectCard(subject, year, sem) {
  const card = document.createElement("div");
  card.className = "subject-card";

  //header click to expand
  const header = document.createElement("div");
  header.className = "subject-header";
  header.innerHTML = `
    <div>
      <h3>${subject.name}</h3>
      <p>Year ${year} | Sem ${sem} &nbsp;·&nbsp; ${subject.files.length} file${subject.files.length !== 1 ? "s" : ""}</p>
    </div>
  `;

  // Files list (hidden by default)
  const filesList = document.createElement("div");
  filesList.className = "files-list";

  subject.files.forEach(file => {
    const row = document.createElement("a");
    row.className = "file-row";
    row.href = file.url;
    row.target = "_blank";
    row.innerHTML = `
      <span class="file-icon">📄</span>
      <span class="file-name">${file.name}</span>
      <span class="file-open">Open ↗</span>
    `;
    filesList.appendChild(row);
  });

  card.appendChild(header);
  card.appendChild(filesList);

  // Toggle open/close on header click
  header.addEventListener("click", () => {
    const isOpen = card.classList.contains("open");
    card.classList.toggle("open", !isOpen);
  });

  return card;
}


// ---- INITIAL RENDER ----
renderSubjects();


const form = document.getElementById("feedback-form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thanks for your feedback!");

    form.reset();
  });
}
