import React from 'react'

export const AboutComponent = () => {
  return (
    <article>

    
      <header className="container p-5 d-flex justify-content-center">
        <span >
          <p>What does</p>
          <br />
          <h2 className="logo logo__about orange">dev4Wear();</h2> <br />
          <p className="p-2">stands for</p>
        </span>
      </header>
      <article className="accordion accordion-flush" id="accordionFlushExample">
        <article className="accordion-item">
          <span className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              d4w<span className="orange">extends</span>code;
            </button>
          </span>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionFlushExample"
          >
            <article className="accordion-body text-left">
              <p>
                As developers, we're always thinking on black screens with white
                pointers... even our dreams are haunted by this terminal/IDE
                asking us to type something. We breath code, sweat code, talk
                code and sometimes understand code.
              </p>
              <p>
                We tought it was time to take the code out of the screen and
                wear it proudly!
              </p>
            </article>
          </div>
        </article>
        <article className="accordion-item">
          <span className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#d4w.Ecology"
              aria-expanded="false"
              aria-controls="d4w.Ecology"
            >
              d4w<span className="orange">extends</span>ecology;
            </button>
          </span>
          <div
            id="d4w.Ecology"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <article className="accordion-body d-flex text-left">
              dev4Wear(); doesn't have stock, we print on demand to prevent
              unnecessary resources consumption and uses Eco-friendly ink and
              materials on all it's items. The downside is that this may incur
              in longer waiting periods for our clients, but we stand on our
              position on creating less "bugs" on the planet runtime
              environment.
            </article>
          </div>
        </article>
        <div className="accordion-item">
          <span className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#d4w.design"
              aria-expanded="false"
              aria-controls="d4w.design"
            >
              d4w<span className="orange">extends</span>design;
            </button>
          </span>
          <div
            id="d4w.design"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <article className="accordion-body">
              <ul className="text-left">
                <li>
                  All designs on dev4Wear(); are made using dev tools and
                  programming languages (html & css mostly).
                </li>
                <li>
                  All topics will be development, gaming, pop culture and "Geek"
                  related.
                </li>
                <li>
                  If an item with an HTML/CSS design is bought, the code will be
                  added to the user profile (not yet available).
                </li>
              </ul>
            </article>
          </div>
        </div>
      </article>
      </article>
  )
}
