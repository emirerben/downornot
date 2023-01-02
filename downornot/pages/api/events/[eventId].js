

export default async function handler(req, res) {
    const eventId = req.query.eventId;
    const result = await getEventById(eventId);
    res.json(result);
}