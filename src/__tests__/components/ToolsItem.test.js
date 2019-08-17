import React from "react";
import { useDispatch } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import { removeToolRequest } from "~/store/modules/tools/actions";

import ToolsItem from "~/components/ToolsItem";

jest.mock("react-redux");
const tool = {
  id: 1,
  title: "Notion",
  link: "https://notion.so",
  description:
    "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
  tags: ["organization", "planning", "collaboration", "writing", "calendar"]
};

describe("ToolsItem Component", () => {
  it("should be able to remove tool", () => {
    const { getByTestId } = render(<ToolsItem tool={tool} />);

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    fireEvent.click(getByTestId("remove-tool"));

    expect(dispatch).toHaveBeenCalledWith(removeToolRequest(tool.id));
  });
});
