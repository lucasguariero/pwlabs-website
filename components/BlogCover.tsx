import Image from "next/image";

type CoverProps = { slug: string; className?: string };

const CoverImages: Record<string, string> = {
  "o-que-e-site-institucional-e-quando-voce-precisa-de-um": "/assets/blog/sites-institucionais.jpg",
  "o-que-e-loja-virtual-e-o-que-faz-ela-vender-de-verdade": "/assets/blog/loja-virtual.jpg",
  "o-que-e-landing-page-e-quando-usar": "/assets/blog/landing-page.jpg",
  "o-que-e-trafego-pago-e-quando-faz-sentido-anunciar": "/assets/blog/trafego-pago.jpg",
  "o-que-e-automacao-de-processos-e-quando-faz-diferenca": "/assets/blog/automacao.jpg",
  "o-que-e-seo-e-quanto-tempo-leva-pra-funcionar": "/assets/blog/seo.jpg",
  "o-que-e-identidade-visual-e-como-saber-se-voce-precisa": "/assets/blog/identidade-visual.jpg",
  "o-que-e-copywriting-e-quando-ele-muda-resultado": "/assets/blog/blog-copy.jpg",
};

export function BlogCover({ slug, className }: CoverProps) {
  const src = CoverImages[slug] ?? "/assets/blog/blog-1.jpg";
  return (
    <div className={className} style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image
        src={src}
        alt="Capa do artigo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBgcTMVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/AJLR9R0/TbG1s5LqGSWCFI5GSVCGIUAkAkeD4rQVWqqqqEqmT/2Q=="
      />
    </div>
  );
}