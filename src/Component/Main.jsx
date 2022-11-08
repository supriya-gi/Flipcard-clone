import "./main.css";

function Main() {
  return (
    <div className="wrapper">
      <div className="container-fluid ">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="data:image/png;base64,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"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="data:image/png;base64,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"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaEAAAB5CAMAAACnbG4GAAABrVBMVEUAktX84QD////9ZgD/4gAAj9QAjdMAitL/5ADt5wD85AD9bgD73wAAidL9YAAAjtRutOH8dACw1u79XAAAjdzQ5fT9spIAhdChzus5n9pdr9//yQBGo9sOldaXxujbzEC+3fGVqoz9cR7r9vt9vOQsmcP8VADKtwDe7vhPqd24pwDCrwD98qyn0ez70AD8wADRvQDs1AD98aH97YTt3wD++dj+++b+9/H+39D9kwD9mgD9ogD8qgD82QDw2ADcxgAAgdT9waf8swD++t785Df86Fz86m785kv+9879fj79n3X9j1z8SQD+38/+6t7+07/9gQCzxWvt5k/u1FDF0FT97pC5vUP863n99LmivnyMt439qYT9iFD9rov9eDDb1TlyraFbp666yGPVmjvougDhmyM3m8DYtDrLmRW7ixjO1W5NorXr4qbn5H3P0Erp5V7k5MPh4uPi34fm5tetu1KHqHietmfZ0wBnlYobdbCSp2fO2jqux1QAe9yGt4DMwlTQx0NwqKCwtm6enGhkiY+djAB9jJpnjKjgcTPSckhJjLm9dWCyd22cfIH8wFN8nfszAAAbWklEQVR4nO2diX/bxpXHyREHgBmAZEmBJBgCQQWGh2nGkmOLbhOTZnyKsqRNtqndSLbbbPfo9ti2aePt7jZN03aP7vE373szAIgBQBISD7OO38eyiJPkfPV782bmzSCVXqXt7SrijszeMOO+er6dem1JbKWElJYa3tP1mCnfl1/2d//LsJUSSmcvh0Q0YZZ58VpEiWy1hKJ+Lt16LaLz2YoJKa1BaEc3677KXH8toiS2YkJRPzfc82F98hpRAls1ofQg5OcmsUL6ev5lf/u/BFs5IWVX9HOB+O61iJLYUmmEY2tmET/nxwrp7GsRzbelEroXu3fQEhAF3JzyvdcimmuLIRmGWFyLU5GyuxfczAwDV5n0ZRfAxttCgJTdy9ngtvrgSRyikJ/Ltl6L6By2ECGQQ1dAlH78MA6RKvg5pRV4/VpE82whQunBcE+sZNRrd2IQhfxcIFZQPn8tojm2GKH0rjIcioge3okJ6UQ/pwSoKm+/FtFsWwyQ0sqAPkRE+/tqjIy6gZMyw72Mf4cPX3UR5bfjLHk7Y1FCSrjrTVVJDCJlGPRzXycR5X/wu7ei9p3fJ0a0KKEsujABiPqA9GMQBf0cu8y1zKevtoi2/+bqO2+++cMfvukZe3n1bxN/6wUJsU43JRRzv0vI3aijC/q5YHCn/N2rLCK6/feDN69e/YcfXb169QOwq1d/hC8HP9xO+q0XI5RxnVcI0RNCHkRGV4fDzGQjgCvznVdYRPTt55cGSOb9999779tg7733/vuwObj0POkf5mKE0irvuR6IzSL1BiH3IogCfi4TrJZeZRFtf/jRRx/dQ/tr33AL9v5jwj/MBQm5/QMZsVmkpvsxiIJ+ThDRz15dEW1/eInZ448uefbRT/nvpK5jQUJeVBZqFql3CSGPQ4gyAT8X7FdIKz/exD5uKnOT4JXENql4NInyPUI/+alP6Kc/WSuhjKcdZVdEdB8QvRtCpHQnr4MDexspItqxi2i2pVl2j9K63jYmTGjdto2pl+b9E7c/vM5w/NPPfUIurOvr0pBf0EpXbBZdA0QfhxFNqqKgm0srP9g8EUk9wq1dcQihsk6INfmUUpWQwhQR0brlH/IIXfrME9FHv7i0ZkI+l2wI0UP4duHRiD1faEKssInpjYikjWZJ8EKWbUK4hij+zzb9cykNwtJ04mjuayDEEb34jDu3X/7i+XoJBQtaCQ2m7gOiKyIipTsZAt9wEWmgnJSG9ZBBiA2VTh04GPDT6aRoSm6DrlLUNOE/2ezUOqZEcUtKmdSE81MuMp/QpRe//Oyzn3/2i5+8uPTiV7/+5udrIyQmilyORAvkSRiRF5YLscIGiojCh2dKoAXwb1IKir1SJL0agAMxUQd1VYSXUr3NvWEHtGY0iFNgW66f2/7cI3TpBbdL/3x7O5+//enaCKWDhNSugOgeftTQgNHEzwlsleT9VOsxCsrRK5Ikp6gF5S3VCSlW2oTTaGtMVyAWItfd6op0cB9cZLGteoQQejbg9BuWxyl/P7suQtlgQyjcLPo4imji5wQ3t3E5wqgc4oBRVuVIKCR0fKSBSMwaIdUK1FQN3Negks73AbxCBc7veAOT258PAoTAfkOxJyiV+mRthBQhHU4ZCpvY/UPIDWHAyO/Ey4jd3RuWI4zBGjNJwyoHN2uomYKsIQ0QShUFowG5opaSHQgOUDw1jeL5frgdJvQvgCX/9r+CnK5/d12EWkJ/T7hZdAe/5L6AyE/lFuX3YrMIoXKqjUajRmXQksaE1AE3prEgzyxyb0cleNGhWGnpUEuRGjRtJWcSykUI/QZvzRze+gjthokJA94q+ybCgJE/niTECpsmIgzWMD6jKVCOLuOm1ACHlk8hMXRwDkpIYkG4VuW1FMEr8fxphF78FgeM1ksoszcZL2WW7QYFoz5giN4Njkb4fm4g6G2zEu0pNlPZC6heehq2iSrQhq3LFXBmvQoAug1nGKitQgXrLAv3ydgXgbSmeLlfwXfc/oITWlssF87LDo0W4WARiOhaEJHn54RYYcNyhA1spuILCspxsAqyUTh6Ef4DqaBXA+FUUT0O7iI1yrXDQgzda80iIYjmrl9/8fy7YH+EiDX/6+/+DHYMfrcuQtluiFCo5apeYSIKDhh5fi4jpnRvUqI9KseWvVfE7mDs5nhxtYQ6wWDbkUy2ByiauA+qIWSLvPh9gNAAGP3bJz/4822wCu6r3P7tc9i7NkJKZA4XNIsEFd1AEV0JjkZ4MlNaGysis1fs8FKWGrpeh01DQrm0bStF+VHJ6lmU1m29Z0rVqgT7WCNIqul61bvN9le3AIaqDr7zReDLbb8YDG6tj1ArQig9EFuu+0xEQURuKrcYK6Sz+Q0aypMk78OwgQbYZI1Wd9CBHaUSH5XAAE6aXMH3cNv+6p295z/79MPvffGJ7Cb45Le3f3zr1q13XiohRZgcybp/7lwJIvI6XPeEWGGzc4SxQrLO+ycEhN7ZGw7feuutL7/88q2vsDX0+7e+REBrJBSaH8R3CgN6fLCIkH7gBF5XKaFKbJNzhPPWpHpJbEhoYn/IB/asjVB6by9mJzSLAkE4DhbtXxO6UbmfC+HdbBGZtXMDAh5vTuydP8L121+6W+sjFAm3eWELo0U4WIRh9/2An9vjp4lzizZZRCl6/g+X/0OA0Jt/xj3exldrI5SOJZTOXg5uQbSAIiJBhExEodlfr1yOMP1mwCTTTJnehpnwDosDigsV2P7LoWjhXbGjm/u5vaHQJfHq5QjnAybsSHqD1RES8xzVB1xEj0N+LuzmXvEc4QvYMghlpxwRmkXqx0xEYT8XmSr+yoloUVsCod3YKeDpSLPoSf9ayM8holCv0aueaH9+W5yQOBInIhKbRftszHWSRcemrISd5EbkCOclWVrhx6DMEp68OCEvdzsWUXD6l6qymoioYr5PKFbYgER72bSKdq+WKKn0IkYbhUKhkbRxtQRCXAXxrk5oFqkPmIhuTE7FWSrhfoWXnSNMTdtNZeysaExRZrfXE959GYS6iqreDeeXuiZM/1LvsaEIdipTEvq5cKzwknOEqUF8a0jzz7+ArZuQqu599WQ/mgLs8RPzHNmHwzPvsn7ULKZyh2uilyoiyZkQ8nKqlmzrJKSieG7wb9MfKEom7iShWXTN83PqHYZI7SpKaE2GlyoiagUABRIOlmnrIgR01PsoHs9+2WoN08q80aJ918+p77LRiAyEe6FY4aXmCLOcOOKYMhvaJit5j7UQCorHs/1Mdq/VbUUgCXmOPFeYzXPlHalKNxIrZJ7fXknJJDL28YpyvsYHvFfh5lZOCOik7z/pk4g9VpHObre1pwiUhGYRzxW+o7J0R9Y26mbDbd7l5ghPaX1QCedvhd/IcAlRTgjTr2mMxb/HtKMTY6HHagkBngdh8fgiYgUNcIat1m5QSmKziIXc11SWqAXuDtfKaolubqmJ9rTeQQt1JVOtVrVtu9gwZfHkCCGzELFaXdICaPNaqlNo+FbomJoIieYlbkYPN1dICMTz+PGdeDxo3vBPRlEGre7uwJeSMLeI5wrfVVlC6jUV50OEYoWlpje6U7XsEAk/ZOvJwv4wIVoPf0tevg3qMqJyox0+2rYmXRJUph2rx00nHdM0V0QIxXMNxfPxdELBVZcURQUpDbMckpDnyFJL9lWeSoczjLrhWGGpifY8YYoERSQUe7CoEhPCJDqerWVG+LCj3likbNjB/XhbbfmEsOZ57NU8H8fUQJ6J879BQnvg7wYIKdgsUlW8BaiHXfNEBT8XHsFYpohkXkTVQPNTCzZ6cHbQBQh5DVon/qDDCclVcXfHMJauISaegGvrzxDRjUirFfzdLkgJYAURsVzhB9zdASqlFX78wDIX43bL2AnME+6IH3siLxqJFGYQwkhPtqcdLCIBSQ9fgtP6lkgI2zyPw2HbLBFFliJhkNIQhQ+DzSLm4PbdpG7wc8rlSG7xEtMbNe6HGn7lnm/wMjINfqTniyhKKGXoEfP8Wlvz+fGJ49zcw/jOEX41nEmxNEIh8XjGhnmmWOwSjVjg2cFukALLFb7CKiRWE+39KTwMuMQcYVpwy9MnxDsOatTrhJtU61FCVIsa5bNTiOE6MZ1q0sQ0w+HXum+M5nAjnUKhs0RCD+MxvDudUNySSx4kcRk6DDoe+LFC9nIoVliqiNy+Nr/56RPCedtoDT+/NKY9FGfedRW36yEUXTNlVSXZraPsDl8+Q6s5Rp7SJXo5Vb0W6NXxbf8CIopaH6d+4SVsSn82ku2QXV5zXrLEMpkQckE43pGkhNyarMiz7e1wYbNIpKi5Emr4zSPKZLzUSEFV78cIaaaI5qLhI3is++faE49QOtKfp3yxxIibfzZvzsiEEJvJFSCRlJAbwhd5YVfDoxSsV69Y4bVQMdz9uhRCE5ejxgjpzpXphGLXcxbsLj/FyxWOLIvhW2ppKpJ5veFFBAFCbtDQdosrsYb44Splv6wwIRabuAKL9r4uh1AmmNSbDgvp8XRCZB4h9Zp7CssV3p9OaIk5wl5EECXkFpc3EpS4HrLdwxxUiBBlCrPynERkBGNZhDKZwGg1CCkYY994Mp3QlTmIVD8mdyORqRpaYqK9W7O7f+xBQu6kb7cqiSdEJdFkb9Efyt2npYmHKXOdNX6vXmSgdnmEhOhKFNLFRaQ+DjDZn0loiYtxixFBkJDYKRRHiEqFalEwr5VTNPnpeuxhid8iOqNliYRCjNS7vpAeXlhE2Abyuh74YNF0DS0xvdENfDkUgZBQR8URMqf068wxSxPWj1kVoTAjP7SbFc7NBHQveAbbCi9DFyC0vER7qREoFoGQV0elphDSwh03yUyX6UoJBRCJLUkQ0hUU0pMprVm06aLw6h5/lgoOFk0nBCLKJxgWS2S8TucrkAmE/NZnfkLIDvYpXAiQLXldGY1I58jChJQQoRAjgPT44YVFxAfBJyG5+mQWocynb/u2YC+QW7mz/kyRkFdHabGEgtlZCc1x7Jrm3zcSiqekBQkpl3FANJOZyejulSdTBlrRpiRmpb3RO3c0lu/Zn342Gwt0LbtoeknAmYmEgq3WGEK8b9TueGagmabBf7OD1ZQZNHcNVK/fIZp0577HRQlld4fdgZIJW7io1QfTEfWnl7l7xqTnQb17P1FH0cI5Wm4TBv+kQ4S8Vqs2g1BV9rytwce6mdv1ou3YzEf3yna4PeTVdQnTJWMItRRlt5tOwOju1K6FaY5L9Xr0Pg62tZIAWjzR0f2TdqKEvJ5VaLVOJzQZoOAnu4PnoYPCG7ojE0aoCnV7CeMvilpMSWAutdJqRRlFC1y9Hy+k/Wml7kXr0aG+ubZwyr3mO7MIIb/VmoSQW/Csp5yHEfGJj944YfioG/hP7fILWTwhDBdarWwSRvFCCq+17Z49aeieGxCIe8HW0cSZ0RAhr2fVTELIG9hmrV93OL0TM0+CVrwBcFuSJplakjcqe/F5rHwZmExGUbtDZT4jDO2iQooXkToZD0xW+YgfbNHWkeufOlqlGCLktlqLFbeVOZOQJ4Kq7OdAEMsww9YpToqjV6jzyMKoVd32b6R6OgehFieUyWT3usMEOooVUiwBdZLiMK/3LtbCHv2c5q276HXLTG7nhdS6W6pVaRYhz89hvTUZRT2nJXVyMwllFGC0l0xHYSHFPQ7PHVllNrWmmmGLd3YLH9EJhLuhhJAOnUXI83M4ZCHH5mLNt+Q5+3GEsmm/PaRkIfTOzgvrOCRRSNEHc6T9rG20+SN9Mbbg0kziX3xDuFmo+GYS8qofS07Na9C2i7G7naS10FxCnJGaQEZY/ulAQmp8tDbxc7PaqdNM+WTBLDq5MSmkqpiEakz6R9up1BxCgUA6kL0aByilFWKOt88xOJmN2vB6eM/ubsxpsZbmvXZo9+JP8Bg+TCe9Z8AWTgCS624/qF4LwaapHi9Kx5LnEvLjOTY4YU1l1IMYL0/DWcN67TzTkr6RzN6YdSxkO66F9yc7PNv+feEOVJkanY6RigmPJcmod+omXxxuDiFo7KDVTPfChlWNWoFPdWDPHSjUuBU6Bj3fFOatvyjLPVvCgNGMjvLJkXmExDkv1J/dEDQaPvtCnfQvu8zPabn/WNNqC3MJrc3mFkmygkt22hKu+s81TaAME4rvHF2HzSuRs62DnVypBMVZiivPXGnr2U4pNx6fC0euuXXwRmlrfHh+ROsSkdup1si7hLxxuFC8j4/roqtdnnV2geZOyQ45G5PjUu6AkJizDm7Cpz9ukn5pTsnulM98HKXDY7jqZIfcnHdVjP3XmtycO/Lj9QO5GcX1htAXQGuNmlRrrGS2q2fxeJrN8rgJ9ujo5LTfLPXJs9IxOWuWQDJbpSb+5PAfYjsenYyekaNHeCjXzOWapa1mCQx48F/4/1bzlBw28Ti8zh0ScjQ6GR+SUdO9qoQXwv3gdDiDaZZdFvfZ/pyoOPLSggvzuD3httvidJO1GkJPBHZF4ELpSYd6LmS5GCuNj+GP/BiN9PtQjiNSLpNR6QR2Pmse9XdKJ/2dp/1n/dObpIw4xmR0RPpcG/1ys386ImScy436pH+wBVfd3DqFA0fNAzh+ksv1yRivKpPyMbkJ7wYtqP74Wf/wBE7PHRzB1klpBy47ihdRgpqIpqxisbNQuYn9D241FEvIXi2hcow9RSfUx1cnZERGh7ln5Bhc2TE5OSE30aOBqJpQnOSM9Jv4Z10GdFDsoCggNXoDjtwkR3DG8clR7piM4C5jQHO6A8dh8wxugr4O0RFyMCZ92AuK6vfhYI7g+UfNPt6qHFv1zRcRVCJtq3j+tZcFC3bV6TI2agxJbpB2xcBmDjSrTDlASE5BGwubRhI1sL0jm9CwktgLgy4EcDqhw/H48OZxmRyWtkpQkjsglCYU3BaWLzl+BLxKZ1CUvKxPHo0IaODsUZmVNbg/qGaOm6XmIZwGEgSuj0CKh80dcnQKcoSrgPjo0RHZOSZbj07IszKcfkqejsgpXFOGN4PLTmMJ/ffcgs/jszRkw8QJ+VhI+Iu/ctcvx5fwy13enPKHruIWP55n/8t+lxoQoGwyWKPAnvLQkNjqTDr1CeFTbkhPBtdYZXNYEW9bh78RfLgKsRbprIr3ckforvCzwX9HQAgcEpTvWS5Hjs8AFBT7I5APVCjHjyCmgDpqq3mTbPVJCX4dlKGQx+TpmJThyhHe5QRUeNQEJDlEd0pOmngVF2MOQcKVgBdOPrtJduCdxu5l8bXkvF5H8EW85E3bcQpQmpajG22nIVG94TiWLOMDA3ST2k4b07WlWtuxzY7utA3gAC8lOAsTHOW67UB5F+tYwPgwG1LHx3TgIwxNp111iFVxCVWKpN1okwY+4aaNsx2Ak+5gVqNOdDhw/mWgJxZfBlBJnEKFfQiKGWOtDWXGlAA+DxQA3qy8hYEYuK3yzrPDUr+P6oJ/O1CyblkfjuGM3BbUXxAN5MbkZAuDDVDj+IyQ052Dwx0uRgQFHvMRUj4ib9zE0JE8gzfLNWM/G3y6/5nzfaWqOzxmWODvICrrmW3SKRBTIm2jjuUIARlJWW0NozAIpxtmz6g14LKKbklVs0YM2rbYEwPypvsAAaiVDM2UsR4yCKlLtNOwie4RkgFGwyLt221SvF1kj3C1KhT+g4iw0eglzutJTGiLR9ulk5tjgg4JyvYZxm1Q3UBUADUFurITpi2CcQDIAB0fVCz9YyzrHZRSDkU43kEdHoPqIFgfM2GUsAKCexwyN3nyCIOSPlZvjHKZCRcOYGU2JRifJ6K85T5ESyrYNqmbhMpVW9OcmgxFLzXaLqEasbH7VOrpFfB71LJ1p1IlPUOzdauqt2XxlsSppCioE+ADLOwJdyaE3LELuDNpyECqgsN7mk2sul+PLZ0QK4nDgzPWqMw9LWOf2Gg0hmj46ehwa7RzVsYjpbPRaHS2Ux7n8GerPNoZj0vlp7ncaXkLdo1GO7kDiMbBPT4dnebw7EOU5Hg0Kh+cQQvpAO6yMyrnnh7myqc5/CmdjnZAknDZaHQwpUE7T0TUIFD0NK/18MFBSEiq2rLkErKQkJQipmxa+JhiIKRBzdO26wVH1uo9UrdtXHdEeA/UUE3rMA0hoSLp3S5MCGlwtGJ2sB6yGKE2sTWgY8G59YphLBIqzCK0hZWSryhsojBc2GjZco/kWJMHX7OfEv7ytrbcvgh2WY7/V/Kucu/ApJqbXJUbjyAEf5rzLptic0QkV0nDqLdt24YiNTxCgI3oZh38j66niiTVsGQbk3frpGCCOypAvVSBGsop1EjHtEOj1BJrHhWQEHguo0ocfFChT8hi9Q/WQ5yQG6pbWpEdWHo99PIMI4v+03ldDbn/nfONcSEXp5iCer9nG6ZO842qJNkdmViOU5UxHrB0s9N22LO2MFLQzYLjNHQZYoRiHiMFO/JHUHScdqGmA1NdNzDKsPSeVtUt/GErxzhVKhf1gtTQi7Jc0+E4xHKy5RBnobB/HcV+HivN1I5nuXlfi0KEjdEY/KIYWFPWhJGgtpfdZwbJLL52T5bZFpXdODsfeIKQb7iUFqX8rhS38B28H3YPjONxyA5emFXttsG0I7GPsGmE4kL4uKg+keV8X7vFBvHYqOHFRvKkwNPWV2oSf9Zkexl9DRcvvmDJsZ9v+OX3V9y+9S38Qfs22nto7zP7gNv/nXzwwVU09+kvE7uFpjKLHQ6/WP4prSZP4FjIaL3oEKe3lA5VLL5A0fHiwxK8Gii6SfHdmhgmlKh8bgIrtBetSH7DPEvvP45kKyTMKbnYuulrW52TSpqsLae3Lrbk4hJH2FJXEZsk/wCr6JyJeZOO786f2z+F0Cv3GJypFvv1py5CH0mcC+RnYeLWbjhxa05BqxfJyeKfcaOfJbVMi/323d10/MLMMyCxA4qy2xJzVOeV9IUJbfQD2ZZp8V9fbXWH0XVcZkNyE4nT3V2B0QUJzLflrViy2Tbl6+Pqit297Hkg+YnEanc3mI+/IkAb9XzdVdqMIsgOu61BzArnaGoMI3+XMri8t3JEmcFK1pPfPJtZCmxd5sRVUmA72wogWj4d/uG+v0HPEV+hxZS6UAxKOnmVFEQUDLxXwWfJ6wlvsE0p9fQkymJV0jBJlRTklQ3G3Ssh9FIfD7FGm1noHiaAdL4qCRFdVldcFS11ZfvNtWnfPly42GOwOw2Sv5aWiGjK6kBLs5f9tK/12PTvL9QwrEDU3TlNWVFNyuUVB3Qb8Mi8NdjMEhAN13AZsNXNp16wZkRfi4e3zi6CaPXCm7JzvJ1P5XJgCuzS+XxN+k/nFUIcI9aUnXK+EDcoK0f0NRBRgmKIg5Qe7s1a0co/Ue2u1NEp33vlOxb+H+IgyXsj6uOMAAAAAElFTkSuQmCC"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section>
        <div className="container-fluid">
          <div id="carousel_items">
            <div className="row ">
              <div className="col-sm-2 " id="c_i_1">
                <h2>Best of electronics</h2>

                <button type="button" className="btn btn-primary">
                  View All
                </button>
                <div className="electronics">
                  <img
                    src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
                    alt="Electronics"
                  />
                </div>
              </div>

              <div className="col-sm-8" id="c_i_2">
                <div className="container section text-center">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active ">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/250/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Top Mirrorless Cameras
                                </h5>
                                <p className="card-text">Shop Now</p>
                                <span> Canon, Sony,Fujifilm</span>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Printers</h5>
                                <p className="card-text">From ₹3999</p>
                                <span>HP</span>
                                {/* <a href="#" className="btn btn-primary">
                              Buy
                            </a> */}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Projector</h5>
                                <p className="card-text">From ₹9999</p>
                                <span>Philips, Nova, Havells & more</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/ks0onm80/monitor/w/6/6/ha270-um-hw0si-a01-acer-original-imag5zjnk4yad4uz.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Monitors</h5>
                                <p className="card-text">From ₹6599</p>
                                <span>acer</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Best of Hair Dryers
                                </h5>
                                <p className="card-text">From ₹399</p>
                                <span>Philips,Nova,Havells & more</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Monitors</h5>
                                <p className="card-text">From ₹7949</p>
                                <span>Lenovo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">ASUS Monitors</h5>
                                <p className="card-text">From ₹14999</p>
                                <span>Top Rated</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/l1pc3gw0/power-bank/e/u/y/-original-imagd7dzan7sakt2.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Premium PowerBanks{" "}
                                </h5>
                                <p className="card-text">Shop Now</p>
                                <span>Lenovo</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/kxxl9jk0/monitor/r/l/e/rog-strix-xg32vc-wqhd-31-5-90lm03s0-b04110-asus-original-imaga9ubzrvh4spj.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Monitor</h5>
                                <p className="card-text">From ₹14999</p>
                                <span>Top Rated</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev p-0 text-dark prev-change"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon text-dark"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden text-dark">
                        Previous
                      </span>
                    </button>
                    <button
                      className="carousel-control-next prev-change text-dark"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon text-dark"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden text-dark">Next</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-2" id="c_i_3">
                <img
                  src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"
                  alt=""
                  id="g_image_r"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div id="carousel_items">
            <div className="row">
              <div className="col-sm-2" id="c_i_1">
                <h5>Home & Kitchen Essentials</h5>

                <button type="button" className="btn btn-primary">
                  View All
                </button>
              </div>

              <div className="col-sm-10" id="c_i_2">
                <div className="container section text-center">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active ">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/k6mibgw0/vase/b/k/h/double-face-vase-combo-8-10-wauood-original-imafpfhzhhxdeexf.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Top Mirrorless Cameras
                                </h5>
                                <p className="card-text">Shop Now</p>
                                <span> Canon, Sony,Fujifilm</span>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/kirr24w0-0/wall-decoration/f/z/b/rafuf-wooden-intersecting-wall-shelves-set-of-8-black-white-8-original-imafyhg9dzdvyhnz.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Printers</h5>
                                <p className="card-text">From 3999</p>
                                <span>HP</span>
                                {/* <a href="#" className="btn btn-primary">
                              Buy
                            </a> */}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/kura1e80/pooja-thali-set/d/h/2/yes-kk-pooja-thli-sml-gold-kridaykraft-original-imag7t6v2qjjtbpw.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Best of Hair Dryers
                                </h5>
                                <p className="card-text">From ₹399</p>
                                <span>Philips, Nova, Havells & more</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/kkmwr680/painting/y/x/r/42-sanfpnl31211-saf-original-imafzxvjzwepgfzc.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Monitors</h5>
                                <p className="card-text">From 6599</p>
                                <span>acer</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/jxxkvww0/bath-linen-set/h/y/h/p4-bathsports-gretea-heelium-original-imafg3zc8kfqzpza.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Best of Hair Dryers
                                </h5>
                                <p className="card-text">From 399</p>
                                <span>Philips,Nova,Havells & more</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/xif0q/welding-machine/c/7/3/15-m220-76-arc-igbt-220a-with-hot-start-anti-stick-functions-arc-original-imaggaxpxcs4ffwg.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Monitors</h5>
                                <p className="card-text">From ₹7949</p>
                                <span>Lenovo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item ">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">ASUS Monitors</h5>
                                <p className="card-text">From 14999</p>
                                <span>Top Rated</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/200/200/l1pc3gw0/power-bank/e/u/y/-original-imagd7dzan7sakt2.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">
                                  Premium PowerBanks{" "}
                                </h5>
                                <p className="card-text">Shop Now</p>
                                <span>Lenovo</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="card" id="card1">
                              <img
                                className="card-img-top"
                                src="https://rukminim1.flixcart.com/image/400/400/kxxl9jk0/monitor/r/l/e/rog-strix-xg32vc-wqhd-31-5-90lm03s0-b04110-asus-original-imaga9ubzrvh4spj.jpeg?q=70"
                                alt="Card image cap"
                                id="g_images"
                              />
                              <div className="card-body">
                                <h5 className="card-title">Monitor</h5>
                                <p className="card-text">From 14999</p>
                                <span>Top Rated</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev p-0 text-dark prev-change"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon text-dark"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden text-dark">
                        Previous
                      </span>
                    </button>
                    <button
                      className="carousel-control-next prev-change text-dark"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon text-dark"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden text-dark">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Main;
