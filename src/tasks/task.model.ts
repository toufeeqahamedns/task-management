export interface Task {
    id: String,
    title: String,
    description: String,
    status: TaskStatus,
}

enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}
