import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos-create',
  templateUrl: './photos-create.component.html',
  styleUrls: ['./photos-create.component.scss']
})
export class PhotosCreateComponent implements OnInit {

  frm = new FormGroup({
    title: new FormControl(''),
    url: new FormControl('')
  });

  constructor(private service: PhotosService) { }

  ngOnInit() {
  }

  submitPhoto(e) {
    e.preventDefault();
    let params = { 
      albumId: 1989,
      id: 50002,
      title: this.frm.get('title').value, 
      url: 'https://via.placeholder.com/600/13454b'
    };
    console.log(params);
    this.service.postData(params).subscribe(response => {
      console.log(response);
    });
  }

}
