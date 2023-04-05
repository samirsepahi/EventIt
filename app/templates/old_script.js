function staffordGambit(){
  //________________________________________________________________________
  //Get rid of initial instructions for selecting an opening
  document.getElementById("staffordGambitButton").style.display = "none";
  document.getElementById("selectionIndicator").style.display = "none";
  //________________________________________________________________________
  //Set Piece Variables
  let whiteRook = "<img src='https://cdn.glitch.global/bc4b6cd5-54d9-43a3-a6e3-1b34f7683207/WhiteRook.png?v=1652843442868' width='60' height='70'>";
  let whiteKnight = "<img src='https://cdn.glitch.global/bc4b6cd5-54d9-43a3-a6e3-1b34f7683207/WhiteKnight.png?v=1652843437939' width='60' height='70'>";
  let whiteBishop = "<img src='https://cdn.glitch.global/bc4b6cd5-54d9-43a3-a6e3-1b34f7683207/WhiteBishop.png?v=1652843434590' width='60' height='70'>";
  let whiteKing = "<img src='https://cdn.glitch.global/bc4b6cd5-54d9-43a3-a6e3-1b34f7683207/WhiteKing.png?v=1652843436437' width='60' height='70'>";
  let whiteQueen = "<img src='https://cdn.glitch.global/bc4b6cd5-54d9-43a3-a6e3-1b34f7683207/WhiteQueen.png?v=1652843441577' width='60' height='70'>";
  let whitePawn = "<img src='https://cdn.glitch.global/bc4b6cd5-54d9-43a3-a6e3-1b34f7683207/WhitePawn.png?v=1652843440168' width='60' height='70'>";
  let blackRook = "<img src='https://cdn.glitch.global/bc4b6cd5-54d9-43a3-a6e3-1b34f7683207/BlackRook.png?v=1652843432803' width='60' height='70'>"
  let blackKnight = "<img src='https://cdn.glitch.global/bc4b6cd5-54d9-43a3-a6e3-1b34f7683207/BlackKnight.png?v=1652843427335' width='60' height='70'>";
  let blackBishop = "<img src='https://cdn.glitch.global/bc4b6cd5-54d9-43a3-a6e3-1b34f7683207/BlackBishop.png?v=1652807160447' width='60' height='70'>";
  let blackKing = "<img src='https://cdn.glitch.global/bc4b6cd5-54d9-43a3-a6e3-1b34f7683207/BlackKing.png?v=1652843425768' width='60' height='70'>";
  let blackQueen = "<img src='https://cdn.glitch.global/bc4b6cd5-54d9-43a3-a6e3-1b34f7683207/BlackQueen.png?v=1652843431294' width='60' height='70'>";
  let blackPawn = "<img src='https://cdn.glitch.global/bc4b6cd5-54d9-43a3-a6e3-1b34f7683207/BlackPawn.png?v=1652843429496' width='60' height='70'>"
  //________________________________________________________________________
  
  //________________________________________________________________________
  //Initial Board Setup   
    document.querySelector('div').classList.remove('hidden');

    document.getElementById("H1").innerHTML = whiteRook;
    document.getElementById("G1").innerHTML = whiteKnight;
    document.getElementById("F1").innerHTML = whiteBishop;
    document.getElementById("E1").innerHTML = whiteKing;
    document.getElementById("D1").innerHTML = whiteQueen;
    document.getElementById("C1").innerHTML = whiteBishop;
    document.getElementById("B1").innerHTML = whiteKnight;
    document.getElementById("A1").innerHTML = whiteRook;
    document.getElementById("H2").innerHTML = whitePawn;
    document.getElementById("G2").innerHTML = whitePawn;
    document.getElementById("F2").innerHTML = whitePawn;
    document.getElementById("E2").innerHTML = whitePawn;
    document.getElementById("D2").innerHTML = whitePawn;
    document.getElementById("C2").innerHTML = whitePawn;
    document.getElementById("B2").innerHTML = whitePawn;
    document.getElementById("A2").innerHTML = whitePawn;
    document.getElementById("H8").innerHTML = blackRook;
    document.getElementById("G8").innerHTML = blackKnight;
    document.getElementById("F8").innerHTML = blackBishop;
    document.getElementById("E8").innerHTML = blackKing;
    document.getElementById("D8").innerHTML = blackQueen;
    document.getElementById("C8").innerHTML = blackBishop;
    document.getElementById("B8").innerHTML = blackKnight;
    document.getElementById("A8").innerHTML = blackRook;
    document.getElementById("H7").innerHTML = blackPawn;
    document.getElementById("G7").innerHTML = blackPawn;
    document.getElementById("F7").innerHTML = blackPawn;
    document.getElementById("E7").innerHTML = blackPawn;
    document.getElementById("D7").innerHTML = blackPawn;
    document.getElementById("C7").innerHTML = blackPawn;
    document.getElementById("B7").innerHTML = blackPawn;
    document.getElementById("A7").innerHTML = blackPawn;}
    
  //________________________________________________________________________
  
  //________________________________________________________________________
  //Piece Movement
  function selectPiece(y) {
    console.log(y);
    let squareSelected = document.getElementById(y);
    squareSelected.style.backgroundColor = "yellow";
    let oldSelected = document.getElementsByClassName("oldSelected");
    if (oldSelected.length) {
        oldSelected = oldSelected[0];
        let originalBackgroundColor;
        if (oldSelected.classList.contains("white")) {
            originalBackgroundColor = "white";
        } else {
            originalBackgroundColor = "#999999";
        }
        oldSelected.style.backgroundColor = originalBackgroundColor;
        oldSelected.classList.remove("oldSelected")
    }
  
    squareSelected.classList.add("oldSelected")
    displayPossibleWhiteMoves(y);
    
  }
  //________________________________________________________________________
  function displayPossibleWhiteMoves(y) {
  let blackPawn = document.getElementById("B7").innerHTML;
  let squareSelected = document.getElementById(y);
  let pieceType = squareSelected.innerHTML;
  console.log(pieceType);
  console.log(y.slice(1,2));
  console.log(document.getElementById(y.slice(0,1) + "7"));
  if (pieceType == blackPawn && y.slice(1,2) == "7"){
    document.getElementById((y.slice(0,1) + "5")).classList.add("possiblePoints");
    console.log(document.getElementById(y.slice(0,1) + "7").id);
    console.log("If Statement Worked");
  }
    let possiblePoints = document.getElementsByClassName("possiblePoints");
    console.log(possiblePoints);
    possiblePoints.classList.add("dot");
}
