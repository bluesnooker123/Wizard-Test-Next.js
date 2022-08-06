import { PureComponent } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface layoutProps {
  className?: string;
}

export default class Layout extends PureComponent<layoutProps> {
  render() {
    const className = this.props.className ?? "";
    return (
      <div id="layout" className="layout">
        <Header title="Test Project using Next.js + TailwindCSS" description="Test Project using Next.js + TailwindCSS for CoverGo"/>
        <Navbar />
        <div className={className}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
