const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = async (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  try {
    const response = await fetch(url);
    const books = await response.json();

    loading.style.display = "none";

    app.computedStyleMap.display = "flex";
    app.computedStyleMap.flexWrap = "wrap";
    app.computedStyleMap.justifyContent = "center";
    app.computedStyleMap.gap = "20px";

    books.forEach((book) => {
      const bookDiv = document.createElement("div");
      bookDiv.style.textAlign = "center";

      const publishedYear = new Date(book.released).getFullYear();
      bookDiv.innerHTML = `
        <h3>${book.name}</h3>
        <p>${book.authors.join(", ")}</p>
        <p>${publishedYear}</p>
        <p>${book.numberOfPages}</p>
      `;
      app.appendChild(bookDiv);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    app.textContent = "Failed to load books. Please try again later.";
  }
};

fetchData(url);
