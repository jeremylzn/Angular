import { Injectable } from '@angular/core';
import { Api } from '../models/api.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  public selectedCountry:Api={
    "flag": "https://restcountries.eu/data/isr.svg",
    "name": "Israel"
  };
  
  public apiList: Api[] = [
    {
      "flag": "https://restcountries.eu/data/afg.svg",
      "name": "Afghanistan"
  },
  {
      "flag": "https://restcountries.eu/data/ala.svg",
      "name": "Åland Islands"
  },
  {
      "flag": "https://restcountries.eu/data/alb.svg",
      "name": "Albania"
  },
  {
      "flag": "https://restcountries.eu/data/dza.svg",
      "name": "Algeria"
  },
  {
      "flag": "https://restcountries.eu/data/asm.svg",
      "name": "American Samoa"
  },
  {
      "flag": "https://restcountries.eu/data/and.svg",
      "name": "Andorra"
  },
  {
      "flag": "https://restcountries.eu/data/ago.svg",
      "name": "Angola"
  },
  {
      "flag": "https://restcountries.eu/data/aia.svg",
      "name": "Anguilla"
  },
  {
      "flag": "https://restcountries.eu/data/ata.svg",
      "name": "Antarctica"
  },
  {
      "flag": "https://restcountries.eu/data/atg.svg",
      "name": "Antigua and Barbuda"
  },
  {
      "flag": "https://restcountries.eu/data/arg.svg",
      "name": "Argentina"
  },
  {
      "flag": "https://restcountries.eu/data/arm.svg",
      "name": "Armenia"
  },
  {
      "flag": "https://restcountries.eu/data/abw.svg",
      "name": "Aruba"
  },
  {
      "flag": "https://restcountries.eu/data/aus.svg",
      "name": "Australia"
  },
  {
      "flag": "https://restcountries.eu/data/aut.svg",
      "name": "Austria"
  },
  {
      "flag": "https://restcountries.eu/data/aze.svg",
      "name": "Azerbaijan"
  },
  {
      "flag": "https://restcountries.eu/data/bhs.svg",
      "name": "Bahamas"
  },
  {
      "flag": "https://restcountries.eu/data/bhr.svg",
      "name": "Bahrain"
  },
  {
      "flag": "https://restcountries.eu/data/bgd.svg",
      "name": "Bangladesh"
  },
  {
      "flag": "https://restcountries.eu/data/brb.svg",
      "name": "Barbados"
  },
  {
      "flag": "https://restcountries.eu/data/blr.svg",
      "name": "Belarus"
  },
  {
      "flag": "https://restcountries.eu/data/bel.svg",
      "name": "Belgium"
  },
  {
      "flag": "https://restcountries.eu/data/blz.svg",
      "name": "Belize"
  },
  {
      "flag": "https://restcountries.eu/data/ben.svg",
      "name": "Benin"
  },
  {
      "flag": "https://restcountries.eu/data/bmu.svg",
      "name": "Bermuda"
  },
  {
      "flag": "https://restcountries.eu/data/btn.svg",
      "name": "Bhutan"
  },
  {
      "flag": "https://restcountries.eu/data/bol.svg",
      "name": "Bolivia (Plurinational State of)"
  },
  {
      "flag": "https://restcountries.eu/data/bes.svg",
      "name": "Bonaire, Sint Eustatius and Saba"
  },
  {
      "flag": "https://restcountries.eu/data/bih.svg",
      "name": "Bosnia and Herzegovina"
  },
  {
      "flag": "https://restcountries.eu/data/bwa.svg",
      "name": "Botswana"
  },
  {
      "flag": "https://restcountries.eu/data/bvt.svg",
      "name": "Bouvet Island"
  },
  {
      "flag": "https://restcountries.eu/data/bra.svg",
      "name": "Brazil"
  },
  {
      "flag": "https://restcountries.eu/data/iot.svg",
      "name": "British Indian Ocean Territory"
  },
  {
      "flag": "https://restcountries.eu/data/umi.svg",
      "name": "United States Minor Outlying Islands"
  },
  {
      "flag": "https://restcountries.eu/data/vgb.svg",
      "name": "Virgin Islands (British)"
  },
  {
      "flag": "https://restcountries.eu/data/vir.svg",
      "name": "Virgin Islands (U.S.)"
  },
  {
      "flag": "https://restcountries.eu/data/brn.svg",
      "name": "Brunei Darussalam"
  },
  {
      "flag": "https://restcountries.eu/data/bgr.svg",
      "name": "Bulgaria"
  },
  {
      "flag": "https://restcountries.eu/data/bfa.svg",
      "name": "Burkina Faso"
  },
  {
      "flag": "https://restcountries.eu/data/bdi.svg",
      "name": "Burundi"
  },
  {
      "flag": "https://restcountries.eu/data/khm.svg",
      "name": "Cambodia"
  },
  {
      "flag": "https://restcountries.eu/data/cmr.svg",
      "name": "Cameroon"
  },
  {
      "flag": "https://restcountries.eu/data/can.svg",
      "name": "Canada"
  },
  {
      "flag": "https://restcountries.eu/data/cpv.svg",
      "name": "Cabo Verde"
  },
  {
      "flag": "https://restcountries.eu/data/cym.svg",
      "name": "Cayman Islands"
  },
  {
      "flag": "https://restcountries.eu/data/caf.svg",
      "name": "Central African Republic"
  },
  {
      "flag": "https://restcountries.eu/data/tcd.svg",
      "name": "Chad"
  },
  {
      "flag": "https://restcountries.eu/data/chl.svg",
      "name": "Chile"
  },
  {
      "flag": "https://restcountries.eu/data/chn.svg",
      "name": "China"
  },
  {
      "flag": "https://restcountries.eu/data/cxr.svg",
      "name": "Christmas Island"
  },
  {
      "flag": "https://restcountries.eu/data/cck.svg",
      "name": "Cocos (Keeling) Islands"
  },
  {
      "flag": "https://restcountries.eu/data/col.svg",
      "name": "Colombia"
  },
  {
      "flag": "https://restcountries.eu/data/com.svg",
      "name": "Comoros"
  },
  {
      "flag": "https://restcountries.eu/data/cog.svg",
      "name": "Congo"
  },
  {
      "flag": "https://restcountries.eu/data/cod.svg",
      "name": "Congo (Democratic Republic of the)"
  },
  {
      "flag": "https://restcountries.eu/data/cok.svg",
      "name": "Cook Islands"
  },
  {
      "flag": "https://restcountries.eu/data/cri.svg",
      "name": "Costa Rica"
  },
  {
      "flag": "https://restcountries.eu/data/hrv.svg",
      "name": "Croatia"
  },
  {
      "flag": "https://restcountries.eu/data/cub.svg",
      "name": "Cuba"
  },
  {
      "flag": "https://restcountries.eu/data/cuw.svg",
      "name": "Curaçao"
  },
  {
      "flag": "https://restcountries.eu/data/cyp.svg",
      "name": "Cyprus"
  },
  {
      "flag": "https://restcountries.eu/data/cze.svg",
      "name": "Czech Republic"
  },
  {
      "flag": "https://restcountries.eu/data/dnk.svg",
      "name": "Denmark"
  },
  {
      "flag": "https://restcountries.eu/data/dji.svg",
      "name": "Djibouti"
  },
  {
      "flag": "https://restcountries.eu/data/dma.svg",
      "name": "Dominica"
  },
  {
      "flag": "https://restcountries.eu/data/dom.svg",
      "name": "Dominican Republic"
  },
  {
      "flag": "https://restcountries.eu/data/ecu.svg",
      "name": "Ecuador"
  },
  {
      "flag": "https://restcountries.eu/data/egy.svg",
      "name": "Egypt"
  },
  {
      "flag": "https://restcountries.eu/data/slv.svg",
      "name": "El Salvador"
  },
  {
      "flag": "https://restcountries.eu/data/gnq.svg",
      "name": "Equatorial Guinea"
  },
  {
      "flag": "https://restcountries.eu/data/eri.svg",
      "name": "Eritrea"
  },
  {
      "flag": "https://restcountries.eu/data/est.svg",
      "name": "Estonia"
  },
  {
      "flag": "https://restcountries.eu/data/eth.svg",
      "name": "Ethiopia"
  },
  {
      "flag": "https://restcountries.eu/data/flk.svg",
      "name": "Falkland Islands (Malvinas)"
  },
  {
      "flag": "https://restcountries.eu/data/fro.svg",
      "name": "Faroe Islands"
  },
  {
      "flag": "https://restcountries.eu/data/fji.svg",
      "name": "Fiji"
  },
  {
      "flag": "https://restcountries.eu/data/fin.svg",
      "name": "Finland"
  },
  {
      "flag": "https://restcountries.eu/data/fra.svg",
      "name": "France"
  },
  {
      "flag": "https://restcountries.eu/data/guf.svg",
      "name": "French Guiana"
  },
  {
      "flag": "https://restcountries.eu/data/pyf.svg",
      "name": "French Polynesia"
  },
  {
      "flag": "https://restcountries.eu/data/atf.svg",
      "name": "French Southern Territories"
  },
  {
      "flag": "https://restcountries.eu/data/gab.svg",
      "name": "Gabon"
  },
  {
      "flag": "https://restcountries.eu/data/gmb.svg",
      "name": "Gambia"
  },
  {
      "flag": "https://restcountries.eu/data/geo.svg",
      "name": "Georgia"
  },
  {
      "flag": "https://restcountries.eu/data/deu.svg",
      "name": "Germany"
  },
  {
      "flag": "https://restcountries.eu/data/gha.svg",
      "name": "Ghana"
  },
  {
      "flag": "https://restcountries.eu/data/gib.svg",
      "name": "Gibraltar"
  },
  {
      "flag": "https://restcountries.eu/data/grc.svg",
      "name": "Greece"
  },
  {
      "flag": "https://restcountries.eu/data/grl.svg",
      "name": "Greenland"
  },
  {
      "flag": "https://restcountries.eu/data/grd.svg",
      "name": "Grenada"
  },
  {
      "flag": "https://restcountries.eu/data/glp.svg",
      "name": "Guadeloupe"
  },
  {
      "flag": "https://restcountries.eu/data/gum.svg",
      "name": "Guam"
  },
  {
      "flag": "https://restcountries.eu/data/gtm.svg",
      "name": "Guatemala"
  },
  {
      "flag": "https://restcountries.eu/data/ggy.svg",
      "name": "Guernsey"
  },
  {
      "flag": "https://restcountries.eu/data/gin.svg",
      "name": "Guinea"
  },
  {
      "flag": "https://restcountries.eu/data/gnb.svg",
      "name": "Guinea-Bissau"
  },
  {
      "flag": "https://restcountries.eu/data/guy.svg",
      "name": "Guyana"
  },
  {
      "flag": "https://restcountries.eu/data/hti.svg",
      "name": "Haiti"
  },
  {
      "flag": "https://restcountries.eu/data/hmd.svg",
      "name": "Heard Island and McDonald Islands"
  },
  {
      "flag": "https://restcountries.eu/data/vat.svg",
      "name": "Holy See"
  },
  {
      "flag": "https://restcountries.eu/data/hnd.svg",
      "name": "Honduras"
  },
  {
      "flag": "https://restcountries.eu/data/hkg.svg",
      "name": "Hong Kong"
  },
  {
      "flag": "https://restcountries.eu/data/hun.svg",
      "name": "Hungary"
  },
  {
      "flag": "https://restcountries.eu/data/isl.svg",
      "name": "Iceland"
  },
  {
      "flag": "https://restcountries.eu/data/ind.svg",
      "name": "India"
  },
  {
      "flag": "https://restcountries.eu/data/idn.svg",
      "name": "Indonesia"
  },
  {
      "flag": "https://restcountries.eu/data/civ.svg",
      "name": "Côte d'Ivoire"
  },
  {
      "flag": "https://restcountries.eu/data/irn.svg",
      "name": "Iran (Islamic Republic of)"
  },
  {
      "flag": "https://restcountries.eu/data/irq.svg",
      "name": "Iraq"
  },
  {
      "flag": "https://restcountries.eu/data/irl.svg",
      "name": "Ireland"
  },
  {
      "flag": "https://restcountries.eu/data/imn.svg",
      "name": "Isle of Man"
  },
  {
      "flag": "https://restcountries.eu/data/isr.svg",
      "name": "Israel"
  },
  {
      "flag": "https://restcountries.eu/data/ita.svg",
      "name": "Italy"
  },
  {
      "flag": "https://restcountries.eu/data/jam.svg",
      "name": "Jamaica"
  },
  {
      "flag": "https://restcountries.eu/data/jpn.svg",
      "name": "Japan"
  },
  {
      "flag": "https://restcountries.eu/data/jey.svg",
      "name": "Jersey"
  },
  {
      "flag": "https://restcountries.eu/data/jor.svg",
      "name": "Jordan"
  },
  {
      "flag": "https://restcountries.eu/data/kaz.svg",
      "name": "Kazakhstan"
  },
  {
      "flag": "https://restcountries.eu/data/ken.svg",
      "name": "Kenya"
  },
  {
      "flag": "https://restcountries.eu/data/kir.svg",
      "name": "Kiribati"
  },
  {
      "flag": "https://restcountries.eu/data/kwt.svg",
      "name": "Kuwait"
  },
  {
      "flag": "https://restcountries.eu/data/kgz.svg",
      "name": "Kyrgyzstan"
  },
  {
      "flag": "https://restcountries.eu/data/lao.svg",
      "name": "Lao People's Democratic Republic"
  },
  {
      "flag": "https://restcountries.eu/data/lva.svg",
      "name": "Latvia"
  },
  {
      "flag": "https://restcountries.eu/data/lbn.svg",
      "name": "Lebanon"
  },
  {
      "flag": "https://restcountries.eu/data/lso.svg",
      "name": "Lesotho"
  },
  {
      "flag": "https://restcountries.eu/data/lbr.svg",
      "name": "Liberia"
  },
  {
      "flag": "https://restcountries.eu/data/lby.svg",
      "name": "Libya"
  },
  {
      "flag": "https://restcountries.eu/data/lie.svg",
      "name": "Liechtenstein"
  },
  {
      "flag": "https://restcountries.eu/data/ltu.svg",
      "name": "Lithuania"
  },
  {
      "flag": "https://restcountries.eu/data/lux.svg",
      "name": "Luxembourg"
  },
  {
      "flag": "https://restcountries.eu/data/mac.svg",
      "name": "Macao"
  },
  {
      "flag": "https://restcountries.eu/data/mkd.svg",
      "name": "Macedonia (the former Yugoslav Republic of)"
  },
  {
      "flag": "https://restcountries.eu/data/mdg.svg",
      "name": "Madagascar"
  },
  {
      "flag": "https://restcountries.eu/data/mwi.svg",
      "name": "Malawi"
  },
  {
      "flag": "https://restcountries.eu/data/mys.svg",
      "name": "Malaysia"
  },
  {
      "flag": "https://restcountries.eu/data/mdv.svg",
      "name": "Maldives"
  },
  {
      "flag": "https://restcountries.eu/data/mli.svg",
      "name": "Mali"
  },
  {
      "flag": "https://restcountries.eu/data/mlt.svg",
      "name": "Malta"
  },
  {
      "flag": "https://restcountries.eu/data/mhl.svg",
      "name": "Marshall Islands"
  },
  {
      "flag": "https://restcountries.eu/data/mtq.svg",
      "name": "Martinique"
  },
  {
      "flag": "https://restcountries.eu/data/mrt.svg",
      "name": "Mauritania"
  },
  {
      "flag": "https://restcountries.eu/data/mus.svg",
      "name": "Mauritius"
  },
  {
      "flag": "https://restcountries.eu/data/myt.svg",
      "name": "Mayotte"
  },
  {
      "flag": "https://restcountries.eu/data/mex.svg",
      "name": "Mexico"
  },
  {
      "flag": "https://restcountries.eu/data/fsm.svg",
      "name": "Micronesia (Federated States of)"
  },
  {
      "flag": "https://restcountries.eu/data/mda.svg",
      "name": "Moldova (Republic of)"
  },
  {
      "flag": "https://restcountries.eu/data/mco.svg",
      "name": "Monaco"
  },
  {
      "flag": "https://restcountries.eu/data/mng.svg",
      "name": "Mongolia"
  },
  {
      "flag": "https://restcountries.eu/data/mne.svg",
      "name": "Montenegro"
  },
  {
      "flag": "https://restcountries.eu/data/msr.svg",
      "name": "Montserrat"
  },
  {
      "flag": "https://restcountries.eu/data/mar.svg",
      "name": "Morocco"
  },
  {
      "flag": "https://restcountries.eu/data/moz.svg",
      "name": "Mozambique"
  },
  {
      "flag": "https://restcountries.eu/data/mmr.svg",
      "name": "Myanmar"
  },
  {
      "flag": "https://restcountries.eu/data/nam.svg",
      "name": "Namibia"
  },
  {
      "flag": "https://restcountries.eu/data/nru.svg",
      "name": "Nauru"
  },
  {
      "flag": "https://restcountries.eu/data/npl.svg",
      "name": "Nepal"
  },
  {
      "flag": "https://restcountries.eu/data/nld.svg",
      "name": "Netherlands"
  },
  {
      "flag": "https://restcountries.eu/data/ncl.svg",
      "name": "New Caledonia"
  },
  {
      "flag": "https://restcountries.eu/data/nzl.svg",
      "name": "New Zealand"
  },
  {
      "flag": "https://restcountries.eu/data/nic.svg",
      "name": "Nicaragua"
  },
  {
      "flag": "https://restcountries.eu/data/ner.svg",
      "name": "Niger"
  },
  {
      "flag": "https://restcountries.eu/data/nga.svg",
      "name": "Nigeria"
  },
  {
      "flag": "https://restcountries.eu/data/niu.svg",
      "name": "Niue"
  },
  {
      "flag": "https://restcountries.eu/data/nfk.svg",
      "name": "Norfolk Island"
  },
  {
      "flag": "https://restcountries.eu/data/prk.svg",
      "name": "Korea (Democratic People's Republic of)"
  },
  {
      "flag": "https://restcountries.eu/data/mnp.svg",
      "name": "Northern Mariana Islands"
  },
  {
      "flag": "https://restcountries.eu/data/nor.svg",
      "name": "Norway"
  },
  {
      "flag": "https://restcountries.eu/data/omn.svg",
      "name": "Oman"
  },
  {
      "flag": "https://restcountries.eu/data/pak.svg",
      "name": "Pakistan"
  },
  {
      "flag": "https://restcountries.eu/data/plw.svg",
      "name": "Palau"
  },
  {
      "flag": "https://restcountries.eu/data/pse.svg",
      "name": "Palestine, State of"
  },
  {
      "flag": "https://restcountries.eu/data/pan.svg",
      "name": "Panama"
  },
  {
      "flag": "https://restcountries.eu/data/png.svg",
      "name": "Papua New Guinea"
  },
  {
      "flag": "https://restcountries.eu/data/pry.svg",
      "name": "Paraguay"
  },
  {
      "flag": "https://restcountries.eu/data/per.svg",
      "name": "Peru"
  },
  {
      "flag": "https://restcountries.eu/data/phl.svg",
      "name": "Philippines"
  },
  {
      "flag": "https://restcountries.eu/data/pcn.svg",
      "name": "Pitcairn"
  },
  {
      "flag": "https://restcountries.eu/data/pol.svg",
      "name": "Poland"
  },
  {
      "flag": "https://restcountries.eu/data/prt.svg",
      "name": "Portugal"
  },
  {
      "flag": "https://restcountries.eu/data/pri.svg",
      "name": "Puerto Rico"
  },
  {
      "flag": "https://restcountries.eu/data/qat.svg",
      "name": "Qatar"
  },
  {
      "flag": "https://restcountries.eu/data/kos.svg",
      "name": "Republic of Kosovo"
  },
  {
      "flag": "https://restcountries.eu/data/reu.svg",
      "name": "Réunion"
  },
  {
      "flag": "https://restcountries.eu/data/rou.svg",
      "name": "Romania"
  },
  {
      "flag": "https://restcountries.eu/data/rus.svg",
      "name": "Russian Federation"
  },
  {
      "flag": "https://restcountries.eu/data/rwa.svg",
      "name": "Rwanda"
  },
  {
      "flag": "https://restcountries.eu/data/blm.svg",
      "name": "Saint Barthélemy"
  },
  {
      "flag": "https://restcountries.eu/data/shn.svg",
      "name": "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
      "flag": "https://restcountries.eu/data/kna.svg",
      "name": "Saint Kitts and Nevis"
  },
  {
      "flag": "https://restcountries.eu/data/lca.svg",
      "name": "Saint Lucia"
  },
  {
      "flag": "https://restcountries.eu/data/maf.svg",
      "name": "Saint Martin (French part)"
  },
  {
      "flag": "https://restcountries.eu/data/spm.svg",
      "name": "Saint Pierre and Miquelon"
  },
  {
      "flag": "https://restcountries.eu/data/vct.svg",
      "name": "Saint Vincent and the Grenadines"
  },
  {
      "flag": "https://restcountries.eu/data/wsm.svg",
      "name": "Samoa"
  },
  {
      "flag": "https://restcountries.eu/data/smr.svg",
      "name": "San Marino"
  },
  {
      "flag": "https://restcountries.eu/data/stp.svg",
      "name": "Sao Tome and Principe"
  },
  {
      "flag": "https://restcountries.eu/data/sau.svg",
      "name": "Saudi Arabia"
  },
  {
      "flag": "https://restcountries.eu/data/sen.svg",
      "name": "Senegal"
  },
  {
      "flag": "https://restcountries.eu/data/srb.svg",
      "name": "Serbia"
  },
  {
      "flag": "https://restcountries.eu/data/syc.svg",
      "name": "Seychelles"
  },
  {
      "flag": "https://restcountries.eu/data/sle.svg",
      "name": "Sierra Leone"
  },
  {
      "flag": "https://restcountries.eu/data/sgp.svg",
      "name": "Singapore"
  },
  {
      "flag": "https://restcountries.eu/data/sxm.svg",
      "name": "Sint Maarten (Dutch part)"
  },
  {
      "flag": "https://restcountries.eu/data/svk.svg",
      "name": "Slovakia"
  },
  {
      "flag": "https://restcountries.eu/data/svn.svg",
      "name": "Slovenia"
  },
  {
      "flag": "https://restcountries.eu/data/slb.svg",
      "name": "Solomon Islands"
  },
  {
      "flag": "https://restcountries.eu/data/som.svg",
      "name": "Somalia"
  },
  {
      "flag": "https://restcountries.eu/data/zaf.svg",
      "name": "South Africa"
  },
  {
      "flag": "https://restcountries.eu/data/sgs.svg",
      "name": "South Georgia and the South Sandwich Islands"
  },
  {
      "flag": "https://restcountries.eu/data/kor.svg",
      "name": "Korea (Republic of)"
  },
  {
      "flag": "https://restcountries.eu/data/ssd.svg",
      "name": "South Sudan"
  },
  {
      "flag": "https://restcountries.eu/data/esp.svg",
      "name": "Spain"
  },
  {
      "flag": "https://restcountries.eu/data/lka.svg",
      "name": "Sri Lanka"
  },
  {
      "flag": "https://restcountries.eu/data/sdn.svg",
      "name": "Sudan"
  },
  {
      "flag": "https://restcountries.eu/data/sur.svg",
      "name": "Suriname"
  },
  {
      "flag": "https://restcountries.eu/data/sjm.svg",
      "name": "Svalbard and Jan Mayen"
  },
  {
      "flag": "https://restcountries.eu/data/swz.svg",
      "name": "Swaziland"
  },
  {
      "flag": "https://restcountries.eu/data/swe.svg",
      "name": "Sweden"
  },
  {
      "flag": "https://restcountries.eu/data/che.svg",
      "name": "Switzerland"
  },
  {
      "flag": "https://restcountries.eu/data/syr.svg",
      "name": "Syrian Arab Republic"
  },
  {
      "flag": "https://restcountries.eu/data/twn.svg",
      "name": "Taiwan"
  },
  {
      "flag": "https://restcountries.eu/data/tjk.svg",
      "name": "Tajikistan"
  },
  {
      "flag": "https://restcountries.eu/data/tza.svg",
      "name": "Tanzania, United Republic of"
  },
  {
      "flag": "https://restcountries.eu/data/tha.svg",
      "name": "Thailand"
  },
  {
      "flag": "https://restcountries.eu/data/tls.svg",
      "name": "Timor-Leste"
  },
  {
      "flag": "https://restcountries.eu/data/tgo.svg",
      "name": "Togo"
  },
  {
      "flag": "https://restcountries.eu/data/tkl.svg",
      "name": "Tokelau"
  },
  {
      "flag": "https://restcountries.eu/data/ton.svg",
      "name": "Tonga"
  },
  {
      "flag": "https://restcountries.eu/data/tto.svg",
      "name": "Trinidad and Tobago"
  },
  {
      "flag": "https://restcountries.eu/data/tun.svg",
      "name": "Tunisia"
  },
  {
      "flag": "https://restcountries.eu/data/tur.svg",
      "name": "Turkey"
  },
  {
      "flag": "https://restcountries.eu/data/tkm.svg",
      "name": "Turkmenistan"
  },
  {
      "flag": "https://restcountries.eu/data/tca.svg",
      "name": "Turks and Caicos Islands"
  },
  {
      "flag": "https://restcountries.eu/data/tuv.svg",
      "name": "Tuvalu"
  },
  {
      "flag": "https://restcountries.eu/data/uga.svg",
      "name": "Uganda"
  },
  {
      "flag": "https://restcountries.eu/data/ukr.svg",
      "name": "Ukraine"
  },
  {
      "flag": "https://restcountries.eu/data/are.svg",
      "name": "United Arab Emirates"
  },
  {
      "flag": "https://restcountries.eu/data/gbr.svg",
      "name": "United Kingdom of Great Britain and Northern Ireland"
  },
  {
      "flag": "https://restcountries.eu/data/usa.svg",
      "name": "United States of America"
  },
  {
      "flag": "https://restcountries.eu/data/ury.svg",
      "name": "Uruguay"
  },
  {
      "flag": "https://restcountries.eu/data/uzb.svg",
      "name": "Uzbekistan"
  },
  {
      "flag": "https://restcountries.eu/data/vut.svg",
      "name": "Vanuatu"
  },
  {
      "flag": "https://restcountries.eu/data/ven.svg",
      "name": "Venezuela (Bolivarian Republic of)"
  },
  {
      "flag": "https://restcountries.eu/data/vnm.svg",
      "name": "Viet Nam"
  },
  {
      "flag": "https://restcountries.eu/data/wlf.svg",
      "name": "Wallis and Futuna"
  },
  {
      "flag": "https://restcountries.eu/data/esh.svg",
      "name": "Western Sahara"
  },
  {
      "flag": "https://restcountries.eu/data/yem.svg",
      "name": "Yemen"
  },
  {
      "flag": "https://restcountries.eu/data/zmb.svg",
      "name": "Zambia"
  },
  {
      "flag": "https://restcountries.eu/data/zwe.svg",
      "name": "Zimbabwe"
  }
    ]
}
