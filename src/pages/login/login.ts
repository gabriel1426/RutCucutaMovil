import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  MenuController,
  ToastController
} from "ionic-angular";
import { HomePage } from "../home/home";
import { RecuperarclavePage } from "../recuperarclave/recuperarclave";
import { ServiciosProvider } from "../../providers/servicios/servicios";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  data = { correo: null, clave: null };
  data1 = { correo: null, usuario: null, clave: null, rclave: null };
  correo;
  login = true;
  registro = false;
  accion = true;
  recuperar = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private menu: MenuController,
    public proveedor: ServiciosProvider,
    public alertCrtl: AlertController,
    public toastCtrl: ToastController
  ) {}
  saveData() {
    this.navCtrl.setRoot(HomePage);
    /*
    this.proveedor.login(this.data).subscribe(
      data => {
        console.log(data);
        console.log(data.token);
        this.navCtrl.setRoot(HomePage);
        
        if(data.respuesta.codigo==111){
          this.proveedor.extractData(data.token);
          const toast = this.toastCtrl.create({
            message: 'ingreso exitoso',
            duration: 2000
          });
          toast.present();
          
          this.navCtrl.setRoot(HomePage);
        }else{
          this.data.clave = '';
          const toast = this.toastCtrl.create({
            message: 'No se pudo completar el registro',
            duration: 2000
          });
          toast.present();
        }
       
      })
     */
  }

  resetPassword() {
    this.navCtrl.push(RecuperarclavePage);
  }
  registrar() {
    this.proveedor.registrar(this.data1).subscribe(data => {
      console.log(data.respuesta);
      // console.log(data.token);
      if (data.respuesta.codigo == 1) {
        //this.proveedor.extractData(data.token);
        const toast = this.toastCtrl.create({
          message: "Registro exitoso",
          duration: 2000
        });
        toast.present();
        this.navCtrl.setRoot(HomePage);
      } else {
        this.data.clave = "";
        let alert = this.alertCrtl.create({
          title: "Datos Invalidos",
          subTitle: "credenciales incorrectas",
          buttons: ["OK"]
        });
        alert.present();
      }
    });
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
    this.menu.swipeEnable(false);
  }

  mostrarl(accion: string) {
    this.login = true;
    this.registro = false;
    this.recuperar = false;
    this.data.clave = null;
    this.data.correo = null;
  }
  mostrarr(accion: string) {
    this.login = false;
    this.registro = true;
    this.recuperar = false;
    this.data1.clave = null;
    this.data1.rclave = null;
    this.data1.usuario = null;
    this.data1.correo = null;
  }
  mostrarc(accion: string) {
    this.login = false;
    this.registro = false;
    this.recuperar = true;
  }
}
