import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn.js";
import "./Wobble-card.css";

export const WobbleCard = ({
                               text,
                               title,
                               image,
                               children,
                               containerClassName,
                               className,
                           }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (clientX - (rect.left + rect.width / 2)) / 20;
        const y = (clientY - (rect.top + rect.height / 2)) / 20;
        setMousePosition({ x, y });
    };

    return (
        <motion.section
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
            }}
            style={{
                transform: isHovering
                    ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
                    : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                transition: "transform 0.1s ease-out",
            }}
            className={cn("wobble-card-container", containerClassName)}
        >
            <div
                className="wobble-card-inner"
                style={{
                    boxShadow: "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
                }}
            >
                <div className="wobble-card-image-container">
                    <img
                        src={image}
                        alt={title}
                        className="wobble-card-image"
                    />
                </div>
                <div className="wobble-card-content">
                    <h2 className="wobble-card-title">{title}</h2>
                    <p className="wobble-card-text">{text}</p>
                </div>
            </div>
            <motion.div
                style={{
                    transform: isHovering
                        ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
                        : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                    transition: "transform 0.1s ease-out",
                }}
                className={cn("wobble-card-children", className)}
            >
                {children}
            </motion.div>
        </motion.section>
    );
};

WobbleCard.propTypes = {
    children: PropTypes.node.isRequired,
    containerClassName: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
};

export default WobbleCard;