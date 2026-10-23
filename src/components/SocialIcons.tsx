import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { config } from "../config";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href={config.contact.github || "#"} target={config.contact.github ? "_blank" : undefined} rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href={config.contact.linkedin || "#"} target={config.contact.linkedin ? "_blank" : undefined} rel="noopener noreferrer" style={!config.contact.linkedin ? { pointerEvents: "none", opacity: 0.6 } : {}}>
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href={config.contact.twitter || "#"} target={config.contact.twitter ? "_blank" : undefined} rel="noopener noreferrer" style={!config.contact.twitter ? { pointerEvents: "none", opacity: 0.6 } : {}}>
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href={config.contact.facebook || "#"} target={config.contact.facebook ? "_blank" : undefined} rel="noopener noreferrer" style={!config.contact.facebook ? { pointerEvents: "none", opacity: 0.6 } : {}}>
            <FaFacebookF />
          </a>
        </span>
        <span>
          <a href={config.contact.instagram || "#"} target={config.contact.instagram ? "_blank" : undefined} rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button" href="#">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
