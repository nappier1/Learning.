"}: StatsCardProps) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-md card-hover border border-border/50">
    <div className="rounded-2xl bg-card p-5 shadow-md card-hover border border-border/50 group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
          <p className="mt-2 text-3xl font-bold text-foreground">{value}</p>
          {subtitle && (
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl",
            "flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
            variant === "primary" && "gradient-primary shadow-glow",
            variant === "accent" && "gradient-accent shadow-accent-glow",
