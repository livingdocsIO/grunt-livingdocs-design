@livingdocs = @livingdocs || {}
@livingdocs.upfrontIO = {}

@livingdocs.upfrontIO.templates = do ->
  
  title: _.template(
    """
    <div class="page-header">
      <h1>
        <span data-upfront-field="title">Title</span>
        <span class="page-header-label label label-info" data-upfront-field="label">Label</span>
        <br/>
        <small data-upfront-field="tagline">Tagline</small>
      </h1>
    </div>
    """
  ) 

  text: _.template(
    """
    <p data-upfront-field="text">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iste repellendus minus ducimus rem veritatis magnam quidem eveniet velit modi ab tenetur possimus laudantium aliquam ipsam excepturi dolor quas accusantium.
    </p>
    """
  )

  link: _.template(
    """
    <a href="#" data-upfront-field="link">Link »</a>
    """
  )

  highlightedText: _.template(
    """
    <p class="highlight" data-upfront-field="text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ea odio molestias recusandae vitae assumenda hic maxime nisi quidem architecto consequatur id amet alias voluptatibus ut! Voluptatem vitae distinctio optio.
    </p>
    """
  )

  image: _.template(
    """
    <div data-upfront-field="image">Drag your image here...</div>
    """
  )

  polaroidImage: _.template(
      """
      <div class="img-polaroid" data-upfront-field="image">
        Drag your image here...
      </div>
      """
  )

  linkedImage: _.template(
    """
    <a class="thumbnail" href="#" data-upfront-field="image">
      Drag your image here...
    </a>
    """
  )

  imageWithCaption: _.template(
    """
    <div class="thumbnail">
      <span data-upfront-field="image">
        Drag your image here...
      </span>
      <div class="caption">
        <em data-upfront-field="caption">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus numquam doloremque laudantium mollitia assumenda neque qui molestiae optio esse sed debitis quidem ad corporis repudiandae quo earum aliquam odio veritatis.
        </em>
      </div>
    </div>
    """
  )

  separator: _.template(
    """
    <hr>
    """
  )

  footer: _.template(
    """
    <footer>
      <address class="footer-address" data-upfront-field="address">
        <a href="mailto:contact@upfront.io">contact@upfront.io</a>
        <br/>
        upfront GmbH<br/>
        Lutherstrasse 32<br/>
        8004 Zürich<br/>
        <a href="https://twitter.com/upfrontIO" class="twitter-follow-button" data-show-count="false" data-size="large">Follow us @upfrontIO</a>


      </address>
    </footer>
    """
  )

  clientList: _.template(
    """
    <ul class="clients">
      <li>
        <a href="http://www.20min.ch" target="_blank">
          <img src="http://www.upfront.io//assets/img/20min_logo.png" alt="20min">
        </a>
      </li>  
      <li>
        <a href="http://www.tageswoche.ch" target="_blank"> 
          <img src="http://www.upfront.io//assets/img/tageswoche.png" alt="tageswoche" width="200px">
        </a>
      </li> 
      <li>
        <a href="http://www.feinheit.ch" target="_blank"> 
          <img src="http://www.upfront.io//assets/img/feinheit.png" alt="Feinheit GmbH">
        </a>
      </li> 
    </ul>
    """
  )