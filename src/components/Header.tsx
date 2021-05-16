const headerStyle={
  height:"200px",
  backgroundImage:"url('/assets/images/bg-header-desktop.svg')",
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center"
}

const Header:React.FC = () => {
  return (
    <header className=" w-screen bg-desaturated-cyan bg-blend-overlay " style={headerStyle}>
    </header>
  )
}

export default Header;
