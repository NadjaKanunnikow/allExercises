console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newArticle = document.createElement("article");
const newP = document.createElement("p");
const newFooter = document.createElement("footer");
const newSpan = document.createElement("span");
const newButton = document.createElement("button");

document.body.append(newArticle);
newArticle.append(newP);
newArticle.append(newFooter);
newFooter.append(newSpan);
newFooter.append(newButton);
newArticle.classList.add("post");

newP.textContent = "Ich bin ein neuer Post";
newP.classList.add("post");
newFooter.classList.add("post__footer");
newSpan.textContent = "@username";
newSpan.classList.add("post__username");
newButton.textContent = "♥ Like";
newButton.classList.add("post__button");
