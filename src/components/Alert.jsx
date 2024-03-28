// import css from "./Alert.module.css";
// import clsx from "clsx";
// import { HiUser } from "react-icons/hi";

// const UserMenu = ({ name }) => {
//   return (
//     <div>
//       <p><HiUser className="my-icon" size="24" /> {name}</p>
//     </div>
//   );
// };
// console.log(css); // { alert: "Alert_alert_ax7yz" }

// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   color: "white"
// };

// const getBgColor = (variant) => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

// // export const Alert = ({ variant, children }) => {
// //   return (
// //     <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
// //       {children}
// //     </p>
// //   );
// // };



// const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(css[variant], {
//         [css.isOutlined]: outlined,
//         [css.isElevated]: elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };