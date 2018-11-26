import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { LoginPage } from "../login/login";

/**
 * Generated class for the RecuperarclavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-recuperarclave",
  templateUrl: "recuperarclave.html"
})
export class RecuperarclavePage {
  correo;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {}
  login() {
    this.navCtrl.setRoot(LoginPage);
  }
  cerrarModal() {
    this.viewCtrl.dismiss();
  }

  recuperar() {}

  ionViewDidEnter() {}
}
