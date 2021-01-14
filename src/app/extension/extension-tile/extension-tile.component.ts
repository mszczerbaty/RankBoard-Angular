import { Component, Input, OnInit } from '@angular/core';
import { Extension } from 'src/app/entities/extension';
import { ExtensionService } from 'src/app/services/extension.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extension-tile',
  templateUrl: './extension-tile.component.html',
  styleUrls: ['./extension-tile.component.css']
})
export class ExtensionTileComponent implements OnInit {

  @Input() id: number;

  extension: Extension;

  constructor(private extensionService: ExtensionService, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.id);
    this.extensionService.findById(this.id).subscribe(data => {
      this.extension = data;
    });
  }

  //check if has role admin
  adminCheck() {
    return this.authenticationService.adminCheck();
  }

  navigateToExtensionEdit(extensionId: number) {
    this.router.navigate(['/extension/' + extensionId + '/edit/']);
  }

}
