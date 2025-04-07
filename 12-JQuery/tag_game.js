$(document).ready(function ()
{
    let board = [];
    let emptyCell = { row: 3, col: 3 };

    //создание игрового поля
    function createBoard()
    {
        let numbers = [];
        for (let i = 1; i <= 15; i++)
        {
            numbers.push(i);
        }
        numbers.push(null);
        numbers = shuffle(numbers);

        $("#game-board").empty();
        board = [];

        for (let i = 0; i < 4; i++)
        {
            let row = [];
            for (let j = 0; j < 4; j++)
            {
                let value = numbers[i * 4 + j];
                row.push(value);

                let tile = $("<div>").addClass("tile");
                if (value === null)
                {
                    tile.addClass("empty");
                    emptyCell = { row: i, col: j };
                }
                else
                {
                    tile.text(value);
                }

                tile.data("row", i).data("col", j);
                $("#game-board").append(tile);
            }
            board.push(row);
        }
    }

    //перемешивание массива
    function shuffle(array)
    {
        for (let i = array.length - 1; i > 0; i--)
        {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    //передвижение плитки
    function moveTile(tile)
    {
        let row = tile.data("row");
        let col = tile.data("col");

        let canMove =
            (row === emptyCell.row && Math.abs(col - emptyCell.col) === 1) ||
            (col === emptyCell.col && Math.abs(row - emptyCell.row) === 1);

        if (canMove)
        {
            board[emptyCell.row][emptyCell.col] = board[row][col];
            board[row][col] = null;

            $(".empty").text(tile.text()).removeClass("empty");
            tile.text("").addClass("empty");

            emptyCell = { row, col };

            checkWin();
        }
    }

    //проверка победы
    function checkWin()
    {
        let winState = [];
        for (let i = 1; i <= 15; i++)
        {
            winState.push(i);
        }
        winState.push(null);

        let currentState = board.flat();

        if (JSON.stringify(currentState) === JSON.stringify(winState))
        {
            setTimeout(() => alert("Поздравляем, вы выиграли!"), 300);
        }
    }

    $("#game-board").on("click", ".tile:not(.empty)", function ()
    {
        moveTile($(this));
    });

    $("#shuffle").click(createBoard);

    createBoard();
});
