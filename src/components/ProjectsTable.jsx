import Label from "./Label";

const ProjectsTable = ({ year, title, description, technologies, link }) => {
  return (
    <tr className="border-b border-organe last:border-none">
      <td className="py-4 pr-8 font-light">{year}</td>
      <td className="py-4 pr-8 font-black">{title}</td>
      <td className="hidden py-4 pr-8 lg:table-cell font-light">
        {description}
      </td>
      <td className="hidden py-4 pr-8 lg:table-cell">
        {<Label data={technologies} isTable={true} />}
      </td>
      <td className="py-4 pr-8">
        <a href={link} target="blank" className="hover:underline">
          {title}
        </a>
      </td>
    </tr>
  );
};

export default ProjectsTable;
