const initialState = {
    posts: [
       {        
        id: '1',
        title: 'Article title I',
        shortDescription: 'Short description of the article..',
        content: 'Main content of the article',
        publishedDate: new Date('02/02/2022'),
        category: 'Sport',
        author: 'John Doe'

      },
      {
        id: '2',
        title: 'Article title II',
        shortDescription: 'Short description of the article..',
        content: 'Main content of the article',
        publishedDate: new Date('12/02/2024'),
        category: 'News',
        author: 'John Doe'
      },
      {
        id: '3',
        title: 'Article title III',
        shortDescription: 'Short description of the article..',
        content: 'Main content of the article',
        publishedDate: new Date('08/03/2024'),
        category: 'Movies',
        author: 'John Doe'
      },
    ],
      categories: [
        'Sport', 
        'News', 
        'Movies'
    ]

    
};

export default initialState;