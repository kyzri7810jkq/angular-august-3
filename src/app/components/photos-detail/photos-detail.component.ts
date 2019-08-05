import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos-detail',
  templateUrl: './photos-detail.component.html',
  styleUrls: ['./photos-detail.component.scss']
})
export class PhotosDetailComponent implements OnInit {

  JSON_URL = 'https://jsonplaceholder.typicode.com/photos';
  loading = true;
  photoItem: Object;
  photoId: String;
  albumId: String;

  constructor(private route:ActivatedRoute, private service:PhotosService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.photoId = params.get('id');
      this.albumId = params.get('albumId');
    });
    this.getPhotoDetails();
  }

  getPhotoDetails(){
    let id = this.photoId;
    this.service.getPhotoItem(id).subscribe(data => {
      this.photoItem = data
      this.loading = false;
    });
  }





}
