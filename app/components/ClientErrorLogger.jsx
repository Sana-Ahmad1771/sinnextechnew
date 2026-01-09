"use client";
import { useEffect } from "react";

export default function ClientErrorLogger() {
  useEffect(() => {
    const send = (payload) => {
      try {
        // Best-effort send to server for debugging; non-blocking
        fetch("/api/_client-logs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      } catch (e) {}
    };

    const onError = (e) => {
      const payload = {
        type: "error",
        message: e.message || String(e),
        filename: e.filename || null,
        lineno: e.lineno || null,
        colno: e.colno || null,
        stack: e.error ? e.error.stack : null,
        timestamp: Date.now(),
      };
      send(payload);
    };

    const onRejection = (e) => {
      const reason = e.reason || e;
      const payload = {
        type: "unhandledrejection",
        message: (reason && reason.message) || String(reason),
        stack: reason && reason.stack ? reason.stack : null,
        timestamp: Date.now(),
      };
      send(payload);
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
