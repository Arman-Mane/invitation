import React from "react";
import "./Calendar.css";
import { CiHeart } from "react-icons/ci";

const Calendar = () => {
  return (
    <div id="calendar" data-aos="zoom-in">
      <h1>Օգոստոս 2025</h1>
      <table>
        <thead>
          <tr>
            <th>Երկ</th>
            <th>Երք</th>
            <th>Չոր</th>
            <th>Հնգ</th>
            <th>Ուրբ</th>
            <th>Շբթ</th>
            <th>Կիր</th>
          </tr>
        </thead>
        <tbody id="days">
          <tr>
            {/* <!-- <td></td> --> */}
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td className="seven">
              <div className="heart">
                <CiHeart />
              </div>
              7{/* <i className="fa-regular fa-heart"></i>7 */}
            </td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
          </tr>
          <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
          </tr>
          <tr>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
          </tr>
          <tr>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
