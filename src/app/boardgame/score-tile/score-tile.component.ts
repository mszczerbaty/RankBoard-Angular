import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-tile',
  templateUrl: './score-tile.component.html',
  styleUrls: ['./score-tile.component.css']
})
export class ScoreTileComponent implements OnInit {

  @Input() id;
  @Input() score;
  @Input() review;
  @Input() username;

  constructor() { }

  ngOnInit(): void {
    console.log(this.score);
  }

  getColor(score: number){
    if(score>=8){
      return "#039c00";
    } else if(score >=5) {
      return "#0076ac";
    } else {
      return "#af5d00"
    }
  }

}
