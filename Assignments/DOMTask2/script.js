const main = document.querySelector("main");
const btn = document.querySelector("button");

btn.addEventListener("click", showContent);
async function getRelatedContent() {
  const categories = [
    "inspirational",
    "success",
    "life",
    "love",
    "happiness",
    "wisdom",
    "art",
    "nature",
  ];
  const category = categories[Math.floor(Math.random() * categories.length)];

  // FIXED IMAGE URL (this one works)
  const imageUrl = `https://source.unsplash.com/800x600/?${category}`;

  const quoteRes = await fetch(
    `http://api.quotable.io/random?tags=${category}`
  );
  const quoteData = await quoteRes.json();

  return {
    image: imageUrl,
    quote: quoteData.content,
    author: quoteData.author,
    category,
  };
}

async function showContent() {
  try {
    // clear previous content

    const data = await getRelatedContent();
    console.log("data:", data);

    const img = document.createElement("img");
    img.src = data.image; // set src directly
    img.alt = data.category + " image";
    img.loading = "lazy";

    // debug handlers
    img.onload = () => console.log("Image loaded:", img.src);
    img.onerror = (e) => console.error("Image failed to load:", img.src, e);

    const h1 = document.createElement("h1");
    h1.innerText = `"${data.quote}" — ${data.author}`;

    main.appendChild(img);
    main.appendChild(h1);

    setTimeout(() => {
      main.removeChild(img);
      main.removeChild(h1);
    }, 5000);
  } catch (err) {
    console.error("Error in showContent:", err);
    main.textContent = "Sorry — could not load content right now.";
  }
}
