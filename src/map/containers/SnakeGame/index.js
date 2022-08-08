import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    setSnakeMoving,
    setCarMoving,
    setSnakeDirection,
    setGameStart,
    setMapDisabled,
    setSnakeSpeedModified,
} from './actions';
import { StyledSnakeGame } from './Styled';
import {
    makeSelectSnake,
    makeSelectBlocks,
    makeSelectCar,
    makeSelectPoint1,
    makeSelectPoint2,
    makeSelectPoint3,
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
} from './selectors';
import gtag from '../../utils/tracking';

let gameInterval;
let lotInterval;

const updateGameView = (//宣告
    snake, block, car,
    Point1, Point2, Point3, Point4, Point5,
    Point6, Point7, Point8, Point9, Point10,
    Point11, Point12, Point13, Point14, Point15,
    Point16, Point17, Point18, Point19, Point20,
    Point21,Point22,Point23,Point24,Point25,Point26,
    Point27,Point28,Point29,Point30
) => {
    // draw car
    if (block.get('x') === car.get('x') && block.get('y') === car.get('y')) {
        return 'snake-game__draw-car';//
    }
    // draw Point1
    if (block.get('x') === Point1.get('x') && block.get('y') === Point1.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point2
    if (block.get('x') === Point2.get('x') && block.get('y') === Point2.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point3
    if (block.get('x') === Point3.get('x') && block.get('y') === Point3.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point4
    if (block.get('x') === Point4.get('x') && block.get('y') === Point4.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point5
    if (block.get('x') === Point5.get('x') && block.get('y') === Point5.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point6
    if (block.get('x') === Point6.get('x') && block.get('y') === Point6.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point7
    if (block.get('x') === Point7.get('x') && block.get('y') === Point7.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point8
    if (block.get('x') === Point8.get('x') && block.get('y') === Point8.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point9
    if (block.get('x') === Point9.get('x') && block.get('y') === Point9.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point10
    if (block.get('x') === Point10.get('x') && block.get('y') === Point10.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point11
    if (block.get('x') === Point11.get('x') && block.get('y') === Point11.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point12
    if (block.get('x') === Point12.get('x') && block.get('y') === Point12.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point13
    if (block.get('x') === Point13.get('x') && block.get('y') === Point13.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point14
    if (block.get('x') === Point14.get('x') && block.get('y') === Point14.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point15
    if (block.get('x') === Point15.get('x') && block.get('y') === Point15.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point16
    if (block.get('x') === Point16.get('x') && block.get('y') === Point16.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point17
    if (block.get('x') === Point17.get('x') && block.get('y') === Point17.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point18
    if (block.get('x') === Point18.get('x') && block.get('y') === Point18.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point19
    if (block.get('x') === Point19.get('x') && block.get('y') === Point19.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point20
    if (block.get('x') === Point20.get('x') && block.get('y') === Point20.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point21
    if (block.get('x') === Point21.get('x') && block.get('y') === Point21.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point22
    if (block.get('x') === Point22.get('x') && block.get('y') === Point22.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point23
    if (block.get('x') === Point23.get('x') && block.get('y') === Point23.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point24
    if (block.get('x') === Point24.get('x') && block.get('y') === Point24.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point25
    if (block.get('x') === Point25.get('x') && block.get('y') === Point25.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point26
    if (block.get('x') === Point26.get('x') && block.get('y') === Point26.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point27
    if (block.get('x') === Point27.get('x') && block.get('y') === Point27.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    // draw Point28
    if (block.get('x') === Point28.get('x') && block.get('y') === Point28.get('y')) {
        return 'snake-game__draw-snake-Point';
    }// draw Point29
    if (block.get('x') === Point29.get('x') && block.get('y') === Point29.get('y')) {
        return 'snake-game__draw-snake-Point';
    }// draw Point30
    if (block.get('x') === Point30.get('x') && block.get('y') === Point30.get('y')) {
        return 'snake-game__draw-snake-Point';
    }
    return 'snake-game__map-block-item';
};

class SnakeGame extends Component {//繼承
    static propTypes = {//靜態宣告點
        snake: PropTypes.instanceOf(Map),
        blocks: PropTypes.instanceOf(List),
        car: PropTypes.instanceOf(Map),
        Point1: PropTypes.instanceOf(Map),
        Point2: PropTypes.instanceOf(Map),
        Point3: PropTypes.instanceOf(Map),
        Point4: PropTypes.instanceOf(Map),
        Point5: PropTypes.instanceOf(Map),
        Point6: PropTypes.instanceOf(Map),
        Point7: PropTypes.instanceOf(Map),
        Point8: PropTypes.instanceOf(Map),
        Point9: PropTypes.instanceOf(Map),
        Point10: PropTypes.instanceOf(Map),
        Point11: PropTypes.instanceOf(Map),
        Point12: PropTypes.instanceOf(Map),
        Point13: PropTypes.instanceOf(Map),
        Point14: PropTypes.instanceOf(Map),
        Point15: PropTypes.instanceOf(Map),
        Point16: PropTypes.instanceOf(Map),
        Point17: PropTypes.instanceOf(Map),
        Point18: PropTypes.instanceOf(Map),
        Point19: PropTypes.instanceOf(Map),
        Point20: PropTypes.instanceOf(Map),
        Point21: PropTypes.instanceOf(Map),
        Point22: PropTypes.instanceOf(Map),
        Point23: PropTypes.instanceOf(Map),
        Point24: PropTypes.instanceOf(Map),
        Point25: PropTypes.instanceOf(Map),
        Point26: PropTypes.instanceOf(Map),
        Point27: PropTypes.instanceOf(Map),
        Point28: PropTypes.instanceOf(Map),
        Point29: PropTypes.instanceOf(Map),
        Point30: PropTypes.instanceOf(Map),
        isGameStart: PropTypes.bool,
        isMapDisabled: PropTypes.bool,
        score: PropTypes.number,
        isPause: PropTypes.bool,
        isSpeedModified: PropTypes.bool,
        handleOnSetSnakeMoving: PropTypes.func,
        handleOnSetCarMoving: PropTypes.func,
        handleOnSetSpeedModified: PropTypes.func,
    }
    static defaultProps = {
        snake: Map(),
        blocks: List(),
        car: Map(),
        Point1: Map(),
        Point2: Map(),
        Point3: Map(),
        Point4: Map(),
        Point5: Map(),
        Point6: Map(),
        Point7: Map(),
        Point8: Map(),
        Point9: Map(),
        Point10: Map(),
        Point11: Map(),
        Point12: Map(),
        Point13: Map(),
        Point14: Map(),
        Point15: Map(),
        Point16: Map(),
        Point17: Map(),
        Point18: Map(),
        Point19: Map(),
        Point20: Map(),
        Point21: Map(),
        Point22: Map(),
        Point23: Map(),
        Point24: Map(),
        Point25: Map(),
        Point26: Map(),
        Point27: Map(),
        Point28: Map(),
        Point29: Map(),
        Point30: Map(),
        isGameStart: false,
        isMapDisabled: false,
        score: 0,
        isPause: false,
        isSpeedModified: true,
        handleOnSetSnakeMoving: () => { },
        handleOnSetCarMoving: () => { },
        handleOnSetSpeedModified: () => { },
    }
    componentDidMount() {
        // document.addEventListener('keydown', this.handleOnKeyDown);
        const {
            handleOnSetCarMoving,
        } = this.props;
        lotInterval = setInterval(() => { handleOnSetCarMoving() }, 1000);
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleOnKeyDown);
        clearInterval(gameInterval);
    }

    handleOnKeyDown = (event) => {
        const {
            handleOnSetSnakeDirection,
        } = this.props;
        handleOnSetSnakeDirection(event.code);
        gtag('event', 'Keydown', {
            'event_category': 'Keydown',
            'event_label': event.code,
        });
    }
    handleOnGameStartClick = () => {
        const {
            handleOnSetSnakeMoving,
            handleOnSetCarMoving,
            handleOnSetGameStart,
            handleOnSetMapDisabled,
        } = this.props;
        handleOnSetMapDisabled();
        handleOnSetSnakeMoving();
        handleOnSetCarMoving();
        gtag('event', 'start');
    }
    handleOnVirtualKeyboardClick = (event) => {
        const {
            handleOnSetSnakeDirection,
        } = this.props;
        const code = event.currentTarget.getAttribute('data-code');
        handleOnSetSnakeDirection(code);
        gtag('event', 'VirtualKeyboard', {
            'event_category': 'VirtualKeyboard',
            'event_label': code,
        });
    }

    render() {
        const {
            isMapDisabled, snake, blocks, car,
            Point1, Point2, Point3, Point4, Point5,
            Point6, Point7, Point8, Point9, Point10,
            Point11, Point12, Point13, Point14, Point15,
            Point16, Point17, Point18, Point19, Point20,
            Point21, Point22, Point23, Point24, Point25,
            Point26, Point27, Point28, Point29, Point30
        } = this.props;
        
        return (
            // 第一個
            <StyledSnakeGame onKeyDown={this.handleOnKeyDown}>
                {
                    isMapDisabled &&
                    <div className="snake-game__panel">
                        
                    </div>
                }


            {/* 在前端頁面把每個方格子迭代出來 */}
                <div className="snake-game__map-wrapper">
                    {
                        blocks.map((rows) => (
                            rows.map((block) => (
                                <div
                                    key={block.get('id')}
                                    className={updateGameView(snake, block, car,
                                        Point1, Point2, Point3, Point4, Point5,
                                        Point6, Point7, Point8, Point9, Point10,
                                        Point11, Point12, Point13, Point14, Point15,
                                        Point16, Point17, Point18, Point19, Point20,
                                        Point21, Point22, Point23, Point24, Point25,
                                        Point26, Point27, Point28, Point29, Point30,
                                    )}
                                >
                                </div>
                            ))
                        ))
                    }
                </div>
            </StyledSnakeGame>
    )}
}

const mapStateToProps = createStructuredSelector({
    snake: makeSelectSnake(),
    blocks: makeSelectBlocks(),
    car: makeSelectCar(),
    Point1: makeSelectPoint1(),
    Point2: makeSelectPoint2(),
    Point3: makeSelectPoint3(),
    Point4: makeSelectPoint4(),
    Point5: makeSelectPoint5(),
    Point6: makeSelectPoint6(),
    Point7: makeSelectPoint7(),
    Point8: makeSelectPoint8(),
    Point9: makeSelectPoint9(),
    Point10: makeSelectPoint10(),
    Point11: makeSelectPoint11(),
    Point12: makeSelectPoint12(),
    Point13: makeSelectPoint13(),
    Point14: makeSelectPoint14(),
    Point15: makeSelectPoint15(),
    Point16: makeSelectPoint16(),
    Point17: makeSelectPoint17(),
    Point18: makeSelectPoint18(),
    Point19: makeSelectPoint19(),
    Point20: makeSelectPoint20(),
    Point21: makeSelectPoint21(),
    Point22: makeSelectPoint22(),
    Point23: makeSelectPoint23(),
    Point24: makeSelectPoint24(),
    Point25: makeSelectPoint25(),
    Point26: makeSelectPoint26(),
    Point27: makeSelectPoint27(),
    Point28: makeSelectPoint28(),
    Point29: makeSelectPoint29(),
    Point30: makeSelectPoint30(),
    isMapDisabled: makeSelectisMapDisabled(),
    score: makeSelectScore(),
    isPause: makeSelectIsPause(),
    isSpeedModified: makeSelectIsSpeedModified(),
});


const mapDispatchToProps = dispatch => ({
    handleOnSetSnakeMoving: () => dispatch(setSnakeMoving()),
    handleOnSetCarMoving: () => dispatch(setCarMoving()),
    handleOnSetSnakeDirection: (directionType) => dispatch(setSnakeDirection(directionType)),
    handleOnSetGameStart: () => dispatch(setGameStart()),
    handleOnSetMapDisabled: () => dispatch(setMapDisabled()),
    handleOnSetSpeedModified: (payload) => dispatch(setSnakeSpeedModified(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SnakeGame);
