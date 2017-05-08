import { Component, OnInit } from '@angular/core';
import { SearchGitusersService } from '../search-gitusers.service';

@Component({
  selector: 'app-search-gitusers',
  templateUrl: './search-gitusers.component.html',
  styleUrls: ['./search-gitusers.component.css']
})
export class SearchGitusersComponent implements OnInit {
	place: string;
	results: any[] = [];
	selected: boolean = false;
	selectedUser: any;
	error_text: string = "";

  constructor(private searchService: SearchGitusersService) {
  }

  ngOnInit() {
  }

  search(place: string){
	  this.selected = false;
	  this.error_text = "";
	     if (place) {
	       this.place = place;
	       this.searchService.getUsersByPlace(place).subscribe(
	         users => {
	           this.results = users;
	         },
	         error => {
	           this.results = [];
	           this.error_text = "Sorry! No results";
	           console.error(error);
	         }
	       )
	  }
  } 
}
