import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Cheatsheets",
    Svg: require("@site/static/img/Editing body text-amico.svg").default,
    description: (
      <>
        Cheatsheets or popular programming languages, frameworks and development
        tools.
      </>
    ),
  },
  {
    title: "Interview Questions",
    Svg: require("@site/static/img/Interview-bro.svg").default,
    description: (
      <>Most Asked Front end Developer Interview Questions and Answers.</>
    ),
  },
  {
    title: "Roadmaps",
    Svg: require("@site/static/img/Paper map-amico.svg").default,
    description: (
      <>Step by step guide to becoming a modern frontend developer</>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section> 
    </>
  );
}
