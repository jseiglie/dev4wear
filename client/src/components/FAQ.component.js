import React from "react";

export const FAQComponent = () => {
  return (
    <article className="container my-5">

    
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
            What are the sizes?
          </button>
        </span>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionFlushExample"
        >
          <article className="accordion-body text-left overflow-x-auto">
            <table
                className="table table-striped table-hover table-responsive "
            >
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">S</th>
                  <th scope="col">M</th>
                  <th scope="col">L</th>
                  <th scope="col">XL</th>
                  <th scope="col">2XL</th>
                  <th scope="col">3XL</th>
                  <th scope="col">4XL</th>
                  <th scope="col">5XL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Width, cm</td>
                  <td>45.70</td>
                  <td>50.80</td>
                  <td>55.80</td>
                  <td>60.90</td>
                  <td>66.00</td>
                  <td>71.10</td>
                  <td>76.30</td>
                  <td>81.20</td>
                </tr>
                <tr>
                  <td>Length, cm</td>
                  <td>71.12</td>
                  <td>73.66</td>
                  <td>76.20</td>
                  <td>78.74</td>
                  <td>81.28</td>
                  <td>83.82</td>
                  <td>86.36</td>
                  <td>88.90</td>
                </tr>
                <tr>
                  <td>Sleeve length, cm</td>
                  <td>18.40</td>
                  <td>19.70</td>
                  <td>20.90</td>
                  <td>22.20</td>
                  <td>23.50</td>
                  <td>24.80</td>
                  <td>26.00</td>
                  <td>27.30</td>
                </tr>
              </tbody>
            </table>
          </article>
        </div>
      </article>
    </article>
    </article>
  );
};
