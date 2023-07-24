"use client";
import PropTypes from "prop-types";

// Theme Provider
import ThemeProvider from "@/theme";

// Global css
import "./globals.css";

// Layout
import { WebLayout } from "@/layouts";

import { MotionLazyContainer } from "@/components/animate";


RootLayout.propTypes = {
  children: PropTypes.object,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionLazyContainer>
          <ThemeProvider>
            <WebLayout>{children}</WebLayout>
          </ThemeProvider>
        </MotionLazyContainer>
      </body>
    </html>
  );
}
