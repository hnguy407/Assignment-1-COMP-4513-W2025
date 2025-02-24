<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Art Data Api</h3>

  <p align="center">
    An API for querying art data.
    <br />
    <a href="https://github.com/hnguy407/Assignment-1-COMP-4513-W2025/"><strong>Repository »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#dependencies">Dependencies</a></li>
      </ul>
    </li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#test-links">Test Links</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This repository contains code for an art API. It provides information on things such as art, galleries and artists in JSON format. This API is built using node and has dependencies with express and supabase. Deployment is handled by Render.com.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Dependencies

![Node][node-shield]
![Express][express-shield]
![Supabase][supabase-shield]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- API Endpoint EXAMPLES -->
## API Endpoints
Here are the possible end points available by the API.
|API Endpoint|Description|
|---|---|
|`/api/era`|Get all eras|
|`/api/galleries`|Get all galleries|
|`/api/galleries/:id`|Get gallery from provided ID|
|`/api/galleries/country/:substring`|Get all galleries from countries that begin with the provided substring|
|||
|`/api/artists`|Get all artists|
|`/api/artists/:id`|Get artist from provided ID|
|`/api/artists/search/:substring`|Get all artists whose last name begins with the provided substring|
|`/api/artists/country/:substring`|Get all artists from countries that begin with the provided substring|
|||
|`/api/paintings`|Get all paintings|
|`/api/paintings/title`|Get all paintings sorted by title|
|`/api/paintings/year`|Get all paintings sorted by year|
|`/api/paintings/:id`|Get painting from provided ID|
|`/api/paintings/search/:substring`|Get all paintings whose title contains the provided substring|
|`/api/paintings/years/:start/:end`|Get all paintings whose year of production falls between the two provided years|
|`/api/paintings/galleries/:id`|Get all paintings in a given gallery, given via ID|
|`/api/paintings/artist/:id`|Get all paintings by a given artist, given via ID|
|`/api/paintings/artists/country/:substring`|Get all paintings by all artists from countries that begin with the provided substring|
|||
|`/api/genres`|Get all genres|
|`/api/genres/:id`|Get genre from provided ID|
|`/api/genres/painting/:id`|Get all genres used by a given painting, given via ID|
|||
|`/api/paintings/genre/:id`|Get all paintings that use a given genre, given via ID|
|`/api/paintings/era/:id`|Get all paintings from a given era, given via ID|
|||
|```/api/counts/genres```|Get a count of all paintings in each genre|
|```/api/counts/artists```|Get a count of all paintings by each artist|
|```/api/counts/topgenres/:min```|Get a count of all paintings in each genre above a given minimum threshold|

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Test Links -->
## Test Links

- https://assignment-1-comp-4513-w2025-1.onrender.com/api/eras
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/galleries
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/galleries/30
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/galleries/Calgary
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/galleries/country/fra
<br/>

- https://assignment-1-comp-4513-w2025-1.onrender.com/api/artists
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/artists/12
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/artists/1223423
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/artists/search/ma
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/artists/search/mA
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/artists/country/fra
<br/>

- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings/sort/year
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings/63
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings/search/port
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings/search/pORt
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings/search/connolly
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings/years/1800/1850
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings/galleries/5
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings/artist/16
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings/artist/666
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings/artist/country/ital
<br/>

- https://assignment-1-comp-4513-w2025-1.onrender.com/api/genres
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/genres/76
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/genres/painting/408
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/genres/painting/jsdfhg
<br/>

- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings/genre/78
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/paintings/era/2
<br/>

- https://assignment-1-comp-4513-w2025-1.onrender.com/api/counts/genres
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/counts/artists
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/counts/topgenres/20
- https://assignment-1-comp-4513-w2025-1.onrender.com/api/counts/topgenres/203495
<br/>
<br/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Henry Nguyen - hnguy407@mtroyal.ca

Project Link: [https://github.com/hnguy407/Assignment-1-COMP-4513-W2025](https://github.com/hnguy407/Assignment-1-COMP-4513-W2025)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[node-shield]: https://badgen.net/badge/Node.js/18.20.7/green
[express-shield]: https://badgen.net/badge/Express/4.21.2/blue
[supabase-shield]: https://badgen.net/badge/supabase-js/2.48.1/orange


<!--hey guess who pulled a template and is going to keep all these shields here in case i want them in the future-->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
