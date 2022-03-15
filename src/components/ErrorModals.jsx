import React from "react";
import './../css/index.css';

export function NotEnoughBalance() {
  return (
    <div className="error-modal-wrapper">
      <div className="error-modal-container">
        <div className="error-modal-content">
          <div className="close-error-container">
           X
         </div>
          <div className="modal-message">
            <div>
              <img src="https://img.icons8.com/cotton/50/000000/error--v4.png"/>
            </div>
            <span className="boldError">OOPS!</span>
             Sorry, you don't have enough balance to make this transaction.
          </div>
        </div>
      </div>
    </div>
  );
}

export function InvalidAccount() {
  return (
    <div className="error-modal-wrapper">
      <div className="error-modal-container">
        <div className="error-modal-content">
          <div className="close-error-container">
           X
         </div>
          <div className="modal-message">
            <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADrElEQVR4nO3avYsdVRzG8XNNQtCIb1iIUSQWkiiIhQYJiCJYiBiIrEZRQix8q5RYiGAwCBa+gQb8A9aXxkItEktfsBAbRQUxkKiFRlQENZvdxAQ/FnMvuZ47Ozt35szMhZ1vOXv393ue55x5O3NC6Onp6VkGbO5aQ2dgH/7Bjq61tM7Q/IjVFQK2DE1bzSHcgRN9CH0IdqQ6HTDATXgJn+AolrCA7/AxnsdWDJrwU4m6IWANduOw8nyPB3BW0/5KUTUEbMbnUxiP+dKsPIuY8pqAW/FXDfMj/sb2tv3mouRMwG04mWPmOOZxF67A2diAq3AP3pJdF2JO4/aufP+PlUKQTfu8kZ/HJSXqX443cv7/T2xp3mEJCkKYw2fR8VPYXaHHIzk9vjDjF8Y8HqzR49Gceven9FGLEiHMJ+jxZlTziBl7Tsi7O5BdzDYmqL8Ri1HtG1JoDyGE2ufTYDA4GEK4L4RwKvrTmhDC1gT1fw4hvBcdno3b4jh4OmcWJHl3wM6o7kcpNCcHTzURguw5YZxDqTQnp4kQcG5U71hKzclxZjktSQg4J6q1lFpzcqR9ld4U1TnahOZa4LycY0lCwN1RjQ/TKU8EnsS1OcdrhyB7SRrnhbTqE4Bt+C11CLjU5BvitmZc1EC28nMkdQgmH4W/NUuPwuNg11BkkhDwkEl2Ne+kIsNZ8E2KEIbmT0e/+3RmR38ErnZmQWTqEGQvP2/njPwfuLILT1ODO8dGb9oQ8pbEjuOWLrxUZmhwYWjg92VC2JdjNm/kb+7CQ21kH0JGi6NVQjiJG7vQXgtcjBfHZsCIKiEsYj8u6sLL1GC77Lxfjqqnw6/Y2YWnUmAtXi8wsIADeMYyS1qyRdCVFlr3Y23b/grBery7jODD2IMLStYqs9p8EOub9lUKrMMHOSJPYC/WVahZJoQDMzET8EqOuEO4pmbdMiG8mspHVZFz+DcS9bUSn8BK1i8TwlyKXlXEnS+7Mscjn/R2VSKEX3Bhyp5lhb0cCVnCdQ31WimE15roWyToMpOfvx9vuGdRCIsSnXZlxeyNBPygwtW+Qt+iEJ5ruv9IxMDkfp+HW2keCr9F/qiNtQJcHzU+puWHkoKZcG8bzZ+Imr7feNN8Hd3sY8Q7UdPHGm1YrGVPzixoNgR8FTXs9H1dQx9kixr+FDXb1Eij6TS1F4LJ3RobkjepQOszYRbRb/DuQwghFC65z8ZGyzbImQnPdq2pdcZCWH3mR5iV7fY9PT0zyX82tX+GyU0adgAAAABJRU5ErkJggg=="></img>
            </div>
            <span className="boldError">OOPS!</span>
             Sorry, this account does not exist.
          </div>
        </div>
      </div>
    </div>
  );
}


export function UserAlreadyExist() {
  return (
    <div className="error-modal-wrapper">
      <div className="error-modal-container">
        <div className="error-modal-content">
          <div className="close-error-container">
           X
         </div>
          <div className="modal-message">
            <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADmklEQVRoge2ZTWgWRxjH/5Ok0RgkaUIRLVhoTTBGSUHjB6X21DbQWw8VWvSgnlRayUV6U3oWeqqIoF4EEb96a7WFNGLIRWhLiii2IJooIcZETOtH4q+HfZYsL8mb3dnZNxHyvzxk33n+83t2drKzM9KiFlWIXFHGwBpJWyS1SmqUNCVpRFK/pF7n3GRRfecWUA3sBgYorzvA9pB9BxsRYKWkC5K22aUhSdclDUq6Z9fekdSlaJT+k3RK0hnnXF8ojlwCGoFbdrdvA58BM94koAo4WjJCZ4FlleaeCe60Ad0AGlK0rwLWAQeBYcu9WAnWclCrgUngJdDhkf8uMGrFdBXBmBZkn0FcyOFxOH7EQrJlhbhkEHtyeLSZx98h2bJC9BvE1hwe1cAz4JXvpK/y7TyhZotjvgbOuSlJzxW9Dmp9PEIUEr+hyelTY/GVT3KIQoYtrvA1AJokLZM04Zx74uMRopAHFlfl8Gix+I+vQYhC/rSY+R2S0IcWr/sahCjkhsXNOTw+snjN1yBEIbFHJ1BTtuUMAmo1PSLjAXj8BPTYe+TQbAvFOfId8K15/FIEY1qQmwbhPUeADvP4y9cjxKM1YHFjDo9Oi96F5Bawy+7mXaDbI7/bcgF2FsGYFqQaOG/rpHEg9Sjbd8l4vHoGqotkTQv1uwG1Z8jZYDk38/YfYo7E+s3iVxlyvizJnX8BG+3ujgJvpWjfBDyynA8qwZhawGUD6wGay7RbDvxsba9WkjGVgLeBh3N9aAFrrc0Y8F6IvkPOETnnBhXtY6Xtd8Q5F+TzNmghpjRfePFH2JJQnRZRyFKLT8u0mbC4MAsBVkhaaX+WW8mOKxqVBmB1SIbcspfbHzaJf0rR/lz8MgQ2VYJxLqB24BjwwsBuE21oz5XXzPSu/SRwEni/EsxJiBrgc+BXW2MBTBHtATdm8FkOnLDcWNeAL4A3iixgKXCA6dUqwARwHFifw7cN+AF4mvC9D3wD1IUswBEd4AwmOhoAvgbeDNhPA7A/MdcAhoC9eHx9lprXAz8mjPupwK458DHQl+j3MlDva7YE6DWjEWBHYN40DDsTj1wv0WZFZpPvzeAe0FoAZ1qODcYAcDRrcgvR4c0UsKUgxiw8W43lBdGJcerE7+wOXCmQL5OAq8Z0pPS3ckuUTyxeKgbLS/E546elP8z6Lw14rOigfyHqsXOuKXlhtiPkOkn/VgTJX3XOuWfzDbGoRb0u+h/xDJ/HHlzXCgAAAABJRU5ErkJggg==" />
            </div>
            <span className="boldError">OOPS!</span>
             Sorry, this user already exist.
          </div>
        </div>
      </div>
    </div>
  );
}

