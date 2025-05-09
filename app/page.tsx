import Category from "@/components/Category";
import Header from "@/components/Header";
import KasamaCollection from "@/components/KasamaCollection";
import Shop from "@/components/Shop";

export default function Home() {
  return (
    <>
      <Header />
      <div className="hidden lg:block">
        <Category />
        <Shop />
        <KasamaCollection/>
      </div>
    </>
  );
}
