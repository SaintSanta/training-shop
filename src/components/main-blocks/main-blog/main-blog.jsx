import { Link } from "react-router-dom";

import { BlogItem } from "./blog-item/blog-item";

import { BLOG } from "../../../constants/main-blog";

import "./main-blog.scss";

export const MainBlog = () => {
  return (
    <div className="main-blog">
      <div className="blog-header">
        <div className="title">LATEST FROM BLOG</div>
        <Link to="/blog" className="link">
          SEE ALL
        </Link>
      </div>
      <div className="blog-main">
        {BLOG.map(({ id, imageSrc, name, title, text, href }) => (
          <BlogItem
            key={id}
            img={imageSrc}
            name={name}
            title={title}
            text={text}
            href={href}
          />
        ))}
      </div>
    </div>
  );
};
