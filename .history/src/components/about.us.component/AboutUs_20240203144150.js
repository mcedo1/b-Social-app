import React from "react";
import SideBar from "../main.page.component/sideBar";
import NewFollowers from "./NewFollowers";

const AboutUsCommponent = () => {
     return (
          <div>
          <NewFollowers/>
               <div className="container mt-5">
                    <SideBar />
                    <div className="jumbotron bg-light p-5 shadow">
                         <h1 className="display-4">O nama</h1>
                         <p className="lead">
                              Mi smo tim posvećen kvalitetu i inovacijama. Sa
                              strastvenim pristupom radu, donosimo najbolje
                              rješenje za naše klijente.
                         </p>
                         <p>
                              Naša vizija je stvoriti pozitivan uticaj kroz
                              tehnologiju i kreativnost, donoseći svjetliju
                              budućnost za sve.
                         </p>
                         <p>
                              Sa godinama iskustva i timom stručnjaka, radimo na
                              rješenjima koja prevazilaze očekivanja i
                              postavljaju nove standarde u industriji.
                         </p>
                         <p>
                              Imamo privilegiju raditi s raznovrsnim klijentima
                              i partnerima, gradeći dugoročne odnose zasnovane
                              na povjerenju i uzajamnom uspjehu.
                         </p>
                         <p>
                              Naša misija je unaprijediti svakodnevni život kroz
                              inovacije, bilo da je riječ o softveru, dizajnu
                              ili poslovnim rješenjima.
                         </p>
                         <p>
                              Otvoreni smo za suradnju i uvijek tražimo prilike
                              za učenje i rast. Saznajte više o tome kako možemo
                              zajedno oblikovati budućnost.
                         </p>
                         <p>
                              Zahvaljujemo na podršci i povjerenju koje nam
                              ukazujete. Radujemo se budućnosti i zajedničkim
                              uspjesima.
                         </p>
                    </div>
               </div>
          </>
     );
};

export default AboutUsCommponent;
