import App
from App import Entry


class Test_Entry:
    def test_init_start_time(self):
        time1 = 1632783668042
        time2 = 1632783768042
        entry = Entry(time1, time2)
        assert time1 == entry.start_time

    def test_init_stop_time(self):
        time1 = 1632783668042
        time2 = 1632783768042
        entry = Entry(time1, time2)
        assert time2 == entry.stop_time