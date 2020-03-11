import React, { useState } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
const board = {
    columns: [
      {
        id: 1,
        title: "UI",
        cards: [
          {
            id: 1,
            title: "HTML5",
            description: "5.6 years "
          },
          {
            id: 2,
            title: "Boortstap",
            description: "5.6 years "
          },
          {
            id: 3,
            title: "React Boortstap",
            description: "1.8 years "
          },
          {
            id: 7,
            title: "React Material Ul",
            description: "1.6 years "
          }
        ]
      },
      {
        id: 3,
        title: "JS Fame Works",
        cards: [
        {
            id: 8,
            title: "Javascript",
            description: "5.6 years "
            },
          {
            id: 10,
            title: "ReactJS",
            description: "1.8 years"
          },
          {
            id: 11,
            title: "Redux",
            description: "1.2 years"
          }
        ]
      },
      {
        id: 2,
        title: "Styles",
        cards: [
          {
            id: 5,
            title: "Css3",
            description: "5.6 years"
          },
          {
            id: 4,
            title: "Less",
            description: "1.8 years"
          },
          {
            id: 6,
            title: "Sass",
            description: "1.6 years"
          }
        ]
      },
      
      {
        id: 4,
        title: "Control System",
        cards: [
          {
            id: 12,
            title: "Git",
            description: "5.6 years"
          },
          {
            id: 13,
            title: "SVN",
            description: "5.6 years"
          }
        ]
      },
      {
        id: 5,
        title: "Operating System",
        cards: [
          {
            id: 14,
            title: "Windows",
            description: "5.6 years"
          },
          {
            id: 15,
            title: "Linux/Ubuntu",
            description: "5.6 years"
          }
        ]
      }
    ]
  };
function Cards(){
    const [controlledBoard, setBoard] = useState(board);

    function handleCardMove(_card, source, destination) {
      const updatedBoard = moveCard(controlledBoard, source, destination);
      setBoard(updatedBoard);

    }
    return (
        <Board onCardDragEnd={handleCardMove} disableColumnDrag>
          {controlledBoard}
        </Board>
      );
}
export default Cards;