import React from 'react';
import { Link } from 'react-router-dom';
import { ContactCard, ContactContainter, ContactH1, ContactIntro, SocialIcons, Icons } from 'components/ContacUs/Contact.styled'
import { Realtor, ContactInfo } from '../lib/Realtors';
import Button from '../lib/Button';

export const Contact = () => {
  return (
    <>
      <ContactH1>
        Lets stay in touch
      </ContactH1>
      <ContactCard>
        <Realtor
          src="https://i.postimg.cc/G2v9LTzN/Guru-The-Hannah.png"
          alt="Hannah Ek"
          ariaLabel="Fullstack developer Hannah" />
        <ContactContainter>
          <ContactInfo
            title="Full-stack developer"
            name="Hannah Ek"
            phone="+46 70 67 118 04"
            email="hannahek@gmail.com" />

          <ContactIntro>
        Hannah is a skilled web developer with a diverse
        professional background. <br />
        With experience in sales, e-commerce and production in Asia,
        and now as a frontend developer, Hannah brings a unique perspective
        and skill set to her work. She is a quick learner, and passionate
        about creating engaging and dynamic web experiences that leave a
        lasting impression on users. <br />
        With a sharp eye for detail and a dedication to quality, Hannah is
        a valuable asset to any team she works with.
        linkedin.com/in/sammy-olsson
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
              href="https://www.hannahek.se"
              aria-label="Link to Hannahs Portfolio"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fa-solid fa-globe" />
            </Icons>
          </SocialIcons>
        </ContactContainter>
      </ContactCard>

      <ContactCard>
        <Realtor
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
        Hannah is a skilled web developer with a diverse
        professional background. <br />
        With experience in sales, e-commerce and production in Asia,
        and now as a frontend developer, Hannah brings a unique perspective
        and skill set to her work. She is a quick learner, and passionate
        about creating engaging and dynamic web experiences that leave a
        lasting impression on users. <br />
        With a sharp eye for detail and a dedication to quality, Hannah is
        a valuable asset to any team she works with.
        linkedin.com/in/sammy-olsson
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
        <Realtor
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
        Hannah is a skilled web developer with a diverse
        professional background. <br />
        With experience in sales, e-commerce and production in Asia,
        and now as a frontend developer, Hannah brings a unique perspective
        and skill set to her work. She is a quick learner, and passionate
        about creating engaging and dynamic web experiences that leave a
        lasting impression on users. <br />
        With a sharp eye for detail and a dedication to quality, Hannah is
        a valuable asset to any team she works with.
        linkedin.com/in/sammy-olsson
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
    </>
  )
};