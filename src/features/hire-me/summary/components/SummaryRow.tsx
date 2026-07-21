export function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2.5 border-b border-line last:border-0">
      <span className="text-sm text-mist-faint">{label}</span>
      <span className="text-sm text-mist text-right">{value}</span>
    </div>
  );
}
