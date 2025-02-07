import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Hero from "../../../src/components/index/Hero.astro";

it("renders hero component with title, text, button and enhancement", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Hero);

    expect(result).toContain('class="hero');

    expect(result).toContain(
        '<span class="hero__title-part hero__title-part--first"',
    );
    expect(result).toContain(
        '<span class="hero__title-part hero__title-part--second"',
    );

    expect(result).toContain('<p class="hero__text"');

    expect(result).toMatch(/<(?:button|a)[^>]+class="[^"]*button/);
    expect(result).toContain('<span class="hero__button-text"');
    expect(result).toContain('<span class="hero__button-label"');

    expect(result).toContain('<p class="hero__enhancement"');
    expect(result).toMatch(/Более \d+,000 успешных сделок!/);
});
