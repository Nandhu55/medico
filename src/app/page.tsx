import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, HeartPulse, Truck, FlaskConical, Stethoscope, Star } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";

export default function Home() {
  const categories = [
    { name: 'OTC Drugs', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBsYGBgYGB0dHRgaGx0dGh0eGhgaHyggGB4lIh0eITEhJSkrLi4uGCAzODMsNygtLisBCgoKDg0OGxAQGy0mICYtLS03Ly8tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIBAAj/xABEEAABAgQEBAMFBwQABAQHAAABAhEAAwQhBRIxQQYiUWETcYEyQpGh8BQjUmKxwdEHcuHxgpKiwhYzQ7IVJERTg5PS/8QAGwEAAgMBAQEAAAAAAAAAAAAAAwQBAgUGAAf/xAAzEQABBAEDAwIFAgUFAQAAAAABAAIDEQQSITEFQVETYRQicaHwkdEVMlKBsSMzQsHxJP/aAAwDAQACEQMRAD8AoY3xBIl1iGRkEkdNT5RPMpamvy1U0kSQfu0jfoWhmxX+n9PUTvGmO2pTsfOJOJfupMrwTlQg6bFoYxm63AOSmX8kbnBCZmNz5ZCQcpTsR+rw/YBjQnygr3hZQ6GMh4kxvOvP7xAAAhn4cpZ8mQkkjPOLpTuLbxp5MEZYGtABWPhZErHl7iS38paAucJjpcRZpaNKB1jJaqqnSppUpSgtJ1f6tGhYLjonSUr3Nj5iEsnEMLQQbC0cPqDchxbVEKtxdgEuaM45TuRA+kpUJSJaU82jgwZxmbM8JSkyyq0Z5LrFpWFucwLvBsWF0rOeFTOzmYzgNNkp2p5c2Uuy2ADkKi7LxkqBKkno7Wijh9eipkuq60+0IsyaOYtGWWSE9xCc0TSSJBuE/DIHtDmHYqwFul3vAKtqzYE6lovYhI+zStFLV2vc9YqopCtAXNCWAdwdI81gAtE1brNcawxdNW+IJiuY2IN77Q9cK4K6850PMe57wUn4bJnZScqsuhg1SpQgcrQv6dFbcvUtWP6bNj391aqJgSPKMg49xaaKhEqZK+5Ks2Yaq7PtGjY3VMktC3xHh6quQkJbOOsTI22oHS3tZkBxNe6p4BRpmzkzkIKUhOUJJdvLpGlUMnKnvC/wphBkSUJV7Q1MMFXPYRWNlBW6pl+vLQ4HCWOOJ6FSloXNEsZSSevb1hOwLEaiRRK8JCGmryhb8yX5XI3gxxhhX22SvK5Wk8oG7ftFnhThQU8v77mW3svyjXTqe8DkjLn2E/g5kMGGWS0RYNdz+e6YOFcO8GUlAuwuep3Jg1iM0BBJ0AgddKeQ5Tdm032gfiNetUsy1MmafZf2VX67G2kHDaCwZJPVlLndykmZPTV4kkTTklpNs1nCb79T8oY6oisrEpTeRTkaaKmfu37wjUGJTFV0w1dOFKfKEszDQFjqGu/eNJ4Kwrw5dk5UlRIHmXhaPUSb8rpupOYIWSAVTQAPfuR3TZSjKmF7iPEhJlTFn3QfU7CGCeoANGbf1AqJapSwqaEFBDI/Gf4g73aGlwWD0+Fs+S1snF7qt/TjCU552ITtnZSuuqj+3xhv4NWZyZtUv/1VEoB2lpsn43PrCKqrqPslPRtLCJzcyDzZXc5hoI0zDpSZclKEhgAB6CBQPc7lafWYWR2/YaiQAONI2+5Xy5oDkx6ZBKM7d4rTkFagkbkP5bwWrVMhhvDJ2XOpdnZQlSlqZI17nYQvLxBWma3lB2uk5pM7cDUDW0ZxVYuJZynbtGH1j1y5ojJA9l0HR2wljtfPumYViusfCsV1+QhXl8QI6/Ix2OIEbhXwjE05Q7u/Ura0QeyfsKqliTMXkQtIN39oeUXp1MLEaEBQ9YUeHMRRNmBHMx2Nn840apSkSQkeQ7Rv9JfKWnWTXG/lc71WJjXW0bnx4S9ljyJ/Cj6NtY6sYhPLECBSaHxZRlLDi7Hzg2KNSl9otTKDKl3jwdp4VXNsUUnUfCEiUkEjMpNwTFXidBR4dQlTZRb06QwV04myYhp8PC5RlTBmTs+0MxzODtRSc2KxzCxor91mmN4lNqFjKCVK6Rq3BWAmTTyxMVmWznoHu0VqXBZEhHKkBt9/jB3D6wGWlWzRGVkeoKbwowsT0TbuUQmMLRj3HlQlFUZckAkgEgbE9Y02snqVZOkJvE6qaWpKClpq1B1Nol7kneIwXESUFHU2NdDZHCg4FnIlF5qiM1n90ecadKUGDaRjmPLTKmGWmZml2NtHhs4axwikSVmwdj22hjOgunt79kr0zJcLieNh3TZXzQeRrkRWkYOFDnDdoUpvGK0rBCQUAsQdT/EO+F4imfKTMRofkdwYTlx5ImguC0YMyGdxaw7hB8Q4fly5gmy3S1iAbHu0fJEFa4FTMbB3HWBVGhGdYUsNLGZV9BdnO2kVD7buUxoN7BcVJGW4eIpE0Ja0cYTi0urQubKSUpCiEk+8AWf1i6lD7RXVYRKLHUVLT4gk2iWYnxAwLDrHEqjA2G/7/wAR3W1iJSVKUQAH3/u0EV+ihzrX1PTS5QOUdSTuddYhl1KZy1SkEEpDnpuICcR10wyZcxNkTSQEkHMbltNXB08og4ewwpMuaSuWsu6s4LoYEcuwv8okkAWVG5TBOVkVlLP59Sf5gTxLMV4QyozdeoFtBvrBxAQu8suB138o4moCmsxEZzOpwl+l23g9iimB1WEh0ddLWUiejOE+yv3keu47RpOEzkFAKCCG2hZxjh1Cw6GQpuljb/HzhfpqufSTGdr3BuDGhQO4UOleWhpOwWiYhPYExlH9TZCFIlLJYkkkw/ycTTPS1go+68Vp2CJmjIsApfQxDm2KRsSZsUgcRaSv6fYSZ0zOxypAZXftGrTeUAdBH2FYeiSgBIAAGgiKpX/MDhj0Ckx1TP8AjJdfYCgu8ORz5zoOUHudY6xaadE3OgHeJ8OGRDEEFnPmYG1CiVtq4P6QXus0IAueuStQJBzakG3+WgDWUMuYoqULmIsTrBLWQ7ja+na8VhiiOvzEcjl5GU6Qgna+Nl2OJjQMYC2uFMMEkfhi7h+C06lpC0qy75bmKqaoGLuGV5RMStOo67wmyaUPGo7fRNSQnQdKYMJ4dp0rE2UoqQ5DHUHvDBPIZhpFLh6Qc0zNotlW2N3/AFjpSrt3jrcIf6QNUVyea9xkLSbpRlcexXlyswCua4fTrH0Ma3eEL0meUawjEZc6WFyzbfqD0MTVU7lIGsZVwVxAEzjLCmChp3hjxDitMtTIGc7l7fGHpMN3qlse4WLFns9ASTbFHKXC1FTk8sEZlAAlwbxDgeMS6iXnRZrFO4MWJ9Q4IBvC79TXU5Osc17Q5u4KA1ZKrDSLOFSyhJTt0gVjWJIkHV1EeyPq0TYDj0uanKoBMwlhf9oP6EhZqA2S5y4RL6ZdujsxYAhM4ro0VEtM0PmSSmw/XtB6rmFRaPaSjAB6HWKROMZ1BFmjbI0tKx2Zh1TUrSmWg5QWJ2HcmGvEZyqORIpgkFHtqV+Ig3HlD2uWiWksABACbTfaUqlkDOFFSM6XDEaQ63J1P1OGyz34WmLQ3lLnEOIyVqE1AypygN3H18oYf6dYkmZKWgZgynL6X6H9oE4XwMshX2tYCAXDakD9HghjOIJp5OSnQyQkkAbt1j2XOx0fphV6dgyCb1HbFT8XcapkvJp2VM0UrZHl1MZ7hVfUTgqiQonx5maas+0R0fowv284ocMUi6vxGWozioFMvIS76kr0QPONQ4Q4QTSfeLVnmqGo9lLlOm511PSMFokdIfC+gudg4+I2h8/3J/ZMWB4dLppSZaQ4CW84tpSG+P7iIJs8JAfdrak+zoNTrC3jeKTwQhMtSBZyoHcW+Yh0NXLucXOJKM4ljcuVYu53AJA1vb1hen1YVmXUEKlZn9rKUjUg2/N11glgtJP8FUqefu1EG759bj8oOtvlAXjbiFNJLlS0Usuakh1hSbAHYNobG/lHiaC81tmkWwDHqWdlkpnFZSXSJgZg4PKSLsxgoJCipRcZUoZhrdKQf0jIajD5c5JqcPUSE8y5L/eSj1De0nuLeWkOPAOKVU5LqllSQMuc2zdnNyR1GkLyStDTr2RzD3amGY0sBaFcr9bg/vC5xTxhLUs0hmqkqKQ89Huk6JI1Yi5IIIBglilItGZcpyke0g6j+4dPzCMp4mw0mcuahQdZfw1G5/sJ9ry1jGhwmNyCf+Ncdr8pgSW1NWH4/V0Cgif95JVdKwSUrHVCx/vqI0NcuXVSQoZVpUnMAFJKgWU1gbFzt0jBvt00SfCStSpLuUH3FizttD5LxdEuTQLpjkUSfFla3DOebmudC+hjajfWyHJGHb90wy8MTJmPMUrI5yqFuoGbcaaiG3D5psp0rBFiN9y3XYdYp4rTFCg4dKn/AHJ/WAVQFoOWQopGuUjXax2fTpDHKTT0ucFJ5bjtA1QzzEofUv6C5gJRV8tMoCVmE0cvhk3Ub6uGIHb0g7hDKUSsZFkBhYs72ChY+yfhEcKETq5jJA3MKtViRTNCwFW7WO0HcXm9+0IvEFbNTMAWT4bMlvZGWzecJZ00kMBdHyn+nwMmmDX8KnjmGoqFlQ5QbkM4frAOo4OSdFj4f5guitB3ib7QOscmcvI1aiV1YxWBtAIFJ4UItn+ZgyeBqiWULcEauFk+hiwmd3hkoJqPGlqlJUEKGVbuztfX0hnFnMj6k8gfr/n7JfJ1RN+T37eP7o3hsgy0gncM0UcXmFCFKTrqIITiUnKYF4lOSlC1KSFiwAOjncjfr6R1JLYoyTwFy/zTSDyVBJ4jGUOhLsNDb0tH0L+ZPU/D9nj6MX+Os/oP6ha/8ACL+n1/vC1xThqV1tNUCe6ZcxT5hYKSQoBw4uHhT4Zq5tCgTEoSlLgh1BvI9tYFScXUvH8tCllc0I/H2hLqaOaWqWmzK5QxPzjvcdm15Hq5dC5w/9QYxPj9FdwvGZtNMl8slbBw7oV/2/mNEoePaWZl8V0KVoQxSe5JvCvhfEcsyky6iVzJGqf4vE/wDKLz4hUUlWfEStE1iASUoBfM/4Y0pWlkgx0w4tq3VdDxTi/g1EpEtM2YMwKswAlggsFq0N3Hl30PDeG6s1M3xK2d7gqJd7F8pI1G3rAClqa+srQnIlMpLgZgUpyjs2pV5xpdDhwyj71SnO78x1LDoAAI0S3dIX4+ZkY3Zc7hSj07J81cW0U4Lg6/TzhW454zSg8lMs+K4uD92hJ2v7o7kQp8acZ1EmamkS3d7LV/eWvIe6C7b6jXpE/CeH0gqmrM2Yu5Wo5ifPXp5QwA3kprE9UjZ747W/f02W6fDK+o+31yl8xJL+yR+FPRGj9TGp0dEJSvLKSkXOUAB7vct8o5VUKQhRUcoAJJIAD+sJ/EXHqJSCmSoqWwylwEnQEBwVHvYi8Qc0LSS8k6R0mI8QUqV92lRUo/mR1a2j3PWA8/iZSyqWpL0w+yhNig2LqIuVXYEaC5bSM98RcuuGfNlU98qS+hYnMCw1c9t4Z8AwpfK+VbK0S8q0tYc2h2uQ5+Yj27Wl4U7U4l0H9PkT5k1eIuZp0zVLIQ4yluZQ16O4ZjeLPDXGU+aCJiUqW+UKU6lZRYAqBYKIdtD6M7DqV1A/eISGyl6l7LdgoDlfLqN+gMXMMw9M1SVuUuQCl2CgACyQdD5dIqQGqZf2O2rUvM5Y5wACr/uP/AEhLx/h9Mw8j+EpzH2QdAdS7927wVw3E8hA1YF+hU1/m8WKtQyOQd/xAH/AHF4c/6LgQ2/tZ/C6XN1f8K4dXTkS1S/DkKKyqYQlKSkgqIclR5izXsS5h14d4eRTpTqylSikF39k2tYAB9m1fK4Jp9V4M0hRCSQz2Kkq0YjQ/tA4mF8JkzE1FUtZUlEwApdXlQoMkjW4uH0tB2R544Q/wB5r1U5aOq1dGvXUeWw7R6uamWkJdKkFwQRl0/y19Lg2aM9r8VqKZ+U8tKS+T/ANx6m3V7Fp+FcU/az/p9RkC1Fku2RRNkudUHfW0V1G5pP3B913/ABeG7Kj4UoEq8NIdyMpcHSwuX72+F2iM8OSZqyV5kK2UkkEd3c9f2i1wthqZUo+IcwS7M9n1uN3B8osLp8yiFEjLco329r52eNo/Wb3l5v2j7j9V64Y1K1S0T8wR7Sj4ikpSpDkMAxId2zE273hKrcMqKVT10qSj2g5FjcZSD7QJ+Zg+lC85QoMBoWbW5B6dY1BCEJly5a/ZCEg6WIB3/h1jGz+k210lR+8T9l7G40b4yfg+oRTq8GZNS6j4b3uQzFwQzsW7GHSUvOka2Z7fUdoI49h3hlWbK9jq/n16d4DYWfCmZDoX+Y/QGgOaB4l+Q6X8J54C4jSj8aUv91M8Wb7PqA/aA3Gq5JkI8NXOqYMw6JC1g/9iYa0z/El6sN4UuOKNSoiXl3nC5cDSWoH6Q3Sj7x03uR+E2S5oJ2WlS1kEk3+p/y+sd/0/wAWRUyrKUCaG095I2UOpFm6xTlp0MTeF8S+yVKamX7C8qm3Qk2W3+x+Y6G6lQzHqT1sN+aN591rFPNxN+F/2I+j5lA3/AEtH0eN7IuP7A8U4Pq3Yj6+sI5rE5kM+bQj6G0b1xHSSzTz0zUZh4A2LgB85dmt8IwpY7j43/Wkoy5XFh+a9C3I0J39k9NfK+tNfUjR8J9Ew9QWlYJ0j6L02YmYgKB0jJpQ3g9wzXTZZaWsAn2W2Pr1jzOkwb+mJ3eYx3kKzWsa7Klx9KMyVf3o8/5jE/8AymY9lCUnkUq56JTv6kR9xN5/BTLUqU6gJbYqJ/uI1jEOMZVLJSZk0JdKUpSl3Wo5QAC25uSdwYxM/K52gLpI/wAq3rQ9v6v7T5O/p/xUoQpExal5cwFzkJ2Jd2e+1o0Hh7iBcyUpMzyTAVkC1pY8qQGLh9XJ+t4zTijEqbEpL0iSqaJgUpK1qCEy0kEpy7l+gOoa46wRk1XhvJUhSS/KQRqOhtC3+HmaT+nZ3tZcZ4j5XvY6v2U+K4v1f8AslRzWk0W8GZ/UjiD/u10/wD6jM3A/uM+KVKWkXF42njzhVdfLSG+8QXlvqQNYXy6oU5HQRn1ZJ8Ob4UwZkLd9iW6N5kX9IcyuHlaR2Jt9f9yWw+n1c00+7C+Jk26/f6h+H4o+Wo6g/X15QzTMEqJcyYE8yWGYhQZ/N+W/nFfAONKkTEy6hKSEnKFZcq0h25tCOgI0g/jXEyZc0S0ZcywCElQzLId9CQl9z0BjUaWJ18I2905K0k9U+YpMUl0t4iVMCwB+X11gHh/FpTMQoG2t9n2cMCLs9x3g0KxQzS5YSpQAK7lI1Id9XfXoIAI4VzSVTQpGUB84UsC2nKGc3v2h+F7o38XUu4u803l6fT/uVv6fQ2K4oZ89EtL50qL6GzZg3a+3lGoYZQc6UuQ5A9oPmLv6uNIo8FYLJl1a5qZ6TMAyFCGBAzcxN72LNu/rDFKqXmL2t0/46R0MUMh3aLzRzGjXp+YV6bEFSQpDkElnDguSQW1+cQ0NUtKsygoFSiXLF3Z2NtbQ319KkOogMSyQ4Id3DH1OkIHFM6dKWhUu7rWkAFzZ2G7C92+kS6zQW+J8b6k8+V5Qc8O6s4vS8w8QoQoWdZ0N7pDsb7DzhVqsLTLlqTLOdJc+Iq76lKSG1e48om4e47nKm/Z6lOYEpSVlOUpJOxSAwLdOkEa1ZJdJALsCQGfQkX7sR6dYb/j2u2aXU4J4+k+t3mYtJSpS3Dk6H/T5D5bRoWE1QWEg+1/d38x09B52jDqEFWb2mS9yC/W2zX36wzYRXlBBJ26W+V28o5rUML4zG/x73S7W7aO6mU/ilwB3I3Iu47dY+ZtKkKS5B9kX9rUfX0YwSqF50uCQDqPXX5w/YdiqVkHcH4H9x8oEwBwWj0v/CUnU63/wB/WqVj2HTZq1y5OaW48V7gqfI5Z0ygh36eW0V+HuAZ82X9qmpXLSkcyiCslg5SnQXYk+m8M9HhX2gqCihS0h1AlQ0LEa2/j0h0xNUpMhP2dKVZcpSnYd/QdD+w6Zk0nJ+QG121a81Xg/A0qWm+fM6bEaHYgWY7B+p1g/LwFJJmEpcAsGZ9L+Qe/wBoG165y/FzFKEg2FwSW+LsbWj5OMgBSElT6F+UE2d/I9X1YQ0A0KkF3KVzZp8JSkJbW+x7sA5P6x7WYmJbA3t/c3aFqtxqYtOV3Sk6h3+LMXP08C6xLqWJNy9/P8Aj/KIZbZfF3O6t4jjiW5UuFKG+50GjB7s7X7RmqZqlrUoy1qKiq4SSXJPQWf4Q74hRpKSSlJLkkkBzYt3iE8oOwvHqSAbX6+oJ+A9YqA+2yE26WnKnpVpZkSg/K42323hvw3i6mX7QyH94W9R/aKXEOGgqE1aRmA+8A9odx33hMm0xY9iI2x4hP4qHlT+x53RtvD/ABfSZQZ8yVqA5uUJJJu2ZRDW300G8A8O4oT/ALk1Uol2cE5W1Y2bL8u0JtVJLh7vFOmk7k/X18Y1s/i24b2XyT079zZp5s2+zF7J+kE/1TogT4Znl0qWkZgoe172u4L+kE6D+o1LMJzEpzWd7t2zC/7iMN+0U/Xl0EeCWTGz4rUeL7+fK2fDk9B+a+nZHHfDqlQ8Jc2WqWokAh3uSw0Lg6d4+hGf/1qBsn/AORi+26v846f4jS/P2W0Yh3W+cT44lctS+VILl75iB397XfQRlU4+f9v5jfONcZKp5k25kKSlQ8kpL28yIyuZ3H9Yx4T8S2sZ3aRKnkX6xZwyolLSoO+a+2v+3pFGp+r9Isu0hKJZJcFIBtqC7/wBx8o1m32WkY0h4p5+eRMmS5mZIKwA45n9rRwCq12i2x/GkYhQp8QOEpSSZgSlS2uQSA57+0T2fWMg4ax/wVGW5L/D1h6mYkqYCwzAnpYw4NBa3m+P/ABT2QSN9W9K1f9UMH/1/2D4cR/Rz9kR9l+7+6zK/eZ+XPlu+3NfaMep1KkLKVAggkEdCI2fjKkROplT5SQZskEKS78r+0k2uQ4A2tYxj0lXvC4L2s17WjsQ66h1W1f03p5S/HVm9qVLWkkG33Y9s9Wv8ADXnCjxRwhO+0rMpxlWpSi9kpJuHB1D23h24Tx5VPLyTEhUpaioMOZJJd1J0Yk6+e8E6/j+VJWtKZcxRSCX5Qk2sFqID7dC8a5c1x6+9xP2C8Z5Z0w6wLwjhKqiUqYJZ+6zF0m4B0B7s2saBScL1MyaJi0BKUqCsl7lKgwYDTcE3hX4q48m1YCVNlkFikEsz6FSiWfpt33gjh/H1bJkJlJShQSkAFQUXIG5CgNPMQYJ+lC1lJg7I4s/W7Wj/AD/pCcZ8B+lT0/C0eO8wG0W0qXqMv/wB+m0Q1vEFQo28FD6gKcH/wB1fUvHn25S/+rP/qf/AMY4X+T9N5f/ACP3T2p+qX/W4i7M+Uu+t4/oQ11GHTFqQZ6FSlkBxCkq1B1B8oN8Q8eLpyk00l82UJJIDNlFgkbN+0L/AB/jcyf9nUoyyUeKCEZWFkjQlduXt3tC9951/R331Z7b9k5f9Y1s+t0YJ6T6wTqA9977eN+3r6qR0pLSDt+39lE0p32U5nJ+F/3vHqJ9n6dY4Qf2MeBXuY33F9Nf8JqL9rTfK+t/jDlhFUU2jPpCjS31H0037a3hnkzQYy+rYNzU+j3E3Jp4tVpy68k0YVXB1dYdMJrA5hKpqfRjD5SzGPMo0zWfK0iY0jGg032h5U8WqfL+3+YkTM1iSlY+Q8Y+oG8fNf5R4LdI5+XhZ0tZ95o06714R8zN+kexHyn6jyj5yI5k9wO3j+V2t8o7+P9I9QY93+v9v0jyT6dF4iY8lC7iGqJp3C2u2v9t48w6YQ4D3+QfT9zHktM6QZk1b66feK8Y+qjFv3+2m0T020+vr/AEhRpzDhh+0fG52v9B7l7J+Z9y/Saj1+vp9/wCI5lR4/r6+o8mR3Lz9/X8i6gR6gR4lUe8s+vr/AOo8a+lD3P1DvhXECkKyoUSkkhjuOhB3A9B2hpw7jCVMVK8eWtSi/L7Siz3f8R7kC76mMYD+t/iYv4TWqSohL6jUH59+8eP6fpOPmGZ2348eyzmx87TjK6oKUpT5hV/d22sPXrBfG6wJlqU5J/5L6k+QvGZ4ZxRMlgJWkTEgBsvKQ7b35S/Ua7vBybiGVKQkzErUkljlykHYl1K0u+o8o9bA2JmN2R2Ue0a5x+sN1p1m0y/wBv4g9N4j/1P8Pj7/vHk/j5/wCv/p8f/dFdfE+HH/8AUpf9pP8Al6x9/wDGeH//AKlH/tH8o6P52n/qH3T3qZf6Jfx1+Kz59/Xw6D+f6Rz4rA2hW/40w//ANSf7Svr6aP464f1xCZ6p//ABir/n6X5/3D/lW/qH3T3qpf0D8S/in+7ePoB//gX+P+Y+hy/5Gk/0t/hK2rJ8a/uE37W3r9fW1+0l8y+h+sfE+/oPr6+Gj6d/p9fX/E9N9Jv9Pr6+vwgxxWn2PxT6BQL/wDSf0ifdfr66CBMhV19fT+Yi7iI9lPWYPoqWp/Xk/oYlQvG2H/b/wCEc6H8oYqgT0rDgxLSpj5Cvo+sVpEw3b66dILcN3nv+iP/AHCIJ7hWzH+qX18d/uW0G6wYf1lH/eUf/wDkRldR/iV/if/mY1Dgf8c3/rEf84zCq/xKv+s/+ZjH0n+vJ7H8l7D/AL/dSUv4ve/1h4k4tOUhI8aXyJ/Av8I/Cv129IUUf4j9fWH6X/hE/wBVP/LGMi0s3N0/Dq8P6xM0y3C326f/AKmF//fH1Pi1f/aL/wBf/wCRQkf5r6+B/iPcM/60f7pHzEaNizn/AJd+34yL/X4yD/+Y36kH/fHxP+Ipv/wBV/wCkf/vGfU36+Fvr/qG/Bn/2uQf9UuXz/wAxVpE7m+w/2iC0/wARuH09v7Fz/j2lJ/8AqP1S//zD5xvxrK/9U/8A3T/9YQ0/l/f5R2Bf9fX0Y2F2vL16T/jCgHq8+o6/7x5L47lr/wCrr+qH/gZ8C/aA//M/R/mPIw/H/j4S3f6rL548nN2h/gH6f9z0/wD6f//Z' },
    { name: 'Prescription Drugs', image: 'https://placehold.co/400x300.png' },
    { name: 'Vitamins', image: 'https://placehold.co/400x300.png' },
    { name: 'Personal Care', image: 'https://placehold.co/400x300.png' },
    { name: 'Baby Care', image: 'https://placehold.co/400x300.png' },
    { name: 'Health Devices', image: 'https://placehold.co/400x300.png' }
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-background">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] font-headline">
                Medicos: Affordable Care, Anywhere.
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your trusted partner for fast, reliable, and affordable medicine delivery and healthcare services.
              </p>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input
                    type="search"
                    placeholder="Search for medicines or healthcare products..."
                    className="max-w-lg flex-1"
                  />
                  <Button type="submit" variant="outline" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>
              <div className="mt-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link href="/refill-reminder">
                    Monthly Refill Reminder Tool
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              src="data:image/jpeg;base64,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"
              width="600"
              height="600"
              alt="Hero"
              data-ai-hint="pharmacy products"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-4 lg:gap-12 xl:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-primary p-4 text-primary-foreground">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-headline">One-Day Delivery</h3>
              <p className="text-muted-foreground">Fast, reliable delivery to your doorstep in selected cities.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-primary p-4 text-primary-foreground">
                <HeartPulse className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-headline">Health Checkups</h3>
              <p className="text-muted-foreground">Book diagnostic tests and full-body checkups with ease.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-primary p-4 text-primary-foreground">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-headline">Doctor Consultations</h3>
              <p className="text-muted-foreground">Connect with expert doctors via our telemedicine platform.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-primary p-4 text-primary-foreground">
                <FlaskConical className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold font-headline">Lab Tests</h3>
              <p className="text-muted-foreground">Free and subsidized diagnostic tests for everyone.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="categories" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Browse by Category</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find exactly what you need from our wide range of products.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map(category => (
               <Card key={category.name}>
                  <CardHeader>
                    <Image src={category.image} alt={category.name} width={400} height={300} className="rounded-t-lg object-cover" data-ai-hint="medical products"/>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-bold font-headline">{category.name}</h3>
                  </CardContent>
               </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rural-access" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Rural Access Program</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're committed to making healthcare accessible to everyone. Our rural access program provides one month of free medicine to underserved communities.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button type="button" size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Getting your medicines is as easy as 1, 2, 3.
            </p>
          </div>
          <div className="relative grid gap-10 sm:grid-cols-3">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 w-full bg-border -z-10 hidden sm:block"></div>
             <div className="flex flex-col items-center text-center space-y-4 relative bg-secondary px-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground border-4 border-secondary text-2xl font-bold">1</div>
                <h3 className="font-bold text-xl font-headline">Upload Prescription</h3>
                <p className="text-muted-foreground">Simply upload a valid prescription from your doctor.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 relative bg-secondary px-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground border-4 border-secondary text-2xl font-bold">2</div>
                <h3 className="font-bold text-xl font-headline">Add to Cart</h3>
                <p className="text-muted-foreground">Our pharmacists will verify it and add medicines to your cart.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 relative bg-secondary px-4">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground border-4 border-secondary text-2xl font-bold">3</div>
                <h3 className="font-bold text-xl font-headline">Fast Delivery</h3>
                <p className="text-muted-foreground">Complete payment and get your medicines delivered quickly.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline mb-12">What Our Customers Say</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                { name: "Sarah L.", review: "Medicos is a lifesaver! The one-day delivery is incredibly fast, and their prices are the best I've found online." },
                { name: "John D.", review: "Uploading my prescription was so easy, and the customer support team was very helpful. Highly recommended!" },
                { name: "Anita P.", review: "The monthly refill reminder is a fantastic feature. I never have to worry about running out of my essential medications." }
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 text-center">
                        <p className="text-lg italic">"{testimonial.review}"</p>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                        </div>
                        <cite className="font-bold not-italic">- {testimonial.name}</cite>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Ready to Get Started?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Create an account or upload your prescription to experience the future of healthcare.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button type="button" size="lg">Order Now</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
