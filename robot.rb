require 'matrix'
class Robot
    attr :c,:f,:dir
    @f = nil
    @c = nil
    @dir = {
        NORTH: Matrix[[1],[0]],
        WEST: Matrix[[0],[-1]],
        EAST: Matrix[[0],[1]],
        SOUTH: Matrix[[-1],[0]]
    }
    @rotM = ->(tet){
        return Matrix[
            [(0 * tet), (1*tet)],
            [- (1*tet), (0*tet)]
        ]
    }
    def self.move
        return if @c.nil? 
        re = @c + @f
        ire = re.to_a.flatten
       
        @c = re unless ire[0] < 0 || ire[1] <0 || ire[0] > 5 || ire[1] > 5
        return @c
    end

    def self.right
        return if @c.nil? 
        @f = @rotM[-1] * @f

        return @f
    end

    def self.left 
        return if @c.nil? 
        @f = @rotM[1] * @f

        return @f
    end

    def self.place x,y,f
        return if x < 0 || y < 0 || x > 5 || y > 5 
        @c = Matrix[[x],[y]]
        @f = @dir[f]
    end

    def self.report
        "#{@c.to_a.flatten.join(' ')} #{@dir.invert[@f]}"
    end
end