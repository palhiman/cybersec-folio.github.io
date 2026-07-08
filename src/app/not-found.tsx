"use client";

import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <Shield className="mb-6 h-16 w-16 text-accent opacity-50" />
      <h1 className="font-heading text-6xl font-bold text-text-primary">404</h1>
      <p className="mt-4 text-xl text-text-muted">Access Denied — Page Not Found</p>
      <p className="mt-2 max-w-md text-center text-text-muted">
        The resource you&apos;re looking for doesn&apos;t exist or has been moved.
        This incident has been logged.
      </p>
      <div className="mt-8 font-mono text-sm text-text-muted">
        <div className="rounded-xl border border-border bg-bg-card p-4">
          <p className="text-accent">$ curl -I /unknown-page</p>
          <p className="mt-1">HTTP/1.1 404 Not Found</p>
          <p>X-Security-Status: Resource unavailable</p>
          <p>X-Incident-ID: {Math.random().toString(36).substring(2, 10)}</p>
        </div>
      </div>
      <Button href="/" variant="primary" size="lg" className="mt-8">
        <ArrowLeft className="h-4 w-4" />
        Return Home
      </Button>
    </div>
  );
}
