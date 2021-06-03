const routes = {
  searchRoute: (title) => {
    const newUrl = title.trim().split(' ').join('+');
    return `http://openlibrary.org/search.json?title=${newUrl}`;
  },
};

export default routes;
