import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Button from "../../src/components/Button.astro";

it("renders <a> tag when href is provided", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Button, {
        props: { href: "/test" },
    });

    expect(result).toContain("<a ");
    expect(result).toContain('href="/test"');
    expect(result).toContain('class="button');
});

it("renders <button> tag when href is not provided", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Button, {});

    expect(result).toContain("<button ");
    expect(result).toContain('class="button');
});

it("applies correct BEM classes for size and view", async () => {
    const container = await AstroContainer.create();

    // Test default props
    const defaultResult = await container.renderToString(Button, {});
    expect(defaultResult).toContain("button--size_l");
    expect(defaultResult).toContain("button--view_primary");

    // Test custom props
    const customResult = await container.renderToString(Button, {
        props: { size: "l", view: "primary" },
    });
    expect(customResult).toContain("button--size_l");
    expect(customResult).toContain("button--view_primary");
});

it("merges custom classes with base classes", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Button, {
        props: { class: "custom-class" },
    });

    expect(result).toContain(
        'class="button button--size_l button--view_primary custom-class"',
    );
});

it("passes through additional HTML attributes", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Button, {
        props: { id: "submit-button", disabled: true },
    });

    expect(result).toContain('id="submit-button"');
    expect(result).toContain("disabled");
});

it("renders slot content correctly", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Button, {
        slots: { default: "Click me" },
    });

    expect(result).toContain(">Click me</");
});
