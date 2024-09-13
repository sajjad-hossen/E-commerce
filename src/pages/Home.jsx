import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-100'>
        {/* Header Section */}
        <header className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 min-h-[300px] flex flex-col justify-center'>
          <div className='container mx-auto px-4'>
            <h1 className='text-4xl font-bold tracking-wide text-center mb-4'>
              Welcome to Our E-Commerce Site
            </h1>
            <p className='text-center text-xl'>
              Find the best products at the most affordable prices.
            </p>
          </div>
        </header>

        {/* Products Section */}
        <section className='py-12'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-8'>
              <h2 className='text-4xl font-extrabold text-gray-800'>
                Our Top Products
              </h2>
              <p className='text-lg text-gray-500 mt-2'>
                Browse through our range of high-quality products.
              </p>
            </div>

            {/* Grid of Products */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Product Card */}
              <div className='bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA7O_vS8Fg_E5Y2Hio8XH8yddQgRzHQre3dA&s' // Replace with your dynamic image source
                  alt='Product 1'
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    Product 1
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    This is a brief description of the product.
                  </p>
                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-xl font-bold text-gray-800'>
                      $29.99
                    </span>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow'>
                      View Product
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card */}
              <div className='bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300'>
                <img
                  src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUSEBIVFRIXFRoVEBUVFxsWFRUQFhgWGBgRFxYYICggGB0lGxMXITEhJSkrLi4uGR8zODMtNyotLisBCgoKDg0OGxAQGi0lICAtKy0tNy0yLS0tLi81LS8vNzYrMjM1Li0rLjItLy0rLS0xLS0tKy0rLS0vLystLy0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xABKEAABAgMDBQoMAwcDBQEAAAABAAIDBBEFITEGEkFRYQcTF1RxgZGSodIUFiIyNEJSc5O00dNyscEVM0RiZLLwJILCI0NTouEl/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EADERAAIBAgUCBAQFBQAAAAAAAAABAgMRBBMhMVESMgVBkbEUUtHhI2Gh8PEVM1Nxgf/aAAwDAQACEQMRAD8A7iiIgCIiAIiIAiIgCKF2vlRNsmY0GCIAZCLWgxGvc5xdDZEr5LgB59ObG9YXjbaHsy/w3/cU1Tk9UiDqRWjZ0FFABlXaGqX+G/7i9GVVoapf4b/uLuVLg5mw5J8igQyotDVL/DifcVQymtDVL/Df9xMqXAzYck7RQUZS2hql/hxPuL0ZR2hql/hxPurmXLg7mx5Jyig/jFaP9P8ADifdXvjDaP8ATfDifdTLlwMyPJN0UI8YbR/pvhxPurzxitH+n+HE+6mXLgZkeScIoMco7R1S/wAOJ91eeMloapf4cT7iZcuBmR5J0ighymtDVL/Df9xUnKi0NUv8N/3F3KlwczYck9RQE5VWhql/hv8AuLw5V2h7Mv8ADf8AcTKlwM2HJP0XP/G20PZl/hv+4vPG60PZl/hxPuJlT4GbDk6Ci56cr7Q9mX6j/uKWZLWo+blmRojWteXRGuDa5tYcV8OoreK5laaKqMoOO5KM4y2NsiIokgiIgCIiAIiIAiIgCIiAIiIAiIgOX244ftCaGcQTEZQDSBLy9aqsBU29CL56aFaDfoZIuxEtAobxjfyK6AttPtRhqJ9b1PAFWAgCuNCkRPA1XGtXrWq41q4dseBirDVW1quNauHbFsMXuYrwakQhoq4gAYkpudemrLOYrMeKxnnG/Vieha+0ba9WHXl9Y8g0cpWhjxYjtJGsNvceV2jtW+hgZS1m7HnVsek7U9fYkUS04YxDugfVewZ6E80a8V1G481ceZQ98k4+q0fiJJ6cOwKxEl3N0jt/S5bf6bSa0k7lEcdO+tmT5zVbLVGLHygdDIhxzVhua83lp2nSO0KVkLzMRh50JdMv+Ho0qsaiujHIVBCvkK2QqCwtFqoIV4hUELpwtPFyl+576Cz3sx8zGUSeLlLdz70FnvZj5mMqK+yL8PuyRoiLMagiIgCIiAIiIAiIgCIiAIiIAiIgOb2oP9dN+9Z8tLoAvbT9Om/es+Wl1UAtlPtRjqdzPWhXGheNCuNCkRsetarzWrxrVVEiNYM5xoP8uGtc1eiDaSuy41qzpSQz21zqXm6lcOdQu18oXAUZ5IJo3Wa3VJ0DkUryJiF0o0urXPiV0HzzqV1bC1KdLMl5uxVQxMKtTojwbIWUfa/9f/q105ku+Kauju2AMuHIM7tW4hUdeWOaf5jffyOKutYBhUchP1WWFWcHeLNVSjTmrSRGm5Egf9w9T8/KvR2RmqK4cjB9VJuc9Z31TnPWd9Vb8ZX+b2KfgcP8vuRR2QxOMd3wx3liHc6vr4S+nuxdz5ympP4usfqvAaj1uQuP1Ul4hiVtL9Ed+BofL7nFsqbMEpHdCzs5oLWuNKXuYHg00aehbzI6fMWEYbzV8I5vKw1zT2Ef7QtTuox6TpZpc5juZsFg/N56CqMgotZqM0Yb2SeVr4Y/5Fe1X/FwalLdJP2MVKPRWaW2pNXBW3BZDgrTgvDNtiwQqSFdcFQQukSy8XKV7n3oLPfTPzUZRd4uUo3P/Qm++mfmo6pr7IvobskaIizGkIiIAiIgCIiAIiIAiIgCIiAIiIDnVoj/AF0371ny0uqwFTaHp0371ny0urgC1w7UZJ9zKmhXWhUtCusCkRLczMshNznnkGknUFDrUtV76l4ON2abmt1Up26VJMoXQxDGeaOr5A0nXzbVoxIh2nsXr+Hwpxj1yWv72PJx9R9XQ3p+9zWS7XTLaVqzCrrjQeyQK1G2oXR8iJYwpRjHPLyHP8o6QXEgYnAXKJy0iyGLyTjsxNf1UyybiVlwWj1nUG0ErniVTqp2W1/qS8Nf4zS4+hsLNguhszXPLzUmriSek/4Kr2zZd0MODnOdVxcC5xeQD6orgBqVEhXNvriaVdnE1NTer0q2gNDU1JvcXXnQScOTUvDbbWvme0o7fkW7NlYkPfN8iOfnRHPZnGuYxxqIbdg0KuUgva55c5xDnVaCaho9lt1wWuydsJkmY5huLt+imK+rgc2IcWijRQX6alZ0hJ726I6tc92c7yq0dqFwuvONTgMAFy99WSSSRiWXZcWFHjxnxoj2xi0shueXMg5udcwE0Fc4YAeaFs2tdU1w0X/kKLW2XZrYUeYijfM6MWl4c8Oa3MzqZrR5lc7sCzIMsGxXvriMLqitMaCvq3VJ0qLbONnEN0+Lm2tHe68MhwqDbvbaN5yfzWw3KJdzvCI7v5YYP8173/3Q1p91ljn2rEY0FxIghrRi+IYTAPzoOU610jJyyWyMtDgkjOArENfOiuvcb9poNgC9epWthow5SM/QutszXBWnBZDwrTgsJ0sEKhwV1wVBC6cLLxcpPuf+hN99M/NR1GoguUlyA9Cb76Z+ajqmtsi6juyRIiLOaAiIgCIiAIiIAiIgCIiAIiIAiIgOeT3p0371ny0urrQrc76dN+9Z8tLq8Frh2oyz7mVtCqiPzWl1K0BNNdF41XmqV9SLWhArRMSKXOqC46a3AaANiuycV0NgEQguAoaYHbesi2ZJ0KMWtaS1/lQ6dreY9lFr5mPCh/vHZzvZZgOV30X0tPpqRTjs15HzdXrUnCXkzFtS1XYVXQNzqKXSLDW/OiX4357ly2dyiYzzIMPnbnHnLl1Dc0nN+kIcTNa2r4lzRQXRHDAciz+KtLDqKVtV7M9Pwym1Nya8iRyUuITc0YVJGOJNTiSrsjLiGCAa1NdP6krWykZr2h2ZHaCSKPc5rhmmmcQXVppW3gEEXf50r5u6auewmmrotykpvefSnluLzQHzzib3HULhRJaWzHONR5Rq7HHZVxAGwLJVl0enqu87Nw2VrebwotJtNnVorIx5Ozmw4j4gpnRP3lKgEiprQuIF7ir7JcB7n6XU17K6aaBo0K614OC9aKCl/OanpKk22cSSPnvdamnQ7Xiuhuc14ZCzXNJDhWC0XEXg3nBRFkUuJc91T6xN5rtJxKlu69C//Wjk+xCoB5zv+ky4ahtUO8CjOvoANA0Aal6+HclGL/Iz1LX1ZvrKtyLAIMGI5uwHyTytNxXR8m8rIc1SHEAZG0ey/wDDqOw9q40GPhmjgR+XStpIxCKEEgg1BGIIwIWuVKFdWaszK26butjuLgrZCxbCnvCJeHFPnEUf+NpLXdoJ51mELxpRcW0/I1LUtRMFI8gPQm++mfmo6jrxcpFkD6E330z81HVFbZF1HdkiREWcvCIiAIiIAiIgCIiAIiIAiIgCIiA59O+nTfvWfLS6vBWZ306b96z5aXV9q1Q7UZp9xcYvJiZbDbV3MNa9Yo/lW5wI9ksoOWpzvzC04akqtRRZlxVWVKm5R3NHb1vxIxIBozRS6v0Cik7GK2c5DIWhmnXr66nCFKFoLQ8SjepLqlqzFhyr4zqN513DcvlzCs+Gx2IfE7Yjj+q5dklm5zq0xFTspj2FdgySm4cSWa6FUsLnUNKV8o1NDfivG8W/tLTz+p6uDqyddwtol9DOlGPYwB8znuqc5+a0Z1/m0FwAwWfCmWgUc8E68FjZ8MaALzTAX1v7e1XWzAOC+dSPVSsrGVDjtdgQeRYozgX1jCmfdcPJFCc0100I6K6VWI/KqmFhr5IvNTcLzSlTruuSxxoqguJweHazS/sNOxXlTnrzfBguHTg+6xOiHacYMhh0QthVc7ADemUuGPSoi+LMu9cjY0Bo7F0fL+zWOtCNFeQAWw73EAXQ2DEqLzlryUEULi78DSe00C+moU4qhGU35I8erXbquNOF3ciJnIzXFkRxe3U6+7lxBW0kQNGHaNiw7ThiI8RYdd7NAARRwO0YU51s7AsyJMRGwYXnHz3aGM0vKppSy5NvY0VEpxVtzp+QoPgbDoL4hbyZ7hXsW8K8lJVsGGyGzzWNDW8gFKnaqyvKqT6puXLL0rKxafgpDkD6E330z81HUfiYKQZA+hN99M/NR1mrbIupbkhREVBeEREAREQBERAEREAREQBERAEREBBY0q987OFoFN+YMQP4aXWUJCJqHSFz7L+1LRg2lNNk3vbDzoZIaxjhn7xBre5pNaZvYoxNZY2tCObEmYjXUrQw4YNNdMxWqpZWK3TuztjZF+odIVmfsbf2FjwKaCCKtdrC4oMurTP8W/4cLuL3x4tTjb+pC7ilGs4u63IuipKzJ3GyQnKlpaxwHmuDwKjaDetLaGQE869jWV940KOnLa0+Nu6kLuLzx1tPjTupC7i9JeNVrWsvT7mSPhtKMupXJFZWQ1ownHOZDzXNLTSI3mP+a1tbNkbflIbIMuyW3po9dzS7PN7r6i6qhHjpafGndSF3E8dLS407qQu4qqnic6kemSTX+vuXwwsYS6kdQgPtsjy2y/MW/VWHTVthxAErmtpn3tq0nCvlXVFFzbx0tPjTupC7io8b7QqT4QakguO9wqkjAnyL6Kv42P8Ajj6fc7kSv3P1OnTEzbgILRLZl4dUtqHVIHrclypFoW8wgOZKmpzWnPa2rvZoXY3G5cyGVloX/wCoxOc7/pQr3XeUfIvNwv2IcrrQ4wcc793C8/2vMx2qLxi+SPp9zuQ7dz9Tppti33V3mFKOoS1x31hAcMWkA47Kq3DnMpyauZJDkof+a5vCyutBtc2YLakk0hwhVxxcaMvO1V+Olpcad1IfcUPiVe/SvQmqVla5KrZyRtOcjOjzAhGI4AHNe0NAaA0UFbrgo5M7mNpvfeyFmA/+VtSrHjnaXGndSH3E8c7S407qQ+4r6niM5xULJJcfyVxw6i3K+rN3A3NbQiOax29Q4WL354eeRrBieUhdEsPJWHJQ97gtF973ucC97vacf0FwXIhltaY/i3dSF3F7472pxt/UhdxUVcXOo7yJRoKKsjtZs+JqHSFZdKu9pm3y26q69V64z48Wpxt3UhdxU+PVpcbd8OH3FVmkso7M6SeWlwzSL7w4EVBoRdtFFuMhGkSYBxEeZB5RNR1wB+WVonGZJ5YcE/8ABd03LIzolmQHvNXOMZzzcKudHikmguF5OCjOfUSjDpJWiIqyYREQBERAEREAREQBERAEREAREQGmtDJWRmIhixYAMR1M5wc5pdmigJzSKkAAV2BYEXc9sl5q+UY463OeT0lylCICKjc5scYSUPpd3l7wd2RxNnS/vKUogItwdWRxNnS/vJwdWRxNnS/vKUogItwdWRxNnWf3k4OrI4mzrP7ylKICK8HVkcTZ1n95ODqyOJs6z+8pUiA4put5NSUl4J4NAbD3yK4RKFxzmjMuNSfaK6FwdWRxNnWf3lDN3iYbnSTKjOa57yNIaSwA8+aegrrMCK17WvaQWuAc0jAtIqCOZARng6sjibOs/vJwdWRxNnWf3lKUQEW4OrI4mzrP7ycHVkcTZ1n95SlEBFuDuyOJs6X95ODuyOJs6X95SlEBFuDqyOJw+l/eVPBvY/EofS7vKVogItwdWRxOH0v7ykFm2fCloTYMBghwmCjGNwAJJPaSedZKIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIsSatOXhGkWNDYdAe9rTTkJVltuyZuEzAJ2RWfVAbFFr227JnCZgHkis0XnSo/llFbOwBDlLThS7w7Oc9sVt7BiDR1aICXkgYrDmbWloX7yPCZ+J7R+ZXIxkI2LfHt4PuvpFabv8Ac4rJl9zOyKViWlngYkRobR2FAT2ay7suH503DP4av/sBWmnN1qy4fmuiRPwMA/vLVrJbc/ydaKmMx4GJdMgi/CvlbFs5bJbJyGM4NlCBdUxGG/lJ2IDSTe7fKi6FALvxRA09ABWpmt2abfUQJYDUcx8Q8xF3YujS8vYsMVZ4GBhXOh46q1WfDtGzmAFsaVAwBD4YFRox2hAfOs+LSn4pixIExEe71iw82gADYFJ8n8q7Zs6GITpaK6GMGxITnhv4S2hA2Vou1ftuSAB8JgAHA76yhpqvR1uSdATMwKHCsVl4wuv1hAczg7sr2/v5IjWauZ2OaVs5Xdms93nw4zTszHAdLh+Smca0rONM+NLGoqKvh3jWKnYVgTctYr/3ngZqK3uh4HTigMWV3TbJifxBaf5mO/MAhbeWyrs+J5k3BOwvAPQVoJ3JHJ8gOeyWaHeaREa2u0Gt61Mzuf5PuFWzDWVrQtmRSopXE7R0oDpEKbhP8yIx3I4H8ldBXIo25zZgvhWqYdfNO/QzhdcarKsjJJ0tFhxxbdYDXgkGIM14B8yudQ4IDqiLX/t2TpXwmBStK76ylTox2FP27J0r4TApWld9ZSurFAbBFr/27J0r4TApgDvrKVGIx2hZEpOwowrCiMiDSWODh2FAZCIotaG6FZcBzmumA5zSWuENrn0cDQjOAzcRrQEpRc/fut2eHEBkct9oNZeeQvBWVL7qVluxfEZ+KGT/AGVQE2Ra6yLclZsEy0ZkSnnBp8oV1tN46FsUAREQBERAEREAREQGpylyil7Phb9MuIaXZjA0Vc6IQSGDRWjTiQLlyLKLdWmJirJesvC/lIMVw2vr5P8Atv2ldmtWyJebYGTMFkVgdnNbEaHAPAIzhXA0JHOtHF3PbLJqJSENgaAEB8/mea6pdUuN5JNSTrJreVbhzDMbx/LcRTViKdq+geDqzOLQ+qE4OrM4tD6oQHz6yYbWuGy4ig1UIonhDQbhddjSlBoArcvoLg6szi0PqhecHVmcWh9UID5+39mjDUaUpqF6pMZvTiDQilKUF9y+g+DmzOLQ+qE4ObM4tD6oQHz4YzenEGhFNQvQxm9NK1oRtpevoPg5szi0PqhODmzOLQ+qEB8+Ojt0DE31IIFNV6OjNvpecaGlOa+79F9B8HNmcXh9UJwc2ZxeH1QgPn0xmUqK51QaGhHMa1/zmXgjN561oaEA6aXr6C4ObM4vD6oTg5s3i8PqhAfPrIzdI20qDQ7Cq2zDBr6R9V3/AIObN4vD6oTg5s3i8PqhAfPwiMFLyDpzafqm/MrUZ2FCatrdW7tX0Dwc2bxeH1QvODmzeLw+qEB8/iMypPlVOmrdGxDEZiDeDW+l+y7YvoDg5s3i8PqhODmzeLw+qEB8/wASO00OkcnOMV5FjtN4HlDDC/ZivoHg4s3i8PqhODizeLw+qEB8/RI7TeB5Q5L9hvWdZdtvlorY8BxZFbgbrxpa4VvB0hdz4OLN4vD6oTg4s3i8PqhAZ+RmVMK0oAis8l4OZFZ7MQAE0OkUII5Vx/dNsISsw54YWwYhLg7FrXuNSDqFehdmsPJmWk67wwMBNSGigLjpNNNwWbatlQZphhxmhzTrQHy1BigG6ldRAPPf+avmcOpnUb9F0u19xVj3ky8Z0Np9XEDkCw+BGJxo9A+iAhuTdqvlZmFGhGjg8Aitz2OIDoZ1gj9DiF9OQ3hwBGBwXI7F3GGworYkWO54aagYCoXW4MMMaGjACiArREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/Z' // Replace with your dynamic image source
                  alt='Product 2'
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    Product 2
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    This is a brief description of the product.
                  </p>
                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-xl font-bold text-gray-800'>
                      $49.99
                    </span>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow'>
                      View Product
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card */}
              <div className='bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300'>
                <img
                  src='data:image/jpeg;base64,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' // Replace with your dynamic image source
                  alt='Product 3'
                  className='w-full h-48 object-cover'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                    Product 3
                  </h3>
                  <p className='text-gray-600 mb-4'>
                    This is a brief description of the product.
                  </p>
                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-xl font-bold text-gray-800'>
                      $39.99
                    </span>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow'>
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
