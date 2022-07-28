require './robot.rb'
NORTH = :NORTH
WEST = :WEST
EAST = :EAST
SOUTH = :SOUTH
def self.move 
    Robot.move
    return 
end

def self.right 
    Robot.right
    return ''
end

def self.left
    Robot.left
    return ''
end

def self.place x,y,f
    Robot.place x,y,f
    return ''
end

def self.report 
    puts Robot.report
end

loop do
    puts eval(gets) # simple run any ruby command and print
end