import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import PortfolioGrid from "@/components/portfolio-grid";
export const metadata = { title: "Portfolio" };
export default function PortfolioPage(){return(<div className="py-14"><Container><SectionHeading eyebrow="Results" title="Projects with polish and performance" subtitle="Replace these with your real projects. Each card supports motion and a clean tech visual style." /><div className="mt-8"><PortfolioGrid /></div></Container></div>);} 
