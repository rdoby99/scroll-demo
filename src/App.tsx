import { useRef } from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import "./App.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const smoother = useRef();

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });

      // So you can observe the scrollY position
      const handleScroll = () => {
        console.log(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
    },
    { scope: main }
  );

  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <div className="h-screen w-full bg-blue-500">a</div>
          <div className="h-screen w-full bg-red-500 flex items-center justify-center">
            <Dialog>
              <DialogTrigger className="w-[100px] h-[100px] bg-white">
                Open
              </DialogTrigger>
              <DialogContent className="flex flex-col w-full">
                <DialogTitle>Lorem</DialogTitle>
                <DialogDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
          <div className="h-screen w-full bg-green-500">c</div>
        </div>
      </div>
    </>
  );
}

export default App;
