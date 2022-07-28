require "minitest/autorun"
require './robot.rb'
class TestRobot < Minitest::Test
  def setup
    Robot.place(0,0,:NORTH)
  end

  def test_that_turns_right
    Robot.right
    assert_equal "0 0 EAST", Robot.report
  end

  def test_that_turns_left
    Robot.left
    assert_equal "0 0 WEST", Robot.report
  end

  def test_that_moves
    Robot.move
    assert_equal "1 0 NORTH", Robot.report
  end

  def test_sequence
    Robot.move
    Robot.right
    Robot.move
    assert_equal "1 1 EAST", Robot.report
  end
end