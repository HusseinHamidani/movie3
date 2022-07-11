import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { TbMovie } from 'react-icons/tb';
import { GiFilmStrip } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import '../styles/style.css';
function NavigationSystem() {
    const [active, setActive] = useState(false);
    const [navigationActivatingControler, setNavigationActivatingControler] =
        useState('ulbar_the_handler_of_navigation_system');

    const [colorActivationHome, setColorActivationHome] = useState(
        'colorActive mainLinkingSystem'
    );
    const [colorActivationProfile, setColorActivationProfile] = useState(
        'colorunActive mainLinkingSystem'
    );
    const [colorActivationFavorit, setColorActivationFavorit] = useState(
        'colorunActive mainLinkingSystem'
    );
    const [colorActivationSeries, setColorActivationSeries] = useState(
        'colorunActive mainLinkingSystem'
    );
    const navigationActivationSystem = () => {
        const Activate = () => {
            setActive(true);
            setNavigationActivatingControler(
                'ulbar_the_handler_of_navigation_system ulbar_the_handler_of_navigation_system_Active'
            );
        };
        const unActive = () => {
            setActive(false);
            setNavigationActivatingControler('navigation_bar');
        };
        !active ? Activate() : unActive();
    };

    const colorControler = (compoenent) => {
        const homeControler = () => {
            setColorActivationHome('colorActive mainLinkingSystem');
            setColorActivationProfile('colorunActive mainLinkingSystem');
            setColorActivationFavorit('colorunActive mainLinkingSystem');
            setColorActivationSeries('colorunActive mainLinkingSystem');
        };
        const profileControler = () => {
            setColorActivationProfile('colorActive mainLinkingSystem');
            setColorActivationHome('colorunActive mainLinkingSystem');
            setColorActivationFavorit('colorunActive mainLinkingSystem');
            setColorActivationSeries('colorunActive mainLinkingSystem');
        };
        const favoritControler = () => {
            setColorActivationFavorit('colorActive mainLinkingSystem');
            setColorActivationHome('colorunActive mainLinkingSystem');
            setColorActivationProfile('colorunActive mainLinkingSystem');
            setColorActivationSeries('colorunActive mainLinkingSystem');
        };
        const seriesControler = () => {
            setColorActivationFavorit('colorunActive mainLinkingSystem');
            setColorActivationHome('colorunActive mainLinkingSystem');
            setColorActivationProfile('colorunActive mainLinkingSystem');
            setColorActivationSeries('colorActive mainLinkingSystem');
        };

        if (compoenent === 'home') {
            homeControler();
        } else if (compoenent === 'profile') {
            profileControler();
        } else if (compoenent === 'favorit') {
            favoritControler();
        } else if (compoenent === 'series') {
            seriesControler();
        }
    };
    return (
        <nav className='navigationSystem'>
            <div className='main_title_handler'>
                <Link className='title_linking_to_home_page' to='/'>
                    Mtrack
                </Link>
            </div>
            <ul className='ulbar_the_handler_of_navigation_system'>
                <li className='navigatoin_links'>
                    <Link
                        onClick={() => colorControler('home')}
                        to='/'
                        className={colorActivationHome}
                    >
                        <GoHome />
                        Home
                    </Link>
                </li>

                <li className='navigatoin_links'>
                    <Link
                        onClick={() => colorControler('favorit')}
                        to='/favoite'
                        className={`${colorActivationFavorit}`}
                    >
                        <TbMovie />
                        search
                    </Link>
                </li>
                <li className='navigatoin_links'>
                    <Link
                        onClick={() => colorControler('series')}
                        to='/series'
                        className={`${colorActivationSeries}`}
                    >
                        <GiFilmStrip />
                        idk
                    </Link>
                </li>
                <li className='navigatoin_links'>
                    <Link
                        onClick={() => colorControler('profile')}
                        to='/profile'
                        className={`${colorActivationProfile}`}
                    >
                        <CgProfile />
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationSystem;
