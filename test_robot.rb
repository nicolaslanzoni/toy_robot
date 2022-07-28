require "minitest/autorun"
require './robot.rb'
class TestRobot < Minitest::Test
  def setup
    Robot.place(0,0,:SOUTH)
  end

  def test_that_turns_right
    Robot.right
    assert_equal "0 0 WEST", Robot.report
  end

  def test_that_turns_left
    Robot.left
    assert_equal "0 0 EAST", Robot.report
  end

  def test_that_moves
    Robot.move
    assert_equal "0 1 SOUTH", Robot.report
  end

  def test_sequence
    Robot.place(1,2,:EAST)
    Robot.move
    Robot.move
    Robot.right
    Robot.move
    assert_equal "3 3 SOUTH", Robot.report
  end
end