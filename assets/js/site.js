/* ===== Edit your information here ===== */
const CONFIG = {
  productName: "",
  org: "padid-team",
  email: "padid.team@gmail.com",
  team: [
    { name: "Kaveh", role: "Leader and Developer", link: "https://github.com/Kaveh-Goodarzi" },
    { name: "Parsa", role: "Developer", link: "https://github.com/parsasabour22-collab" },
    { name: "Erfan", role: "Designer", link: "https://github.com/ErfanGh1205" },
    { name: "Radman", role: "Market Manager", link: "" }
  ]
};
/* ======================================= */

const $ = (s) => document.querySelectorAll(s);
const gh = "https://github.com/" + CONFIG.org;

$("[data-name]").forEach(el => el.textContent = CONFIG.productName);
$("[data-github]").forEach(el => { el.href = gh; el.target = "_blank"; el.rel = "noopener"; });
$("[data-mail]").forEach(el => { el.href = "mailto:" + CONFIG.email; el.textContent = CONFIG.email; });
$("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

const list = document.getElementById("people");
if (list) {
  CONFIG.team.forEach(m => {
    const li = document.createElement("li");
    const name = document.createElement("b"); name.textContent = m.name;
    const role = document.createElement("span"); role.textContent = m.role;
    li.append(name, role);
    if (m.link) {
      const a = document.createElement("a");
      a.href = m.link; a.target = "_blank"; a.rel = "noopener"; a.textContent = "Profile";
      li.append(a);
    }
    list.append(li);
  });
}

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = d.get("subject") || "Message from the padid website";
    const body = d.get("message") + "\n\n--\n" + d.get("name") + "\n" + d.get("email");
    window.location.href = "mailto:" + CONFIG.email +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  });
}
