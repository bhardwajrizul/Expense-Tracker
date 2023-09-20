import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge';

function Button({children ,className ,...rest}) {
    let classes = twMerge(`bg-teal-400 ease-in-out duration-100 text-white rounded 
    px-8 py-2 ms-4 hover:bg-teal-600 ms-auto ${className}`)
    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}

export default Button;

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    rest: PropTypes.object,
}