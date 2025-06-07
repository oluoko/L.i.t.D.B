import { Heading, Paragraph, Quote, StyledLink } from "@/components/typography";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-black ">Light in the Dark Bible</h1>
      <div>
        <p className="text-lg mt-4">A simple Bible reading app</p>
        <p>
          Check out <span className="bb-lnk">John 3:16</span> and{" "}
          <span className="bb-lnk">Romans 8:28</span>
        </p>
      </div>
      <div className="max-w-4xl mx-auto p-6">
        <Heading>
          <p>Studying the Bible is a journey of discovery and faith.</p>
        </Heading>
        <Paragraph>
          This verse is one of the most beloved passages in the Bible...
        </Paragraph>
        <Quote>
          "For God so loved the world that he gave his one and only Son, that
          whoever believes in him shall not perish but have eternal life."
        </Quote>
        <Paragraph>
          The depth of this verse reveals...{" "}
          <StyledLink href="/more">Read more</StyledLink>
        </Paragraph>
      </div>
    </>
  );
}
