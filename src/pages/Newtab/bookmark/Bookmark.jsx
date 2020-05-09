import React, {useEffect, useState} from 'react';
import './bookmark.less';
import {Cells, CellsTitle, Cell, CellBody, CellFooter} from 'react-weui';
import BookmarkLogo from '../../../assets/img/bookmark.png';
import BookmarkStorage from "../../../helpers/BookmarkStorage";

const Bookmark = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleChangeSearch = (event) => {
        const searchString = event.target.value.trimLeft().toLowerCase();
        setSearchText(searchString);

        if (searchString.length >= 2) {
            BookmarkStorage.filterBookmarks(searchString, setBookmarks);
        } else {
            setBookmarks([]);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const googleQuery = searchText.split(' ').join('+');
            window.close();
            window.open(`https://www.google.de/search?q=${googleQuery}`);
        }
    };

    const loadUrl = (url) => {
        window.close();
        window.open(url);
    };

    const handleOnKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('enter key ');
        }

        console.log('key press event');
    };

    useEffect(() => {
        chrome.runtime.sendMessage({importBookmarks: true});
    }, []);

    return (
        <div className={'bookmark'}>
            <div className="search">
                <div className="input-wrapper">
                    <span className="icon-search1"/>
                    <input type="text"
                           placeholder={'Search in Bookmark and web'}
                           className={'search'}
                           value={searchText}
                           onChange={handleChangeSearch}
                           onKeyPress={handleKeyPress}
                    />
                </div>
            </div>

            <div className={'list-container'}>
                <div className="top">
                    <CellsTitle>{`Found ${bookmarks.length} entries`}</CellsTitle>
                    <Cells>
                        {bookmarks.map((element, index) => (
                            <Cell onClick={() => loadUrl(element.url)} key={index} access>
                                <CellBody>
                                    {element.title.substr(0, 50)}
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                        ))}
                    </Cells>
                </div>
                <div className="bottom">
                    <img className={'bookmark-logo'} src={BookmarkLogo} alt="bookmark"/>
                </div>
            </div>
        </div>
    );
};

export default Bookmark;