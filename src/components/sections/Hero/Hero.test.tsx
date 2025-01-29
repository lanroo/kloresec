import { act, render, screen } from "@testing-library/react";
import Hero from "./Hero.tsx";

jest.mock("../../ui/MatrixRain", () => {
  return function MockMatrixRain() {
    return <canvas data-testid="matrix-rain" />;
  };
});

describe("Hero Component", () => {
  it("deve renderizar o título principal", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Klore Sec");
  });

  it("deve renderizar o subtítulo", () => {
    render(<Hero />);

    // Verifica se o subtítulo está presente
    const subtitle = screen.getByText(
      /Arsenal of Hacking and Offensive Security content/i
    );
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveClass("text-gray-400");
  });

  it("deve renderizar o efeito Matrix Rain", () => {
    render(<Hero />);

    // Verifica se o efeito Matrix Rain está presente
    const matrixRain = screen.getByTestId("matrix-rain");
    expect(matrixRain).toBeInTheDocument();
  });

  it("deve ter a altura e classes corretas", () => {
    render(<Hero />);

    // Verifica se a seção tem a altura correta
    const section = screen.getByRole("banner");
    expect(section).toHaveClass(
      "relative",
      "h-[60vh]",
      "w-full",
      "overflow-hidden"
    );
  });

  // testes de responsividade
  describe("Responsividade", () => {
    const originalInnerWidth = window.innerWidth;
    const originalInnerHeight = window.innerHeight;

    beforeEach(() => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: originalInnerWidth,
      });
      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: originalInnerHeight,
      });
    });

    it("deve aplicar classes responsivas para título em telas pequenas", () => {
      // Simula uma tela mobile
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 375, // iPhone SE
      });

      render(<Hero />);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toHaveClass("text-3xl", "sm:text-4xl", "md:text-6xl");
    });

    it("deve aplicar classes responsivas para título em telas grandes", () => {
      // Simula uma tela desktop
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1920,
      });

      render(<Hero />);
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toHaveClass("text-3xl", "sm:text-4xl", "md:text-6xl");
    });

    it("deve manter a proporção da altura em diferentes tamanhos de tela", () => {
      // Simula diferentes tamanhos de tela
      const screenSizes = [375, 768, 1024, 1920];

      screenSizes.forEach((width) => {
        Object.defineProperty(window, "innerWidth", {
          writable: true,
          configurable: true,
          value: width,
        });

        const { container } = render(<Hero />);
        const section = container.firstChild as HTMLElement;
        expect(section).toHaveClass("h-[60vh]");

        // Limpa o DOM após cada renderização
        act(() => {
          container.remove();
        });
      });
    });
  });

  // Testes de Performance
  describe("Performance", () => {
    it("deve carregar a imagem de fundo com atributos de otimização", () => {
      render(<Hero />);

      const backgroundImage = screen.getByAltText("Hero background");
      expect(backgroundImage).toHaveClass("object-cover", "object-center");
      expect(backgroundImage.getAttribute("src")).toContain("cloudinary");
    });

    it("deve ter lazy loading para a imagem de fundo", () => {
      render(<Hero />);

      const backgroundImage = screen.getByAltText("Hero background");
      expect(backgroundImage).toHaveAttribute("loading", "lazy");
    });

    it("deve ter dimensões responsivas para a imagem", () => {
      render(<Hero />);

      const backgroundImage = screen.getByAltText("Hero background");
      expect(backgroundImage).toHaveClass("w-full", "h-full");
    });
  });
});
