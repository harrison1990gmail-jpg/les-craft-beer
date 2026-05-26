export default function CraftBeerHeroVideo() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-sm bg-ink">
      <video
        className="h-full w-full object-cover"
        src="/assets/craft-beer-pour.mp4"
        poster="/assets/scene-tasting.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="实拍精酿啤酒从酒头倒入酒杯的视频"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-ink/10 to-ink/34" />
      <div className="absolute left-5 top-5 rounded-sm border border-malt/15 bg-ink/58 px-4 py-3 backdrop-blur-md">
        <p className="text-xs font-black tracking-[0.18em] text-amber">REAL POUR VIDEO</p>
        <p className="mt-1 text-sm font-black text-malt">酒头出酒 · 泡沫成型 · 新鲜现打</p>
      </div>
    </div>
  );
}
