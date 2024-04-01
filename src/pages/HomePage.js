function HomePage() {
  return (
    <>
      <div class="header">
        {/* logo */}
        <div class="logo">
          <img class="logo-image" src="" alt="icon" />
          <span class="logo-text">Mype</span>
        </div>
        <div class="header-options">
          {/* login/ signup/ profile */}
          <button class="user-profile">
            <span>User Profile</span>
          </button>
          {/* language option */}
          <button class="lang-setting">
            <span>Language</span>
            {/* globe icon */}
            <svg
              class="globe-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.657,7H17.431A19.675,19.675,0,0,0,14.6,2.342,10.041,10.041,0,0,1,20.657,7ZM16.5,12a10.209,10.209,0,0,1-.473,3H7.973A10.209,10.209,0,0,1,7.5,12a10.209,10.209,0,0,1,.473-3h8.054A10.209,10.209,0,0,1,16.5,12ZM8.774,17h6.452A19.562,19.562,0,0,1,12,21.588,19.562,19.562,0,0,1,8.774,17Zm0-10A19.562,19.562,0,0,1,12,2.412,19.562,19.562,0,0,1,15.226,7ZM9.4,2.342A19.7,19.7,0,0,0,6.569,7H3.343A10.041,10.041,0,0,1,9.4,2.342ZM2.46,9H5.892a11.676,11.676,0,0,0,0,6H2.46a10.013,10.013,0,0,1,0-6Zm.883,8H6.569A19.675,19.675,0,0,0,9.4,21.658,10.041,10.041,0,0,1,3.343,17ZM14.6,21.658A19.7,19.7,0,0,0,17.431,17h3.226A10.041,10.041,0,0,1,14.6,21.658ZM21.54,15H18.108a11.676,11.676,0,0,0,0-6H21.54a10.013,10.013,0,0,1,0,6Z" />
            </svg>
            {/* arrow icon */}
            <svg
              class="extend-arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="m12,16.074c-.4,0-.777-.156-1.061-.439l-5.281-5.281.707-.707,5.281,5.281c.189.189.518.189.707,0l5.281-5.281.707.707-5.281,5.281c-.283.283-.66.439-1.061.439Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
