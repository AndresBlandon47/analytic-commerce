import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mapa: Mapboxgl.Map;
  constructor() { }

  ngOnInit(): void {
    
    this.mapa = new Mapboxgl.Map({
      accessToken: environment.mapboxKey,
      container: 'mapa-mapabox',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 9,
      center: [4.899, 52.372]
    });
  }

}
