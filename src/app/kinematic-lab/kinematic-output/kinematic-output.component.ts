import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { KinematicData } from '../../classes/kinematic-data';
import { KinematicOutputData } from '../../classes/kinematic-output-data';

@Component({
  selector: 'kinematic-output',
  templateUrl: './kinematic-output.component.html',
  styleUrls: ['./kinematic-output.component.scss']
})

export class KinematicOutputComponent implements OnInit {

  @Input() time : number;
  @Input() data : KinematicData;

  tableData : MatTableDataSource<KinematicOutputData>;
  displayedColumns = ['time', 'position', 'velocity', 'acceleration'];

  constructor() {
    this.tableData = new MatTableDataSource<KinematicOutputData>();
   }

  ngOnInit(): void { }

  addData(data : KinematicOutputData) {
    this.tableData.data.push(data);
    this.tableData._updateChangeSubscription();
  }

  clearData() {
    this.tableData.data = [];
    this.tableData._updateChangeSubscription();
  }
}
