import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
import { MapinfoService, Response } from '../mapinfo.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mapa: Mapboxgl.Map;
  languaguedis;
  constructor(private mapinfoservice: MapinfoService) { }
  aux;
  ngOnInit(): void {
    
    var mapa = new Mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiYW5kcmVzMTQ5NiIsImEiOiJja2NqbnhtYmExOXdpMnRxeTI4cXRubWNrIn0.sNxwIm4Tnv2aU8fqUkbtjg',
      container: 'mapa-mapabox',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 9,
      center: [ -74.12544250488281, 4.538778849955251]
    });

    
    mapa.on('load', function() {
      // add source and layer for museums
      
      mapa.addSource('museums', {
        type: 'vector',
        url: 'mapbox://mapbox.2opop9hr'
      });
      mapa.addLayer({
        'id': 'museums',
        'type': 'circle',
        'source': 'museums',
        'layout': {
        // make layer visible by default
        'visibility': 'visible'
        },
        'paint': {
        'circle-radius': 8,
        'circle-color': 'rgba(55,148,179,1)'
        },
        'source-layer': 'museum-cusco'
        });
        

      });
    
    this.mapinfoservice.infometodo().subscribe(resp=>{
      console.log(resp);
    });
  }

  public handleResponse(callback: (response: Response) => void) {

    return (response: Response) => {
      if(response.error == "not exist"){
        
        return;
      }

      if (response.result !== 'OK') {
       
      } else {
        callback(response);
      }
    };
  }

}
