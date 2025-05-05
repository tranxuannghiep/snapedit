// lib/fetchData.ts

export async function fetchData() {
  const res = await fetch("https://api.snapai.app/wasm/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE3NDM3MzU0NzB9.Y58UqSvFftjy3xDPUyqFb1XY45-xQBvvSKiPyArXarDhRF3XTTPJlEBzJyIAOr_d_r0fL1YWuC-SyN5ydJqHT4wT-dHYeliJ9F9XU4ZPMZPAhxTTPZRDkEUd7j68mZkGGAc3mQgbTIbAUWlmzns7Xj6k8HB0BwBghUlJ15LGcJa2Yy__d3ao2_ZghwSYFd93mmfWvEYT3OJxhRdG7kIGkxVNzEth2gUaP-oCVYwWajQ5cPmEIJRNW4U1GjQVeKIekWPKv3xklwctZHdzzsniekujr4q-9uP16jQ6yfkLiECEXXZLxXTTH-oF9vOcPfIC8Wiz8Rh2s9XrwF-xMDx8yQ",
      "User-Agent":
        "SnapEdit/5.6.5 (com.sfun.snapedit; build:1029; iOS 18.1.0) Alamofire/5.10.2",
    },
    body: JSON.stringify({
      user_id: "47ac4974-1b22-4b73-9d88-8c704472017e",
      action_id: 4,
    }),
    // Next.js bắt buộc phải có cache hoặc no-store để dùng fetch trong Server Component
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data from SnapAI API");
  }

  return res.json();
}
