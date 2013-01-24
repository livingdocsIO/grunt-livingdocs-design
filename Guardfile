guard 'less', :all_on_start => false, :all_after_change => false, :output => "public/css" do
  watch(%r{^designs/bootstrap/.*\.less$}) { "designs/bootstrap/bootstrap.less" }
  watch(%r{^designs/medium/.*\.less$}) { "designs/medium/medium.less" }
end

guard 'coffeescript', :all_on_start => false, :all_after_change => false, :output => 'public/js' do
  watch(%r{^designs/bootstrap/.*\.coffee$})
end