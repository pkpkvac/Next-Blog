import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/self.jpeg' alt='Me' width={300} height={300} />
      </div>
      <h1>Peter's NextJS Blog Project</h1>
      <p>
        This is an experimental blog built using NextJS and React, it uses
        Static Props, Server Side Props, and is a reference for using NextJS
        features and structuring Components effectively
      </p>
    </section>
  );
}

export default Hero;
