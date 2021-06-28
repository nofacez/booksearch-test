const routes = {
  searchRoute: (title) => {
    const newUrl = title.trim().split(' ').join('+');
    return `https://openlibrary.org/search.json?title=${newUrl}&limit=20`;
  },
  smallCoverRoute: (id) => `https://covers.openlibrary.org/b/id/${id}-S.jpg`,
  mediumCoverRoute: (id) => `https://covers.openlibrary.org/b/id/${id}-M.jpg`,
};

export default routes;
