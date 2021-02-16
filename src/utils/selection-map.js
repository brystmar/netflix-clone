export default function selectionMap({ tv, movies }) {
    return {
        tv:     [
            { title: 'Documentaries', data: tv.filter((item) => item.genre === 'documentaries') },
            { title: 'Comedies', data: tv.filter((item) => item.genre === 'comedies') },
            { title: 'Children', data: tv.filter((item) => item.genre === 'children') },
            { title: 'Crime', data: tv.filter((item) => item.genre === 'crime') },
            { title: 'Feel Good', data: tv.filter((item) => item.genre === 'feel-good') },
        ],
        movies: [
            { title: 'Drama Good', data: movies.filter((item) => item.genre === 'drama') },
            { title: 'Thriller', data: movies.filter((item) => item.genre === 'thriller') },
            { title: 'Children', data: movies.filter((item) => item.genre === 'children') },
            { title: 'Suspense', data: movies.filter((item) => item.genre === 'suspense') },
            { title: 'Romance', data: movies.filter((item) => item.genre === 'romance') },
        ]
    }
}
