import React from "react";
import { motion } from "framer-motion";
// import Navbar from "../components/Navbar"
if (typeof window !== "undefined") {
    const buildReversedMap = () => {
        try {
            const arr = ACHIEVEMENTS as {
                imageName: string;
                imageUrl: string | undefined;
            }[];
            if (!Array.isArray(arr) || arr.length === 0) return {};
            const map: Record<string, string> = {};
            const len = arr.length;
            for (let i = 0; i < len; i++) {
                const rev = arr[len - 1 - i];
                const src =
                    rev?.imageUrl ||
                    `https://picsum.photos/seed/${encodeURIComponent(rev?.imageName || "")}/800/500`;
                map[arr[i].imageName] = src;
            }
            return map;
        } catch {
            return {};
        }
    };

    const swapImg = (img: HTMLImageElement, map?: Record<string, string>) => {
        const m = map || buildReversedMap();
        const alt = img.getAttribute("alt") || "";
        if (m[alt]) {
            img.onerror = null;
            img.src = m[alt];
        }
    };

    const runSwapIn = (root: Element) => {
        const imgs = root.querySelectorAll("img[alt]");
        const map = buildReversedMap();
        imgs.forEach((i) => swapImg(i as HTMLImageElement, map));
    };

    const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
            for (const n of Array.from(m.addedNodes)) {
                if (!(n instanceof Element)) continue;
                if (n.matches(".achievements-root")) {
                    runSwapIn(n);
                } else {
                    const root = n.querySelector(".achievements-root");
                    if (root) runSwapIn(root);
                }
            }
        }
    });

    if (document.body) observer.observe(document.body, { childList: true, subtree: true });

    // initial pass after mount
    setTimeout(() => {
        const root = document.querySelector(".achievements-root");
        if (root) runSwapIn(root);
    }, 0);
}
// /e:/meriisetwo/src/Pages/Achievements.tsx

type Achievement = {
    id: number;
    title: string;
    description: string;
    imageName: string;
    imageUrl: string;
};

const ACHIEVEMENTS: Achievement[] = [
    {
        id: 1,
        title: "MCE Recognized as PMP (RGE P)",
        description:
            "Malnad College of Engineering recognized as Program Monitoring Partner under the Rajiv Gandhi Entrepreneurship Programme. Secured a grant of ₹26.60 Lakhs to support and mentor innovators across multiple cohorts.",
        imageName: "mce-rgep",
        // Replace with your real asset path or remote URL
        imageUrl: "/assets/achievements/mce-rgep.jpg",
    },
    {
        id: 2,
        title: "Startup Karnataka Collaboration",
        description:
            "Partnership with Startup Karnataka and K-Tech to accelerate campus innovation. Funding and mentorship channels established for student startups and prototypes.",
        imageName: "startup-karnataka",
        imageUrl: "/assets/achievements/startup-karnataka.jpg",
    },
    {
        id: 3,
        title: "Mentor-Led Accelerator Cohort",
        description:
            "Four innovators supported in March-April 2025 with mentorship, seed funding and incubation support. Continued follow-on support planned for later cohorts.",
        imageName: "mentor-accelerator",
        imageUrl: "/assets/achievements/mentor-accelerator.jpg",
    },
    {
        id: 4,
        title: "Social Impact & Outreach",
        description:
            "Initiatives designed to translate technological prototypes into community-facing solutions, strengthening MCE's commitment to social innovation.",
        imageName: "social-impact",
        imageUrl: "/assets/achievements/social-impact.jpg",
    },
];

const styles = {
    page: {
        fontFamily:
            "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        color: "#1f2937",
        padding: "48px 24px",
        maxWidth: 1200,
        margin: "0 auto",
    } as React.CSSProperties,
    header: {
        textAlign: "center" as const,
        marginBottom: 28,
    },
    h1: {
        fontSize: 36,
        letterSpacing: 1,
        margin: 0,
        fontWeight: 800,
    },
    subtitle: {
        marginTop: 8,
        color: "#9ca3af",
        fontSize: 16,
    },
    list: {
        display: "grid",
        gap: 36,
        marginTop: 36,
    } as React.CSSProperties,
    item: {
        display: "flex",
        alignItems: "center",
        gap: 28,
        padding: 20,
        borderRadius: 12,
        background: "linear-gradient(180deg, #ffffff 0%, #fbfbfd 100%)",
        boxShadow: "0 6px 18px rgba(17,24,39,0.06)",
    } as React.CSSProperties,
    itemAlt: {
        flexDirection: "row-reverse" as const,
    },
    media: {
        flex: "0 0 44%",
        display: "block",
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(16,24,40,0.06)",
    } as React.CSSProperties,
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover" as const,
        display: "block",
        aspectRatio: "16/10",
    } as React.CSSProperties,
    content: {
        flex: "1 1 56%",
        padding: "8px 6px",
    } as React.CSSProperties,
    title: {
        fontSize: 20,
        margin: "0 0 8px 0",
        fontWeight: 700,
        color: "#0f172a",
    },
    desc: {
        margin: 0,
        color: "#374151",
        lineHeight: 1.6,
        fontSize: 15,
    },
    pill: {
        display: "inline-block",
        marginTop: 12,
        background: "#f1f5f9",
        color: "#0f172a",
        padding: "6px 10px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 600,
    },
    smallNote: {
        marginTop: 10,
        color: "#6b7280",
        fontSize: 13,
    },
    // responsive tweaks are handled via a simple CSS block below
} as const;

export default function Achievements() {
    return (
        <div>
            <div style={styles.page} className="achievements-root">
                <div style={styles.header}>
                    <h1 style={styles.h1}>OUR ACHIEVEMENTS</h1>
                    <div style={styles.subtitle}>Proud moments and recent milestones</div>
                </div>

                <div style={styles.list}>
                    {ACHIEVEMENTS.map((ach, idx) => {
                        const isAlt = idx % 2 === 1;
                        const placeholder = `https://picsum.photos/seed/${encodeURIComponent(
                            ach.imageName
                        )}/800/500`;
                        const delay = idx * 0.12;

                        return (
                            <motion.article
                                key={ach.id}
                                style={{
                                    ...styles.item,
                                    ...(isAlt ? styles.itemAlt : {}),
                                }}
                                aria-labelledby={`ach-title-${ach.id}`}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay }}
                            >
                                <motion.figure
                                    style={styles.media}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                                >
                                    <motion.img
                                        src={ach.imageUrl || placeholder}
                                        alt={ach.imageName}
                                        style={styles.img}
                                        loading="lazy"
                                        onError={(e) => {
                                            (e.currentTarget as HTMLImageElement).onerror = null;
                                            (e.currentTarget as HTMLImageElement).src = placeholder;
                                        }}
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.06 }}
                                        transition={{ duration: 0.35 }}
                                    />
                                </motion.figure>

                                <div style={styles.content}>
                                    <h3 id={`ach-title-${ach.id}`} style={styles.title}>
                                        {ach.title}
                                    </h3>
                                    <p style={styles.desc}>{ach.description}</p>
                                    <div style={styles.pill}>{ach.imageName}</div>
                                    <div style={styles.smallNote}>
                                        Image URL: <code>{ach.imageUrl || placeholder}</code>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Minimal responsive CSS to handle stacking on small screens */}
                <style>{`
                @media (max-width: 880px) {
                    .achievements-root { padding: 24px; }
                }
                @media (max-width: 760px) {
                    article {
                        flex-direction: column !important;
                        text-align: left;
                    }
                    figure[style] {
                        width: 100% !important;
                    }
                }
            `}</style>
            </div>
        </div>
    );
}