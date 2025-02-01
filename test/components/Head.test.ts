import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Head from "../../src/components/Head.astro";
import author from "../../src/data/author.json";

it(`renders "UTF-8" charset`, async () => {
    const container = await AstroContainer.create();

    const result = await container.renderToString(Head, {});

    expect(result).toContain('<meta charset="UTF-8">');
});

it(`renders "viewport" meta tag`, async () => {
    const container = await AstroContainer.create();

    const result = await container.renderToString(Head, {});

    expect(result).toContain(
        '<meta content="width=device-width, initial-scale=1.0" name="viewport">',
    );
});

it(`renders description, keywords meta tags`, async () => {
    const container = await AstroContainer.create();
    const props = {
        description: "Test Description",
        keywords: "astro, vitest, container",
    };

    const result = await container.renderToString(Head, { props });

    expect(result).toContain(
        '<meta content="Test Description" name="description">',
    );
    expect(result).toContain(
        '<meta content="astro, vitest, container" name="keywords">',
    );
});

it(`renders title tag`, async () => {
    const container = await AstroContainer.create();
    const props = { title: "Test Title" };

    const result = await container.renderToString(Head, { props });

    expect(result).toContain("<title>Test Title</title>");
});

it(`renders with empty props`, async () => {
    const container = await AstroContainer.create();

    const result = await container.renderToString(Head, {});

    expect(result).toContain("<title></title>");
    expect(result).toContain('<meta name="description">');
});

it("renders author meta tag", async () => {
    const container = await AstroContainer.create();

    const result = await container.renderToString(Head, {});

    const authorContent = `<meta content="${author.name}, ${author.role}. Contact: ${author.email}, ${author.website}" name="author">`;
    expect(result).toContain(authorContent);
});
