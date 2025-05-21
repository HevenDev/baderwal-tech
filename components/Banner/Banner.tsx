
type Props = {
  title: string;
};
const Banner = ({ title }: Props) => {
    return (
        <>
            <section className="pt-[4rem]! pb-[5rem]! bg-blue-200 relative">
                <div className=" flex flex-col items-center b_container">
                    <h1 className="text-[5rem] leading-none font-light">{title.toUpperCase()}</h1>
                    <p className="text-sm ml-[16px]! tracking-[15px]">BADERWAL</p>
                </div>
                <div className="triangle-small"></div>
            </section>
        </>
    )
}

export default Banner;