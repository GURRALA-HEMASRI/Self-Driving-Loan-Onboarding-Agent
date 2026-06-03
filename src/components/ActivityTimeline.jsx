function ActivityTimeline({ activities }) {
  return (
    <div className="timeline-container">
      <h3>Activity Timeline</h3>

      {activities.length === 0 ? (
        <div className="timeline-empty">
          No activities yet.
        </div>
      ) : (
        <div className="timeline">
          {activities.map(
            (activity, index) => (
              <div
                key={index}
                className="timeline-item"
              >
                <div className="timeline-dot completed"></div>

                <div className="timeline-text">
                  {activity}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default ActivityTimeline;