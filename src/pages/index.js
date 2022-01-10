import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Mục đích của Crypto Blog</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Crypto Blog là nơi mình viết về những bài học, trải nghiệm đầu tư trong thị trường Crypto. Xa hơn là một thư viện nơi mình tổng hợp các kiến thức sau một thời gian đầu tư và tham gia vào thị trường Crypto.
      </>
    ),
  },

  {
    title: <>Bài học, trải nghiệm đầu tư</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
       ...
      </>
    ),
  },

  {
    title: <>Xây dựng cộng đồng</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>  
        ...       
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Homepage`}
      description="Edward Tran's Front-end Blog about Front-end topics, included: HTML5, CSS3, Responsive, Boostrap, SCSS, Git, JavaScript, ReactJS and many things ...">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Khám phá nào!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
