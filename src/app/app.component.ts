import { Component } from '@angular/core';
import { CameraService } from './camera.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iris-pwa';
  constructor(public cameraService: CameraService) { }
}
