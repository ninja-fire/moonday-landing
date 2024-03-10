import Image from "next/image";
import heroillu from "../public/heroillu.png";
import Link from "next/link";
import sendicon from "../public/icons/send.svg";
import gradient from '../public/gradient.webp';
import logo from "../public/logo/moonday-logo.svg";
import looterlogo from "../public/looter/looterlogo.webp";
import looterswap from "../public/looter/looterswap.webp";
import looterMascot from "../public/looter/looterMascot.webp";
import looterTreasure from "../public/looter/lootertreasure.webp";
import lootercard from "../public/looter/lootercard.webp";
import coinhouseLogo from '../public/coinhouse/coinhouselogo.svg';
import coinhouseMockup from '../public/coinhouse/coinhouse-mockup-pages.webp';
import coinhouseCoins from '../public/coinhouse/coinhouseCoins.webp';
import coinhouseGallery from '../public/coinhouse/Coinhouse-gallery.webp';
import coinhouseCarte from '../public/coinhouse/cartevoeux-gallery.webp';
import kpi1 from '../public/kpi/kpi1.svg';
import kpi2 from '../public/kpi/kpi2.svg';
import kpi3 from '../public/kpi/kpi3.svg';
import kpi4 from '../public/kpi/kpi4.svg';
import marketing1 from '../public/marketing/marketing1.webp';
import marketing2 from '../public/marketing/marketing2.webp';
import marketing3 from '../public/marketing/marketing3.webp';
import marketing4 from '../public/marketing/marketing4.webp';
import hydnlogo from '../public/logopartners/hydnlogo.svg';
import bhlogo from '../public/logopartners/bhlogo.svg';
import block3logo from '../public/logopartners/block3logo.png';
import radishlogo from '../public/logopartners/radishlogo.svg';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center px-4 md:px-20 xl:px-40 overflow-hidden w-full h-screen">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-20 md:gap-0 pt-20 h-full w-full">
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-6">
              <h1>Forge Your Web3 Identity</h1>
              <h2 className="text-base text-caption font-medium">Where Innovative Design and Strategic Social Presence Amplify Your Brand's Voice.</h2>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
                  <span className="text-start text-sm font-medium text-label">Branding</span>
                </div>
                <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
                  <span className="text-start text-sm font-medium text-label">UX/UI design</span>
                </div>
                <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
                  <span className="text-start text-sm font-medium text-label">Marketing Strategy</span>
                </div>
                <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
                  <span className="text-start text-sm font-medium text-label">Community Building</span>
                </div>
              </div>
            </div>
            <Link href="https://t.me/moondaydesign" target="_blank"
              className="flex buttonBG transition-all justify-center items-center p-0.5 rounded-full overflow-hidden shadow-whitepers active:shadow-none w-fit">
              <div className="bgeffect flex gap-2 transition-all justify-center items-center pr-16 pl-12 py-4 bg-bodybg rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
                <Image priority src={sendicon} width={24} height={24} alt='' />
                <span className="inline">Press to chat</span>
              </div>
            </Link>
          </div>
          <div className="flex relative w-full h-full items-start md:items-center justify-center">
            <Image priority src={heroillu} width={2628} height={2226} alt='' className="flex absolute md:scale-[250%] scale-125 lg:scale-150 2xl:scale-125 left-0 md:left-60 lg:left-20 2xl:left-40" />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 md:px-20 xl:px-40 gap-6 items-center justify-center">
        <p className="text-start text-md font-semibold text-caption">Our global hub</p>
        <div className="flex flex-wrap gap-0 md:gap-16 justify-center items-center">
          <Link href="https://hydnsec.com/" target="blank" className="flex justify-center items-center"><Image src={hydnlogo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
          <Link href="https://www.blockhubdao.com/" target="blank" className="justify-center items-center"><Image src={bhlogo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
          <Link href="https://block3.pr/" target="blank" className="flex justify-center items-center"><Image src={block3logo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
          <Link href="https://radish.la/" target="blank" className="flex justify-center items-center"><Image src={radishlogo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
        </div>
      </div>

      <div className="bgeffect flex flex-col text-center gap-8 py-16 px-8 md:py-20 md:px-40 items-center justify-center rounded-[64px] md:rounded-full bg-bodybg noise border border-transparentbg w-[100vw]">
        <h2>Exceptional branding and intuitive interfaces are non-negotiables in Web3.</h2>
        <p className="text-base text-caption font-medium">You want to lead mass adoption with unmatched UX.</p>
        <Link href="https://t.me/moondaydesign" target="_blank"
          className="flex buttonBG transition-all justify-center items-center p-0.5 rounded-full overflow-hidden shadow-whitepers active:shadow-none">
          <div className="flex gap-2 transition-all justify-center items-center pr-16 pl-12 py-4 bg-bodybg w-full rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
            <Image priority src={sendicon} width={24} height={24} alt='' />
            <span className="inline">Press to chat</span>
          </div>
        </Link>
      </div>

      <div className="flex flex-col px-4 md:px-20 xl:px-40 gap-8 w-full">
        <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
          <p className='text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500'>Unleash the power of first impressions</p>
          <h2>All you need for your launch</h2>
          <p className="text-sm font-medium text-caption"> Step into the arena armed with the ultimate launch toolkit. Our battle-tested landing pages are designed to maximize conversions and pump your project to the moon. From captivating designs to strategic UX, we've got you covered.</p>
          <div className="flex gap-2 w-full flex-wrap">
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Branding</span>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">UX/UI Design</span>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">3D Design</span>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Pitch Deck</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-6 flex-wrap lg:flex-nowrap">
            <div className="flex grow lg:grow-0 flex-nowrap relative rounded-3xl justify-center items-center h-80 w-[40rem] overflow-hidden bg-background border border-transparentbg shadow-whitebox">
              <Image priority={true} src={looterlogo} width={2500} height={1562} alt="" className="flex absolute w-full scale-[140%] hover:scale-[144%] transition-all ease-in hover:brightness-[1.16]" />
            </div>
            <div className="flex grow flex-nowrap relative w-full rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-whitebox">
              <Image priority={true} src={looterswap} width={2500} height={1562} alt="" className="flex absolute w-full scale-[180%] md:scale-[100%] md:hover:scale-[104%] transition-all ease-in hover:brightness-[1.16]" />
            </div>
          </div>
          <div className="flex gap-6 flex-wrap lg:flex-nowrap">
            <div className="flex grow flex-nowrap relative rounded-3xl justify-center items-center h-80 w-full overflow-hidden bg-background border border-transparentbg shadow-whitebox">
              <Image priority={true} src={lootercard} width={2500} height={1801} alt="" className="flex absolute w-full scale-[180%] hover:scale-[184%] md:scale-[112%] md:hover:scale-[116%] transition-all ease-in hover:brightness-[1.16]" />
            </div>
            <div className='flex gap-6 flex-wrap md:flex-nowrap w-full'>
              <div className="flex grow-0 relative w-full md:w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-whitebox">
                <Image priority={true} src={looterTreasure} width={1080} height={1080} alt="" className="flex absolute w-full scale-[180%] top-40 hover:scale-[184%] transition-all ease-in hover:brightness-[1.16]" />
              </div>
              <div className="flex grow-0 relative w-full md:w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-whitebox">
                <Image priority={true} src={looterMascot} width={1080} height={1080} alt="" className="flex absolute w-full scale-[180%] top-24 hover:scale-[184%] transition-all ease-in hover:brightness-[1.16]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 md:px-20 xl:px-40 gap-8 w-full">
        <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
          <p className='text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500'>Enhancing Brand Engagement</p>
          <h2>Connecting brands with communities</h2>
          <p className="text-sm font-medium text-caption">Unleash the full potential of your brand's identity with our transformative design strategies. From revitalizing your visual identity to crafting engaging social media experiences, we'll help you forge a path that leads to unparalleled brand success.</p>
          <div className="flex gap-2 w-full flex-wrap">
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Rebranding</span>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Landing Page</span>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Social Content</span>
            </div>
            <div className="flex px-4 py-2 rounded-xl bg-transparentbg border border-transparentbg shadow-lg backdrop-blur-[1px]">
              <span className="text-start text-sm font-medium text-label">Motion Design</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-6 flex-wrap lg:flex-nowrap">
            <div className="group flex grow lg:grow-0 flex-nowrap relative rounded-3xl justify-center items-center h-80 w-[40rem] overflow-hidden bg-white border border-transparentbg shadow-whitebox">
              <Image priority={true} src={coinhouseLogo} alt="" className="scale-[80%] group-hover:scale-[84%] transition-all ease-in" />
            </div>
            <div className="flex grow flex-nowrap relative w-full rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-whitebox">
              <Image priority={true} src={coinhouseMockup} width={3000} height={2000} alt="" className="flex absolute w-full scale-[140%] md:scale-[100%] md:hover:scale-[104%] transition-all ease-in hover:brightness-[1.04]" />
            </div>
          </div>
          <div className="flex gap-6 flex-wrap lg:flex-nowrap">
            <div className="flex grow flex-nowrap relative rounded-3xl justify-center items-center h-80 w-full overflow-hidden bg-background border border-transparentbg shadow-whitebox">
              <Image priority={true} src={coinhouseGallery} width={2694} height={2022} alt="" className="flex absolute w-full scale-[120%] md:scale-[100%] md:hover:scale-[104%] transition-all ease-in hover:brightness-[1.04]" />
            </div>
            <div className='flex gap-6 flex-wrap md:flex-nowrap w-full'>
              <div className="flex grow-0 relative w-full md:w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-whitebox">
                <Image priority={true} src={coinhouseCoins} width={1225} height={1500} alt="" className="flex absolute w-full scale-[108%] hover:scale-[112%] transition-all ease-in hover:brightness-[1.04]" />
              </div>
              <div className="flex grow-0 relative w-full md:w-6/12 rounded-3xl justify-center items-center h-80 overflow-hidden bg-background border border-transparentbg shadow-whitebox">
                <Image priority={true} src={coinhouseCarte} width={2694} height={2022} alt="" className="flex absolute w-full scale-[180%] hover:scale-[184%] transition-all ease-in hover:brightness-[1.04]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bgeffect flex flex-col text-center gap-8 py-16 px-8 md:py-20 md:px-40 items-center justify-center rounded-[64px] md:rounded-full bg-bodybg noise border border-transparentbg w-[100vw]">
        <h2>Unlock explosive growth with creativity and interactivity at the core of your social media strategy.</h2>
        <p className="text-base text-caption font-medium">Leverage video content, foster community bonds, and cultivate Web3 partnerships to drive success.</p>
        <Link href="https://t.me/moondaydesign" target="_blank"
          className="flex buttonBG transition-all justify-center items-center p-0.5 rounded-full overflow-hidden shadow-whitepers active:shadow-none">
          <div className="flex gap-2 transition-all justify-center items-center pr-16 pl-12 py-4 bg-bodybg w-full rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
            <Image priority src={sendicon} width={24} height={24} alt='' />
            <span className="inline">Press to chat</span>
          </div>
        </Link>
      </div>

      <div className="flex flex-col gap-40 px-4 md:px-20 xl:px-40">
        <div className="flex flex-col gap-6 justify-center items-center">
          <p className="text-start text-md font-semibold text-caption">In collaboration with</p>
          <Link href="https://block3.pr/" target="blank" className="flex justify-center items-center"><Image src={block3logo} alt="" width={294} height={104} className="opacity-80 hover:opacity-100 scale-50 md:scale-75 ld:scale-90" /></Link>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-6 items-center justify-center">
          <div className='flex gap-6 flex-wrap md:flex-nowrap w-full'>
            <div className="flex flex-col w-full md:w-6/12 grow rounded-3xl p-8 pb-4 h-[24rem] sm:h-[32rem] md:h-[20rem] justify-between overflow-hidden bg-background border border-transparentbg shadow-whitebox">
              <div className="flex flex-col gap-2">
                <h3>In the last 6 months</h3>
              </div>
              <div className="flex relative items-center justify-center w-full h-full">
                <Image priority={true} src={kpi1} width={640} height={500} alt="" className="absolute scale-150" />
              </div>
            </div>
            <div className="flex flex-col w-full md:w-6/12 grow rounded-3xl p-8 pb-4 h-[24rem] sm:h-[32rem] md:h-[20rem] justify-between overflow-hidden bg-background border border-transparentbg shadow-whitebox">
              <div className="flex flex-col gap-2">
                <h3>15+</h3>
                <p className="text-base text-caption font-medium">B2B partnerships implemented</p>
              </div>
              <div className="flex relative items-center justify-center w-full h-full">
                <Image priority={true} src={kpi2} width={640} height={500} alt="" className="absolute scale-150" />
              </div>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap md:flex-nowrap w-full">
            <div className="flex flex-col w-full md:w-6/12 grow rounded-3xl p-8 pb-4 h-[24rem] sm:h-[32rem] md:h-[20rem] justify-between overflow-hidden bg-background border border-transparentbg shadow-whitebox">
              <div className="flex flex-col gap-2">
                <h3>154%</h3>
                <p className="text-base text-caption font-medium">social audience reach growth</p>
              </div>
              <div className="flex relative items-center justify-center w-full h-full">
                <Image priority={true} src={kpi3} width={640} height={500} alt="" className="absolute scale-110" />
              </div>
            </div>
            <div className="flex flex-col w-full md:w-6/12 grow rounded-3xl p-8 pb-4 h-[24rem] sm:h-[32rem] md:h-[20rem] justify-between overflow-hidden bg-background border border-transparentbg shadow-whitebox">
              <div className="flex flex-col gap-2">
                <h3>44k+</h3>
                <p className="text-base text-caption font-medium">organic social post engagement generated</p>
              </div>
              <div className="flex relative items-center justify-center w-full h-full">
                <Image priority={true} src={kpi4} width={640} height={500} alt="" className="absolute scale-110" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
            <p className='text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500'>Take an intelligent approach to your content strategy</p>
            <h2>Focus on Business Development</h2>
            <p className="text-sm font-medium text-caption">Let us create unique partnerships involving the different spaces of the Web3 ecosystem to drive your business growth, and trust us to create interactive content to promote them.</p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex gap-6 flex-wrap lg:flex-nowrap">
              <div className="flex rounded-3xl justify-center items-center overflow-hidden bg-background border border-transparentbg shadow-whitebox">
                <Image priority={true} src={marketing1} width={848} height={736} alt="" className="" />
              </div>
              <div className="flex grow rounded-3xl justify-center items-center overflow-hidden bg-background border border-transparentbg shadow-whitebox">
                <Image priority={true} src={marketing2} width={1280} height={720} alt="" className="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
            <p className='text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500'>Understand how to highlights your achievements</p>
            <h2>Grow your hype</h2>
            <p className="text-sm font-medium text-caption">We know how to design high quality content to maximize the hype around your updates & announcements</p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex w-full grow rounded-3xl justify-center items-center overflow-hidden bg-background border border-transparentbg shadow-whitebox">
              <Image priority={true} src={marketing3} width={1280} height={720} alt="" className="w-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-4 justify-center max-w-screen-sm">
            <p className='text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500'>Build your interactive army</p>
            <h2>Community building is always evolving</h2>
            <p className="text-sm font-medium text-caption">You want to design the best Web3 strategies, using the right tools and trends in order to build a strong and proactive community that will help you reach your goals!</p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex w-full rounded-3xl justify-center items-center overflow-hidden bg-background border border-transparentbg shadow-whitebox">
              <Image priority={true} src={marketing4} width={1280} height={720} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="bgeffect flex flex-col text-center gap-8 py-16 px-8 md:py-20 md:px-40 items-center justify-center rounded-[64px] md:rounded-full bg-bodybg noise border border-transparentbg w-[100vw]">
        <h2>Have questions or interested in a collaboration?</h2>
        <p className="text-base text-caption font-medium">Let's leverage the right tools to foster trust and seamless communication. Connect with us on Telegram.</p>
        <Link href="https://t.me/moondaydesign" target="_blank"
          className="flex buttonBG transition-all justify-center items-center p-0.5 rounded-full overflow-hidden shadow-whitepers active:shadow-none">
          <div className="flex gap-2 transition-all justify-center items-center pr-16 pl-12 py-4 bg-bodybg w-full rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
            <Image priority src={sendicon} width={24} height={24} alt='' />
            <span className="inline">Press to chat</span>
          </div>
        </Link>
      </div>
    </>
  );
}