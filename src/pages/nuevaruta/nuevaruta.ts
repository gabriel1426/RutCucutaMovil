import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { ServiciosProvider } from "../../providers/servicios/servicios";

/**
 * Generated class for the NuevarutaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-nuevaruta",
  templateUrl: "nuevaruta.html"
})
export class NuevarutaPage {
  data: "";
  destino: "";
  items: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public proveedor: ServiciosProvider,
    public toastCtrl: ToastController
  ) {
    this.cargarItems();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad NuevarutaPage");
  }

  cargarItems() {
    this.items = [
      {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body:
          "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body:
          "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
      {
        postId: 1,
        id: 3,
        name: "odio adipisci rerum aut animi",
        email: "Nikita@garfield.biz",
        body:
          "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      },
      {
        postId: 1,
        id: 4,
        name: "alias odio sit",
        email: "Lew@alysha.tv",
        body:
          "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      },
      {
        postId: 1,
        id: 5,
        name: "vero eaque aliquid doloribus et culpa",
        email: "Hayden@althea.biz",
        body:
          "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
      }
    ];
    console.log(this.items);
  }

  cargarResultados() {
    this.proveedor.cargarDestinos(this.destino).subscribe(data => {
      console.log(data);
      console.log(data.token);
      if (data.respuesta.codigo == 1) {
      } else {
        const toast = this.toastCtrl.create({
          message: "No se encontraron resultados",
          duration: 2000
        });
        toast.present();
      }
    });
  }
}
