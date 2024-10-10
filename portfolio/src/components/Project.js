import NCNewsFrontend from "../images/NCNewsFrontend.png";
import NCNewsBackend from "../images/NCNewsBackend.png";
import KeepFitFrontend from "../images/KeepFitFrontend.png";
import KeepFitBackend from "../images/KeepFitBackend.png";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <div className="grid grid-cols-2 gap-10 w-50 p-10">
      <div className="w-[600px] border-2">
        <div className="flex justify-center font-bold">NC News</div>
        <Link to="https://github.com/Gurtajs/NC-News">
          <img src={NCNewsFrontend} />
        </Link>
        <p>
          This full-stack news application replicates the functionalities of
          popular social news platforms like Reddit and can be accessed at
          nc-cool-news.netlify.app. Please note that the site may take some time
          to load as the API needs to initialize, your patience is appreciated!
          The application integrates a news back-end API, enabling users to view
          all articles, access articles by ID or topic, post comments, like
          articles, and sort articles based on various criteria such as date
          posted, number of comments, or votes. Users also have the option to
          delete articles. The application includes robust error handling,
          displaying appropriate messages when users search for non-existing
          paths, articles, or topics. Additionally, the comment posting form is
          validated to ensure that users submit valid data.
        </p>
      </div>
      <div className="w-[600px] border-2">
        <div className="flex justify-center font-bold">NC News API</div>
        <Link to="https://github.com/Gurtajs/NC-News-BE">
          <img src={NCNewsBackend} />
        </Link>
        <p>
          Memory updated I developed a backend news API featuring various
          endpoints for articles, comments, topics, and users, accessible at
          news-project-1.onrender.com/api. This API serves as a data source for
          the frontend, supplying essential information from each endpoint to
          enhance the user experience.
        </p>
      </div>
      <div className="w-[200px] border-2">
        <div className="flex justify-center font-bold">KeepFit</div>
        <Link to="https://github.com/Gurtajs/KeepFit">
          <img src={KeepFitFrontend} />
        </Link>
        <p>
          This fitness mobile application empowers users to effectively manage
          their health by logging workouts, tracking meals, and updating their
          profiles. It features a user-friendly interface that allows for
          seamless account registration and login. Users can easily update their
          profile information, view and delete recorded workouts, and add meals
          either manually or by scanning barcodes to retrieve nutritional
          information from a public food API. With these capabilities, the app
          supports users in their fitness journeys and promotes a healthier
          lifestyle.
        </p>
      </div>
      <div className="w-[600px] border-2">
        <div className="flex justify-center font-bold">KeepFit API</div>
        <Link to="https://github.com/Gurtajs/KeepFitAPI">
          <img src={KeepFitBackend} />
        </Link>
        <p>
          This backend API is built using ASP.NET and provides endpoints on
          fetching, posting and updating workouts and meals. It also has
          endpoints to creating and fetching users. The API feeds the front end
          KeepFit mobile application
        </p>
      </div>
    </div>
  );
}
