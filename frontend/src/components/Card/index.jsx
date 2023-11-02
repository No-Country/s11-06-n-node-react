
// interface CustomCardProps {
//     isActive?: boolean;
//     onClick?: () => void;
//     className?: string; // className es opcional
//     children: React.ReactNode;
// }

// interface HeaderProps {
//     className?: string;
//     children: React.ReactNode;
// }

const CustomCard = ({ isActive = false, onClick, children, className }) => {

    const classIsActive = isActive ? "border-gray-950 shadow-xl" : "shadow-lg hover:border-gray-400";

    return (
        <div
            onClick={onClick}
            className={` ${classIsActive} w-full min-w-fit bg-white rounded-3xl border 
            flex-col justify-start items-end inline-flex
            gap-4 ${className}`}>
            {children}
        </div>
    )
}

const Header = ({ className, children }) => {
    return (
        <header className={`${className} w-full `}>
            {children}
        </header>
    )
}
const Body = ({ className, children }) => {
    return (
        <header className={`${className} w-full `}>
            {children}
        </header>
    )
}

const Footer = ({ className, children }) => {
    return (
        <footer className={`${className} w-full align-bottom  mt-auto`}>
            {children}
        </footer>
    )
}


CustomCard.Header = Header;
CustomCard.Body = Body;
CustomCard.Footer = Footer;

export default CustomCard