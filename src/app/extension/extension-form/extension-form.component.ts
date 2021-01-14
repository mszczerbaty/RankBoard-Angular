import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardGame } from 'src/app/entities/boardgame';
import { Extension } from 'src/app/entities/extension';
import { BoardgameService } from 'src/app/services/boardgame.service';
import { ExtensionService } from 'src/app/services/extension.service';

@Component({
  selector: 'app-extension-form',
  templateUrl: './extension-form.component.html',
  styleUrls: ['./extension-form.component.css']
})
export class ExtensionFormComponent implements OnInit {

  extension: Extension;
  dropdownList = [];
  selectedItem: BoardGame;

  constructor(private route: ActivatedRoute, private extensionService: ExtensionService,
    private router: Router, private boardgameService: BoardgameService) {
    this.extension = new Extension;
  }

  ngOnInit(): void {
    this.boardgameService.findAll().subscribe(data => {
      this.dropdownList = data;
    });

  }

  onSubmit() {
    this.extension.boardgame = this.selectedItem;
    this.extensionService.save(this.extension).subscribe(() => this.router.navigate(['/authors']));
  }

}
