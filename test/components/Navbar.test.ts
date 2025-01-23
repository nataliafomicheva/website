import { describe, it, expect } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { navbarLinks } from "../../src/data/navbarLinks.json";

import Navbar from "../../src/components/Navbar.astro";

describe("Navbar.astro", () => {
    it("renders <header> with navigation markup", async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(Navbar, {});

        expect(result).toContain("<header");
        expect(result).toContain('aria-label="Основная навигация"');
        expect(result).toContain("<nav");
    });

    it("renders a logo link to homepage", async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(Navbar, {});

        expect(result).toContain('href="/"');
    });

    it("renders passed links", async () => {
        const container = await AstroContainer.create();
        const props = { links: navbarLinks };

        const result = await container.renderToString(Navbar, { props });

        expect(result).toContain('href="/"');
        expect(result).toContain('aria-label="Главная страница"');

        expect(result).toContain('href="/"');
        expect(result).toContain("Оценка квартир");

        expect(result).toContain('href="/"');
        expect(result).toContain("Оценка домов");

        expect(result).toContain('href="/"');
        expect(result).toContain("Оценка земельных участков");

        expect(result).toContain('href="/"');
        expect(result).toContain("Оценка коммерческой недвижимости");

        expect(result).toContain('href="/"');
        expect(result).toContain("О компании");

        expect(result).toContain('href="/"');
        expect(result).toContain("Контакты");
    });

    it("renders a mobile menu button (burger)", async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(Navbar, {});

        expect(result).toContain('class="navbar-menu__button"');
    });

    it("renders container inside header", async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(Navbar, {});

        expect(result).toContain('class="container"');
    });
});
