export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-inner">
        {/* Left: Logo, Search, Social */}
        <div className="footer-brand-col">
          {/* TeamSense Logo */}
          <svg width="182" height="32" viewBox="0 0 182 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TeamSense" aria-hidden="true">
            <path d="M15.9435 8.01382V27.0978H12.0616V8.01382H4.43262V4.74902H23.5725V8.01382H15.9435Z" fill="white"/>
            <path d="M31.2607 22.2949H35.0752C34.4589 25.1523 31.7851 27.567 27.4462 27.567C22.393 27.567 19.4248 24.0837 19.4248 18.9356C19.4248 14.2274 22.3593 10.6792 27.3818 10.6792C31.1657 10.6792 33.9039 12.7809 34.8176 16.1107C35.1427 17.1143 35.2745 18.3069 35.2745 19.8448H23.1105C23.2423 23.455 25.1312 24.9309 27.4462 24.9309C29.5651 24.9309 30.9357 23.8328 31.2607 22.2949ZM23.1749 17.4922H31.5551C31.2944 14.6997 29.5988 13.3182 27.3818 13.3182C25.1312 13.3182 23.503 14.7292 23.1749 17.4922Z" fill="white"/>
            <path d="M51.596 16.9284V22.8941C51.596 24.7774 51.7585 26.0969 52.0192 27.1006H48.6616C48.4991 26.4098 48.4347 25.6246 48.4347 24.8719H48.3703C47.1652 26.5663 45.304 27.446 42.7958 27.446C39.34 27.446 37.1875 25.4357 37.1875 22.7052C37.1875 20.0987 38.785 18.4043 43.547 17.684C44.8839 17.4656 46.8402 17.2767 48.0146 17.2117V16.583C48.0146 14.2274 46.6777 13.2857 44.7858 13.2857C42.7314 13.2857 41.6244 14.3838 41.5263 16.0782H37.8743C38.0369 13.0643 40.3213 10.6792 44.7858 10.6792C49.1491 10.6792 51.596 12.7514 51.596 16.9284ZM48.0085 19.5319C46.8985 19.5939 45.3009 19.7533 44.194 19.9393C41.8145 20.3171 40.9345 21.0079 40.9345 22.4514C40.9345 23.8653 41.9771 24.807 43.869 24.807C45.0096 24.807 46.1196 24.4616 46.8678 23.7384C47.7478 22.8587 48.0085 22.0115 48.0085 20.3171V19.5319Z" fill="white"/>
            <path d="M78.8274 17.274V27.0979H75.111V17.6193C75.111 14.7944 73.9704 13.6638 72.1122 13.6638C69.929 13.6638 68.6228 15.4527 68.6228 18.499V27.1008H64.9064V17.2415C64.9064 14.9804 63.8639 13.6638 61.9382 13.6638C59.7213 13.6638 58.4488 15.4851 58.4488 18.561V27.0979H54.7324V11.1517H58.2863V13.0675H58.3507C59.525 11.5296 60.9907 10.7769 62.947 10.7769C65.2284 10.7769 66.9915 11.7805 67.8378 13.6638C69.0428 11.8425 70.6434 10.7769 73.1517 10.7769C76.6779 10.7739 78.8274 12.9731 78.8274 17.274Z" fill="white"/>
            <path d="M97.0057 11.7804H94.8593C94.8593 7.99014 92.7129 6.2987 88.9383 6.2987C85.685 6.2987 83.8298 7.83369 83.8298 10.3398C83.8298 12.9965 85.8137 13.7847 89.6865 14.6939C94.0805 15.727 97.432 16.7927 97.432 21.2087C97.432 25.0934 94.3657 27.5671 89.524 27.5671C84.2837 27.5671 81.2266 24.9104 81.2266 19.7357H83.3423C83.3423 23.9038 85.7953 25.6897 89.524 25.6897C93.2526 25.6897 95.2794 24.0573 95.2794 21.2264C95.2794 18.4694 93.1667 17.7166 89.1621 16.7455C84.7037 15.6798 81.6773 14.6142 81.6773 10.3546C81.6773 6.87727 84.3787 4.43311 88.9352 4.43311C94.3197 4.44491 97.0057 6.95107 97.0057 11.7804Z" fill="white"/>
            <path d="M112.293 22.4305H114.378C113.856 25.1551 111.544 27.5668 107.38 27.5668C102.661 27.5668 99.8311 24.1839 99.8311 18.9207C99.8311 14.2242 102.591 10.8384 107.248 10.8384C110.959 10.8384 113.531 13.0021 114.246 16.509C114.442 17.5215 114.531 18.5487 114.506 19.5789H101.879C101.977 23.809 104.332 25.9078 107.38 25.9078C110.082 25.9078 111.805 24.4761 112.293 22.4305ZM101.913 17.982H112.553C112.326 14.4397 110.21 12.5003 107.248 12.5003C104.222 12.5003 102.109 14.5666 101.913 17.982Z" fill="white"/>
            <path d="M129.994 17.8879V27.5671H127.976V17.9823C127.976 14.2246 126.382 13.0025 123.745 13.0025C121.175 13.0025 118.928 14.7736 118.928 18.1388V27.5671H116.91V11.6535H118.897V13.8172H118.962C119.97 12.3117 121.825 11.311 124.104 11.311C127.909 11.3051 129.994 13.5014 129.994 17.8879Z" fill="white"/>
            <path d="M144.76 16.291H142.742C142.742 13.8793 141.179 12.5303 138.545 12.5303C136.266 12.5303 134.801 13.5664 134.801 15.1634C134.801 17.1057 136.104 17.3566 138.968 18.0149C142.059 18.7027 145.247 19.3285 145.247 22.9327C145.247 25.6898 142.84 27.5672 139.066 27.5672C134.899 27.5672 132.458 25.5009 132.394 21.8051H134.445C134.445 24.4057 136.138 25.8758 139.066 25.8758C141.537 25.8758 143.23 24.7482 143.23 23.0567C143.23 20.9579 141.798 20.583 138.324 19.8096C135.564 19.1809 132.789 18.6495 132.789 15.3287C132.789 12.6336 135.165 10.8477 138.551 10.8477C142.448 10.8388 144.726 12.8136 144.76 16.291Z" fill="white"/>
            <path d="M160.108 22.4305H162.193C161.672 25.1551 159.36 27.5668 155.196 27.5668C150.477 27.5668 147.646 24.1809 147.646 18.9207C147.646 14.2242 150.406 10.8384 155.064 10.8384C158.774 10.8384 161.347 13.0021 162.061 16.509C162.257 17.5215 162.346 18.5487 162.322 19.5789H149.695C149.793 23.809 152.148 25.9078 155.196 25.9078C157.897 25.9078 159.62 24.4761 160.108 22.4305ZM149.729 17.982H160.369C160.142 14.4397 158.026 12.5003 155.064 12.5003C152.04 12.5003 149.925 14.5666 149.729 17.982Z" fill="white"/>
            <path d="M177.349 4.43311H175.901L170.273 14.1942L166.711 8.66269H168.348L170.228 11.7047L172.617 7.54813C171.77 6.92576 170.743 6.59235 169.688 6.59553C166.951 6.59235 164.729 8.79288 164.726 11.511C164.722 14.2291 166.938 16.436 169.675 16.4391C172.412 16.4423 174.634 14.2418 174.638 11.5237C174.638 10.9108 174.522 10.3012 174.299 9.72961L177.349 4.43311Z" fill="white"/>
          </svg>

          <div className="footer-search-social">
            {/* Search bar */}
            <div className="footer-search-bar">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.0625 3.125C5.78331 3.125 3.125 5.78331 3.125 9.0625C3.125 12.3417 5.78331 15 9.0625 15C12.3417 15 15 12.3417 15 9.0625C15 5.78331 12.3417 3.125 9.0625 3.125ZM1.875 9.0625C1.875 5.09295 5.09295 1.875 9.0625 1.875C13.032 1.875 16.25 5.09295 16.25 9.0625C16.25 13.032 13.032 16.25 9.0625 16.25C5.09295 16.25 1.875 13.032 1.875 9.0625Z" fill="#145851"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.2612 13.2612C13.5053 13.0171 13.901 13.0171 14.1451 13.2612L17.9419 17.0581C18.186 17.3021 18.186 17.6979 17.9419 17.9419C17.6979 18.186 17.3021 18.186 17.0581 17.9419L13.2612 14.1451C13.0171 13.901 13.0171 13.5053 13.2612 13.2612Z" fill="#145851"/>
              </svg>
              <span className="footer-search-placeholder">Search the site (blog, resources, etc)</span>
            </div>

            {/* Social icons */}
            <div className="footer-social-links">
              <a href="#" aria-label="Facebook" className="footer-social-link">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M15.5996 2.40039C7.86769 2.40039 1.59961 8.66847 1.59961 16.4004C1.59961 22.9658 6.11993 28.4751 12.2178 29.9882V20.6788H9.33097V16.4004H12.2178V14.5569C12.2178 9.79183 14.3743 7.58319 19.0526 7.58319C19.9396 7.58319 21.4701 7.75735 22.0962 7.93095V11.809C21.7658 11.7742 21.1918 11.7569 20.4789 11.7569C18.1835 11.7569 17.2964 12.6266 17.2964 14.8873V16.4004H21.8694L21.0837 20.6788H17.2964V30.2979C24.2286 29.4607 29.6002 23.5583 29.6002 16.4004C29.5996 8.66847 23.3315 2.40039 15.5996 2.40039Z" fill="white"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="footer-social-link">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <g clipPath="url(#clip-linkedin)">
                    <path d="M29.2273 2H2.06719C0.924219 2 0 2.902344 0 4.01797V27.9766C0 29.0922 0.924219 30 2.06719 30H29.9273C31.0703 30 32 29.0922 32 27.982V4.01797C32 2.902344 31.0703 2 29.9273 2H29.2273ZM9.30703 25.8602H5.15078V12.4945H9.30703V25.8602ZM7.22891 10.6734C5.89453 10.6734 4.81719 9.59609 4.81719 8.26719C4.81719 6.93828 5.89453 5.86094 7.22891 5.86094C8.55781 5.86094 9.63516 6.93828 9.63516 8.26719C9.63516 9.59063 8.55781 10.6734 7.22891 10.6734ZM26.8602 25.8602H22.7094V19.3633C22.7094 17.8156 22.682 15.8195 20.5492 15.8195C18.3891 15.8195 18.0609 17.5094 18.0609 19.2539V25.8602H13.9156V12.4945H17.8969V14.3211H17.9516C18.5039 13.2711 19.8602 12.1609 21.8781 12.1609C26.0836 12.1609 26.8602 14.9281 26.8602 18.5266V25.8602Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip-linkedin">
                      <rect width="32" height="32" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="footer-social-link">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M30.1215 10.6496C30.1215 10.6496 29.848 8.71914 29.0059 7.87148C27.9395 6.75586 26.7473 6.75039 26.2004 6.68477C22.2848 6.40039 16.4059 6.40039 16.4059 6.40039H16.3949C16.3949 6.40039 10.516 6.40039 6.60039 6.68477C6.05352 6.75039 4.86133 6.75586 3.79492 7.87148C2.95273 8.71914 2.68477 10.6496 2.68477 10.6496C2.68477 10.6496 2.40039 12.9191 2.40039 15.1832V17.3051C2.40039 19.5691 2.6793 21.8387 2.6793 21.8387C2.6793 21.8387 2.95273 23.7691 3.78945 24.6168C4.85586 25.7324 6.25586 25.6941 6.8793 25.8145C9.12148 26.0277 16.4004 26.0934 16.4004 26.0934C16.4004 26.0934 22.2848 26.0824 26.2004 25.8035C26.7473 25.7379 27.9395 25.7324 29.0059 24.6168C29.848 23.7691 30.1215 21.8387 30.1215 21.8387C30.1215 21.8387 30.4004 19.5746 30.4004 17.3051V15.1832C30.4004 12.9191 30.1215 10.6496 30.1215 10.6496ZM13.5074 19.8809V12.0113L21.0707 15.9598L13.5074 19.8809Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Nav link columns */}
        <nav className="footer-nav-grid" aria-label="Footer navigation">
          {/* Product */}
          <div className="footer-nav-col">
            <span className="footer-nav-heading">Product</span>
            <a href="#" className="footer-nav-link">Overview</a>
            <a href="#" className="footer-nav-link">Attendance</a>
            <a href="#" className="footer-nav-link">Communication</a>
            <a href="#" className="footer-nav-link">Mobile Forms</a>
            <a href="#" className="footer-nav-link">Integrations</a>
            <a href="#" className="footer-nav-link">TeamSense for HR</a>
            <a href="#" className="footer-nav-link">TeamSense for Operations</a>
            <a href="#" className="footer-nav-link">Employee Call Off</a>
          </div>

          {/* Resources */}
          <div className="footer-nav-col">
            <span className="footer-nav-heading">Resources</span>
            <a href="#" className="footer-nav-link">Pricing</a>
            <a href="#" className="footer-nav-link">Blog</a>
            <a href="#" className="footer-nav-link">eBooks and Templates</a>
            <a href="#" className="footer-nav-link">Comparisons</a>
            <a href="#" className="footer-nav-link">Webinar</a>
            <a href="#" className="footer-nav-link">Product FAQ</a>
            <a href="#" className="footer-nav-link">ROI Calculator</a>
          </div>

          {/* Company */}
          <div className="footer-nav-col">
            <span className="footer-nav-heading">Company</span>
            <a href="#" className="footer-nav-link">About TeamSense</a>
            <a href="#" className="footer-nav-link">Built for Manufacturing</a>
            <a href="#" className="footer-nav-link">Careers</a>
            <a href="#" className="footer-nav-link">Diversity &amp; Inclusion</a>
            <a href="#" className="footer-nav-link">News &amp; Press</a>
            <a href="#" className="footer-nav-link">Contact</a>

            {/* Support — placed below Company in same column area */}
            <span className="footer-nav-heading footer-nav-heading--spaced">Support</span>
            <a href="#" className="footer-nav-link">Help Center</a>
            <a href="#" className="footer-nav-link">Report an Absence</a>
            <a href="#" className="footer-nav-link">System Status</a>
          </div>

          {/* Safety + SOC badge */}
          <div className="footer-nav-col">
            <span className="footer-nav-heading">Safety</span>
            <a href="#" className="footer-nav-link">Security</a>
            <a href="#" className="footer-nav-link">Website Privacy</a>
            <a href="#" className="footer-nav-link">App Privacy</a>
            <a href="#" className="footer-nav-link">App Terms of Service</a>
            <a href="#" className="footer-nav-link">Subprocessors</a>

            {/* AICPA SOC Badge */}
            <div className="footer-soc-badge" aria-label="AICPA SOC certified">
              <div className="footer-soc-badge-inner">
                <span className="footer-soc-aicpa">AICPA</span>
                <span className="footer-soc-soc">SOC</span>
                <span className="footer-soc-url">aicpa.org/soc4so</span>
                <span className="footer-soc-tagline">Service Organization</span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <style>{`
        .footer-root {
          background: #0E3F3A;
          width: 100%;
          overflow: hidden;
        }
        .footer-inner {
          display: flex;
          padding: 48px 138px;
          gap: 108px;
          align-items: flex-start;
          justify-content: center;
        }
        .footer-brand-col {
          display: flex;
          width: 284px;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          flex-shrink: 0;
        }
        .footer-search-social {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 28px;
          align-self: stretch;
        }
        .footer-search-bar {
          display: flex;
          padding: 8px 12px;
          align-items: center;
          gap: 8px;
          align-self: stretch;
          border-radius: 4px;
          border: 1px solid #145851;
          background: #FAFAFA;
          cursor: text;
        }
        .footer-search-placeholder {
          font-family: Urbanist, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.5px;
          color: #145851;
        }
        .footer-social-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .footer-social-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          opacity: 1;
          transition: opacity 0.2s;
        }
        .footer-social-link:hover {
          opacity: 0.8;
        }
        .footer-nav-grid {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 0;
          flex: 1;
        }
        .footer-nav-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex: 1;
        }
        .footer-nav-heading {
          font-family: Urbanist, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 800;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.16px;
          color: #fff;
          padding: 4px 8px;
        }
        .footer-nav-heading--spaced {
          margin-top: 20px;
        }
        .footer-nav-link {
          font-family: Urbanist, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 500;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.5px;
          color: #fff;
          text-decoration: none;
          padding: 4px 8px;
          border-radius: 4px;
          transition: opacity 0.2s;
        }
        .footer-nav-link:hover {
          opacity: 0.8;
        }
        .footer-soc-badge {
          margin-top: 24px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a8d8ea 0%, #5bb8d4 40%, #2196a8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #7ecfe0;
        }
        .footer-soc-badge-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1px;
          padding: 6px;
        }
        .footer-soc-aicpa {
          font-family: Urbanist, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 800;
          font-size: 10px;
          color: #fff;
          letter-spacing: 0.5px;
          line-height: 1;
        }
        .footer-soc-soc {
          font-family: Urbanist, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 900;
          font-size: 18px;
          color: #fff;
          line-height: 1;
        }
        .footer-soc-url {
          font-family: Urbanist, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 400;
          font-size: 6px;
          color: rgba(255,255,255,0.85);
          line-height: 1;
        }
        .footer-soc-tagline {
          font-family: Urbanist, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 400;
          font-size: 5.5px;
          color: rgba(255,255,255,0.85);
          line-height: 1;
        }

        @media (max-width: 1024px) {
          .footer-inner {
            padding: 48px 48px;
            gap: 48px;
          }
          .footer-brand-col {
            width: 220px;
          }
        }

        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column;
            padding: 40px 24px;
            gap: 40px;
          }
          .footer-brand-col {
            width: 100%;
          }
          .footer-nav-grid {
            flex-wrap: wrap;
            gap: 24px 0;
          }
          .footer-nav-col {
            flex: 0 0 50%;
            min-width: 50%;
          }
        }

        @media (max-width: 480px) {
          .footer-nav-col {
            flex: 0 0 100%;
            min-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
