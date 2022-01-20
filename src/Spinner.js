

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner)

export const showLoader = () => {
  const mainEl = document.querySelector("main");
  mainEl.setAttribute("aria-busy", false);

  const loaderEl = document.getElementById("loader");
  loaderEl.classList.remove("hide");
};

// Hide loading spinner
export const hideLoader = () => {
  const mainEl = document.querySelector("main");
  mainEl.setAttribute("aria-busy", true);

  const loaderEl = document.getElementById("loader");
  loaderEl.classList.add("hide");
};

const Spinner = () => {
    return (

            <div id="loader" className="loadingContainer">
                <FontAwesomeIcon icon={faSpinner} className="loader" ></FontAwesomeIcon>
            </div> 
    )
}

export default Spinner
