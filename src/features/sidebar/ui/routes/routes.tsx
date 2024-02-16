import routes from "./data";
import { Route } from "../route";

export const Routes = ({
  displayLabels = false,
}: {
  displayLabels?: boolean;
}) => {
  return (
    <nav>
      <ul className="grid gap-6">
        {routes.map(({ label, href, icon }) => (
          <li className="last:border-t-2 last:pt-4" key={href}>
            <Route
              label={label}
              href={href}
              icon={icon}
              displayLabels={displayLabels}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
