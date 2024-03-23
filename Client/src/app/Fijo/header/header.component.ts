import { Component,OnDestroy} from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DialogService, MessageService]
})
export class HeaderComponent implements OnDestroy {

  constructor(public dialogService: DialogService, public messageService: MessageService) {}

  ref: DynamicDialogRef | undefined;

  showLogin() {
      this.ref = this.dialogService.open(LoginComponent, {
          header: 'Registrarse para iniciar sesión',
          width: 'fit-content',
          contentStyle: {overflow: 'auto'},
          baseZIndex: 10000,

      });
    }

  ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
  }

}
