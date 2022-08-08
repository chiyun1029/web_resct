import { fromJS, get } from 'immutable';
import {
    INIT,
} from './constants';
import _, { random } from 'lodash';
import {
    GAME_WIDTH,
    GAME_HEIGHT,
    SET_SNAKE_MOVING,
    SET_SNAKE_DIRECTION,
    SET_SNAKE_GAME_START,
    SET_MAP_DISABLED,
    SET_SNAKE_SPEED_MODIFIED,
    SNAKE_LIMITED_SPEED,
    SNAKE_INITIAL_SPEED,
    SNAKE_DELTA_SPEED,
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
} from './constants';
import async from 'async';
import gtag from '../../utils/tracking';


const direction = {};
direction[ARROW_UP] = { x: 0, y: -1 };
direction[ARROW_DOWN] = { x: 0, y: 1 };
direction[ARROW_LEFT] = { x: -1, y: 0 };
direction[ARROW_RIGHT] = { x: 1, y: 0 };

// function carLoc() {
//     //new Promise((resolve, reject) => {
//     fetch('https://uclautocar.54ucl.com/carlocate', {
//         method: "POST",
//         headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
//     })
//         .then((res) => res.json())
//         .then((location) => {
//             console.log(location.val);
//             // console.log(JSON.stringify(location, 0, 4));
//             const isCarfalse = (typeof (location.val.x) != 'number' || typeof (location.val.y) != 'number') ||
//                 !(location.val.x >= 0 && location.val.x < GAME_WIDTH) ||
//                 !(location.val.y >= 0 && location.val.y <= GAME_HEIGHT);
//             console.log(isCarfalse)
//             sessionStorage.setItem("x", location.val.x)
//             sessionStorage.setItem("y", location.val.y)
//             sessionStorage.setItem("isCarfalse", isCarfalse)
//             return (location.val.x)
//         })
//         .catch((error) => {
//             console.log(`Error: ${error}`);
//         });
//     //})
// }

function Point (){
    return true
}

const createPoint1 = () => ({
    x: Point() ? 102 : -1,
    y: Point() ? 16 : -1,
});

const createPoint2 = () => ({
    x: Point() ? 78 : -1,
    y: Point() ? 24 : -1,
});
const createPoint3 = () => ({
    x: Point() ? 73 : -1,
    y: Point() ? 26 : -1,
});

const createPoint4 = () => ({
    x: Point() ? 112 : -1,
    y: Point() ? 30 : -1,
});

const createPoint5 = () => ({
    x: Point() ? 54 : -1,
    y: Point() ? 38 : -1,
});

const createPoint6 = () => ({
    x: Point() ? 125 : -1,
    y: Point() ? 40 : -1,
});

const createPoint7 = () => ({
    x: Point() ? 88 : -1,
    y: Point() ? 47 : -1,
});

const createPoint8 = () => ({
    x: Point() ? 124 : -1,
    y: Point() ? 53 : -1,
});

const createPoint9 = () => ({
    x: Point() ? 43 : -1,
    y: Point() ? 55 : -1,
});

const createPoint10 = () => ({
    x: Point() ? 43 : -1,
    y: Point() ? 63 : -1,
});

const createPoint11 = () => ({
    x: Point() ? 105 : -1,
    y: Point() ? 71 : -1,

});

const createPoint12 = () => ({
    x: Point() ? 44 : -1,
    y: Point() ? 75 : -1,
});

const createPoint13 = () => ({
    x: Point() ? 69 : -1,
    y: Point() ? 77 : -1,
});

const createPoint14 = () => ({
    x: Point() ? 40 : -1,
    y: Point() ? 85 : -1,
});

const createPoint15 = () => ({
    x: Point() ? 23 : -1,
    y: Point() ? 102 : -1,
});

const createPoint16 = () => ({
    x: Point() ? 57 : -1,
    y: Point() ? 118 : -1,
});

const createPoint17 = () => ({
    x: Point() ? 16 : -1,
    y: Point() ? 122 : -1,
});

const createPoint18 = () => ({
    x: Point() ? 41 : -1,
    y: Point() ? 129 : -1,
});

const createPoint19 = () => ({
    x: Point() ? 0 : -1,
    y: Point() ? 0 : -1,
});

const createPoint20 = () => ({
    x: Point() ? 0 : -1,
    y: Point() ? 0 : -1,
});

const createPoint21 = () => ({
    x: Point() ? 104 : -1,
    y: Point() ? 71 : -1,

});

const createPoint22 = () => ({
    x: Point() ? 43 : -1,
    y: Point() ? 75 : -1,
});

const createPoint23 = () => ({
    x: Point() ? 68 : -1,
    y: Point() ? 77 : -1,
});

const createPoint24 = () => ({
    x: Point() ? 44 : -1,
    y: Point() ? 85 : -1,
});

const createPoint25 = () => ({
    x: Point() ? 20 : -1,
    y: Point() ? 102 : -1,
});

const createPoint26 = () => ({
    x: Point() ? 55 : -1,
    y: Point() ? 118 : -1,
});

const createPoint27 = () => ({
    x: Point() ? 13 : -1,
    y: Point() ? 122 : -1,
});

const createPoint28 = () => ({
    x: Point() ? 40 : -1,
    y: Point() ? 129 : -1,
});

const createPoint29 = () => ({
    x: Point() ? 0 : -1,
    y: Point() ? 0 : -1,
});

const createPoint30 = () => ({
    x: Point() ? 0 : -1,
    y: Point() ? 0 : -1,
});

const defaultSnake = {
    headPosition: {
        x: 0,
        y: 0,
    },
    body: [],
    maxLength: 2,
    direction: {
        x: 1,
        y: 0,
    },
    speed: SNAKE_INITIAL_SPEED,
};

// 準備格子的資料結構，第一個
const defaultBlocks = _.range(0, GAME_HEIGHT).map((value, indexY) => (
    _.range(0, GAME_WIDTH).map((value, indexX) => (
        {
            id: indexX + GAME_HEIGHT * indexY,
            x: indexX,
            y: indexY,  
        }
    ))//
));

//第二個格子
const defaultBlocks2 = _.range(0, GAME_HEIGHT).map((value, indexY) => (
    _.range(0, GAME_WIDTH).map((value, indexX) => (
        {
            id: indexX + GAME_HEIGHT * indexY,
            x: indexX,
            y: indexY,  
        }
    ))//
));

const initialState = fromJS({ //把上面座標點標到格子上面去
    blocks: defaultBlocks,
    snake: defaultSnake,
    isMapDisabled: false,
    Point1: createPoint1(),
    Point2: createPoint2(),
    Point3: createPoint3(),
    Point4: createPoint4(),
    Point5: createPoint5(),
    Point6: createPoint6(),
    Point7: createPoint7(),
    Point8: createPoint8(),
    Point9: createPoint9(),
    Point10: createPoint10(),
    Point11: createPoint11(),
    Point12: createPoint12(),
    Point13: createPoint13(),
    Point14: createPoint14(),
    Point15: createPoint15(),
    Point16: createPoint16(),
    Point17: createPoint17(),
    Point18: createPoint18(),
    Point19: createPoint19(),
    Point20: createPoint20(),
    Point21: createPoint21(),
    Point22: createPoint22(),
    Point23: createPoint23(),
    Point24: createPoint24(),
    Point25: createPoint25(),
    Point26: createPoint26(),
    Point27: createPoint27(),
    Point28: createPoint28(),
    Point29: createPoint29(),
    Point30: createPoint30(),
    isGameStart: false,
    isPause: false,
    isSpeedModified: true,
    score: 0,
});

function snakeGameReducer(state = initialState, action) {
    switch (action.type) {
        case INIT: {
            sessionStorage.setItem("isCarfalse", "false");
            return initialState;
        }

        case SET_SNAKE_GAME_START: {
            sessionStorage.setItem("isCarfalse", 'false');
            return initialState
                .set('isGameStart', true);
        }


        default: {
            return state;
        }
    }
}

const updatePosition = (position) => {
    if (position > GAME_WIDTH - 1) {
        return 0;
    } else if (position < 0) {
        return GAME_WIDTH;
    }
    return position;
}

export default snakeGameReducer;
