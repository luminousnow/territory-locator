import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Main } from "../components";

// interface PartnersViewHistoryState {
//   name: string;
// }

export const PartnersView: FC = () => {
  const location = useLocation<{ name: string }>();
  // const location = useLocation<PartnersViewHistoryState>();

  return (
    <Main>
      <p>{location.state.name}</p>
      <p>
        Partners page. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Voluptate ea necessitatibus deleniti temporibus vitae? Blanditiis,
        doloribus velit voluptatibus, delectus numquam, praesentium ut facere
        voluptas provident sit distinctio quis excepturi eius.
      </p>
    </Main>
  );
};
