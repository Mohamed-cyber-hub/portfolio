import { FaGlobe, FaHatCowboy, FaPen } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

import Card from './Card';
import Title from '../layouts/Title.jsx';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="SEO Optimization"
          des="I focus on SEO optimization to ensure my websites rank higher in search results. By carefully choosing keywords, optimizing content, and improving load times, I help drive organic traffic and increase visibility on search engines."
          icon={<SiProgress />}
        />
        
        <Card
          title="UX Design"
          des="User experience is at the heart of my design process. I create interfaces that are not only visually appealing but also intuitive and easy to navigate, ensuring that users have a seamless and enjoyable experience."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="When it comes to hosting, I choose reliable providers that offer the right balance of performance and features. This ensures that my websites are always online, load quickly, and can handle the needs of visitors effectively."
          icon={<FaGlobe />}
        />
        <Card
          title="Penetration Testing"
          des="Penetration testing is a security practice where I simulate cyberattacks on my website to identify vulnerabilities. This helps me strengthen the security of my site by finding and fixing potential weak spots before any real threats can exploit them."
          icon={<FaHatCowboy />}
        />
        <Card
          title="Content Writer"
          des="Content writing is where I craft compelling and engaging copy that resonates with my audience. Whether it’s for blog posts, social media, or web pages, I make sure every word aligns with my brand’s voice and drives the right message home."
          icon={<FaPen />}
        />
      </div>
    </section>
  );
}

export default Features