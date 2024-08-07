import React, { useEffect, useState } from "react";
import { getPagesWithTeams } from "../../../services/api";
import Page from "../../../models/Page";
import { PageData } from "../../../models/types";

const PagesWithTeams: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: PageData[] = await getPagesWithTeams();
      const pagesData = data.map(
        (page: PageData) =>
          new Page(
            page.id,
            page.title,
            page.subtitle,
            page.content,
            page.sections
          )
      );
      setPages(pagesData);
    };

    fetchData();
  }, []);

  return (
    <div className="px-10">
      <h1>Pages with Teams</h1>
      {pages.map((page) => (
        <div key={page.id}>
          <h2>{page.title}</h2>
          <h3>{page.subtitle}</h3>
          <p>{page.content}</p>
          {page.sections.map((section) => (
            <div key={section.id}>
              <h4>{section.title}</h4>
              <p>{section.content}</p>
              {section.team_members &&
                section.team_members.length > 0 &&
                section.team_members.map((member) => (
                  <div key={member.id}>
                    <h5>
                      {member.name} - {member.position}
                    </h5>
                    <p>{member.bio}</p>
                    <img src={member.photo_url} alt={member.name} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PagesWithTeams;
