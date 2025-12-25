"use client"

import React from "react"
import Snowfall from "react-snowfall"
import { useTheme } from "next-themes"

export function BackgroundEffects() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    // Configuration for snowfall
    const snowflakeCount = 100
    // In dark mode, white snow. In light mode, subtle cool gray/blue snow for visibility.
    const color = resolvedTheme === "dark" ? "#ffffff" : "#a8b1c2"

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                // Behind content but in front of background color if needed, or -1 if we want it truly background. 
                // However, standard flow usually puts content on top. 
                // Let's use z-index 0 and ensure main content has higher z-index or relative positioning.
                // Actually, easiest is fixed at z-index -1.
            }}
        >
            <Snowfall
                color={color}
                snowflakeCount={snowflakeCount}
                style={{
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                }}
            />
        </div>
    )
}
