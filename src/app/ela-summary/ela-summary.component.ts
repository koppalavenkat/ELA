import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
@Component({
  selector: 'app-ela-summary',
  templateUrl: './ela-summary.component.html',
  styleUrls: ['./ela-summary.component.css']
})
export class ElaSummaryComponent implements OnInit {
  public summaryOfELA: any[] = [{
    manufacturer: 'Microsoft 365',
    category: 'SAAS',
    ela: 75000,
    startdate: '01/02/2020',
    enddate: '01/10/2020',
    quantity: 500
  },
  {
    manufacturer: 'VMWare',
    category: 'Server',
    ela: 50000,
    startdate: '01/05/2020',
    enddate: '01/12/2020',
    quantity: 200
  },
  {
    manufacturer: 'Salesforce',
    category: 'SAAS',
    ela: 70500,
    startdate: '01/02/2020',
    enddate: '01/10/2020',
    quantity: 100
  },
  {
    manufacturer: 'Cisco',
    category: 'Network',
    ela: 90500,
    startdate: '01/05/2020',
    enddate: '01/08/2020',
    quantity: 80
  }]
  public userAdoption: ChartDataSets[] = [
    { data: [0, 100, 480, 10, 500, 700, 20], label: '', fill: false }
  ];
  public userAdoptionLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public userAdoptionOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          value: 'March',
          borderWidth: 1,
          label: {
            enabled: true
          }
        },
      ],
    },
  };

  public yearlyDistributinOptions:any = {
    responsive: true,
  };
  public yearlyDistributinData:any[];

  public yearlyDistributinLabel:string[];
  public yearlyDistributinChartType:string = 'doughnut';
  public yearlyDistributinChartColor:any = [
    {
        backgroundColor: ['#00a65a','#f39c12', '#002d76', '#2E7FFD']
    }
  ];



  public userAdoptionLegend = false;
  public userAdoptionType = 'line';
  public userAdoptionPlugins = [];
  constructor() { }

  ngOnInit() {
    this.yearlyDistributinLabel = ['Public Cloud', 'Networks', 'Server', 'SAAS'];
    this.yearlyDistributinData = [80, 50, 40, 100];
  }

  
}
