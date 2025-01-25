import { describe, it, expect } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Footer from "../../src/components/Footer.astro";
import { developer } from "../../src/data/developer.json";

describe("Footer.astro", () => {
    it("renders <footer> element", async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(Footer, {});

        expect(result).toContain("<footer");
    });

    it("renders contact links", async () => {
        const expectedContacts = [
            {
                text: "an-prof@inbox.ru",
                href: "mailto:an-prof@inbox.ru",
            },
            {
                text: "+7-(910)-914-97-06",
                href: "tel:+79109149706",
            },
            {
                text: "+7-(902)-391-01-31",
                href: "tel:+79023910131",
            },
        ];
        const container = await AstroContainer.create();
        const result = await container.renderToString(Footer, {});

        expectedContacts.forEach(({ text, href }) => {
            expect(result).toContain(text);
            expect(result).toContain(href);
        });
    });

    it("renders navigation links", async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(Footer);

        expect(result).toContain("<nav");
        expect(result).toContain("<ul");

        expect(result).toContain("href");
        expect(result).toContain("Оценка квартир");

        expect(result).toContain("href");
        expect(result).toContain("Оценка домов");

        expect(result).toContain("href");
        expect(result).toContain("Оценка земельных участков");

        expect(result).toContain("href");
        expect(result).toContain("Оценка коммерческой недвижимости");

        expect(result).toContain("href");
        expect(result).toContain("О компании");

        expect(result).toContain("href");
        expect(result).toContain("Контакты");
    });

    it("renders developer info", async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(Footer, {});

        expect(result).toContain("Designed & developed by");
        expect(result).toContain(developer.text);
        expect(result).toContain(developer.href);
    });

    it("renders copyright with current year", async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(Footer, {});
        const currentYear = new Date().getFullYear().toString();

        expect(result).toContain(currentYear);
        expect(result).toContain("&copy;");
    });
});
