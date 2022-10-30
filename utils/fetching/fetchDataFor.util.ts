export const fetchDataFor = async <T>(entity: string) => {
	// TODO: Entity should be a type!!!
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${entity}`)

	const response: { data: T } = await res.json()

	return response.data
}
