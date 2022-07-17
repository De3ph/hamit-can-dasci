import SocialLink from "@components/Links/SocialLink";
import { SmilingFace } from "@emotion-icons/evaicons-solid";

describe("<SocialLink /> test", () => {
  it("mount", () => {
    cy.mount(<SocialLink platform="Test" href="#" icon={<SmilingFace />} />);
  });
});
