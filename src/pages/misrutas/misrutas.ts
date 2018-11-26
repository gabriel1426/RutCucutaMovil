import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { RecuperarclavePage } from "../recuperarclave/recuperarclave";
import { ImageViewerController } from "ionic-img-viewer";

/**
 * Generated class for the MisrutasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-misrutas",
  templateUrl: "misrutas.html"
})
export class MisrutasPage {
  _imageViewerCtrl: ImageViewerController;
  imagenes: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    imageViewerCtrl: ImageViewerController
  ) {
    this._imageViewerCtrl = imageViewerCtrl;
    this.cargarFavoritios();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MisrutasPage");
  }

  presentImage(myImage) {
    console.log(myImage);

    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }

  cargarFavoritios() {
    this.imagenes = [
      {
        id: 1,
        src:
          "https://http2.mlstatic.com/letrero-tabla-bus-de-bogota-D_NQ_NP_972648-MCO27866223597_072018-F.jpg"
      },
      {
        id: 2,
        src:
          "https://http2.mlstatic.com/letrero-tabla-bus-buseta-de-bogota-D_NQ_NP_637526-MCO27866290196_072018-F.jpg"
      },
      {
        id: 3,
        src:
          "https://http2.mlstatic.com/letrero-tabla-bus-buseta-de-bogota-D_NQ_NP_869077-MCO27866268411_072018-F.jpg"
      },
      {
        id: 4,
        src:
          "https://http2.mlstatic.com/letrero-tabla-bus-buseta-de-bogota-D_NQ_NP_956781-MCO27866294503_072018-F.jpg"
      }
    ];
  }
}
