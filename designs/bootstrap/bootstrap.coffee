@livingdocs = @livingdocs || {}
@livingdocs.bootstrap = {}

@livingdocs.bootstrap.templates = do ->

  column: _.template(
    """
    <div class="row-fluid">
      <div class="span8 offset2" data-doc-container></div>
    </div>
    """
  )

  mainAndSidebar: _.template(
    """
    <div class="row-fluid">
      <div class="span8" data-doc-container="main"></div>
      <div class="span4" data-doc-container="sidebar"></div>
    </div>
    """
  )

  hero: _.template(
    """
    <div class="hero-unit">
      <h1 data-doc-editable="title">Titel</h1>
      <p data-doc-editable="tagline">Tagline</p>
    </div>
    """
  )

  title: _.template(
    """
    <h1 data-doc-editable="title">Titel</h1>
    """
  )

  subtitle: _.template(
    """
    <h2 data-doc-editable="title">Subtitle</h2>
    """
  )

  smallSubtitle: _.template(
    """
    <h3 data-doc-editable="title">Lorem ipsum dolorem</h3>
    """
  )

  text: _.template(
    """
    <p data-doc-editable="text">
      Lorem ipsum dolorem. Lorem ipsum dolorem. Lorem ipsum dolorem
    </p>
    """
  )

  info: _.template(
    """
    <div class="alert alert-info" data-doc-editable="info">
      Lorem Ipsum dolorem
    </div>
    """
  )

  button: _.template(
    """
    <button class="btn" type="button" data-doc-editable="button">Button</button>
    """
  )

  largeButton: _.template(
    """
    <button class="btn btn-block" type="button" data-doc-editable="button">Large Button</button>
    """
  )

  image: _.template(
    """
    <div class="img-polaroid" data-doc-editable="image">
      Drag your image here...
    </div>
    """

  separator:
    """
    <div>
      <hr>
    </div>
    """
  )