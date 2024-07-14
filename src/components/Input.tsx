import { useState } from "react";
import Wrapper from "../../public/wrappers/InputWrapper";

export default function Input() {
  const [checkbox, setCheckbox] = useState<any>(1);
  console.log(checkbox);
  return (
    <Wrapper>
      <div className="inputs">
        <div className="input clearall">
          <h1>Mortgage Calculator</h1>
          <span className="clear">Clear All</span>
        </div>
        <div className="input">
          <p>Mortgage Amount</p>
          <div className="percentage-container">
            <input
              type="number"
              className="percentage-input"
              placeholder="300,000"
            />
            <span className="percentage-icon">$</span>
          </div>
        </div>
        <div className="desktop-input">
          <div className="input">
            <p>Mortgage Term</p>
            <div className="percentage-container">
              <input
                type="number"
                className="percentage-input"
                placeholder="24"
              />
              <span className="percentage-icon">Years</span>
            </div>
          </div>
          <div className="input">
            <p>Interest Rate</p>
            <div className="percentage-container">
              <input
                type="number"
                className="percentage-input"
                placeholder="12.5"
              />
              <span className="percentage-icon">%</span>
            </div>
          </div>
        </div>
        <div className="input">
          <p>Mortgage Type</p>
          <div>
            <button
              onClick={() => setCheckbox(1)}
              style={{ borderColor: checkbox === 1 ? "#D8DB2F" : "#6B94A8" }}
            >
              Repayment
            </button>
            <button
              onClick={() => setCheckbox(2)}
              style={{ borderColor: checkbox === 2 ? "#D8DB2F" : "#6B94A8" }}
            >
              Interest Only
            </button>
          </div>
        </div>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M19.25 2.25H5.75C5.35218 2.25 4.97064 2.40804 4.68934 2.68934C4.40804 2.97064 4.25 3.35218 4.25 3.75V20.25C4.25 20.6478 4.40804 21.0294 4.68934 21.3107C4.97064 21.592 5.35218 21.75 5.75 21.75H19.25C19.6478 21.75 20.0294 21.592 20.3107 21.3107C20.592 21.0294 20.75 20.6478 20.75 20.25V3.75C20.75 3.35218 20.592 2.97064 20.3107 2.68934C20.0294 2.40804 19.6478 2.25 19.25 2.25ZM8.75 18.75C8.5275 18.75 8.30999 18.684 8.12498 18.5604C7.93998 18.4368 7.79578 18.2611 7.71064 18.0555C7.62549 17.85 7.60321 17.6238 7.64662 17.4055C7.69002 17.1873 7.79717 16.9868 7.9545 16.8295C8.11184 16.6722 8.31229 16.565 8.53052 16.5216C8.74875 16.4782 8.97495 16.5005 9.18052 16.5856C9.38609 16.6708 9.56179 16.815 9.6854 17C9.80902 17.185 9.875 17.4025 9.875 17.625C9.875 17.9234 9.75647 18.2095 9.5455 18.4205C9.33452 18.6315 9.04837 18.75 8.75 18.75ZM8.75 15C8.5275 15 8.30999 14.934 8.12498 14.8104C7.93998 14.6868 7.79578 14.5111 7.71064 14.3055C7.62549 14.1 7.60321 13.8738 7.64662 13.6555C7.69002 13.4373 7.79717 13.2368 7.9545 13.0795C8.11184 12.9222 8.31229 12.815 8.53052 12.7716C8.74875 12.7282 8.97495 12.7505 9.18052 12.8356C9.38609 12.9208 9.56179 13.065 9.6854 13.25C9.80902 13.435 9.875 13.6525 9.875 13.875C9.875 14.1734 9.75647 14.4595 9.5455 14.6705C9.33452 14.8815 9.04837 15 8.75 15ZM12.5 18.75C12.2775 18.75 12.06 18.684 11.875 18.5604C11.69 18.4368 11.5458 18.2611 11.4606 18.0555C11.3755 17.85 11.3532 17.6238 11.3966 17.4055C11.44 17.1873 11.5472 16.9868 11.7045 16.8295C11.8618 16.6722 12.0623 16.565 12.2805 16.5216C12.4988 16.4782 12.725 16.5005 12.9305 16.5856C13.1361 16.6708 13.3118 16.815 13.4354 17C13.559 17.185 13.625 17.4025 13.625 17.625C13.625 17.9234 13.5065 18.2095 13.2955 18.4205C13.0845 18.6315 12.7984 18.75 12.5 18.75ZM12.5 15C12.2775 15 12.06 14.934 11.875 14.8104C11.69 14.6868 11.5458 14.5111 11.4606 14.3055C11.3755 14.1 11.3532 13.8738 11.3966 13.6555C11.44 13.4373 11.5472 13.2368 11.7045 13.0795C11.8618 12.9222 12.0623 12.815 12.2805 12.7716C12.4988 12.7282 12.725 12.7505 12.9305 12.8356C13.1361 12.9208 13.3118 13.065 13.4354 13.25C13.559 13.435 13.625 13.6525 13.625 13.875C13.625 14.1734 13.5065 14.4595 13.2955 14.6705C13.0845 14.8815 12.7984 15 12.5 15ZM16.25 18.75C16.0275 18.75 15.81 18.684 15.625 18.5604C15.44 18.4368 15.2958 18.2611 15.2106 18.0555C15.1255 17.85 15.1032 17.6238 15.1466 17.4055C15.19 17.1873 15.2972 16.9868 15.4545 16.8295C15.6118 16.6722 15.8123 16.565 16.0305 16.5216C16.2488 16.4782 16.475 16.5005 16.6805 16.5856C16.8861 16.6708 17.0618 16.815 17.1854 17C17.309 17.185 17.375 17.4025 17.375 17.625C17.375 17.9234 17.2565 18.2095 17.0455 18.4205C16.8345 18.6315 16.5484 18.75 16.25 18.75ZM16.25 15C16.0275 15 15.81 14.934 15.625 14.8104C15.44 14.6868 15.2958 14.5111 15.2106 14.3055C15.1255 14.1 15.1032 13.8738 15.1466 13.6555C15.19 13.4373 15.2972 13.2368 15.4545 13.0795C15.6118 12.9222 15.8123 12.815 16.0305 12.7716C16.2488 12.7282 16.475 12.7505 16.6805 12.8356C16.8861 12.9208 17.0618 13.065 17.1854 13.25C17.309 13.435 17.375 13.6525 17.375 13.875C17.375 14.1734 17.2565 14.4595 17.0455 14.6705C16.8345 14.8815 16.5484 15 16.25 15ZM17.75 9.75C17.75 9.94891 17.671 10.1397 17.5303 10.2803C17.3897 10.421 17.1989 10.5 17 10.5H8C7.80109 10.5 7.61032 10.421 7.46967 10.2803C7.32902 10.1397 7.25 9.94891 7.25 9.75V6C7.25 5.80109 7.32902 5.61032 7.46967 5.46967C7.61032 5.32902 7.80109 5.25 8 5.25H17C17.1989 5.25 17.3897 5.32902 17.5303 5.46967C17.671 5.61032 17.75 5.80109 17.75 6V9.75Z"
            fill="#133041"
          />
        </svg>
        Calculate Repayment
      </button>
    </Wrapper>
  );
}
