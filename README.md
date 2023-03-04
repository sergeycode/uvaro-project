<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]

<div align="center">

  <h3 align="center">Uvaro Interview Project</h3>

  <p align="center">
    Next.js project to highlight my latest skills
  </p>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

1. To showcase my relevant skills, I chose to use Next.js and TypeScript.
2. I utilized Chakra UI for styling since I had experience working with it for the past two years, and it saved me time in building the UI.
3. Since I have previously used a similar setup for my recent side projects, I started my current project using my previously created package.json as a starting point. It includes dependencies for Next.js, Chakra UI components library with dependencies, and several TypeScript dependencies. The dev dependencies include jest, react testing library, and prettier.
4. Next, I set up the Chakra UI theme with theme tokens. I identified the fonts and brand colors from the design and used the Tailwind Shades plugin to create shades out of these colors for future use. I also added a custom container width and breakpoints based on my previous experience with Bootstrap (later I added anoher breakpoint for extra large screens as 4 columns did not fit nicely).
5. Then, I imported the theme into the main app to wrap it as a Chakra Provider for styling.
6. After that, I copied the basic setup for TypeScript, Jest, ESlint, and Prettier.
7. Bootstrapping this project from previous experience probably saved me hours. And only took 10 min.
8. I started coding with a mobile-first approach, beginning with the Hero section.
9. I followed a file structure logic for this project, organizing UI components into folders based on component/itemType/item, and putting sections into features/folderName.
10. I cropped and optimized the images used for the project, removed the background from the person icon, and moved them to an images folder for future use.
11. I created the Hero component, setting the background image as the container background with a height of 100vh. I matched the dark section of the gradient to the padding of the inner container so that the text would not expand beyond the transparent edge of the image, ensuring readability. The component was simplified for this project but could be extended with a dark area % based on the text length. For now, I assume that the Hero component can be reused on other pages with similar text length.
12. For the Trending Categories section, I decided to create a component for the PageSection to reuse padding and with background color customization for the next sections. I put the Trending Categories into the features folder and the CategoryCard into components/Cards. The data was added into a separate file, and the TypeScript interfaces were kept closer to where they are used.
13. I followed the same logic for the Upcoming Events section, and I extracted the SVG icons from the PDF file and wrapped it into a Chakra UI Icon to control the color.
14. The Testimonial section was made as a component instead of a feature. I decided to make the circle images into components for site performance.
15. Now it was time to add tests to showcase my skills. I added couple of simple tests to check if they are rendering and if the data is being passed correctly.
16. The last part was to add Readme file and zip everything up. But I also decided to deploy the project to Vercel to showcase my skills in CI/CD. Also it would be easier for show this project to the team without deploying it locally.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![react][react]][react-url]
- [![Next.js][next-js]][next-js-url]
- [![ChakraUI][chakraui]][chakraui-url]
- [![Typescript][typescript]][typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Installation

1. Clone the repo
   ```sh
   git clone git@github.com:sergeycode/uvaro-project.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. For dev mode run
   ```sh
   npm run dev
   ```
4. For Jest tests run
   ```sh
   npm run test
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Twitter - [@sergeycode](https://twitter.com/sergeycode)

Project Link: [https://github.com/sergeycode/uvaro-project](https://github.com/sergeycode/uvaro-project)

Github pages - [https://sergeycode.github.io/](https://sergeycode.github.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[react-url]: https://reactjs.org/
[next-js-url]: https://nextjs.org/
[typescript-url]: https://www.typescriptlang.org/
[chakraui-url]: https://chakra-ui.com/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/sergeyovcharenko
[product-screenshot]: public/images/screenshot.jpg
[react]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[next-js]: https://img.shields.io/badge/Next.js-20232A?style=for-the-badge&logo=Next.js
[chakraui]: https://img.shields.io/badge/Chakra-20232A?style=for-the-badge&logo=chakraui&logoColor=319795
[typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[vercel]: https://img.shields.io/badge/vercel-20232A?style=for-the-badge&logo=vercel
