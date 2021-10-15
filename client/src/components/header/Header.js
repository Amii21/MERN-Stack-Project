import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
        <span className="headerTitleSm">Magic Book</span>
        <span className="headerTitleLg">LIBRARY</span>
      </div>
      <img
        className="headerImg"
        src="https://source.unsplash.com/o0Qqw21-0NI/1600x900"
        alt="header" />
        </div>
    )
}

export default Header;
