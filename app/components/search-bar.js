import Component from '@glimmer/component'
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
 
export default class SearchBarComponent extends Component {
 
    @tracked title = "";
    @tracked name = "";
    @tracked plot = "";
    @tracked Director = "";
    @tracked genre = "";
    @tracked rating = "";
    @tracked item = false;
    @tracked img = "";

    @action
    async model(){
        var finaltitle = encodeURI(this.title);
        let response = await fetch(`http://www.omdbapi.com/?t=${finaltitle}&apikey=da6baf2e`);
        let data = await response.json();
        this.name = data.Title;
        this.plot = data.Plot;
        this.director = data.Director;
        this.genre = data.Genre;
        this.ratings = data.Rating;
        this.img = data.Poster;
        this.item = true;
        console.log(data);
    }

    @action limpiar (){
        this.title = "";
        this.item = false;
    }
      
}
