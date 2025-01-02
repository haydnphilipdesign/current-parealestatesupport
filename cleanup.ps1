$filesToRemove = @(
    "src/pages/BlogPost.tsx",
    "src/pages/Contact.tsx",
    "src/pages/Faq.tsx",
    "src/pages/Insights.tsx",
    "src/pages/Privacy.tsx",
    "src/pages/Resources.tsx",
    "src/pages/Terms.tsx",
    "src/pages/Testimonials.tsx",
    "src/pages/index.tsx",
    "src/components/AboutUs.tsx",
    "src/components/DebTimeline.tsx",
    "src/components/DebTimeline.css",
    "src/components/ScrollTracker.tsx",
    "src/components/TimelineComponent.tsx",
    "src/components/TestimonialsSection.tsx",
    "src/components/ServicesOverview.tsx",
    "src/components/VirtualList.tsx"
)

foreach ($file in $filesToRemove) {
    $fullPath = Join-Path $PSScriptRoot $file
    if (Test-Path $fullPath) {
        Write-Host "Removing $file..."
        Remove-Item $fullPath -Force
    } else {
        Write-Host "File not found: $file"
    }
}
