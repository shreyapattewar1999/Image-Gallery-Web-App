import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GetImagesService } from '../get-images.service';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  id : string | any;
  source : string  | any;
  constructor(private route: ActivatedRoute, private pexelService: GetImagesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pexelService.getImage(this.id).subscribe(res => {console.log(res.src.medium); this.source = res.src.medium;});
    console.log(this.id);
    

  }

}
