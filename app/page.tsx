function delay(s = 1) {
  return new Promise<void>((r) => {
    setTimeout(() => r(), s * 1000)
  })
}

export default async function AppPage() {
  await delay(5)

  return <div>
    App Page.
  </div>
}


