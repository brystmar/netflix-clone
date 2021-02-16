export default function selectionMap({ tv, movies }) {
    return {
        tv:     [
            { title: 'Documentary', data: tv.filter((item) => item.genre === 'documentary') },
            { title: 'Comedy', data: tv.filter((item) => item.genre === 'comedy') },
            { title: 'Kids', data: tv.filter((item) => item.genre === 'kids') },
            { title: 'Crime', data: tv.filter((item) => item.genre === 'crime') },
            { title: 'Feel Good', data: tv.filter((item) => item.genre === 'feel-good') },
        ],
        movies: [
            { title: 'Drama', data: movies.filter((item) => item.genre === 'drama') },
            { title: 'Thriller', data: movies.filter((item) => item.genre === 'thriller') },
            { title: 'Kids', data: movies.filter((item) => item.genre === 'kids') },
            { title: 'Suspense', data: movies.filter((item) => item.genre === 'suspense') },
            { title: 'Romance', data: movies.filter((item) => item.genre === 'romance') },
        ]
    }
}
