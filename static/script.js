const ICON = (inner) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

const ICONS = {
  length: ICON(
    '<rect x="2" y="9" width="20" height="6" rx="1"/><line x1="6" y1="9" x2="6" y2="12"/><line x1="10" y1="9" x2="10" y2="12"/><line x1="14" y1="9" x2="14" y2="12"/><line x1="18" y1="9" x2="18" y2="12"/>'
  ),
  weight: ICON(
    '<rect x="2" y="9" width="3" height="6" rx="1"/><rect x="19" y="9" width="3" height="6" rx="1"/><rect x="5.5" y="7" width="2" height="10" rx="1"/><rect x="16.5" y="7" width="2" height="10" rx="1"/><line x1="7.5" y1="12" x2="16.5" y2="12"/>'
  ),
  temperature: ICON(
    '<path d="M12 3.5a1.8 1.8 0 0 0-1.8 1.8v8.51a3.6 3.6 0 1 0 3.6 0V5.3A1.8 1.8 0 0 0 12 3.5z"/><line x1="12" y1="7.5" x2="12" y2="13.5"/>'
  ),
  volume: ICON(
    '<path d="M9.5 3h5M10.2 3v5.3l-5 8.6a1.9 1.9 0 0 0 1.65 2.85h10.3A1.9 1.9 0 0 0 18.8 16.9l-5-8.6V3"/><line x1="7.6" y1="14" x2="16.4" y2="14"/>'
  ),
  area: ICON(
    '<rect x="4" y="4" width="16" height="16" rx="1"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="12" y1="4" x2="12" y2="20"/>'
  ),
  speed: ICON(
    '<path d="M4.5 15.5a7.5 7.5 0 1 1 15 0"/><line x1="12" y1="15.5" x2="15.8" y2="10.8"/><circle cx="12" cy="15.5" r="1"/>'
  ),
  time: ICON(
    '<circle cx="12" cy="12" r="8.5"/><line x1="12" y1="7.5" x2="12" y2="12"/><line x1="12" y1="12" x2="15.2" y2="13.8"/>'
  ),
  data: ICON(
    '<ellipse cx="12" cy="6" rx="7.5" ry="2.7"/><path d="M4.5 6v5.5c0 1.5 3.36 2.7 7.5 2.7s7.5-1.2 7.5-2.7V6"/><path d="M4.5 11.5V17c0 1.5 3.36 2.7 7.5 2.7s7.5-1.2 7.5-2.7v-5.5"/>'
  ),
};

const CATEGORIES = {
  length: {
    label: "Length",
    default: ["meter", "foot"],
    units: {
      kilometer: { label: "Kilometers", factor: 1000 },
      meter: { label: "Meters", factor: 1 },
      centimeter: { label: "Centimeters", factor: 0.01 },
      millimeter: { label: "Millimeters", factor: 0.001 },
      mile: { label: "Miles", factor: 1609.344 },
      yard: { label: "Yards", factor: 0.9144 },
      foot: { label: "Feet", factor: 0.3048 },
      inch: { label: "Inches", factor: 0.0254 },
    },
  },
  weight: {
    label: "Weight",
    default: ["kilogram", "pound"],
    units: {
      tonne: { label: "Tonnes", factor: 1000 },
      kilogram: { label: "Kilograms", factor: 1 },
      gram: { label: "Grams", factor: 0.001 },
      milligram: { label: "Milligrams", factor: 0.000001 },
      pound: { label: "Pounds", factor: 0.45359237 },
      ounce: { label: "Ounces", factor: 0.028349523125 },
    },
  },
  temperature: {
    label: "Temperature",
    special: true,
    default: ["celsius", "fahrenheit"],
    units: {
      celsius: { label: "Celsius (°C)" },
      fahrenheit: { label: "Fahrenheit (°F)" },
      kelvin: { label: "Kelvin (K)" },
    },
  },
  volume: {
    label: "Volume",
    default: ["liter", "gallon"],
    units: {
      cubic_meter: { label: "Cubic meters", factor: 1000 },
      liter: { label: "Liters", factor: 1 },
      milliliter: { label: "Milliliters", factor: 0.001 },
      gallon: { label: "Gallons (US)", factor: 3.785411784 },
      quart: { label: "Quarts (US)", factor: 0.946352946 },
      pint: { label: "Pints (US)", factor: 0.473176473 },
      cup: { label: "Cups (US)", factor: 0.2365882365 },
    },
  },
  area: {
    label: "Area",
    default: ["sq_meter", "sq_foot"],
    units: {
      sq_kilometer: { label: "Square kilometers", factor: 1e6 },
      sq_meter: { label: "Square meters", factor: 1 },
      sq_foot: { label: "Square feet", factor: 0.09290304 },
      sq_yard: { label: "Square yards", factor: 0.83612736 },
      sq_mile: { label: "Square miles", factor: 2589988.110336 },
      acre: { label: "Acres", factor: 4046.8564224 },
      hectare: { label: "Hectares", factor: 10000 },
    },
  },
  speed: {
    label: "Speed",
    default: ["kmph", "mph"],
    units: {
      mps: { label: "Meters/second", factor: 1 },
      kmph: { label: "Kilometers/hour", factor: 0.2777777778 },
      mph: { label: "Miles/hour", factor: 0.44704 },
      knot: { label: "Knots", factor: 0.5144444444 },
    },
  },
  time: {
    label: "Time",
    default: ["hour", "minute"],
    units: {
      week: { label: "Weeks", factor: 604800 },
      day: { label: "Days", factor: 86400 },
      hour: { label: "Hours", factor: 3600 },
      minute: { label: "Minutes", factor: 60 },
      second: { label: "Seconds", factor: 1 },
    },
  },
  data: {
    label: "Digital storage",
    default: ["megabyte", "kilobyte"],
    units: {
      terabyte: { label: "Terabytes", factor: 1024 ** 4 },
      gigabyte: { label: "Gigabytes", factor: 1024 ** 3 },
      megabyte: { label: "Megabytes", factor: 1024 ** 2 },
      kilobyte: { label: "Kilobytes", factor: 1024 },
      byte: { label: "Bytes", factor: 1 },
      bit: { label: "Bits", factor: 0.125 },
    },
  },
};

function toCelsius(value, unit) {
  if (unit === "celsius") return value;
  if (unit === "fahrenheit") return ((value - 32) * 5) / 9;
  return value - 273.15; 
}

function fromCelsius(value, unit) {
  if (unit === "celsius") return value;
  if (unit === "fahrenheit") return (value * 9) / 5 + 32;
  return value + 273.15; 
}

function convert(value, fromUnit, toUnit, category) {
  if (category.special) {
    return fromCelsius(toCelsius(value, fromUnit), toUnit);
  }
  const inBase = value * category.units[fromUnit].factor;
  return inBase / category.units[toUnit].factor;
}

function formatNumber(n) {
  if (!isFinite(n)) return "—";
  if (n === 0) return "0";
  const abs = Math.abs(n);
  const decimals = abs >= 1000 ? 2 : abs >= 1 ? 6 : 10;
  let s = n.toFixed(decimals);
  if (s.includes(".")) {
    s = s.replace(/0+$/, "").replace(/\.$/, "");
  }
  return s;
}


let currentCategory = "length";

const tabsEl = document.getElementById("tabs");
const categoryLabelEl = document.getElementById("category-label");
const inputValueEl = document.getElementById("input-value");
const outputValueEl = document.getElementById("output-value");
const fromUnitEl = document.getElementById("from-unit");
const toUnitEl = document.getElementById("to-unit");
const swapBtn = document.getElementById("swap-btn");
const calibrationEl = document.getElementById("calibration-note");

function buildTabs() {
  tabsEl.innerHTML = "";
  Object.keys(CATEGORIES).forEach((key) => {
    const cat = CATEGORIES[key];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tab" + (key === currentCategory ? " active" : "");
    btn.dataset.key = key;
    btn.innerHTML = `${ICONS[key]}<span>${cat.label}</span>`;
    btn.addEventListener("click", () => selectCategory(key));
    tabsEl.appendChild(btn);
  });
}

function populateUnits(selectEl, categoryKey, preferredUnit) {
  const cat = CATEGORIES[categoryKey];
  selectEl.innerHTML = "";
  Object.keys(cat.units).forEach((unitKey) => {
    const opt = document.createElement("option");
    opt.value = unitKey;
    opt.textContent = cat.units[unitKey].label;
    selectEl.appendChild(opt);
  });
  if (preferredUnit) selectEl.value = preferredUnit;
}

function selectCategory(key) {
  currentCategory = key;
  categoryLabelEl.textContent = key;

  [...tabsEl.children].forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.key === key);
  });

  const cat = CATEGORIES[key];
  const [defFrom, defTo] = cat.default;
  populateUnits(fromUnitEl, key, defFrom);
  populateUnits(toUnitEl, key, defTo);
  inputValueEl.value = "1";
  runConversion();
}

function runConversion() {
  const cat = CATEGORIES[currentCategory];
  const raw = parseFloat(inputValueEl.value);
  const from = fromUnitEl.value;
  const to = toUnitEl.value;

  if (isNaN(raw)) {
    outputValueEl.value = "";
    calibrationEl.textContent = "Enter a number to convert.";
    return;
  }

  const result = convert(raw, from, to, cat);
  outputValueEl.value = formatNumber(result);

  const one = convert(1, from, to, cat);
  const fromLabel = cat.units[from].label.toLowerCase();
  const toLabel = cat.units[to].label.toLowerCase();
  calibrationEl.innerHTML = `1 ${fromLabel} = <strong>${formatNumber(one)}</strong> ${toLabel}`;
}

function buildRulerTicks() {
  const group = document.getElementById("ruler-ticks");
  if (!group) return;
  const width = 600;
  const step = 15;
  let svg = "";
  for (let x = 0, i = 0; x <= width; x += step, i++) {
    const tall = i % 5 === 0;
    svg += `<line x1="${x}" y1="${tall ? 4 : 9}" x2="${x}" y2="13"/>`;
  }
  group.innerHTML = svg;
}


inputValueEl.addEventListener("input", runConversion);
fromUnitEl.addEventListener("change", runConversion);
toUnitEl.addEventListener("change", runConversion);

swapBtn.addEventListener("click", () => {
  const from = fromUnitEl.value;
  const to = toUnitEl.value;
  fromUnitEl.value = to;
  toUnitEl.value = from;

  swapBtn.classList.add("spin");
  setTimeout(() => swapBtn.classList.remove("spin"), 200);

  runConversion();
  inputValueEl.value = outputValueEl.value || inputValueEl.value;
  runConversion();
});


buildTabs();
buildRulerTicks();
selectCategory(currentCategory);
