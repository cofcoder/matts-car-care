<template>
  <no-ssr>
    <div class="uk-section uk-section-small uk-section-muted">
      <div class="uk-container uk-text-center">
        <h2 class="uk-text-uppercase">
          WHAT OUR CLIENTS SAY
        </h2>
        <br>
        <!-- Client Slider -->
        <div uk-slider="center: true">
          <div class="uk-position-relative uk-visible-toggle uk-light">
            <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
              <li>
                <div class="uk-card uk-card-default cursor uk-border-rounded">
                  <div class="uk-card-body">
                    <h3 class="uk-card-title uk-card-underline">
                      CRYSTAL
                    </h3>
                    <p>This guy is amazing. He offers a fantastic service and his eye for detail is uncanny. Took my little i20 for the VIP treatment. I am afraid to get anything dirty. I dont even want to touch it, it came out so good after a clay bar wax. Such a good guy and he does the best job I've had on my car. Highly recommended!!!</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="uk-card uk-card-default cursor uk-border-rounded">
                  <div class="uk-card-body">
                    <h3 class="uk-card-title uk-card-underline">
                      BENNY
                    </h3>
                    <p>I gave Matt a car with massive issues and he blended those issues in with his amazing skills, and in the process made my car look like a million dollars would highly recommend Matt! He is well priced and his passion for his job shows in his work!</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="uk-card uk-card-default cursor uk-border-rounded">
                  <div class="uk-card-body">
                    <h3 class="uk-card-title uk-card-underline">
                      JIM
                    </h3>
                    <p>Matt did an outstanding job when I left my car with him for a wash and wax and groom.  He obviously has a great eye for detail and did an extremely thorough job.  To top it off, he has great customer service.  I would highly recommend Matt’s Car Care.</p>
                  </div>
                </div>
              </li>
            </ul>
            <p class="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous uk-slider-item="previous" />
            <p class="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next uk-slider-item="next" />
          </div>
          <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
        </div>
      </div>
    </div>
  </no-ssr>
</template>

<style>
  .uk-dotnav>.uk-active>* {
      background-color: rgb(240,104,80);
  }
  .uk-dotnav>*>:focus, .uk-dotnav>*>:hover {
    background-color: rgba(32,32,35,.6);
}
  .uk-card-underline {
    border-bottom: 2px solid #F06850;
    text-align: center;
  }
  .cursor {
    cursor: grab;
    cursor: -webkit-grab;
  }
  .cursor:active{
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }
</style>
