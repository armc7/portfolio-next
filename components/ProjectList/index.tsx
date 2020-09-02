import React from 'react';
import Card from '@components/Card';
import { breakpoints } from '../../styles/theme';

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <>
      <section>
        {projects.map((project: TProject) => (
          <Card
            key={project._id}
            title={project.title}
            description={project.description}
            src={project.src}
            repository={project.repository}
            url={project.url}
          />
        ))}
      </section>

      <style jsx>{`
        section {
          max-width: 750px;
          display: flex;
          flex-wrap: wrap;
          margin: 50px auto 0;
          box-shadow: 0px 0px 7px 1px #adadad;
          background-color: #f5f5f5;
        }

        @media screen and (min-width: ${breakpoints.laptop}) {
          section {
            margin: 60px auto 0;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectList;
