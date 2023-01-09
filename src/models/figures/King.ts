import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false
    const dx= Math.abs(this.cell.x - target.x)
    const dy= Math.abs(this.cell.y - target.y)

    if (dy < 2 && dx < 2){
      if(this.cell.board.getCell(target.x, target.y).isEmpty()
         && this.cell.board.getCell(target.x, target.y).available === false){
        return true;
      }
      if(this.cell.isEnemy(target)){
        return true;
      }
    } 
    return false
  }
}