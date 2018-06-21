import React from 'react';

export default function GameList({games}) {

    const empty = (
        <p>There are no games in your collections</p>
    );

    const gameList = (
        <p>
            game list
        </p>
    );

    return(
        <div>
            {games.length === 0 ? empty : gameList}
        </div>
    );
}

GameList.propTypes = {
    games: React.PropTypes.array.isRequired
}