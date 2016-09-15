"use strict";

let RunButton = React.createClass({
  displayName: "RunButton",

  handleRunButtonClick: function handleRunButtonClick() {
    this.props.runButtonClicked();
  },

  render: function render() {
    return React.createElement("input", {
      type: "button",
      value: "Run",
      disabled: this.props.runButtonDisabled,
      onClick: this.handleRunButtonClick });
  }
});

let PauseButton = React.createClass({
  displayName: "PauseButton",

  handlePauseButtonClick: function handlePauseButtonClick() {
    this.props.pauseButtonClicked();
  },

  render: function render() {
    return React.createElement("input", {
      type: "button",
      value: "Pause",
      onClick: this.handlePauseButtonClick });
  }
});

let ClearButton = React.createClass({
  displayName: "ClearButton",

  handleClearButtonClick: function handleClearButtonClick() {
    this.props.clearButtonClicked();
  },

  render: function render() {
    return React.createElement("input", {
      type: "button",
      value: "Clear",
      onClick: this.handleClearButtonClick });
  }
});

let NextButton = React.createClass({
  displayName: "NextButton",

  handleNextButtonClick: function handleNextButtonClick() {
    this.props.nextButtonClicked();
  },

  render: function render() {
    return React.createElement("input", {
      type: "button",
      value: "Next",
      onClick: this.handleNextButtonClick });
  }
});

let GenerationCounter = React.createClass({
  displayName: "GenerationCounter",

  render: function render() {
    let generationNum = this.props.generation;

    return React.createElement(
      "p",
      null,
      "Generation: ",
      generationNum
    );
  }
});

let TopButtons = React.createClass({
  displayName: "TopButtons",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(RunButton, {
        runButtonClicked: this.props.runButtonClicked,
        runButtonDisabled: this.props.runButtonDisabled }),
      React.createElement(PauseButton, {
        pauseButtonClicked: this.props.pauseButtonClicked }),
      React.createElement(ClearButton, {
        clearButtonClicked: this.props.clearButtonClicked }),
      React.createElement(NextButton, {
        nextButtonClicked: this.props.nextButtonClicked }),
      React.createElement(GenerationCounter, {
        generation: this.props.generation })
    );
  }
});

let SingleCell = React.createClass({
  displayName: "SingleCell",

  handleCellClick: function handleCellClick() {
    this.props.cellClicked(this.props.rowNum, this.props.colNum);
  },

  render: function render() {
    let cellStatus = this.props.cellStatusIndivCell;

    return React.createElement("input", {
      className: cellStatus,
      type: "button",
      onClick: this.handleCellClick });
  }
});

let CellRow = React.createClass({
  displayName: "CellRow",

  render: function render() {
    let numCols = this.props.numCols;
    let singleRow = [];
    for (let i = 0; i < numCols; i++) {
      // console.log(i + ": " + this.props.cellStatus);
      let cellStatusIndivCell = this.props.cellStatusRow[i];
      singleRow.push(React.createElement(SingleCell, {
        cellClicked: this.props.cellClicked,
        cellStatusIndivCell: cellStatusIndivCell
        // cellType={this.props.cellType}
        , rowNum: this.props.rowNum,
        colNum: i,
        key: "singlecell" + i }));
    }

    return React.createElement(
      "div",
      { className: "cellRow" },
      singleRow
    );
  }
});

let GameScreen = React.createClass({
  displayName: "GameScreen",

  render: function render() {
    let numRows = this.props.numRows;
    let multipleRows = [];
    // console.log(numRows);
    for (let i = 0; i < numRows; i++) {
      let cellStatusRow = this.props.cellStatus[i];

      multipleRows.push(React.createElement(CellRow, {
        cellClicked: this.props.cellClicked,
        cellStatusRow: cellStatusRow,
        numCols: this.props.numCols,
        rowNum: i,
        key: "cellrow" + i }));
    }

    return React.createElement(
      "div",
      { id: "gameScreen" },
      multipleRows
    );
  }
});

let SizeSmallButton = React.createClass({
  displayName: "SizeSmallButton",

  handleSmallScreenButton: function handleSmallScreenButton() {
    this.props.smallScreenButtonClicked();
  },

  render: function render() {
    return React.createElement("input", {
      type: "button",
      value: "Small",
      onClick: this.handleSmallScreenButton });
  }
});

let SizeMedButton = React.createClass({
  displayName: "SizeMedButton",

  handleMedScreenButton: function handleMedScreenButton() {
    this.props.medScreenButtonClicked();
  },

  render: function render() {
    return React.createElement("input", {
      type: "button",
      value: "Medium",
      onClick: this.handleMedScreenButton });
  }
});

let SizeLargeButton = React.createClass({
  displayName: "SizeLargeButton",

  handleLargeScreenButton: function handleLargeScreenButton() {
    this.props.largeScreenButtonClicked();
  },

  render: function render() {
    return React.createElement("input", {
      type: "button",
      value: "Large",
      onClick: this.handleLargeScreenButton });
  }
});

let SizeButtons = React.createClass({
  displayName: "SizeButtons",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Size:"
      ),
      React.createElement(SizeSmallButton, {
        smallScreenButtonClicked: this.props.smallScreenButtonClicked }),
      React.createElement(SizeMedButton, {
        medScreenButtonClicked: this.props.medScreenButtonClicked }),
      React.createElement(SizeLargeButton, {
        largeScreenButtonClicked: this.props.largeScreenButtonClicked })
    );
  }
});

let SpeedSlowButton = React.createClass({
  displayName: "SpeedSlowButton",

  handleSlowSpeedButtonClick: function handleSlowSpeedButtonClick() {
    this.props.slowSpeedButtonClicked();
  },

  render: function render() {
    return React.createElement("input", {
      type: "button",
      value: "Slow",
      onClick: this.handleSlowSpeedButtonClick });
  }
});

let SpeedMedButton = React.createClass({
  displayName: "SpeedMedButton",

  handleMedSpeedButtonClick: function handleMedSpeedButtonClick() {
    this.props.medSpeedButtonClicked();
  },

  render: function render() {
    return React.createElement("input", {
      type: "button",
      value: "Medium",
      onClick: this.handleMedSpeedButtonClick });
  }
});

let SpeedFastButton = React.createClass({
  displayName: "SpeedFastButton",

  handleFastSpeedButtonClick: function handleFastSpeedButtonClick() {
    this.props.fastSpeedButtonClicked();
  },

  render: function render() {
    return React.createElement("input", {
      type: "button",
      value: "Fast",
      onClick: this.handleFastSpeedButtonClick });
  }
});

let SpeedButtons = React.createClass({
  displayName: "SpeedButtons",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Speed:"
      ),
      React.createElement(SpeedSlowButton, {
        slowSpeedButtonClicked: this.props.slowSpeedButtonClicked }),
      React.createElement(SpeedMedButton, {
        medSpeedButtonClicked: this.props.medSpeedButtonClicked }),
      React.createElement(SpeedFastButton, {
        fastSpeedButtonClicked: this.props.fastSpeedButtonClicked })
    );
  }
});

let ButtonButtons = React.createClass({
  displayName: "ButtonButtons",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(SizeButtons, {
        smallScreenButtonClicked: this.props.smallScreenButtonClicked,
        medScreenButtonClicked: this.props.medScreenButtonClicked,
        largeScreenButtonClicked: this.props.largeScreenButtonClicked }),
      React.createElement(SpeedButtons, {
        slowSpeedButtonClicked: this.props.slowSpeedButtonClicked,
        medSpeedButtonClicked: this.props.medSpeedButtonClicked,
        fastSpeedButtonClicked: this.props.fastSpeedButtonClicked })
    );
  }
});

let FullApp = React.createClass({
  displayName: "FullApp",

  smallSize: [20, 30],
  medSize: [40, 60],
  largeSize: [50, 80],
  slowSpeed: 1000,
  medSpeed: 500,
  fastSpeed: 100,

  getInitialState: function getInitialState() {

    let cellStatusArr = this.randomCellStatusArr(this.medSize[0], this.medSize[1]);

    return {
      numRows: this.medSize[0],
      numCols: this.medSize[1],
      speed: this.fastSpeed,
      cellStatus: cellStatusArr,
      generation: 0,
      interval: "",
      runButtonDisabled: true
    };
  },

  componentWillMount: function componentWillMount() {
    this.runButtonClicked();
  },

  componentWillUnmount: function componentWillUnmount() {},

  initCellStatusArr: function initCellStatusArr(numRow, numCol) {
    let cellStatusArr = [];
    for (let i = 0; i < numRow; i++) {
      let row = [];
      for (let j = 0; j < numCol; j++) {
        row.push("dead");
      }
      cellStatusArr.push(row);
    }
    return cellStatusArr;
  },

  randomCellStatusArr: function randomCellStatusArr(numRow, numCol) {
    let cellStatusArr = [];
    for (let i = 0; i < numRow; i++) {
      let row = [];
      for (let j = 0; j < numCol; j++) {
        let zeroOrOne = Math.round(Math.random());
        if (zeroOrOne === 1) {
          row.push("alive");
        } else {
          row.push("dead");
        }
      }
      cellStatusArr.push(row);
    }
    return cellStatusArr;
  },

  runButtonClicked: function runButtonClicked() {
    let goToNextGen = this.goToNextGeneration;
    let nextGenInterval = setInterval(function () {
      goToNextGen();
    }, this.state.speed);

    this.setState({
      interval: nextGenInterval,
      runButtonDisabled: true
    });
  },

  pauseButtonClicked: function pauseButtonClicked() {
    clearInterval(this.state.interval);

    this.setState({
      interval: "",
      runButtonDisabled: false
    });
  },

  clearButtonClicked: function clearButtonClicked() {
    let cellStatusArr = this.initCellStatusArr(this.state.numRows, this.state.numCols);
    clearInterval(this.state.interval);

    this.setState({
      cellStatus: cellStatusArr,
      generation: 0,
      interval: "",
      runButtonDisabled: false
    });
  },

  numLiveNeighbors: function numLiveNeighbors(row, col, cellStatusCopy) {
    let numLive = 0;
    if (row - 1 >= 0) {
      if (cellStatusCopy[row - 1][col] === "alive") {
        numLive++;
      }
    }
    if (col - 1 >= 0) {
      if (cellStatusCopy[row][col - 1] === "alive") {
        numLive++;
      }
    }
    if (row - 1 >= 0 && col - 1 >= 0) {
      if (cellStatusCopy[row - 1][col - 1] === "alive") {
        numLive++;
      }
    }
    if (row + 1 < this.state.numRows) {
      if (cellStatusCopy[row + 1][col] === "alive") {
        numLive++;
      }
    }
    if (col + 1 < this.state.numCols) {
      if (cellStatusCopy[row][col + 1] === "alive") {
        numLive++;
      }
    }
    if (row + 1 < this.state.numRows && col + 1 < this.state.numCols) {
      if (cellStatusCopy[row + 1][col + 1] === "alive") {
        numLive++;
      }
    }
    if (row - 1 >= 0 && col + 1 < this.state.numCols) {
      if (cellStatusCopy[row - 1][col + 1] === "alive") {
        numLive++;
      }
    }
    if (row + 1 < this.state.numRows && col - 1 >= 0) {
      if (cellStatusCopy[row + 1][col - 1] === "alive") {
        numLive++;
      }
    }
    return numLive;
  },

  // Cell is alive, so check current cell and all neighbhors
  checkNeighbors: function checkNeighbors(row, col, cellStatusNew, cellStatusCopy) {
    // Check if current cell should die
    let numLiveNeighbors = this.numLiveNeighbors(row, col, cellStatusCopy);
    if (numLiveNeighbors < 2 || numLiveNeighbors > 3) {
      cellStatusNew[row][col] = "dead";
    }

    // Check if neighboring cells should be born
    if (row - 1 >= 0) {
      if (cellStatusCopy[row - 1][col] === "dead") {
        numLiveNeighbors = this.numLiveNeighbors(row - 1, col, cellStatusCopy);
        if (numLiveNeighbors === 3) {
          cellStatusNew[row - 1][col] = "alive";
        }
      }
    }

    if (col - 1 >= 0) {
      if (cellStatusCopy[row][col - 1] === "dead") {
        numLiveNeighbors = this.numLiveNeighbors(row, col - 1, cellStatusCopy);
        if (numLiveNeighbors === 3) {
          cellStatusNew[row][col - 1] = "alive";
        }
      }
    }
    if (row - 1 >= 0 && col - 1 >= 0) {
      if (cellStatusCopy[row - 1][col - 1] === "dead") {
        numLiveNeighbors = this.numLiveNeighbors(row - 1, col - 1, cellStatusCopy);
        if (numLiveNeighbors === 3) {
          cellStatusNew[row - 1][col - 1] = "alive";
        }
      }
    }

    if (row + 1 < this.state.numRows) {
      if (cellStatusCopy[row + 1][col] === "dead") {
        numLiveNeighbors = this.numLiveNeighbors(row + 1, col, cellStatusCopy);
        if (numLiveNeighbors === 3) {
          cellStatusNew[row + 1][col] = "alive";
        }
      }
    }

    if (col + 1 < this.state.numCols) {
      if (cellStatusCopy[row][col + 1] === "dead") {
        numLiveNeighbors = this.numLiveNeighbors(row, col + 1, cellStatusCopy);
        if (numLiveNeighbors === 3) {
          cellStatusNew[row][col + 1] = "alive";
        }
      }
    }

    if (row + 1 < this.state.numRows && col + 1 < this.state.numCols) {
      if (cellStatusCopy[row + 1][col + 1] === "dead") {
        numLiveNeighbors = this.numLiveNeighbors(row + 1, col + 1, cellStatusCopy);
        if (numLiveNeighbors === 3) {
          cellStatusNew[row + 1][col + 1] = "alive";
        }
      }
    }
    if (row - 1 >= 0 && col + 1 < this.state.numCols) {
      if (cellStatusCopy[row - 1][col + 1] === "dead") {
        numLiveNeighbors = this.numLiveNeighbors(row - 1, col + 1, cellStatusCopy);
        if (numLiveNeighbors === 3) {
          cellStatusNew[row - 1][col + 1] = "alive";
        }
      }
    }
    if (row + 1 < this.state.numRows && col - 1 >= 0) {
      if (cellStatusCopy[row + 1][col - 1] === "dead") {
        numLiveNeighbors = this.numLiveNeighbors(row + 1, col - 1, cellStatusCopy);
        if (numLiveNeighbors === 3) {
          cellStatusNew[row + 1][col - 1] = "alive";
        }
      }
    }
  },

  goToNextGeneration: function goToNextGeneration() {

    // cellStatusNew will change, cellStatusCopy will not change.
    // Use JSON.parse and JSON.stringify to make deep copy (clone)
    let cellStatusCopy = JSON.parse(JSON.stringify(this.state.cellStatus));
    let cellStatusNew = JSON.parse(JSON.stringify(this.state.cellStatus));

    for (let row = 0; row < this.state.numRows; row++) {
      for (let col = 0; col < this.state.numCols; col++) {
        if (cellStatusCopy[row][col] === "alive") {
          this.checkNeighbors(row, col, cellStatusNew, cellStatusCopy);
        }
      }
    }

    let gen = this.state.generation + 1;

    this.setState({
      cellStatus: cellStatusNew,
      generation: gen
    });
  },

  nextButtonClicked: function nextButtonClicked() {
    this.goToNextGeneration();
  },

  cellClicked: function cellClicked(row, col) {
    let cellStatusArr = this.state.cellStatus;
    if (cellStatusArr[row][col] === "dead") {
      cellStatusArr[row][col] = "alive";
    } else if (cellStatusArr[row][col] === "alive") {
      cellStatusArr[row][col] = "dead";
    }

    this.setState({
      cellStatus: cellStatusArr
    });
  },

  smallScreenButtonClicked: function smallScreenButtonClicked() {
    let cellStatusArr = this.initCellStatusArr(this.smallSize[0], this.smallSize[1]);
    clearInterval(this.state.interval);

    this.setState({
      numRows: this.smallSize[0],
      numCols: this.smallSize[1],
      cellStatus: cellStatusArr,
      interval: "",
      generation: 0,
      runButtonDisabled: false
    });
  },

  medScreenButtonClicked: function medScreenButtonClicked() {
    let cellStatusArr = this.initCellStatusArr(this.medSize[0], this.medSize[1]);
    clearInterval(this.state.interval);

    this.setState({
      numRows: this.medSize[0],
      numCols: this.medSize[1],
      cellStatus: cellStatusArr,
      interval: "",
      generation: 0,
      runButtonDisabled: false
    });
  },

  largeScreenButtonClicked: function largeScreenButtonClicked() {
    let cellStatusArr = this.initCellStatusArr(this.largeSize[0], this.largeSize[1]);
    clearInterval(this.state.interval);

    this.setState({
      numRows: this.largeSize[0],
      numCols: this.largeSize[1],
      cellStatus: cellStatusArr,
      interval: "",
      generation: 0,
      runButtonDisabled: false
    });
  },

  slowSpeedButtonClicked: function slowSpeedButtonClicked() {
    clearInterval(this.state.interval);

    let goToNextGen = this.goToNextGeneration;
    let nextGenInterval = setInterval(function () {
      goToNextGen();
    }, this.slowSpeed);

    this.setState({
      speed: this.slowSpeed,
      interval: nextGenInterval
    });
  },

  medSpeedButtonClicked: function medSpeedButtonClicked() {
    clearInterval(this.state.interval);

    let goToNextGen = this.goToNextGeneration;
    let nextGenInterval = setInterval(function () {
      goToNextGen();
    }, this.medSpeed);

    this.setState({
      speed: this.medSpeed,
      interval: nextGenInterval
    });
  },

  fastSpeedButtonClicked: function fastSpeedButtonClicked() {
    clearInterval(this.state.interval);

    let goToNextGen = this.goToNextGeneration;
    let nextGenInterval = setInterval(function () {
      goToNextGen();
    }, this.fastSpeed);

    this.setState({
      speed: this.fastSpeed,
      interval: nextGenInterval
    });
  },

  render: function render() {
    return React.createElement(
      "div",
      { id: "fullApp" },
      React.createElement(TopButtons, {
        runButtonClicked: this.runButtonClicked,
        runButtonDisabled: this.state.runButtonDisabled,
        pauseButtonClicked: this.pauseButtonClicked,
        clearButtonClicked: this.clearButtonClicked,
        nextButtonClicked: this.nextButtonClicked,
        generation: this.state.generation }),
      React.createElement(GameScreen, {
        numRows: this.state.numRows,
        numCols: this.state.numCols,
        cellClicked: this.cellClicked,
        cellStatus: this.state.cellStatus }),
      React.createElement(ButtonButtons, {
        smallScreenButtonClicked: this.smallScreenButtonClicked,
        medScreenButtonClicked: this.medScreenButtonClicked,
        largeScreenButtonClicked: this.largeScreenButtonClicked,
        slowSpeedButtonClicked: this.slowSpeedButtonClicked,
        medSpeedButtonClicked: this.medSpeedButtonClicked,
        fastSpeedButtonClicked: this.fastSpeedButtonClicked })
    );
  }

});

ReactDOM.render(React.createElement(FullApp, null), document.getElementById('app'));