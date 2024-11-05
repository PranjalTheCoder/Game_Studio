// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";

function Home() {
    const [allGameList, setAllGameList] = useState([]);

    useEffect(() => {
        getAllGamesList();
    }, []);

    const getAllGamesList = () => {
        GlobalApi.getAllGames().then((resp) => {
            console.log(resp.data.results);
            setAllGameList(resp.data.results);
        });
    };

    return (
        <div className="grid grid-cols-4 px-8">
            <div className="hidden md:block">
                <GenreList />
            </div>
            <div className="col-span-4 md:col-span-3 bg-blue-400">
                Game List
                {/* Render games here if needed */}
            </div>
        </div>
    );
}

export default Home;
