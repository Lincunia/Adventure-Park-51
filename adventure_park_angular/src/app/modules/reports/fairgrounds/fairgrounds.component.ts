import { Component } from '@angular/core';

@Component({
    selector: 'app-fairgrounds',
    templateUrl: './fairgrounds.component.html',
    styleUrls: ['./fairgrounds.component.css']
})
export class FairgroundsComponent {
    option_1: any;
    option_2: any;
    option_3: any;
    option_4: any;
    option_5: any;
    option_6: any;
    constructor() { }

    ngOnInit(): void {
	const xAxisData = [];
	const data1 = [];
	const data2 = [];

	/*
	   for (let i = 2; i < 100; i++) {
	   data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
	   data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
	   data1.push(i/2+30);
	   data2.push(-i/2+20);
	   }
	   */
	xAxisData.push('Activas');
	xAxisData.push('Inactivas');
	xAxisData.push('Mantenimiento');

	for(let i=0; i<3; i++){
	    data1.push(2*i);
	    data2.push(3*i);
	}

	let settings = {
	    legend: {
		data: ['bar', 'bar2'],
		align: 'left',
	    },
	    tooltip: {},
	    xAxis: {
		data: xAxisData,
		silent: false,
		splitLine: {
		    show: false,
		},
	    },
	    yAxis: {},
	    series: [
		{
		    name: 'bar',
		    type: 'bar',
		    data: data1,
		    animationDelay: (idx: any) => idx * 10,
		},
		    {
			name: 'bar2',
			type: 'bar',
			data: data2,
			animationDelay: (idx: any) => idx * 10 + 100,
		    },
	    ],
	    animationEasing: 'elasticOut',
	    animationDelayUpdate: (idx: any) => idx * 5,
	};
	    this.option_1=settings;
	    this.option_2=settings;
	    this.option_3=settings;
	    this.option_4=settings;
	    this.option_5=settings;
	    this.option_6=settings;
    }
}
