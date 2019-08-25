import { Component, OnInit } from '@angular/core';
import { Qual } from '../Qual';
import { QualService } from '../qual.service';

@Component({
  selector: 'app-quals',
  templateUrl: './quals.component.html',
  styleUrls: ['./quals.component.scss']
})
export class QualsComponent implements OnInit {

  constructor(qualService: QualService) { }

  ngOnInit() {
  }

}
