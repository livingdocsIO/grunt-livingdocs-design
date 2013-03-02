@livingdocs = @livingdocs || {}
@livingdocs.az = {}

@livingdocs.az.templates = do ->

  title: _.template(
    """
    <h1 data-upfront-field='title'>Article Title</h1>
    """
  ) 

  filet: _.template(
    """
    <p class='filet' data-upfront-field='text'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus numquam doloremque laudantium mollitia assumenda neque qui molestiae optio esse sed debitis quidem ad corporis repudiandae quo earum aliquam odio veritatis.
    </p>
    """
  )

  text: _.template(
    """
    <p data-upfront-field='text'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus numquam doloremque laudantium mollitia assumenda neque qui molestiae optio esse sed debitis quidem ad corporis repudiandae quo earum aliquam odio veritatis.
    </p>
    """
  )

  linkedImage: _.template(
    """
    <a href='#' data-upfront-field='image'>
      <img src='http://static.a-z.ch/4.34.1.p2/news/aaz/images/pageLogo.gif' />
    </a>
    """
  )

  recommendation: _.template(
    """
      <div class='keyword'>Keyword</div>
      <a href='#' data-upfront-field='image'>
        <img src='http://placehold.it/70x42' />
      </a>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit 
      </h2>
    """
  )

  imageWithCaption: _.template(
    """
    <div class="thumbnail">
      <span data-upfront-field="image">
        <img src='http://placehold.it/610x350' />
      </span>
      <div class="caption" data-upfront-field="caption">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus numquam doloremque laudantium mollitia assumenda neque qui molestiae optio esse sed debitis quidem ad corporis repudiandae quo earum aliquam odio veritatis.
      </div>
    </div>
    """
  )

  subnavigation: _.template(
    """
    <div id='subnavigation'>
      <ul id='subnavbar'>
        <li>
          <a href='#' data-upfront-field='link'>Regionalsport</a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>Fussball</a>
        </li>
      </ul>
    </div>
    """
  )

  navigation: _.template(
    """
    <div id="topnavigation">
      <ul id="topnavbar">
        <li>
          <a href="#" data-upfront-field='link'>
            Region
          </a>
        </li>
        <li>
          <a href="#" data-upfront-field='link'>
            Gemeinde
          </a>
        </li>
        <li>
          <a href="#" data-upfront-field='link'>
            Schweiz
          </a>
        </li>
      </ul>
    </div>
    """
  )

  footer: _.template(
    """
    <div id='footer'>
      <h1 data-upfront-field='title'>Footer Title</h1>
      <ul class="sitemap">
        <li>
          <a href="/aargau" class="sitemap-level1">Aargau</a>
          <a href="/aargau/aarau">Aarau</a> |
          <a href="/aargau/baden">Baden</a> |
          <a href="/aargau/brugg">Brugg</a> |
          <a href="/aargau/lenzburg">Lenzburg</a> |
          <a href="/aargau/fricktal">Fricktal</a> |
          <a href="/aargau/freiamt">Freiamt</a> |
          <a href="/aargau/wyna-suhre">Wyna/Suhre</a> |
          <a href="/aargau/zurzach">Zurzach</a> |
          <a href="/aargau/kanton-aargau">Kanton</a> |
          <a href="/sport/aargau">Regionalsport</a>
        </li>
        <li>
          <a href="/gemeinde" class="sitemap-level1">Gemeinde</a>
          <a href="/beitrag/leserbeitrag">Leserbeiträge</a> |
          <a href="/beitrag/gratulation">Gratulationen</a> |
          <a href="/beitrag/vereinsmeldung">Vereinsmeldungen</a> |
          <a href="/beitrag/gemeindebeitrag">Gemeindebeiträge</a> |
          <a href="http://www.a-z.ch/vereine">Vereine finden</a> |
          <a href="/hilfe">Wie funktioniert es?</a>
        </li>
        <li>
          <a href="/schweiz" class="sitemap-level1">Schweiz</a>
        </li>
        <li>
          <a href="/international" class="sitemap-level1">Ausland</a>
        </li>
        <li>
          <a href="/wirtschaft" class="sitemap-level1">Wirtschaft</a>
        </li>
        <li>
          <a href="/sport" class="sitemap-level1">Sport</a>
          <a href="/sport/fussball">Fussball</a> |
          <a href="/sport/tennis">Tennis</a> |
          <a href="/sport/eishockey">Eishockey</a> |
          <a href="/sport/ski">Ski/Wintersport</a> |
          <a href="/sport/weitere">Weitere Sportarten</a> |
          <a href="/sport/aargau">Regionalsport</a> |
          <a href="/sport/tabellen">Tabellen</a>
        </li>
        <li>
          <a href="/unterhaltung" class="sitemap-level1">Unterhaltung</a>
          <a href="/unterhaltung/people">People</a> |
          <a href="/unterhaltung/film">Film/TV</a> |
          <a href="/unterhaltung/musik">Musik</a> |
          <a href="/unterhaltung/buch-buehne-kunst">Buch, Bühne, Kunst</a>
        </li>
        <li>
          <a href="/blaulicht/" class="sitemap-level1">Blaulicht</a>
        </li>
        <li>
          <a href="/mitmachen/" class="sitemap-level1">Mitmachen</a>
          <a href="/mitmachen/leser-reporter">Leser-Reporter</a> |
          <a href="/mitmachen/schnappschuss-aargau/bildgalerien">Schnappschuss</a> |
          <a href="/mitmachen/umfragen-aargau">Umfragen</a> |
          <a href="/mitmachen/deinsms-aargau">Dein SMS</a> |
          <a href="/mitmachen/az-pajazzo">Pajazzo</a> |
          <a href="/mitmachen/newsletter">Newsletter</a>
        </li>
        <li>
          <a href="/auto/" class="sitemap-level1">Auto</a>
          <a href="/auto/neuheiten">Neuheiten</a> |
          <a href="/auto/fahrberichte">Fahrberichte</a> |
          <a href="/auto/service">Service</a> |
          <a href="/auto/magazin">Magazin</a> |
          <a href="/auto/oldtimer">Oldtimer</a> |
          <a href="/auto/motorrad">Motorrad</a> |
          <a href="/auto/nutzfahrzeuge">Nutzfahrzeuge</a>
        </li>
        <li>
          <a href="http://www.a-z.ch/" class="sitemap-level1">a-z.ch</a>
          <a href="http://www.a-z.ch/immobilien">Immobilien</a> |
          <a href="http://www.a-z.ch/jobs">Jobs</a> |
          <a href="http://www.a-z.ch/autos">Fahrzeuge</a> |
          <a href="http://www.a-z.ch/veranstaltungen">Veranstaltungen</a> |
          <a href="http://www.a-z.ch/vereine">Vereine</a> |
          <a href="/gemeinde">Lokal</a> | 
          <a href="http://marktplatz.a-z.ch/">Marktplatz</a>
        </li>
        <li>
          <a href="http://www.aargauerzeitung.ch/" class="sitemap-level1">az Aargauer Zeitung</a>
          <a href="http://service.aargauerzeitung.ch/abonnement/angebot.php">Abonnement</a> |
          <a href="http://service.aargauerzeitung.ch/inserieren/index.php">Inserieren</a> |
          <a href="http://service.aargauerzeitung.ch/azbonuscard/index.php">az Bonus</a> |
          <a href="http://azdigital.ch">E-Paper</a> |
          <a href="/archiv">Archiv</a> |
<!--            <a href="javascript:void(0);" onclick="alert('todo az newsletter link')">Newsletter</a> |-->
          <a href="http://service.aargauerzeitung.ch/kontakt_impressum/verlag.php">Kontakt &amp; Impressum</a> | 
          <a href="http://www.a-z.ch/static/az/home/agb.html" target="_blank">AGB</a> | 
          <a href="/hilfe">Hilfe</a>
        </li>
      </ul>
      <div class="footerlinks">
                 <h5><a href="http://www.azmedien.ch" target="_top" name="titleLink" class="footerTitle">AZ Medien</a></h5>
                <div class="block clearfix">
          <span class="left">Tageszeitungen:</span>
          <span class="right">
          <a target="_blank" href="http://www.nordwestschweiz.ch/">Die Nordwestschweiz</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.aargauerzeitung.ch">az Aargauer Zeitung</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.basellandschaftlichezeitung.ch">bz Basellandschaftliche Zeitung</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.bzbasel.ch">bz Basel</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.limmattalerzeitung.ch">az Limmattaler Zeitung</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.solothurnerzeitung.ch">az Solothurner Zeitung</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.grenchnertagblatt.ch">az Grenchner Tagblatt</a>         </span>
        </div>

        <div class="block clearfix">
          <span class="left">Sonntagszeitung:</span>
          <span class="right">
          <a target="_blank" href="http://www.sonntagonline.ch/">Der Sonntag</a>          </span>
        </div>

        <div class="block clearfix">
          <span class="left">Anzeiger:</span>
          <span class="right">
          <a target="_blank" href="http://www.affolteranzeiger.ch/">Anzeiger Bezirk Affoltern</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.azeiger.ch/">AZEIGER</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.berner-landbote.ch/">Berner Landbote</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.grenchnerstadtanzeiger.ch/">Grenchner Stadt-Anzeiger</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.lba.azmedien.ch/">Lenzburger Bezirksanzeiger</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.limmatwelle.ch/">Limmatwelle</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.stadtanzeiger-olten.ch/">Stadtanzeiger Olten</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.wochenblatt.ch/wob/">Wochenblatt Birseck/Dorneck</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.wochenblatt.ch/wos/">Wochenblatt Schwarzbubenland/Laufental</a>          </span>
        </div>

        <div class="block clearfix">
          <span class="left">Zeitschriften/Bücher:</span>
          <span class="right">
          <a target="_blank" href="http://www.fitforlife.ch">FIT for LIFE</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.wildeisen.ch">KOCHEN</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.natuerlich-online.ch">natürlich</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.wireltern.ch">wir eltern</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.batitech.ch">Bâtitech</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.chemieplus.ch">Chemie Plus</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.elektrotechnik.ch">Elektrotechnik ET</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.hk-gebaeudetechnik.ch">HK Gebäudetechnik</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.megalink.ch">Megalink</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.swissplastics.ch">SwissPlastics</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.technica-online.ch">Technica</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.atverlag.ch">AT Verlag</a>          </span>
        </div>

        <div class="block clearfix">
          <span class="left">TV-Senderfamilie:</span>
          <span class="right">
          <a target="_blank" href="http://www.telezueri.ch">TeleZüri</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.telem1.ch">Tele M1</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.telebaern.ch">TeleBärn</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.belcom.ch">Belcom</a>          </span>
        </div>

        <div class="block clearfix">
          <span class="left">Online:</span>
          <span class="right">
          <a target="_blank" href="http://www.aznetz.ch/">Nordwestschweiz Netz</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.a-z.ch/">a-z.ch</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.marktspiegel.ch/">Marktspiegel</a>         </span>
        </div>

        <div class="block clearfix">
          <span class="left">Druck/Vertrieb:</span>
          <span class="right">
          <a target="_blank" href="http://www.azprint.ch">AZ Print</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.solprint.ch">SOL Print</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.vsdruck.ch">Vogt-Schild Druck</a>&nbsp;|&nbsp;<a target="_blank" href="http://www.weissdruck.ch">Weiss Medien</a>&nbsp;|&nbsp;<a href="/site/dienstleistungen/vertrieb/">AZ Vertrieb</a>          </span>
        </div>
    </div>
    </div>
    """
  )

