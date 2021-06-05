const routes = {
  searchRoute: (title) => {
    const newUrl = title.trim().split(' ').join('+');
    return `http://openlibrary.org/search.json?title=${newUrl}&limit=20`;
  },
  smallCoverRoute: (id) => `http://covers.openlibrary.org/b/id/${id}-S.jpg`,
  mediumCoverRoute: (id) => `http://covers.openlibrary.org/b/id/${id}-M.jpg`,
};

export default routes;
