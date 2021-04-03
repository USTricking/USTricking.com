import React from 'react';
import PersonCard from '@/components/PersonCard';
import styles from '@/styles/Home.module.css';
import useSWR from 'swr';
import { fetcher } from 'utils/fetcher';

const About = () => {
  const { data, error } = useSWR(`/api/hosts`, fetcher);
  const members = data.map((member) => <PersonCard name={member.name} image={member.image} description={member.description}/>);
  return (
    <div className='about'>
      <main className={styles.main}>
        <h2 className={styles.title}>About</h2>
        <p className={styles.description}>
          We are a group of event hosts from around the country, coming together to
          to represent Tricking in the US to the best of our ability, honoring the sport’s roots in inclusivity and community driven culture. 
          USTricking aims to make tricking more accessible to athletes in the US, whether at the elite level or just learning, through growing 
          events, fostering community interactions, and building resources for the community to expand and flourish. 
        </p>
        <h3>Who we are:</h3>
        <div className={styles.grid}>
          {members}
        </div>
      </main>
      <style jsx>{`
        .about {
          text-align: center;
        }

        h3 {
          margin: 1rem;
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
}

export default About;