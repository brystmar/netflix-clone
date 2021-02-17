import React, { useState, useContext, useEffect } from "react"
import { Header, Loading, Card } from "../components"
import { FirebaseContext } from "../context/firebase"
import { SelectProfileContainer } from './profiles'
import { FooterContainer } from './footer'
import { routerPaths } from "../constants/routerPaths"

export function BrowseContainer({ slides }) {
    const [ category, setCategory ] = useState('tv');
    const [ profile, setProfile ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ slideRows, setSlideRows ] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    const user = {
        displayName: "tberg",
        photoURL:    "1"
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }, [ user ])

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [ slides, category ]);

    return profile.displayName ? (
        <>
            {isLoading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
            <Header src="joker" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo
                            to={routerPaths.home}
                            src="/images/misc/logo.svg"
                            alt="React-Flix"
                        />
                        <Header.Link
                            active={category === 'tv' ? 'true' : 'false'}
                            onClick={() => setCategory('tv')}
                        >
                            TV
                        </Header.Link>
                        <Header.Link
                            active={category === 'movies' ? 'true' : 'false'}
                            onClick={() => setCategory('movies')}
                        >
                            Movies
                        </Header.Link>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.Link>{user.displayName}</Header.Link>
                                </Header.Group>
                                <Header.Group>
                                    <Header.Link onClick={() => firebase.auth().signOut()}>
                                        Sign out</Header.Link>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as
                        he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a
                        clown, and the guise he projects in a
                        futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>

            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image
                                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                                    />
                                    <Card.Meta>
                                        <Card.Subtitle>{item.title}</Card.Subtitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Card.FeatureText>{slideItem.description}</Card.FeatureText>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>

            <FooterContainer />
        </>
    ) : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}
