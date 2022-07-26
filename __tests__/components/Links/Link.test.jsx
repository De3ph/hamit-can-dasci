import React from "react";

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import SocialLink from "@components/Links/SocialLink";
import { SmilingFace } from "@emotion-icons/evaicons-solid";

describe("link", () => {
  it("it should render link", () => {
    const { debug } = render(
      <SocialLink platform="Test" href="#" icon={<SmilingFace />} />
    );

    const el = screen.getByRole("social-icon");

    expect(el).toBeDefined();

    screen.debug(screen.getByRole("social-icon"));
  });
});
