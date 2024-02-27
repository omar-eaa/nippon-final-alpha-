// Function to remove the template tag
function removeTemplateTag() {
  // Select the template tag
  const templateTag = document.querySelector("template");

  // Check if the template tag exists
  if (templateTag) {
    // Replace the template tag with its contents
    templateTag.replaceWith(...templateTag.content.childNodes);

    // Remove the scroll event listener once the template tag is removed
    window.removeEventListener("scroll", removeTemplateTagOnScroll);
  }
}

// Function to handle scroll event and remove template tag
function removeTemplateTagOnScroll() {
  // Call the function to remove the template tag
  removeTemplateTag();
}

// Add scroll event listener to remove template tag when scrolling occurs
window.addEventListener("scroll", removeTemplateTagOnScroll);

// hilsen på forsiden  for index.html filen 👇
let today = new Date();
// Hent den aktuelle time
let hourNow = today.getHours();

let greeting;

if (hourNow >= 18 || hourNow < 5) {
  greeting = "God aften";
} else if (hourNow >= 12) {
  greeting = "God eftermiddag";
} else if (hourNow >= 5) {
  greeting = "God morgen";
} else {
  greeting = "Velkommen";
}

// Tilføj dette til din HTML
document.getElementById("greetingMessage").innerHTML = greeting;

// aniamtion for logo 👇
