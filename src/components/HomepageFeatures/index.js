import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Think and note down the questions you are seeking answers for before the meeting.

      </>
    ),
  },
  {
    title: 'Choose your plan',
    Svg: require('@site/static/img/Chooseplan.svg').default,
    description: (
      <>
        Select the plan as per your needs from the options
      </>
    ),
  },
  {
    title: 'Make payment and book your appointment',
    Svg: require('@site/static/img/QR2.svg').default,
    description: (
      <>
        Make your payment to this QR code and send us a screenshot on this number.
      </>
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
