import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <div className='layout'>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, width=device-width, initial-scale=1'
        />
        <meta
          name='keywords'
          content='US Tricking, USTRICKING, usa tricking, martial arts tricking, usa, tricking'
        />
        <meta
          name='description'
          content='Official website of US Tricking'
        />
        <meta charSet='utf-8'/>
      </Head>
      <Header/>
      <div className='container'>
        {props.children}
      </div>
      <Footer/>
      <style jsx>{`
        .container {
          margin: 0 auto;
          min-height: 100vh;
          padding: 5rem 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Layout;
