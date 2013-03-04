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
      <img src='http://placehold.it/416x80' />
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
        <img src='http://placehold.it/605x350' />
      </span>
      <div class="caption" data-upfront-field="caption">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus numquam doloremque laudantium mollitia assumenda neque qui molestiae optio esse sed debitis quidem ad corporis repudiandae quo earum aliquam odio veritatis.
      </div>
    </div>
    """
  )

  subnavigation: _.template(
    """
    <div id='subnavigation' class='navigation'>
      <ul id='subnavbar'>
        <li>
          <a href='#' data-upfront-field='link'>First Subnav</a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>Subnav</a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>Subnav</a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>Subnav</a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>Subnav</a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>Subnav</a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>Subnav</a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>Subnav</a>
        </li>
      </ul>
    </div>
    """
  )

  navigation: _.template(
    """
    <div id='topnavigation' class='navigation'>
      <ul id='topnavbar'>
        <li>
          <a href='#' data-upfront-field='link'>
            First Topnav
          </a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>
            Topnav
          </a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>
            Topnav
          </a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>
            Topnav
          </a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>
            Topnav
          </a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>
            Topnav
          </a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>
            Topnav
          </a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>
            Topnav
          </a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>
            Topnav
          </a>
        </li>
        <li>
          <a href='#' data-upfront-field='link'>
            Topnav
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
          <a href="" class="sitemap-level1">NavPoint</a>
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a>
        </li>
        <li>
          <a href="" class="sitemap-level1">NavPoint</a>
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
        </li>
        <li>
          <a href="" class="sitemap-level1">NavPoint</a>
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
          <a href="">Link</a> |
        </li>
        
      </ul>
    </div>
    """
  )

