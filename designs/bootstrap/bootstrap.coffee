@livingdocs = @livingdocs || {}
@livingdocs.bootstrap = {}

@livingdocs.bootstrap.templates = do ->
  
  hero: _.template(
    """
    <div class="hero-unit">
      <h1 data-upfront-field="title">Titel</h1>
      <p data-upfront-field="tagline">Tagline</p>
    </div>
    """
  )

  title: _.template(
    """
    <h1 data-upfront-field="title">Titel</h1>
    """
  )

  subtitle: _.template(
    """
    <h2 data-upfront-field="title">Subtitle</h2>
    """
  )

  smallSubtitle: _.template(
    """
    <h3 data-upfront-field="title">Lorem ipsum dolorem</h3>
    """
  )

  text: _.template(
    """
    <p data-upfront-field="text">
      Lorem ipsum dolorem. Lorem ipsum dolorem. Lorem ipsum dolorem
    </p>
    """
  )

  info: _.template(
    """
    <div class="alert alert-info" data-upfront-field="info">
      Lorem Ipsum dolorem
    </div>
    """
  )

  button: _.template(
    """
    <button class="btn" type="button" data-upfront-field="button">Button</button>
    """
  )

  largeButton: _.template(
    """
    <button class="btn btn-block" type="button" data-upfront-field="button">Large Button</button>
    """
  )