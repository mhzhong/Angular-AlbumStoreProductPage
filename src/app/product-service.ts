import { Http,  Response} from '@angular/http';
import 'rxjs/add/operator/map';


export class ProductService {
    constructor(
        private _http: Http,
        private _albumUrl: string = '../assets/album.json'
    ) {
    }

    getAlbum(id: number){
        return this._http.get(this._albumUrl)
            .map((response) => {
                response.json()
        });
    }

}