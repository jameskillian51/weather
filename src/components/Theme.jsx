import "./Theme.css";
export default function Theme({ theme, onSubmit }) {
  function handleSubmit(style) {
    onSubmit(style);
  }

  return (
    <div className="theme-body">
      <div className="radio-inputs">
        <label>
          <input
            className="radio-input"
            type="radio"
            name="theme"
            disabled={theme === "daylight-rgba"}
            onChange={() => handleSubmit("daylight-rgba")}
          />
          <span className="radio-tile">
            <span className="radio-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M22 12L23 12"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 2V1"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 23V22"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M20 20L19 19"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M20 4L19 5"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4 20L5 19"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4 4L5 5"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M1 12L2 12"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="radio-label">Daylight</span>
          </span>
        </label>

        <label>
          <input
            className="radio-input"
            type="radio"
            name="theme"
            disabled={theme === "night-rgba"}
            onChange={() => handleSubmit("night-rgba")}
          />
          <span className="radio-tile">
            <span className="radio-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447Z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="radio-label">Night</span>
          </span>
        </label>

        <label>
          <input
            className="radio-input"
            type="radio"
            name="theme"
            disabled={theme === "daylight"}
            onChange={() => handleSubmit("daylight")}
          />
          <span className="radio-tile">
            <span className="radio-icon">
              <svg
                viewBox="0 0 1024 1024"
                className=""
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#Ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M144.302 134.343c-46.171 0-83.599 37.904-83.599 84.666 0 46.753 37.428 84.661 83.599 84.661 46.179 0 83.607-37.908 83.607-84.661 0-46.761-37.429-84.666-83.607-84.666z"
                    fill="#Ffffff"
                  ></path>
                  <path
                    d="M392.166 305.246l-2.804-1.718c-21.688-13.291-49.909-6.259-63.035 15.704L19.112 833.375c-13.122 21.964-6.178 50.541 15.511 63.836l2.803 1.717c21.692 13.29 49.909 6.262 63.035-15.701l307.21-514.147c13.122-21.965 6.182-50.542-15.505-63.834z"
                    fill="#Ffffff"
                  ></path>
                  <path
                    d="M965.247 808.733H58.243c-25.673 0-46.481 20.812-46.481 46.484v3.319c0 25.674 20.808 46.481 46.481 46.481h907.004c25.67 0 46.481-20.808 46.481-46.481v-3.319c0.001-25.672-20.811-46.484-46.481-46.484z"
                    fill="#Ffffff"
                  ></path>
                  <path
                    d="M1012.051 845.512L796.742 221.268c-7.921-22.964-32.76-34.998-55.493-26.805l-2.944 1.061c-22.77 8.204-34.696 33.548-26.633 56.531L930.879 876.79c7.431 21.168 30.965 31.502 52.562 23.154l2.791-1.081c21.557-8.341 33.116-32.2 25.819-53.351z"
                    fill="#Ffffff"
                  ></path>
                  <path
                    d="M570.545 577.868L406.071 317.869c-13.67-21.618-42.063-27.913-63.408-14.066l-2.758 1.792c-21.349 13.844-27.563 42.595-13.893 64.209l164.475 259.997c13.674 21.616 42.064 27.915 63.406 14.064l2.763-1.786c21.349-13.846 27.563-42.6 13.889-64.211z"
                    fill="#Ffffff"
                  ></path>
                  <path
                    d="M776.738 198.775l-2.854-1.544c-21.998-11.928-50.051-4.265-62.77 17.169L492.012 583.709c-13.774 23.227-6.701 52.796 15.921 65.989l2.934 1.706c22.701 13.239 52.28 4.892 65.938-18.582l217.178-373.22c12.604-21.655 4.829-48.863-17.245-60.827z"
                    fill="#Ffffff"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="radio-label">Daylight bg</span>
          </span>
        </label>

        <label>
          <input
            className="radio-input"
            type="radio"
            name="theme"
            disabled={theme === "night"}
            onChange={() => handleSubmit("night")}
          />
          <span className="radio-tile">
            <span className="radio-icon">
              <svg
                viewBox="0 0 1024 1024"
                className=""
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#Ffffff"
                transform="matrix(-1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M144.302 134.343c-46.171 0-83.599 37.904-83.599 84.666 0 46.753 37.428 84.661 83.599 84.661 46.179 0 83.607-37.908 83.607-84.661 0-46.761-37.429-84.666-83.607-84.666z"
                    fill="#Ffffff"
                  ></path>
                  <path
                    d="M392.166 305.246l-2.804-1.718c-21.688-13.291-49.909-6.259-63.035 15.704L19.112 833.375c-13.122 21.964-6.178 50.541 15.511 63.836l2.803 1.717c21.692 13.29 49.909 6.262 63.035-15.701l307.21-514.147c13.122-21.965 6.182-50.542-15.505-63.834z"
                    fill="#Ffffff"
                  ></path>
                  <path
                    d="M965.247 808.733H58.243c-25.673 0-46.481 20.812-46.481 46.484v3.319c0 25.674 20.808 46.481 46.481 46.481h907.004c25.67 0 46.481-20.808 46.481-46.481v-3.319c0.001-25.672-20.811-46.484-46.481-46.484z"
                    fill="#Ffffff"
                  ></path>
                  <path
                    d="M1012.051 845.512L796.742 221.268c-7.921-22.964-32.76-34.998-55.493-26.805l-2.944 1.061c-22.77 8.204-34.696 33.548-26.633 56.531L930.879 876.79c7.431 21.168 30.965 31.502 52.562 23.154l2.791-1.081c21.557-8.341 33.116-32.2 25.819-53.351z"
                    fill="#Ffffff"
                  ></path>
                  <path
                    d="M570.545 577.868L406.071 317.869c-13.67-21.618-42.063-27.913-63.408-14.066l-2.758 1.792c-21.349 13.844-27.563 42.595-13.893 64.209l164.475 259.997c13.674 21.616 42.064 27.915 63.406 14.064l2.763-1.786c21.349-13.846 27.563-42.6 13.889-64.211z"
                    fill="#Ffffff"
                  ></path>
                  <path
                    d="M776.738 198.775l-2.854-1.544c-21.998-11.928-50.051-4.265-62.77 17.169L492.012 583.709c-13.774 23.227-6.701 52.796 15.921 65.989l2.934 1.706c22.701 13.239 52.28 4.892 65.938-18.582l217.178-373.22c12.604-21.655 4.829-48.863-17.245-60.827z"
                    fill="#Ffffff"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="radio-label">Night bg</span>
          </span>
        </label>
      </div>
    </div>
  );
}
