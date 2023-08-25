import "./styles.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";
import Image from "./Image";
import Link from "./components/Link";

// export default function App() {
//   return (
//     <>
//       <Header>
//         <Logo src={logo} alt="logo" /><Image></Image></Logo>
//         <Navigation>
//           <Link href="#home">Home</Link>
//           <Link href="#about">About</Link>
//           <Link href="#impressum">Impressum</Link>
//         </Navigation>
//         <Avatar src={avatar} alt="avatar"></Avatar>
//       </Header>
//       <main>content goes here…</main>
//     </>
//   );
// }

export default function App() {
  return (
    <>
      <Header>
        <Logo></Logo>
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar></Avatar>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
