import React from 'react';
import {useRouteMatch, useHistory, useLocation} from "react-router";
import Lotto from './lotto/Lotto';
import NumberBaseBall from "./numberbaseball/NumberBaseBall";
import RSP from "./RSP";

const GameMatcher = () => {

    const match = useRouteMatch<{ name: string }>();
    const location = useLocation();
    const history = useHistory();
    if (!match) {
        return (
            <div>
                일치하는 게임이 없습니다.
            </div>
        );
    }
    let urlSearchParams = new URLSearchParams(location.search.slice(1));
    console.log(urlSearchParams.get('page'));
    if (match.params.name === 'number-baseball') {
        return <NumberBaseBall />
    } else if (match.params.name === 'rock-scissors-paper') {
        return <RSP />
    } else if (match.params.name === 'lotto-generator') {
        return <Lotto />
    } else {
        return (
            <div>
                일치하는 게임이 없습니다.
            </div>
        );
    }
};

export default GameMatcher;
