import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Accordion from "../../src/components/Accordion.astro";

it("renders <details> element with the accordion class", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Accordion, {});

    expect(result).toContain("<details");
    expect(result).toContain('class="accordion');
});

it("renders summary with icons", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Accordion, {});

    expect(result).toContain("accordion__icon--plus");
    expect(result).toContain("accordion__icon--minus");
});

it("merges custom classes with base classes", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Accordion, {
        props: { class: "custom-class" },
    });

    expect(result).toContain('class="accordion custom-class');
});

it("passes through additional HTML attributes", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Accordion, {
        props: { id: "my-accordion", "data-testid": "accordion-test" },
    });

    expect(result).toContain('id="my-accordion"');
    expect(result).toContain('data-testid="accordion-test"');
});

it("renders slot content correctly", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Accordion, {
        slots: {
            text: "Title of accordion",
            content: "This is the hidden content",
        },
    });

    expect(result).toContain("Title of accordion");
    expect(result).toContain("This is the hidden content");
});
