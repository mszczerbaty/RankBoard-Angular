import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BoardGame } from 'src/app/entities/boardgame';
import { Extension } from 'src/app/entities/extension';
import { BoardgameService } from 'src/app/services/boardgame.service';
import { ExtensionService } from 'src/app/services/extension.service';

@Component({
  selector: 'app-extension-edit',
  templateUrl: './extension-edit.component.html',
  styleUrls: ['./extension-edit.component.css']
})
export class ExtensionEditComponent implements OnInit {

  extensionId: number;
  extension: Extension;
  extensions: Extension[];
  dropdownList = [];
  selectedItem: BoardGame;
  dropdownSettings: IDropdownSettings;

  constructor(private route: ActivatedRoute, private extensionService: ExtensionService,
    private router: Router, private boardgameService: BoardgameService) {
      this.extension = new Extension;
     }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.extensionId = +params.id;
      console.log(this.extensionId);//test
      this.extensionService.findById(this.extensionId).subscribe(data => {
        this.extension = data
        console.log(this.extension);//test
        console.log(this.extension.boardgame);//test
        this.selectedItem = this.extension.boardgame;
        console.log(this.selectedItem);//test
      });
      this.boardgameService.findAll().subscribe(data => {
        this.dropdownList = data;
      });
    });
  }

  onSubmit() {
    this.extension.boardgame = this.selectedItem;
    this.extensionService.update(this.extension, this.extensionId).subscribe(() => this.router.navigate(['/authors']));
  }

  deleteExtension(extension: any) {
    this.extensionService.delete(extension.id).subscribe(() => console.log("extension deleted"));
    this.router.navigate(['/authors/']);
  }

}
