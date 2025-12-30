import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");




  useEffect(() => {
    const images = document.querySelectorAll(".works-items img");
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            initIsotope();
          }
        };
      }
    });

    if (loadedCount === images.length) initIsotope();

    function initIsotope() {
      isotope.current = new Isotope(".works-items", {
        itemSelector: ".works-col",
        percentPosition: true,
        masonry: { columnWidth: ".works-col" },
        animationOptions: { duration: 750, easing: "linear", queue: false },
      });
      // Force layout immediately so all items are recognized
  isotope.current.layout();
    }

    return () => isotope.current?.destroy();
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          isotope.current?.layout(); // refresh layout
        }
      });
    });

    document.querySelectorAll(".works-item").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);



  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);


  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };


  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links"
          
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-javascript"
            )}`}
            onClick={handleFilterKeyChange("sorting-javascript")}
            data-href=".sorting-javascript"
          >
            JavaScript
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-nextjs")}`}
            onClick={handleFilterKeyChange("sorting-nextjs")}
            data-href=".sorting-nextjs"
          >
            Next.js
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-react"
            )}`}
            onClick={handleFilterKeyChange("sorting-react")}
            data-href=".sorting-react"
          >
            React
          </a>
          {/* <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-branding"
            )}`}
            onClick={handleFilterKeyChange("sorting-branding")}
            data-href=".sorting-branding"
          >
            Branding
          </a> */}
        </div>
        <div className="works-items works-masonry-items row">

          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-react ">
            <div
              className="works-item "
             
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://microbizmedia.github.io/hawaii-barbershop/">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/barbershop.png"
                        alt="barbershop kempten"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> React </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://microbizmedia.github.io/hawaii-barbershop/">
                    <a target="_blank">Barbershop Kempten</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Barbershop website with appointment booking, services,
                    portfolio, reviews, and social media integration.
                  </p>
                </div>
                <Link legacyBehavior href="https://microbizmedia.github.io/hawaii-barbershop/">
                  <a className="lnk" target="_blank">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12  sorting-nextjs ">
            <div
              className="works-item "
             
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://www.microbizmedia.com/">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/microbiz.png"
                        alt="MicroBiz Media"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Next.js </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://www.microbizmedia.com/">
                    <a target="_blank">MicroBiz Media</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Custom-built, featuring backend form
                    submissions and full Google Ads conversion tracking.
                  </p>
                </div>
                <Link legacyBehavior href="https://www.microbizmedia.com/">
                  <a className="lnk" target="_blank">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-nextjs ">
            <div
              className="works-item "
             
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://gearra.vercel.app/">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/gearra.png"
                        alt="Gearra"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Next.js </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://gearra.vercel.app/">
                    <a target="_blank">Gearra Online Store</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    E-commerce site with product database, secure login,
                    payment integration, and admin inventory management.
                  </p>
                </div>
                <Link legacyBehavior href="https://gearra.vercel.app/">
                  <a target="_blank" className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>



          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-react ">
            <div
              className="works-item "
           
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://martinstojmenovski.github.io/todo-app-chakra/">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/todo.png"
                        alt="Gearra"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> React </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://martinstojmenovski.github.io/todo-app-chakra/">
                    <a target="_blank">ToDo App</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    A to-do application built with React that saves tasks in browser storage.
                  </p>
                </div>
                <Link legacyBehavior href="https://martinstojmenovski.github.io/todo-app-chakra/">
                  <a target="_blank" className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-javascript ">
            <div
              className="works-item "
              
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://www.blueoasishealingarts.com/">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/massage_screenshot.png"
                        alt="Mozar"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> JavaScript </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://www.blueoasishealingarts.com/">
                    <a target="_blank">Blue Oasis</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    Landing page design for a mobile massage studio,
                    built from a template with a clean, modern layout.
                  </p>
                </div>
                <Link legacyBehavior href="https://www.blueoasishealingarts.com/">
                  <a target="_blank" className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-javascript ">
            <div
              className="works-item "
             
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://martinstojmenovski.github.io/snake-game/">
                    <a target="_blank">
                      <img
                        decoding="async"
                        src="assets/images/snake_game.png"
                        alt="snake game"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> JavasScript </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://martinstojmenovski.github.io/snake-game/">
                    <a target="_blank">Snake Game</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                    A classic Snake game inspired by the nostalgic Nokia 3310,
                    built using plain JavaScript. Simple,
                    and playable in the browser.
                  </p>
                </div>
                <Link legacyBehavior href="https://martinstojmenovski.github.io/snake-game/">
                  <a className="lnk" target="_blank">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>

        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works">
              <a
                className="btn "
               
              >
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
