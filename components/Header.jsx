import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div id='navbar'>
        <Link href='/'>
          <div className='nav-button' id='home-button'>
            <b>US</b>TRICKING
          </div>
        </Link>
        <div className='links'>
          <Link href='/about'>
            <div className='nav-button'>
              ABOUT
            </div>
          </Link>
          <Link href='/events'>
            <div className='nav-button'>
              EVENTS
            </div>
          </Link>
          <Link href='/resources'>
            <div className='nav-button'>
              RESOURCES
            </div>
          </Link>
          <Link href='/directory'>
            <div className='nav-button'>
              DIRECTORY
            </div>
          </Link>
        </div>
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        header {
          position: fixed;
          right: 0;
          left: 0;
          top: 0;
          z-index: 1;
          margin-top: 0;
          margin-bottom: 0;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
          background-color: white;
        }

        #navbar {
          margin-top: 0;
        }

        .nav-button {
          display: inline-block;
          padding: 1em;
          cursor: pointer;
        }

        .links {
          float: right;
        }

        #home-button {
          float: left;
        }

      `}</style>
    </header>
  )
}

export default Header;