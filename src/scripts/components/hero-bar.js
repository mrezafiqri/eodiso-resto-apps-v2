class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
          <source media="(max-width: 1280px)" srcset="./images/heros/hero-image_2-medium.jpg">
          <img src="./images/heros/hero-image_2-large.jpg" alt="Restaurant Food Poster" class="skeleton">
        </picture>
        <div class="row">
          <h1 class="hero-title">Eodis'o Resto and Cafe</h1>
          <p class="hero-text">
            Confused about looking for a restaurant, find the best restaurant here!!!
          </p>
        </div>
      </section>
    `;
  }
}

customElements.define("hero-bar", HeroBar);
