const routes = {
  searchRoute: (title) => {
    const newUrl = title.trim().split(' ').join('+');
    return `http://openlibrary.org/search.json?title=${newUrl}&limit=20`;
  },
  smallCoverRoute: (id) => (id ? `http://covers.openlibrary.org/b/id/${id}-S.jpg` : 'https://banner2.cleanpng.com/20171217/82d/question-mark-png-5a36993e664362.4305931315135276144189.jpg'),
};

export default routes;
