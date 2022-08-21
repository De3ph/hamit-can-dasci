import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BlogCard from "../BlogCard";
import icon from "public/static/favicon.ico";

const post = {
  title: "Test Post",
  author: "John Doe",
  mainImage: icon,
};

describe("BlogCard", () => {
  it("should render correctly", () => {
    const { debug } = render(<BlogCard post={post} />);

    expect(screen.getByText("Test Post")).toBeTruthy();
    expect(screen.getByText("John Doe")).toBeTruthy();

    debug();
  });
});
