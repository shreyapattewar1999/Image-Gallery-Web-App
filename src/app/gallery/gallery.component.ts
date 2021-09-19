import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { GetImagesService } from '../get-images.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images:any;
  category:string | any;
  constructor(
    private pexelService : GetImagesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log(this.category);
    this.category = this.route.snapshot.paramMap.get('category');
    console.log(this.category);
    this.pexelService.getImages(this.category).subscribe((res) => {this.images = res.photos;
      // console.log(res.photos);
      console.log(this.images)});
    // console.log(this.images);
    this.router.onSameUrlNavigation = 'reload';
this.router.navigateByUrl(this.router.url).then(() => {

    this.router.onSameUrlNavigation = 'ignore';

});
  }

  
}
