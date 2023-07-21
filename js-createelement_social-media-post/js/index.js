console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//CREATE ELEMENTS:
const newArticle = document.createElement("article");
const newP = document.createElement("p");
const newFooter = document.createElement("footer");
const newSpan = document.createElement("span");
const newButton = document.createElement("button");

//APPEND ELEMENTS:
document.body.append(newArticle);
newArticle.append(newP);
newArticle.append(newFooter);
newFooter.append(newSpan);
newFooter.append(newButton);

// ADD CSS-CLASSES:
newArticle.classList.add("post");
newP.classList.add("post");
newFooter.classList.add("post__footer");
newSpan.classList.add("post__username");
newButton.classList.add("post__button");

// ADD CONTENT:
newP.textContent = "Ich bin ein neuer Post";
newSpan.textContent = "@username";
newButton.textContent = "♥ Like";

// ADD EVENT TO THE LIKEBUTTON:
newButton.addEventListener("click", handleLikeButtonClick);
