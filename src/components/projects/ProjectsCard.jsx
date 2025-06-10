import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const ProjectsCard = ({
  title,
  des,
  image,
  repo,
  demo,
}) => {
  const [
    isExpanded,
    setIsExpanded,
  ] = useState(false);
  const shouldTruncate =
    des && des.length > 100;

  const toggleExpand = () =>
    setIsExpanded(
      !isExpanded
    );

  // Better truncation logic - find last complete word before 100 chars
  const getTruncatedText = (
    text
  ) => {
    if (
      !text ||
      text.length <= 100
    )
      return text;
    const truncated =
      text.slice(0, 100);
    const lastSpaceIndex =
      truncated.lastIndexOf(
        ' '
      );
    return lastSpaceIndex > 0
      ? truncated.slice(
          0,
          lastSpaceIndex
        )
      : truncated;
  };

  const displayText =
    shouldTruncate &&
    !isExpanded
      ? getTruncatedText(des)
      : des;

  return (
    <div className="w-full p-4 xl:px-12 h-full xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      <div className="w-full h-[240px] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={image}
          alt={`Screenshot of ${title} project`}
          loading="lazy"
        />
      </div>

      <div className="w-full mt-5 flex flex-col gap-6 flex-grow">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                  aria-label={`View ${title} source code on GitHub`}>
                  <BsGithub />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                  aria-label={`View ${title} live demo`}>
                  <FaGlobe />
                </a>
              )}
            </div>
          </div>

          <div className="text-sm tracking-wide hover:text-gray-100 duration-300">
            <p className="leading-relaxed">
              {displayText}
              {shouldTruncate &&
                !isExpanded &&
                '...'}
            </p>
            {shouldTruncate && (
              <button
                onClick={
                  toggleExpand
                }
                className="text-designColor mt-2 underline hover:text-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-designColor focus:ring-opacity-50 rounded"
                aria-expanded={
                  isExpanded
                }
                aria-label={
                  isExpanded
                    ? 'Show less description'
                    : 'Show full description'
                }>
                {isExpanded
                  ? 'Show Less'
                  : 'Read More'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
