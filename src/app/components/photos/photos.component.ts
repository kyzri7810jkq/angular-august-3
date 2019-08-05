import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  
  photos: Object;
  loading= true;

  constructor(private service:PhotosService,) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.service.getAll().subscribe(data => {
      this.photos = data;
      this.loading = false;
    });
  }

}
