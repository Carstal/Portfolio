class Nav extends React.Component {
    render() {
    return(
    <div className={styles.nav}>
    <div>
        <h4>
        Carlo Staltari
        </h4>
    </div>
    <nav>
        <ul>
        <li onClick={() => router.push({
            pathname: './'})}>Home</li>
        <li onClick={() => router.push({
            pathname: '/projects'})}>Projects</li>
        <li>Contact</li>
        </ul>
    </nav>
    </div>
    );
    }
}