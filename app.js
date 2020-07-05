var arr = [], neighbourArray = [], cnt = 0, interval;

// Creating 2-D array
for (var i = 0; i < 12; i++) {
    var temp = [];
    for (var j = 0; j < 12; j++) {
        temp.push(0);
    }
    arr.push(temp);
}
for (var i = 0; i < 12; i++) {
    var temp = [];
    for (var j = 0; j < 12; j++) {
        temp.push(0);
    }
    neighbourArray.push(temp);
}

// Creating grid and adding event listeners for setting initial state
for (var i=0;i<12;i++) {
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    document.getElementById("game-area").appendChild(row);
    row = document.getElementById("game-area").lastChild;
    for (var j=0;j<12;j++) {
        var col = document.createElement("div");
        col.setAttribute("class", "col-1 border bg-success");
        col.setAttribute("id", cnt);
        col.addEventListener("click", onClick);
        row.append(col);
        cnt++;
    }
}

function onClick () {
    var id = this.id;
    $("#" + id).toggleClass("bg-success");
    id = Number(id);
    var r = Math.floor(id / 12) ,c = id % 12;
    if (arr[r][c] === 1) {
        arr[r][c] = 0;
    } else {
        arr[r][c] = 1;
    }
}

$("#start").click(beginGame);

// Starts the game
function beginGame () {
    // alert("beginGame");
    interval = setInterval(nextState, 250);
}

// Handles the array manipulation
function nextState () {
    // alert("nextState");
    fillNeighbourArray();
    console.log(neighbourArray);
    for (var i=0;i<12;i++) {
        // alert("Checking");
        for (var j=0;j<12;j++) {
            var changeID = i*12 + j;
            // Alive
            if (arr[i][j]) {
                if (neighbourArray[i][j] < 2 || neighbourArray[i][j] > 3) {
                    // Now Dead
                    arr[i][j] = 0;
                    $("#" + changeID).toggleClass("bg-success");
                }
            } 
            // Dead
            else {
                if (neighbourArray[i][j] === 3) {
                    // Now Alive
                    arr[i][j] = 1;
                    $("#" + changeID).toggleClass("bg-success");
                }
            }
        }
    }
    // beginGame();
}

function fillNeighbourArray () {
    for (var i=0;i<12;i++) {
        for (var j=0;j<12;j++) {
            neighbourArray[i][j] = aliveNeighbours(i, j);
        }
    }
}

// Return alive neighbours
function aliveNeighbours (i, j) {
    var cnt = 0;
    // Padded middle
    if (i>=1 && i<=10 && j>=1 && j<=10) {
        // Top left
        if (arr[i-1][j-1] === 1)
            cnt++;
        // Top
        if (arr[i-1][j] === 1)
            cnt++;
        // Top right
        if (arr[i-1][j+1] === 1)
            cnt++;
        // Right
        if (arr[i][j+1] === 1)
            cnt++;
        // Bottom right
        if (arr[i+1][j+1] === 1)
            cnt++;
        // Bottom
        if (arr[i+1][j] === 1)
            cnt++;
        // Bottom left
        if (arr[i+1][j-1] === 1)
            cnt++;
        // Left
        if (arr[i][j-1] === 1)
            cnt++;
        return cnt;   
    } else {
        // Top
        if (i === 0) {
            if (j === 0) {
                // Right
                if (arr[i][j+1] === 1)
                    cnt++;
                // Bottom right
                if (arr[i+1][j+1] === 1)
                    cnt++;
                // Bottom
                if (arr[i+1][j] === 1)
                    cnt++;
            } else if (j === 11) {
                // Left
                if (arr[i][j-1] === 1)
                    cnt++;
                // Bottom left
                if (arr[i+1][j-1] === 1)
                    cnt++;
                // Bottom
                if (arr[i+1][j] === 1)
                    cnt++;
            } else {
                // Right
                if (arr[i][j+1] === 1)
                    cnt++;
                // Bottom right
                if (arr[i+1][j+1] === 1)
                    cnt++;
                // Bottom
                if (arr[i+1][j] === 1)
                    cnt++;
                // Bottom left
                if (arr[i+1][j-1] === 1)
                    cnt++;
                // Left
                if (arr[i][j-1] === 1)
                    cnt++;
            }
        }
        // Bottom
        else if (i === 11) {
            if (j === 0) {
                // Top
                if (arr[i-1][j] === 1)
                    cnt++;
                // Top right
                if (arr[i-1][j+1] === 1)
                    cnt++;
                // Right
                if (arr[i][j+1] === 1)
                    cnt++;
            } else if (j === 11) {
                // Left
                if (arr[i][j-1] === 1)
                    cnt++;
                // Top left
                if (arr[i-1][j-1] === 1)
                    cnt++;
                // Top
                if (arr[i-1][j] === 1)
                    cnt++;
            } else {
                // Left
                if (arr[i][j-1] === 1)
                    cnt++;
                // Top left
                if (arr[i-1][j-1] === 1)
                    cnt++;
                // Top
                if (arr[i-1][j] === 1)
                    cnt++;
                // Top right
                if (arr[i-1][j+1] === 1)
                    cnt++;
                // Right
                if (arr[i][j+1] === 1)
                    cnt++;
            }
        }
        return cnt;
    }
}

$("#stop").click(function() {
    clearInterval(interval);
})