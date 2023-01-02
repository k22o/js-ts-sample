import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";

import { Square } from "../src/sample-class"

describe("Square-test", () => {

    it('clickしたらpropsで指定したメソッドを実行する', async() => {

        const onClickMock = jest.fn();
        const squares = ["o", null, "x"];

        render(<Square
            squares={squares}
            index={0}
            onClick={onClickMock}
        />)

        expect(screen.getByRole("button").innerHTML).toMatch('o');
        await userEvent.click(screen.getByRole("button"));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });


});