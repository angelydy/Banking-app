import React from "react";
import './../css/index.css';

export function NotEnoughBalance({ displayState, closeState }) {
  return (
    <div className={displayState}>
      <div className="alert-modal-container">
        <div className="alert-modal-content">
          <div className="close-alert-container" onClick={closeState}>
           X
         </div>
          <div className="modal-message">
            <div>
              <img src="https://img.icons8.com/cotton/50/000000/error--v4.png"/>
            </div>
            <span className="boldAlert">OOPS!</span>
             Sorry, you don't have enough balance to make this transaction.
          </div>
        </div>
      </div>
    </div>
  );
}

export function SameAccountError({ displayState, closeState }) {
  return (
    <div className={displayState}>
      <div className="alert-modal-container">
        <div className="alert-modal-content">
          <div className="close-alert-container" onClick={closeState}>
           X
         </div>
          <div className="modal-message">
            <div>
              <img src="https://img.icons8.com/cotton/50/000000/error--v4.png"/>
            </div>
            <span className="boldAlert">OOPS!</span>
             Sorry, you can't set the same account.
          </div>
        </div>
      </div>
    </div>
  );
}

export function InvalidAmount({ displayState, closeState }) {
  return (
    <div className={displayState}>
      <div className="alert-modal-container">
        <div className="alert-modal-content">
          <div className="close-alert-container" onClick={closeState}>
           X
         </div>
          <div className="modal-message">
            <div>
              <img src="https://img.icons8.com/cotton/50/000000/error--v4.png"/>
            </div>
            <span className="boldAlert">OOPS!</span>
             Sorry, minimum transaction value is 100.
          </div>
        </div>
      </div>
    </div>
  );
}

export function UserAlreadyExist({ displayState, closeState }) {
  return (
    <div className={displayState}>
      <div className="alert-modal-container">
        <div className="alert-modal-content">
          <div className="close-alert-container" onClick={closeState}>
           X
          </div>
          <div className="modal-message">
            <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADmklEQVRoge2ZTWgWRxjH/5Ok0RgkaUIRLVhoTTBGSUHjB6X21DbQWw8VWvSgnlRayUV6U3oWeqqIoF4EEb96a7WFNGLIRWhLiii2IJooIcZETOtH4q+HfZYsL8mb3dnZNxHyvzxk33n+83t2drKzM9KiFlWIXFHGwBpJWyS1SmqUNCVpRFK/pF7n3GRRfecWUA3sBgYorzvA9pB9BxsRYKWkC5K22aUhSdclDUq6Z9fekdSlaJT+k3RK0hnnXF8ojlwCGoFbdrdvA58BM94koAo4WjJCZ4FlleaeCe60Ad0AGlK0rwLWAQeBYcu9WAnWclCrgUngJdDhkf8uMGrFdBXBmBZkn0FcyOFxOH7EQrJlhbhkEHtyeLSZx98h2bJC9BvE1hwe1cAz4JXvpK/y7TyhZotjvgbOuSlJzxW9Dmp9PEIUEr+hyelTY/GVT3KIQoYtrvA1AJokLZM04Zx74uMRopAHFlfl8Gix+I+vQYhC/rSY+R2S0IcWr/sahCjkhsXNOTw+snjN1yBEIbFHJ1BTtuUMAmo1PSLjAXj8BPTYe+TQbAvFOfId8K15/FIEY1qQmwbhPUeADvP4y9cjxKM1YHFjDo9Oi96F5Bawy+7mXaDbI7/bcgF2FsGYFqQaOG/rpHEg9Sjbd8l4vHoGqotkTQv1uwG1Z8jZYDk38/YfYo7E+s3iVxlyvizJnX8BG+3ujgJvpWjfBDyynA8qwZhawGUD6wGay7RbDvxsba9WkjGVgLeBh3N9aAFrrc0Y8F6IvkPOETnnBhXtY6Xtd8Q5F+TzNmghpjRfePFH2JJQnRZRyFKLT8u0mbC4MAsBVkhaaX+WW8mOKxqVBmB1SIbcspfbHzaJf0rR/lz8MgQ2VYJxLqB24BjwwsBuE21oz5XXzPSu/SRwEni/EsxJiBrgc+BXW2MBTBHtATdm8FkOnLDcWNeAL4A3iixgKXCA6dUqwARwHFifw7cN+AF4mvC9D3wD1IUswBEd4AwmOhoAvgbeDNhPA7A/MdcAhoC9eHx9lprXAz8mjPupwK458DHQl+j3MlDva7YE6DWjEWBHYN40DDsTj1wv0WZFZpPvzeAe0FoAZ1qODcYAcDRrcgvR4c0UsKUgxiw8W43lBdGJcerE7+wOXCmQL5OAq8Z0pPS3ckuUTyxeKgbLS/E546elP8z6Lw14rOigfyHqsXOuKXlhtiPkOkn/VgTJX3XOuWfzDbGoRb0u+h/xDJ/HHlzXCgAAAABJRU5ErkJggg==" />
            </div>
            <span className="boldAlert">OOPS!</span>
             Sorry, this user already exists.
          </div>
        </div>
      </div>
    </div>
  );
}

export function SelectParentAcc({ displayState, closeState }) {
  return (
    <div className={displayState}>
      <div className="alert-modal-container">
        <div className="alert-modal-content">
          <div className="close-alert-container" onClick={closeState}>
           X
          </div>
          <div className="modal-message">
            <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADmklEQVRoge2ZTWgWRxjH/5Ok0RgkaUIRLVhoTTBGSUHjB6X21DbQWw8VWvSgnlRayUV6U3oWeqqIoF4EEb96a7WFNGLIRWhLiii2IJooIcZETOtH4q+HfZYsL8mb3dnZNxHyvzxk33n+83t2drKzM9KiFlWIXFHGwBpJWyS1SmqUNCVpRFK/pF7n3GRRfecWUA3sBgYorzvA9pB9BxsRYKWkC5K22aUhSdclDUq6Z9fekdSlaJT+k3RK0hnnXF8ojlwCGoFbdrdvA58BM94koAo4WjJCZ4FlleaeCe60Ad0AGlK0rwLWAQeBYcu9WAnWclCrgUngJdDhkf8uMGrFdBXBmBZkn0FcyOFxOH7EQrJlhbhkEHtyeLSZx98h2bJC9BvE1hwe1cAz4JXvpK/y7TyhZotjvgbOuSlJzxW9Dmp9PEIUEr+hyelTY/GVT3KIQoYtrvA1AJokLZM04Zx74uMRopAHFlfl8Gix+I+vQYhC/rSY+R2S0IcWr/sahCjkhsXNOTw+snjN1yBEIbFHJ1BTtuUMAmo1PSLjAXj8BPTYe+TQbAvFOfId8K15/FIEY1qQmwbhPUeADvP4y9cjxKM1YHFjDo9Oi96F5Bawy+7mXaDbI7/bcgF2FsGYFqQaOG/rpHEg9Sjbd8l4vHoGqotkTQv1uwG1Z8jZYDk38/YfYo7E+s3iVxlyvizJnX8BG+3ujgJvpWjfBDyynA8qwZhawGUD6wGay7RbDvxsba9WkjGVgLeBh3N9aAFrrc0Y8F6IvkPOETnnBhXtY6Xtd8Q5F+TzNmghpjRfePFH2JJQnRZRyFKLT8u0mbC4MAsBVkhaaX+WW8mOKxqVBmB1SIbcspfbHzaJf0rR/lz8MgQ2VYJxLqB24BjwwsBuE21oz5XXzPSu/SRwEni/EsxJiBrgc+BXW2MBTBHtATdm8FkOnLDcWNeAL4A3iixgKXCA6dUqwARwHFifw7cN+AF4mvC9D3wD1IUswBEd4AwmOhoAvgbeDNhPA7A/MdcAhoC9eHx9lprXAz8mjPupwK458DHQl+j3MlDva7YE6DWjEWBHYN40DDsTj1wv0WZFZpPvzeAe0FoAZ1qODcYAcDRrcgvR4c0UsKUgxiw8W43lBdGJcerE7+wOXCmQL5OAq8Z0pPS3ckuUTyxeKgbLS/E546elP8z6Lw14rOigfyHqsXOuKXlhtiPkOkn/VgTJX3XOuWfzDbGoRb0u+h/xDJ/HHlzXCgAAAABJRU5ErkJggg==" />
            </div>
            <span className="boldAlert">OOPS!</span>
             Please select the Parent Account Number.
          </div>
        </div>
      </div>
    </div>
  );
}

export function TransactionSuccessful({ displayState, closeState }) {
  return (
    <div className={displayState}>
      <div className="alert-modal-container">
        <div className="alert-modal-content">
          <div className="close-alert-container" onClick={()=> closeState()}>
           X
          </div>
          <div className="modal-message">
            <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADmklEQVRoge2ZTWgWRxjH/5Ok0RgkaUIRLVhoTTBGSUHjB6X21DbQWw8VWvSgnlRayUV6U3oWeqqIoF4EEb96a7WFNGLIRWhLiii2IJooIcZETOtH4q+HfZYsL8mb3dnZNxHyvzxk33n+83t2drKzM9KiFlWIXFHGwBpJWyS1SmqUNCVpRFK/pF7n3GRRfecWUA3sBgYorzvA9pB9BxsRYKWkC5K22aUhSdclDUq6Z9fekdSlaJT+k3RK0hnnXF8ojlwCGoFbdrdvA58BM94koAo4WjJCZ4FlleaeCe60Ad0AGlK0rwLWAQeBYcu9WAnWclCrgUngJdDhkf8uMGrFdBXBmBZkn0FcyOFxOH7EQrJlhbhkEHtyeLSZx98h2bJC9BvE1hwe1cAz4JXvpK/y7TyhZotjvgbOuSlJzxW9Dmp9PEIUEr+hyelTY/GVT3KIQoYtrvA1AJokLZM04Zx74uMRopAHFlfl8Gix+I+vQYhC/rSY+R2S0IcWr/sahCjkhsXNOTw+snjN1yBEIbFHJ1BTtuUMAmo1PSLjAXj8BPTYe+TQbAvFOfId8K15/FIEY1qQmwbhPUeADvP4y9cjxKM1YHFjDo9Oi96F5Bawy+7mXaDbI7/bcgF2FsGYFqQaOG/rpHEg9Sjbd8l4vHoGqotkTQv1uwG1Z8jZYDk38/YfYo7E+s3iVxlyvizJnX8BG+3ujgJvpWjfBDyynA8qwZhawGUD6wGay7RbDvxsba9WkjGVgLeBh3N9aAFrrc0Y8F6IvkPOETnnBhXtY6Xtd8Q5F+TzNmghpjRfePFH2JJQnRZRyFKLT8u0mbC4MAsBVkhaaX+WW8mOKxqVBmB1SIbcspfbHzaJf0rR/lz8MgQ2VYJxLqB24BjwwsBuE21oz5XXzPSu/SRwEni/EsxJiBrgc+BXW2MBTBHtATdm8FkOnLDcWNeAL4A3iixgKXCA6dUqwARwHFifw7cN+AF4mvC9D3wD1IUswBEd4AwmOhoAvgbeDNhPA7A/MdcAhoC9eHx9lprXAz8mjPupwK458DHQl+j3MlDva7YE6DWjEWBHYN40DDsTj1wv0WZFZpPvzeAe0FoAZ1qODcYAcDRrcgvR4c0UsKUgxiw8W43lBdGJcerE7+wOXCmQL5OAq8Z0pPS3ckuUTyxeKgbLS/E546elP8z6Lw14rOigfyHqsXOuKXlhtiPkOkn/VgTJX3XOuWfzDbGoRb0u+h/xDJ/HHlzXCgAAAABJRU5ErkJggg==" />
            </div>
            <span className="boldAlert">GREAT!</span>
             The transaction was successful.
          </div>
        </div>
      </div>
    </div>
  );
}

export function AddUserSuccessful({ displayState, closeState }) {
  return (
    <div className={displayState}>
      <div className="alert-modal-container">
        <div className="alert-modal-content">
          <div className="close-alert-container" onClick={closeState}>
           X
          </div>
          <div className="modal-message">
            <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADmklEQVRoge2ZTWgWRxjH/5Ok0RgkaUIRLVhoTTBGSUHjB6X21DbQWw8VWvSgnlRayUV6U3oWeqqIoF4EEb96a7WFNGLIRWhLiii2IJooIcZETOtH4q+HfZYsL8mb3dnZNxHyvzxk33n+83t2drKzM9KiFlWIXFHGwBpJWyS1SmqUNCVpRFK/pF7n3GRRfecWUA3sBgYorzvA9pB9BxsRYKWkC5K22aUhSdclDUq6Z9fekdSlaJT+k3RK0hnnXF8ojlwCGoFbdrdvA58BM94koAo4WjJCZ4FlleaeCe60Ad0AGlK0rwLWAQeBYcu9WAnWclCrgUngJdDhkf8uMGrFdBXBmBZkn0FcyOFxOH7EQrJlhbhkEHtyeLSZx98h2bJC9BvE1hwe1cAz4JXvpK/y7TyhZotjvgbOuSlJzxW9Dmp9PEIUEr+hyelTY/GVT3KIQoYtrvA1AJokLZM04Zx74uMRopAHFlfl8Gix+I+vQYhC/rSY+R2S0IcWr/sahCjkhsXNOTw+snjN1yBEIbFHJ1BTtuUMAmo1PSLjAXj8BPTYe+TQbAvFOfId8K15/FIEY1qQmwbhPUeADvP4y9cjxKM1YHFjDo9Oi96F5Bawy+7mXaDbI7/bcgF2FsGYFqQaOG/rpHEg9Sjbd8l4vHoGqotkTQv1uwG1Z8jZYDk38/YfYo7E+s3iVxlyvizJnX8BG+3ujgJvpWjfBDyynA8qwZhawGUD6wGay7RbDvxsba9WkjGVgLeBh3N9aAFrrc0Y8F6IvkPOETnnBhXtY6Xtd8Q5F+TzNmghpjRfePFH2JJQnRZRyFKLT8u0mbC4MAsBVkhaaX+WW8mOKxqVBmB1SIbcspfbHzaJf0rR/lz8MgQ2VYJxLqB24BjwwsBuE21oz5XXzPSu/SRwEni/EsxJiBrgc+BXW2MBTBHtATdm8FkOnLDcWNeAL4A3iixgKXCA6dUqwARwHFifw7cN+AF4mvC9D3wD1IUswBEd4AwmOhoAvgbeDNhPA7A/MdcAhoC9eHx9lprXAz8mjPupwK458DHQl+j3MlDva7YE6DWjEWBHYN40DDsTj1wv0WZFZpPvzeAe0FoAZ1qODcYAcDRrcgvR4c0UsKUgxiw8W43lBdGJcerE7+wOXCmQL5OAq8Z0pPS3ckuUTyxeKgbLS/E546elP8z6Lw14rOigfyHqsXOuKXlhtiPkOkn/VgTJX3XOuWfzDbGoRb0u+h/xDJ/HHlzXCgAAAABJRU5ErkJggg==" />
            </div>
            <span className="boldAlert">GREAT!</span>
             Add user was successful.
          </div>
        </div>
      </div>
    </div>
  );
}
