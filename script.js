const REGION_NAMES = {
    "shire": "Shire",
    "gondor": "Gondor",
    "rohan": "Rohan",
    "mordor": "Mordor",
    "lindon": "Lindon",
    "mirkwood": "Mirkwood",
    "lothlorien": "LothLorien",
    "rivendell": "Rivendell",
    "erebor": "Erebor",
    "dorwinion": "Dorwinion",
    "rhun": "Rhun",
    "harad": "Harad",
    "umbar": "Umbar",
    "khand": "Khand",
    "bree-land": "Bree",
    "dale": "Dale",
    "dol-guldur": "Dol-Guldur",
    "enedwaith": "Enedwaith",
    "dunland": "Dunland",
    "ered-luin": "Ered-Luin",
    "fangorn": "Fangorn",
    "gundabad": "Gundabad",
    "iron-hills": "Iron-Hills",
    "isengard": "Isengard",
    "moria": "Moria",
    "ered-mithrin": "Ered-Mithrin"
};

const REGION_DETAILS = {
    "shire": {
        title: "The Shire",
        capital: "Michel Delving",
        ruler: "Thain Paladin Took II & Mayor Will Whitfoot",
        desc: "A peaceful and secluded land in northwestern Middle-earth, inhabited entirely by Hobbits."
    },
    "gondor": {
        title: "Realm of Gondor",
        capital: "Minas Tirith",
        ruler: "Denethor II (Ruling Steward)",
        desc: "The greatest kingdom of Men in the Third Age, standing as the primary bulwark against the forces of Mordor."
    },
    "rohan": {
        title: "Kingdom of Rohan",
        capital: "Edoras (Meduseld)",
        ruler: "King Théoden",
        desc: "A proud grassland kingdom inhabited by the Rohirrim, renowned masters of horses and cavalry warfare."
    },
    "mordor": {
        title: "The Land of Mordor",
        capital: "Barad-dûr",
        ruler: "Sauron (The Dark Lord)",
        desc: "A volcanic wasteland fortified by impassable mountain ranges, serving as the seat of the Dark Lord."
    },
    "lindon": {
        title: "Lindon",
        capital: "The Grey Havens (Mithlond)",
        ruler: "Círdan the Shipwright",
        desc: "The westernmost coastal realm of Elves, from where the white ships set sail across the sea to the Undying Lands."
    },
    "mirkwood": {
        title: "Mirkwood (Woodland Realm)",
        capital: "Elvenking's Halls",
        ruler: "King Thranduil",
        desc: "A vast, ancient forest formerly known as Greenwood the Great, long plagued by giant spiders and dark corruption."
    },
    "lothlorien": {
        title: "Lothlórien",
        capital: "Caras Galadhon",
        ruler: "Lady Galadriel & Lord Celeborn",
        desc: "The golden sanctuary of the Galadhrim Elves, preserved in timeless beauty by the power of the ring Nenya."
    },
    "rivendell": {
        title: "Rivendell (Imladris)",
        capital: "The Last Homely House",
        ruler: "Lord Elrond Half-elven",
        desc: "A hidden valley sanctuary nestled at the foothills of the Misty Mountains, a haven of wisdom and lore."
    },
    "erebor": {
        title: "Kingdom under the Mountain (Erebor)",
        capital: "Erebor",
        ruler: "King Dáin II Ironfoot",
        desc: "The grand subterranean mountain citadel of Durin's Folk, reclaimed from the dragon Smaug."
    },
    "dale": {
        title: "Kingdom of Dale",
        capital: "City of Dale",
        ruler: "King Brand",
        desc: "A prosperous city-state of Northmen rebuilt in the shadow of Erebor along the River Running."
    },
    "dorwinion": {
        title: "Dorwinion",
        capital: "Dorwinion Port",
        ruler: "Local Guilds & Vintners",
        desc: "A fertile land on the north-western shores of the Sea of Rhûn, famous across Middle-earth for its potent wines."
    },
    "rhun": {
        title: "Lands of Rhûn",
        capital: "Tribal Encampments",
        ruler: "Easterling Chieftains (Subject to Sauron)",
        desc: "The vast eastern steppes populated by diverse Easterling tribes allied with the Dark Lord."
    },
    "harad": {
        title: "Harad (Near Harad)",
        capital: "Desert Strongholds",
        ruler: "Haradrim Kings & Lords",
        desc: "The scorching southern domain of ferocious warriors who march into battle atop colossal Mûmakil."
    },
    "umbar": {
        title: "Haven of Umbar",
        capital: "City of the Corsairs",
        ruler: "Corsair Captains",
        desc: "A heavily fortified coastal haven home to the ruthless Corsairs, the dreaded pirates of the southern seas."
    },
    "khand": {
        title: "Khand",
        capital: "Variag Strongholds",
        ruler: "Variag Clan Chieftains",
        desc: "A rugged steppe territory south-east of Mordor, home to the ferocious mercenary horsemen known as the Variags."
    },
    "bree-land": {
        title: "Bree-land",
        capital: "Bree (The Prancing Pony)",
        ruler: "Butterbur Family / Town Council",
        desc: "A crossroads settlement where Men and Hobbits live side by side in peaceful coexistence."
    },
    "dol-guldur": {
        title: "Dol Guldur",
        capital: "Hill of Sorcery",
        ruler: "Khamûl the Easterling (Nazgûl)",
        desc: "A dark fortress in southern Mirkwood that served as the secret stronghold of the Necromancer."
    },
    "enedwaith": {
        title: "Enedwaith",
        capital: "Tharbad (Ruins)",
        ruler: "Scattered Dunlending Clans",
        desc: "The wilderness stretching between the rivers Greyflood and Isen, devoid of unified governance."
    },
    "dunland": {
        title: "Dunland",
        capital: "Hill Settlements",
        ruler: "Clan Chieftains",
        desc: "The rugged hill-country inhabited by the Dunlendings, who hold ancient grudges against the horse-lords of Rohan."
    },
    "ered-luin": {
        title: "Ered Luin (Blue Mountains)",
        capital: "Thorin's Halls (Historic)",
        ruler: "Dwarven Clan Elders",
        desc: "The ancient western mountain range containing silver and iron mines worked by surviving Dwarven clans."
    },
    "fangorn": {
        title: "Fangorn Forest (Entwood)",
        capital: "Wellinghall / Derndingle",
        ruler: "Treebeard (Fangorn)",
        desc: "The oldest living forest in Middle-earth, protected by the giant shepherds of trees known as the Ents."
    },
    "gundabad": {
        title: "Mount Gundabad",
        capital: "Gundabad Citadel",
        ruler: "Orc Chieftains",
        desc: "The sacred ancestral birthplace of Durin, now desecrated and held as the capital stronghold of the northern Orcs."
    },
    "iron-hills": {
        title: "The Iron Hills",
        capital: "Járn-gard",
        ruler: "Dwarven Clan Lords",
        desc: "A rugged eastern mountain range rich in iron ore, long ruled as a prosperous Dwarven enclave."
    },
    "isengard": {
        title: "Isengard (Angrenost)",
        capital: "Orthanc",
        ruler: "Saruman the White",
        desc: "A ring-fortress surrounding the indestructible tower of Orthanc, secretly transformed into a war machine."
    },
    "moria": {
        title: "Moria (Khazad-dûm)",
        capital: "The Dwarrowdelf",
        ruler: "Durin's Bane (The Balrog)",
        desc: "The ancient subterranean realm of the Longbeards, now a haunted cavern filled with Orcs and ancient shadow."
    },
    "ered-mithrin": {
        title: "Ered Mithrin (Grey Mountains)",
        capital: "Abandoned Dwarven Holds",
        ruler: "Cold-drakes & Orc Warbands",
        desc: "A freezing northern mountain chain abandoned by Dwarves due to the ancient wars against dragons."
    }
};

let remainingRegions = [];
let currentTarget = null;
let attempts = 3;

let totalAttemptsUsed = 0;
let successfulHits = 0;

document.addEventListener("DOMContentLoaded", () => {
    const mapContainer = document.getElementById("map-container");
    const musicBtn = document.getElementById("music-toggle-btn");
    const bgMusic = document.getElementById("bg-music");
    const restartBtn = document.getElementById("restart-game-btn");

    musicBtn.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.textContent = "⏸ Pause";
        } else {
            bgMusic.pause();
            musicBtn.textContent = "▶ Music";
        }
    });

    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            document.getElementById("game-over-modal").classList.add("hidden");
            document.querySelectorAll(".game-region").forEach(el => {
                el.classList.remove("guessed-first", "guessed-second", "guessed-third", "revealed-failed", "wrong-flash");
            });
            startNewGame();
        });
    }

    async function loadMap(mapName) {
        try {
            const response = await fetch(`maps/${mapName}.svg`);
            const svgText = await response.text();
            mapContainer.innerHTML = svgText;
            
            setupGameRegions();
            startNewGame();
        } catch (err) {
            console.error("Error while uploading map:", err);
            mapContainer.innerHTML = "<p>Error while uploading map.</p>";
        }
    }

    loadMap("TA_3018");
});

function setupGameRegions() {
    const svgMap = document.querySelector("#map-container svg");
    if (!svgMap) return;

    Object.keys(REGION_NAMES).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.add("game-region");
        }
    });

    svgMap.onclick = (e) => {
        const regionEl = e.target.closest(".game-region");
        if (regionEl && REGION_NAMES[regionEl.id]) {
            handleRegionClick(regionEl);
        }
    };
}

function startNewGame() {
    remainingRegions = Object.keys(REGION_NAMES);
    totalAttemptsUsed = 0;
    successfulHits = 0;
    
    document.getElementById("found-list").innerHTML = "";
    updateAccuracyDisplay();
    nextQuestion();
}

function nextQuestion() {
    if (remainingRegions.length === 0) {
        document.getElementById("target-country-name").textContent = "Completed!";
        showGameOverModal();
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingRegions.length);
    currentTarget = remainingRegions[randomIndex];
    
    attempts = 3;
    updateAttemptsDisplay();
    
    const regionTitle = REGION_NAMES[currentTarget] || currentTarget;
    document.getElementById("target-country-name").textContent = regionTitle;
}

function handleRegionClick(targetElement) {
    const clickedId = targetElement.id;

    if (targetElement.classList.contains("guessed-first") || 
        targetElement.classList.contains("guessed-second") || 
        targetElement.classList.contains("guessed-third") ||
        targetElement.classList.contains("revealed-failed")) {
        return;
    }

    totalAttemptsUsed++;

    if (clickedId === currentTarget) {
        successfulHits++;
        updateRegionInfoCard(currentTarget);
        let colorClass = "";
        
        if (attempts === 3) colorClass = "guessed-first";
        else if (attempts === 2) colorClass = "guessed-second";
        else if (attempts === 1) colorClass = "guessed-third";

        targetElement.classList.add(colorClass);
        addToList(REGION_NAMES[currentTarget], true);
        
        remainingRegions = remainingRegions.filter(id => id !== currentTarget);
        updateAccuracyDisplay();
        setTimeout(nextQuestion, 500);
    } 
    else {
        attempts--;
        updateAttemptsDisplay();

        targetElement.classList.remove("wrong-flash");
        void targetElement.offsetWidth;
        targetElement.classList.add("wrong-flash");
        
        setTimeout(() => {
            targetElement.classList.remove("wrong-flash");
        }, 400);

        const attemptsBox = document.querySelector(".attempts-left");
        if (attemptsBox) {
            attemptsBox.classList.add("shake");
            setTimeout(() => attemptsBox.classList.remove("shake"), 300);
        }

        if (attempts === 0) {
            updateRegionInfoCard(currentTarget);
            const correctElement = document.getElementById(currentTarget);
            if (correctElement) {
                correctElement.classList.add("revealed-failed");
            }
            
            addToList(REGION_NAMES[currentTarget], false);
            remainingRegions = remainingRegions.filter(id => id !== currentTarget);
            updateAccuracyDisplay();
            setTimeout(nextQuestion, 2400);
        } else {
            updateAccuracyDisplay();
        }
    }
}

function updateAttemptsDisplay() {
    const attemptsEl = document.getElementById("attempts-count");
    if (attemptsEl) {
        attemptsEl.textContent = `${attempts}/3`;
    }
}

function calculateAccuracy() {
    if (totalAttemptsUsed === 0) return 100;
    return Math.round((successfulHits / totalAttemptsUsed) * 100);
}

function updateAccuracyDisplay() {
    document.getElementById("accuracy-rate").textContent = `${calculateAccuracy()}%`;
}

function addToList(name, isSuccess) {
    const ul = document.getElementById("found-list");
    const li = document.createElement("li");
    li.className = isSuccess ? "success" : "failed";
    li.textContent = `${isSuccess ? "✓" : "✗"} ${name}`;
    ul.appendChild(li);
    ul.scrollTop = ul.scrollHeight;
}

function showGameOverModal() {
    const modal = document.getElementById("game-over-modal");
    const finalAccuracy = document.getElementById("final-accuracy");
    if (modal && finalAccuracy) {
        finalAccuracy.textContent = `${calculateAccuracy()}%`;
        modal.classList.remove("hidden");
    }
}

function updateRegionInfoCard(regionId) {
    const info = REGION_DETAILS[regionId];
    const card = document.getElementById("region_info");
    
    if (info && card) {
        card.innerHTML = `
            <div class="region-info-content">
                <h4 class="card-title">${info.title}</h4>
                <p class="card-line"><strong>Seat:</strong> <span>${info.capital}</span></p>
                <p class="card-line"><strong>Ruler:</strong> <span>${info.ruler}</span></p>
                <hr class="card-divider">
                <p class="card-quote"><em>"${info.desc}"</em></p>
            </div>
        `;
    }
}