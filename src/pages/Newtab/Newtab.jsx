import React, {useState} from 'react';
// import Bookmark from "./bookmark";
// import Todo from "./todo";
// import Alert from "./alert";
// import Clock from "./clock";
// import Note from "./note";
import FovouriteTabs from "./favouriteTabs";
// fade-in iz Animation.less
const NewTab = () => {
    const [visibility, setVisibility] = useState({
        bookmark: true,
        note: false,
    });

    const handleShowBookmark = () => setVisibility({...visibility, bookmark: true, note: false});
    const handleShowNote = () => setVisibility({...visibility, bookmark: false, note: true});

    return (
        <div className={'newTab'}>
            <FovouriteTabs />
            {/* <div className="left"> */}
                {/* <Bookmark active={visibility.bookmark}/> */}
                {/* <div className="clock-container">
                    <Clock/>
                </div>
                <Note/> */}
            {/* </div> */}
            {/* <div className="right">
                <Todo/>
            </div> */}
        </div>
    );
};

export default NewTab;
