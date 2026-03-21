from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"
BRAND_DIR = PUBLIC_DIR / "brand"

PAPER = (244, 237, 224, 255)
PAPER_SOFT = (251, 248, 242, 255)
INK = (20, 19, 17, 255)
STEEL = (108, 115, 127, 255)
ACCENT = (211, 84, 42, 255)
ACCENT_SOFT = (255, 141, 93, 255)


def ensure_dirs() -> None:
    BRAND_DIR.mkdir(parents=True, exist_ok=True)


def font(paths: list[str], size: int) -> ImageFont.FreeTypeFont:
    for path in paths:
        candidate = Path(path)
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size=size)
    return ImageFont.load_default()


def add_gradient(image: Image.Image, top: tuple[int, int, int], bottom: tuple[int, int, int]) -> None:
    draw = ImageDraw.Draw(image)
    width, height = image.size
    for y in range(height):
        ratio = y / max(height - 1, 1)
        color = tuple(
            int(top[index] * (1 - ratio) + bottom[index] * ratio) for index in range(3)
        )
        draw.line((0, y, width, y), fill=color)


def scale_box(canvas_size: int, ratios: tuple[float, float, float, float]) -> tuple[int, int, int, int]:
    return tuple(int(canvas_size * ratio) for ratio in ratios)  # type: ignore[return-value]


def draw_mark(size: int, transparent: bool) -> Image.Image:
    scale = 4
    canvas_size = size * scale
    background = (0, 0, 0, 0) if transparent else PAPER
    image = Image.new("RGBA", (canvas_size, canvas_size), background)

    if not transparent:
        add_gradient(image, PAPER_SOFT[:3], PAPER[:3])

    draw = ImageDraw.Draw(image)

    outer = scale_box(canvas_size, (0.1025, 0.1025, 0.8975, 0.8975))
    radius = int(canvas_size * 0.0806)
    ring_width = max(int(canvas_size * 0.04395), 12)
    frame_width = max(int(canvas_size * 0.0205), 8)

    back_one = scale_box(canvas_size, (0.1367, 0.0586, 0.9316, 0.8535))
    back_two = scale_box(canvas_size, (0.1709, 0.0293, 0.9658, 0.8242))
    draw.rounded_rectangle(
        back_two,
        radius=max(int(canvas_size * 0.0732), 24),
        outline=ACCENT_SOFT,
        width=frame_width,
    )
    draw.rounded_rectangle(
        back_one,
        radius=max(int(canvas_size * 0.0769), 24),
        outline=STEEL,
        width=frame_width,
    )

    draw.rounded_rectangle(outer, radius=radius, fill=INK)
    inner = (outer[0] + ring_width, outer[1] + ring_width, outer[2] - ring_width, outer[3] - ring_width)
    draw.rounded_rectangle(inner, radius=radius - ring_width, fill=background if transparent else PAPER)

    cut = scale_box(canvas_size, (0.6216, 0.4646, 0.9585, 0.5354))
    draw.rounded_rectangle(
        cut,
        radius=max(int(canvas_size * 0.0269), 12),
        fill=background if transparent else PAPER,
    )

    bar = scale_box(canvas_size, (0.4731, 0.4809, 0.8730, 0.5191))
    draw.rounded_rectangle(
        bar,
        radius=max(int(canvas_size * 0.0190), 10),
        fill=ACCENT,
    )

    dot = scale_box(canvas_size, (0.8096, 0.4814, 0.8467, 0.5186))
    draw.rounded_rectangle(
        dot,
        radius=max(int(canvas_size * 0.0122), 8),
        fill=ACCENT_SOFT,
    )

    border = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    border_draw = ImageDraw.Draw(border)
    border_draw.rounded_rectangle(
        (120, 120, canvas_size - 120, canvas_size - 120),
        radius=max(int(canvas_size * 0.1025), 30),
        outline=(17, 17, 17, 34),
        width=max(int(canvas_size * 0.00488), 2),
    )
    image = Image.alpha_composite(image, border)

    return image.resize((size, size), Image.Resampling.LANCZOS)


def draw_logo() -> Image.Image:
    image = Image.new("RGBA", (1600, 480), (0, 0, 0, 0))
    mark = draw_mark(300, transparent=True)
    image.alpha_composite(mark, (30, 90))

    draw = ImageDraw.Draw(image)
    display_font = font(
        [
            "/System/Library/Fonts/Supplemental/Baskerville.ttc",
            "/System/Library/Fonts/Supplemental/Georgia Italic.ttf",
        ],
        220,
    )
    mono_font = font(
        ["/System/Library/Fonts/Supplemental/Courier New Bold.ttf"],
        30,
    )
    draw.text((390, 118), "gstack", fill=INK, font=display_font)
    draw.text((402, 66), "AI SOFTWARE FACTORY / FOUNDERS / REVIEW GATES", fill=STEEL, font=mono_font)
    draw.line((402, 360, 1225, 360), fill=(20, 19, 17, 50), width=2)
    draw.text((402, 382), "BUILD LIKE A TEAM OF TWENTY", fill=ACCENT, font=mono_font)
    return image


def draw_og() -> Image.Image:
    image = Image.new("RGBA", (1200, 630), PAPER)
    add_gradient(image, PAPER_SOFT[:3], PAPER[:3])
    draw = ImageDraw.Draw(image)

    for x in range(0, 1200, 120):
        draw.line((x, 0, x, 630), fill=(20, 19, 17, 18), width=1)
    for y in range(0, 630, 120):
        draw.line((0, y, 1200, y), fill=(20, 19, 17, 18), width=1)

    mark = draw_mark(260, transparent=False)
    image.alpha_composite(mark, (70, 70))

    display_font = font(
        [
            "/System/Library/Fonts/Supplemental/Baskerville.ttc",
            "/System/Library/Fonts/Supplemental/Georgia Bold Italic.ttf",
        ],
        98,
    )
    title_font = font(
        [
            "/System/Library/Fonts/Supplemental/Georgia Bold.ttf",
            "/System/Library/Fonts/Supplemental/Times New Roman Bold.ttf",
        ],
        40,
    )
    mono_font = font(
        ["/System/Library/Fonts/Supplemental/Courier New Bold.ttf"],
        24,
    )

    draw.text((380, 74), "gstack", fill=INK, font=display_font)
    title = "AI software factory for\nfounders and technical teams"
    draw.multiline_text((380, 186), title, fill=INK, font=title_font, spacing=10)
    draw.text((380, 286), "15 specialists / 6 power tools / sprint workflow", fill=STEEL, font=mono_font)
    draw.text((380, 320), "Think → Plan → Build → Review → Test → Ship → Reflect", fill=ACCENT, font=mono_font)

    body = (
        "Structured roles, review gates, browser QA, and release discipline.\n"
        "Explore Garry Tan's gstack through an editorial landing page."
    )
    draw.multiline_text((380, 390), body, fill=INK, font=font([
        "/System/Library/Fonts/Supplemental/Georgia.ttf",
        "/System/Library/Fonts/Supplemental/Times New Roman.ttf",
    ], 28), spacing=12)
    draw.rounded_rectangle((380, 528, 710, 582), radius=28, outline=(20, 19, 17, 40), width=2)
    draw.text((408, 542), "gstack.lol", fill=INK, font=mono_font)
    return image


def main() -> None:
    ensure_dirs()

    mark = draw_mark(1024, transparent=True)
    mark.save(BRAND_DIR / "gstack-mark.png")

    logo = draw_logo()
    logo.save(BRAND_DIR / "gstack-logo.png")

    apple = draw_mark(180, transparent=False)
    apple.save(PUBLIC_DIR / "apple-icon.png")

    favicon = draw_mark(256, transparent=False)
    favicon.save(PUBLIC_DIR / "favicon.png")
    favicon.save(PUBLIC_DIR / "favicon.ico", sizes=[(32, 32), (48, 48), (64, 64)])

    og = draw_og()
    og.save(PUBLIC_DIR / "og-image.png")


if __name__ == "__main__":
    main()
