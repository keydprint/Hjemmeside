class Coop:
    def __init__(self, name,  workers, location, colors):
        self.name = name
        self.workers = workers
        self.location = location
        self.colors = colors

    def desc(self):
        print("this store is a coop " + self.name)

