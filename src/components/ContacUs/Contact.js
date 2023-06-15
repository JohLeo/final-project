import React from 'react';
import { Link } from 'react-router-dom';
import { ContactPage, ContactCard, ContactContainter, ContactH1, ProfileImg, ContactIntro, SocialIcons, Icons } from 'components/ContacUs/Contact.styled'
import { ContactInfo } from '../lib/Realtors';
import Button from '../lib/Button';

export const Contact = () => {
  return (
    <ContactPage>
      <ContactH1>
        Let&apos;s stay in touch
      </ContactH1>
      <ContactCard>
        <ProfileImg
          src="https://i.postimg.cc/G2v9LTzN/Guru-The-Hannah.png"
          alt="Hannah Ek"
          ariaLabel="Fullstack developer Hannah" />
        <ContactContainter>
          <ContactInfo
            title="Full-stack developer"
            name="Hannah Ek"
            phone="+46 70 67 118 04"
            email="ekhannahek@gmail.com" />

          <ContactIntro>
          Hannah is a skilled web developer with a diverse professional
          background. With experience in sales, e-commerce, and production in Asia,
          and now as a full-stack developer, she brings a unique perspective and
          skill set to her work.<br /><br />

          She is not only a quick learner but also highly
          effective, consistently delivering exceptional results.
          Her passion for web development shines through in her ability to
          create engaging and dynamic web experiences that leave a lasting
          impression on users. Her positive attitude and enthusiasm are contagious,
          bringing a sense of energy and collaboration to every project she undertakes.<br /><br />

          With a dedication to quality, she ensures that every aspect of her
          work is meticulously crafted. She stays updated with the latest industry trends
          and technologies, allowing her to deliver innovative solutions. <br /><br />

          With Hannah&apos;s ability to adapt quickly to new challenges and her strong
          problem-solving skills make her a valuable asset to any team she works with.
          </ContactIntro>
          <SocialIcons>
            <Icons
              href="https://www.linkedin.com/in/hannah-ek-91667434/"
              aria-label="Link to Hannahs Linkedin"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in" />
            </Icons>

            <Icons
              href="https://github.com/Nahnahke/Nahnahke"
              aria-label="Link to Johannas GitHub"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-github" />
            </Icons>

            <Icons
              href="https://www.hannahek.com"
              aria-label="Link to Hannahs Portfolio"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-solid fa-globe" />
            </Icons>
          </SocialIcons>
        </ContactContainter>
      </ContactCard>

      <ContactCard>
        <ProfileImg
          src="https://i.postimg.cc/hv7YgFkr/Sammy-The-Sally.png"
          alt="Sammy Olsson"
          ariaLabel="Fullstack developer Sammy" />
        <ContactContainter>
          <ContactInfo
            title="Full-stack developer"
            name="Sammy olsson"
            phone="+46 73 99 340 15"
            email="sammyolsson@gmail.com" />

          <ContactIntro>
          Sammy is a talented full-stack developer with a knowledge
          to create exceptional web applications.
          What sets Sammy apart is not just technical expertise but also
          a patient and collaborative approach.<br />
          He has a project-oriented mindset that drives success from
          start to finish. Whether it&apos;s front-end development,
          back-end architecture, or effective team coordination,
          Sammy consistently delivers high-quality results.<br /><br />

          He is also an experienced IT consultant with a proven track
          record of delivering successful projects across various
          industries. With over a decade of experience in the field,
          He is specialized in Microsoft 365, low-code development,
          and automation using Power Apps and Power Automate.<br /><br />

          With Sammy on board, you can trust that your projects are
          in capable hands, guided by a meticulous attention to detail
          and a commitment to excellence.
          </ContactIntro>
          <SocialIcons>
            <Icons
              className="icon"
              href="https://www.linkedin.com/in/sammy-olsson"
              aria-label="Link to Sammys Linkedin"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in" />
            </Icons>

            <Icons
              className="icon"
              href="https://github.com/sammyolsson"
              aria-label="Link to Johannas GitHub"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-github" />
            </Icons>

            <Icons
              href="https://www.sammy.se"
              aria-label="Link to Sammys Portfolio"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-solid fa-globe" />
            </Icons>
          </SocialIcons>
        </ContactContainter>
      </ContactCard>

      <ContactCard>
        <ProfileImg
          src="https://i.postimg.cc/T19wm8zJ/Jojo.png"
          alt="Johanna leonsson"
          ariaLabel="Fullstack developer Johanna" />
        <ContactContainter>
          <ContactInfo
            title="Full-stack developer"
            name="Johanna Leonsson"
            phone="+46 70 63 800 47"
            email="johanna@leonsson.se" />

          <ContactIntro>
          Johanna is a dynamic full-stack developer with a
          strong set of technical skills and a creative mindset.
          With a background in communications and design, she brings
          a fresh perspective to web development projects.
          Having worked in various industries and roles, she understands
          the power of collaboration and is committed to delivering
          exceptional results.<br /><br />
          Her eagerness to develop and learn, combined with her
          understanding of user experience and a keen eye for aesthetics,
          allows her to create immersive and visually captivating web experiences.
          Alongside her technical expertise, her effective communication and
          attention to detail make her an invaluable asset to any development team.<br /><br />

          With Johanna&apos;s dedication to problem-solving and her passion for
          delivering high-quality projects, you can trust that your
          web development needs will be met with excellence and precision.
          </ContactIntro>
          <SocialIcons>
            <Icons
              className="icon"
              href="https://www.linkedin.com/in/johannaleonsson/"
              aria-label="Link to Johannas Linkedin"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in" />
            </Icons>

            <Icons
              className="icon"
              href="https://github.com/JohLeo"
              aria-label="Link to Johannas GitHub"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-github" />
            </Icons>

            <Icons
              href="https://cute-tanuki-3671a1.netlify.app"
              aria-label="Link to Johannas Portfolio"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-solid fa-globe" />
            </Icons>
          </SocialIcons>
        </ContactContainter>
      </ContactCard>

      <Link to="/">
        <Button
          type="submit"
          text="Back" />
      </Link>
    </ContactPage>
  )
};