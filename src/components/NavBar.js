import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect } from 'react';
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice';
import '../css/NavBar.css'

export default function NavBar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate("/home")
            }
        })
    }, [userName])

    const Login = async () => {
        if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                navigate('/')
            }).catch((error) => {
                alert(error.message)
            })
        }
        else if (!userName) {
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user)
            }).catch((error) => {
                alert(error.message);
            })
        }
    }

    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img className='Navimg' src="\images\logo.svg" alt="" />
                    </Navbar.Brand>
                    {
                        userName ?
                            <>
                                <Nav className="me-auto">
                                    <Nav.Link href="/home">
                                        <img src="\images\home-icon.svg" alt="" />
                                        <span>
                                            Home
                                        </span>
                                    </Nav.Link>
                                    <Nav.Link href="/search">
                                        <img src="\images\search-icon.svg" alt="" />
                                        <span>
                                            Search
                                        </span>
                                    </Nav.Link>
                                    <Nav.Link href="/watchlist">
                                        <img src="\images\watchlist-icon.svg" alt="" />
                                        <span>
                                            Watchlist
                                        </span>
                                    </Nav.Link>
                                    <Nav.Link href="/original">
                                        <img src="\images\original-icon.svg" alt="" />
                                        <span>
                                            Originals
                                        </span>
                                    </Nav.Link>
                                    <Nav.Link href="/movie">
                                        <img src="\images\movie-icon.svg" alt="" />
                                        <span>
                                            Movies
                                        </span>
                                    </Nav.Link>
                                    <Nav.Link href="/series">
                                        <img src="\images\series-icon.svg" alt="" />
                                        <span>
                                            Series
                                        </span>
                                    </Nav.Link>
                                </Nav>
                                <div className="signout">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <img className='userimg' src={userPhoto} alt={userName} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={Login}>Sign Out</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </> :
                            <Button className='btn-log1' onClick={Login}>Log In</Button>
                    }
                </Container>
            </Navbar >
        </>
    )
}