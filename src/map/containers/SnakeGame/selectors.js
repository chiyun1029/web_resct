import { createSelector } from 'reselect';

const selectSnakeGame = state => state.get('snakeGame');

const makeSelectSnake = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('snake'),
    );

const makeSelectBlocks = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('blocks'),
    );

const makeSelectCar = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('car'),
    );

const makeSelectPoint1 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point1'),
    );

const makeSelectPoint2 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point2'),
    );

const makeSelectPoint3 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point3'),
    );
const makeSelectPoint4 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point4'),
    );
const makeSelectPoint5 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point5'),
    );
const makeSelectPoint6 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point6'),
    );
const makeSelectPoint7 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point7'),
    );
const makeSelectPoint8 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point8'),
    );
const makeSelectPoint9 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point9'),
    );
const makeSelectPoint10 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point10'),
    );
const makeSelectPoint11 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point11'),
    );
const makeSelectPoint12 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point12'),
    );
const makeSelectPoint13 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point13'),
    );
const makeSelectPoint14 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point14'),
    );
const makeSelectPoint15 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point15'),
    );
const makeSelectPoint16 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point16'),
    );
const makeSelectPoint17 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point17'),
    );
const makeSelectPoint18 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point18'),
    );
const makeSelectPoint19 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point19'),
    );
const makeSelectPoint20 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point20'),
    );
const makeSelectPoint21 = () =>
createSelector(selectSnakeGame, tictactoeState =>
    tictactoeState.get('Point21'),
);
const makeSelectPoint22 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point22'),
    );
const makeSelectPoint23 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point23'),
    );
const makeSelectPoint24 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point24'),
    );
const makeSelectPoint25 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point25'),
    );
const makeSelectPoint26 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point26'),
    );
const makeSelectPoint27 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point27'),
    );
const makeSelectPoint28 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point28'),
    );
const makeSelectPoint29 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point29'),
    );
const makeSelectPoint30 = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('Point30'),
    );


    


    
const makeSelectisGameStart = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('isGameStart'),
    );

const makeSelectisMapDisabled = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('isMapDisabled'),
    );


const makeSelectScore = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('score'),
    );

const makeSelectIsPause = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('isPause'),
    );

const makeSelectIsSpeedModified = () =>
    createSelector(selectSnakeGame, tictactoeState =>
        tictactoeState.get('isSpeedModified'),
    );

export { //輸出
    makeSelectSnake,
    makeSelectBlocks,
    makeSelectCar,
    makeSelectPoint1,
    makeSelectPoint3,
    makeSelectPoint2,
    makeSelectPoint4,
    makeSelectPoint5,
    makeSelectPoint6,
    makeSelectPoint7,
    makeSelectPoint8,
    makeSelectPoint9,
    makeSelectPoint10,
    makeSelectPoint11,
    makeSelectPoint12,
    makeSelectPoint13,
    makeSelectPoint14,
    makeSelectPoint15,
    makeSelectPoint16,
    makeSelectPoint17,
    makeSelectPoint18,
    makeSelectPoint19,
    makeSelectPoint20,
    makeSelectPoint21,
    makeSelectPoint22,
    makeSelectPoint23,
    makeSelectPoint24,
    makeSelectPoint25,
    makeSelectPoint26,
    makeSelectPoint27,
    makeSelectPoint28,
    makeSelectPoint29,
    makeSelectPoint30,
    makeSelectisGameStart,
    makeSelectisMapDisabled,
    makeSelectScore,
    makeSelectIsPause,
    makeSelectIsSpeedModified,
};
