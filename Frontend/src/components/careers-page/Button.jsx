import { Link } from 'react-router-dom';

const Button = () => {
    const buttons = [
        {
            id: 1,
            path: '/',
            name: 'Log in',
        },
        {
            id: 2,
            path: '/',
            name: 'Sign Up',
        },
    ];

    const navigation = buttons.map(({ id, path, name }) => (
        <li key={id}>
            <Link
                to={path}
            >
                {name}
            </Link>
        </li>
    ))
    return (
        <div>
                <button>{navigation}</button>
        </div>
    )
}

export default Button