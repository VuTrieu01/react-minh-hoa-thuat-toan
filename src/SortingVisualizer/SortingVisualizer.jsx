import React, { Component } from 'react'

import './sortingvisualizer.css';

// Components//
import ButtonsBar from './components/ButtonsBar/ButtonsBar.jsx'
import ArrayBar from './components/ArrayBar/ArrayBar.jsx'
import RangeSlider from './components/RangeSliders/RangeSlider.jsx'

import { randomIntFromInterval } from './HelperFunctions.js'

import BubbleSort from './SortingAlgorithms/BubbleSort/BubbleSort.js'
import InsertionSort from './SortingAlgorithms/InsertionSort/InsertionSort.js'
import SelectionSort from './SortingAlgorithms/SelectionSort/SelectionSort.js'

export default class SortingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            animationSpeed: 50,
            numberOfArrayBars: 10
        };

        this.generateNewArray = this.generateNewArray.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
        this.insertionSort = this.insertionSort.bind(this);
        this.selectionSort = this.selectionSort.bind(this);
        this.onChangeArrayBarRangeSlider = this.onChangeArrayBarRangeSlider.bind(
            this
        );
        this.onChangeAnimationSpeedRangeSlider = this.onChangeAnimationSpeedRangeSlider.bind(
            this
        );
    }

    // ## This function generates the array before the page is rendere. ## //
    componentDidMount() {
        this.generateNewArray();
    }

    // ## This function generates new random array of size "numberOfArrayBars". ## //
    generateNewArray() {
        const array = [];
        for (let i = 0; i < this.state.numberOfArrayBars; i++) {
            // ## Generates an element between 5 and 70, and pushes it into the array. ## //
            array.push(randomIntFromInterval(5, 70));
        }
        this.setState({ array: array });
    }

    // ******************************************************************************* //

    // ## Xử lý nếu thanh trượt "Kích thước mảng" bị thay đổi. ## //
    onChangeArrayBarRangeSlider = (event, value) => {
        this.setState({ numberOfArrayBars: value });
        this.generateNewArray();
    };

    // ## Xử lý nếu thanh trượt "Tốc độ hoạt ảnh" bị thay đổi. ## //
    onChangeAnimationSpeedRangeSlider = (event, value) => {
        this.setState({ animationSpeed: value });
    };

    // ******************************************************************************* //

    // ## Calls the BubbleSort component/function. ## //
    bubbleSort = () => {
        BubbleSort(this.state.array, this.state.animationSpeed);
    };

    // ## Calls the SelectionSort component/function. ## //
    selectionSort = () => {
        SelectionSort(this.state.array, this.state.animationSpeed);
    };

    // ## Calls the InsertionSort component/function. ## //
    insertionSort = () => {
        InsertionSort(this.state.array, this.state.animationSpeed);
    };

    // ******************************************************************************* //

    render() {
        return (
            <div className="main-container">
                {/* --------------------- BUTTONS --------------------- */}
                <ButtonsBar
                    generateNewArray={this.generateNewArray}
                    bubbleSort={this.bubbleSort}
                    selectionSort={this.selectionSort}
                    insertionSort={this.insertionSort}
                />

                {/* --------------------- BARS --------------------- */}
                <ArrayBar array={this.state.array} />

                {/* --------------------- SLIDERS --------------------- */}
                <RangeSlider
                    numberOfArrayBars={this.state.numberOfArrayBars}
                    animationSpeed={this.state.animationSpeed}
                    onChangeArrayBarRangeSlider={this.onChangeArrayBarRangeSlider}
                    onChangeAnimationSpeedRangeSlider={
                        this.onChangeAnimationSpeedRangeSlider
                    }
                />
            </div>
        );
    }
}
