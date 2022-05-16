import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-text-container">
          <p className="about-title">Sveiki,</p>
          <p className="about-subtitle">aš esu Jelena</p>
          <ul className="about-text">
            <li className="about-text-list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 about-checkmark"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Pilnai kvalifikuota masažuotoja ir profesionali kinezeterapeutė.</span>
            </li>
            <li className="about-text-list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 about-checkmark"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>32 metų ir 15,000 valandų patirtis.</span>
            </li>
            <li className="about-text-list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 about-checkmark"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Draugiška, linksma, švelniom rankom, taip toliau t.t.</span>
            </li>
            <li className="about-text-list-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 about-checkmark"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum quae dicta
                repellendus cumque sit nostrum aliquam aliquid libero eveniet?
              </span>
            </li>
          </ul>

          <button className="about-btn">Išsami informacija</button>
        </div>
        <div className="about-image-container">
          <img className="about-image" src="/images/profile.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
}
